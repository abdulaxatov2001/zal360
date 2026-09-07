{
  data() {
    return {
      // Filial ID tanlovi
      selectedBranchId: "",
      // 5 xil dizayndan 1-si (Modern Dark) dastlab tanlangan
      selectedDesign: 1
    };
  },

  computed: {
    // Filiallar Platon sahifasining SQL natijasidan (this.pageData.branches) olinadi
    branches() {
      if (this.pageData && Array.isArray(this.pageData.branches)) {
        return this.pageData.branches;
      }
      return [];
    },

    // Tanlangan filial obyekti
    currentBranch() {
      if (!this.selectedBranchId && this.branches.length > 0) {
        return this.branches[0];
      }
      const found = this.branches.find(b => String(b.id) === String(this.selectedBranchId));
      return found || this.branches[0] || {
        id: this.selectedBranchId || "",
        branch_name: "",
        org_name: "",
        address: ""
      };
    }
  },

  watch: {
    // SQL ma'lumotlari (this.pageData.branches) kelganda birinchi filialni avtomatik tanlash va QR chizish
    branches: {
      immediate: true,
      handler(newBranches) {
        if (newBranches && newBranches.length > 0 && !this.selectedBranchId) {
          this.selectedBranchId = newBranches[0].id;
          this.$nextTick(() => {
            this.renderQRCode();
          });
        }
      }
    }
  },

  mounted() {
    if (!this.selectedBranchId && this.branches.length > 0) {
      this.selectedBranchId = this.branches[0].id;
    }

    this.ensureQRCodeLibrary(() => {
      this.$nextTick(() => {
        this.renderQRCode();
      });
    });
  },

  methods: {
    // Dizayn tanlash (1 dan 5 gacha)
    selectDesign(designId) {
      this.selectedDesign = designId;
      this.$nextTick(() => {
        this.renderQRCode();
      });
    },

    // Filial o'zgarganda
    handleBranchChange() {
      this.$nextTick(() => {
        this.renderQRCode();
      });
    },

    // QRCode.js kutubxonasini tekshirish va dinamik yuklash
    ensureQRCodeLibrary(callback) {
      if (typeof QRCode !== 'undefined') {
        if (callback) callback();
        return;
      }

      const scriptId = 'qrcodejs-cdn-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
        script.onload = () => {
          if (callback) callback();
        };
        script.onerror = () => {
          console.error("QRCode.js kutubxonasini yuklab bo'lmadi");
        };
        document.head.appendChild(script);
      } else {
        const checkInterval = setInterval(() => {
          if (typeof QRCode !== 'undefined') {
            clearInterval(checkInterval);
            if (callback) callback();
          }
        }, 100);
      }
    },

    // Tanlangan dizaynga mos QR kodni chizish (Ixcham va aniq)
    renderQRCode() {
      const targetId = 'qr-target-' + this.selectedDesign;
      const container = document.getElementById(targetId);

      if (!container) {
        setTimeout(() => {
          const retry = document.getElementById(targetId);
          if (retry) this.drawQR(retry);
        }, 80);
        return;
      }

      this.drawQR(container);
    },

    drawQR(container) {
      container.innerHTML = '';
      const branchId = String(this.currentBranch.id || this.selectedBranchId || '');

      if (typeof QRCode === 'undefined') {
        container.innerHTML = '<div style="padding: 15px; font-size: 11px; color: #888;">QR tayyorlanmoqda...</div>';
        this.ensureQRCodeLibrary(() => this.drawQR(container));
        return;
      }

      // Shrift va dizaynga mos ixcham o'lchamlar (175px - 195px)
      let darkColor = "#0f172a";
      let lightColor = "#ffffff";
      let qrSize = 190;

      if (this.selectedDesign === 1) {
        darkColor = "#090d16";
        qrSize = 195;
      } else if (this.selectedDesign === 2) {
        darkColor = "#000000";
        qrSize = 190;
      } else if (this.selectedDesign === 3) {
        darkColor = "#09090b";
        qrSize = 190;
      } else if (this.selectedDesign === 4) {
        darkColor = "#0f172a";
        qrSize = 175;
      } else if (this.selectedDesign === 5) {
        darkColor = "#0a0a0a";
        qrSize = 185;
      }

      try {
        new QRCode(container, {
          text: branchId,
          width: qrSize,
          height: qrSize,
          colorDark: darkColor,
          colorLight: lightColor,
          correctLevel: QRCode.CorrectLevel.H
        });
      } catch (err) {
        console.error("QR Code generatsiyasida xatolik:", err);
      }
    },

    // Pechat qilish funksiyasi
    printPoster() {
      window.print();
    },

    // QR kodni yuklab olish
    downloadQR() {
      const targetId = 'qr-target-' + this.selectedDesign;
      const container = document.getElementById(targetId);
      if (!container) return;

      const img = container.querySelector('img');
      const canvas = container.querySelector('canvas');
      let dataUrl = '';

      if (img && img.src) {
        dataUrl = img.src;
      } else if (canvas) {
        dataUrl = canvas.toDataURL('image/png');
      }

      if (dataUrl) {
        const link = document.createElement('a');
        const filename = (this.currentBranch.branch_name || 'branch').toLowerCase().replace(/\s+/g, '_') + '_qr.png';
        link.download = filename;
        link.href = dataUrl;
        link.click();
      } else {
        alert("QR kod hali tayyor emas");
      }
    }
  }
}
