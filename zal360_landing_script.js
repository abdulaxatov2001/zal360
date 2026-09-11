{
  data() {
    return {
      activeRole: 'owner',
      loginForm: {
        phone: '',
        password: ''
      }
    };
  },
  methods: {
    goToLogin() {
      // Platon tizimida router orqali auth/login sahifasiga o'tish
      if (this.$form && this.$form.$router) {
        this.$form.$router.push('/auth/login');
      } else {
        window.location.href = '/auth/login';
      }
    },
    handleLogin() {
      // Demo login formasi uchun
      if (this.$notify) {
        this.$notify({
          title: 'Xush kelibsiz!',
          message: 'Zal360 Demo tizimiga ulandingiz. Tez orada menejerimiz siz bilan bog\'lanadi.',
          type: 'success'
        });
      } else {
        alert("Zal360 Demo tizimiga xush kelibsiz! Tez orada menejerimiz siz bilan bog'lanadi.");
      }
      this.goToLogin();
    }
  },
  mounted() {
    // Platon HTML ichidagi <script> taglarni o'qimaydi, shuning uchun Tailwind'ni JS orqali ulaymiz
    const configureTailwind = () => {
      if (typeof tailwind !== 'undefined') {
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
              },
              colors: {
                "on-surface": "#0b1c30",
                "surface-bright": "#f8f9ff",
                "secondary-fixed": "#dbe1ff",
                "on-error-container": "#93000a",
                "tertiary-container": "#6c748b",
                "on-secondary-fixed": "#00174b",
                "surface-container-lowest": "#ffffff",
                "tertiary-fixed-dim": "#bec6e0",
                "secondary-container": "#316bf3",
                "background": "#f8f9ff",
                "error": "#ba1a1a",
                "outline-variant": "#bccac0",
                "surface-variant": "#d3e4fe",
                "on-tertiary-fixed-variant": "#3f465c",
                "secondary-fixed-dim": "#b4c5ff",
                "inverse-on-surface": "#eaf1ff",
                "surface-container": "#e5eeff",
                "surface-dim": "#cbdbf5",
                "tertiary": "#545c72",
                "inverse-primary": "#68dba9",
                "on-secondary-container": "#fefcff",
                "primary-container": "#00855d",
                "outline": "#6d7a72",
                "on-secondary": "#ffffff",
                "surface": "#f8f9ff",
                "secondary": "#0051d5",
                "on-background": "#0b1c30",
                "primary": "#006948",
                "surface-container-low": "#eff4ff",
                "on-primary-container": "#f5fff7",
                "surface-container-highest": "#d3e4fe",
                "on-primary-fixed-variant": "#005137",
                "surface-container-high": "#dce9ff",
                "on-surface-variant": "#3d4a42",
                "on-tertiary-container": "#fefcff",
                "primary-fixed-dim": "#68dba9",
                "primary-fixed": "#85f8c4",
                "tertiary-fixed": "#dae2fd",
                "on-tertiary": "#ffffff",
                "error-container": "#ffdad6",
                "surface-tint": "#006c4a",
                "on-tertiary-fixed": "#131b2e",
                "inverse-surface": "#213145",
                "on-primary": "#ffffff",
                "on-secondary-fixed-variant": "#003ea8",
                "on-primary-fixed": "#002114",
                "on-error": "#ffffff",
                emerald: {
                  50: '#ecfdf5',
                  100: '#d1fae5',
                  200: '#a7f3d0',
                  500: '#10b981',
                  600: '#059669',
                  700: '#047857',
                  800: '#065f46',
                  900: '#064e3b',
                }
              },
              boxShadow: {
                'soft-glow': '0 20px 40px -15px rgba(5, 150, 105, 0.12)',
                'card-subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
                'card-hover': '0 12px 30px -10px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)',
              }
            }
          }
        };
      }
    };

    if (!document.getElementById('tailwind-cdn')) {
      const script = document.createElement('script');
      script.id = 'tailwind-cdn';
      script.src = 'https://cdn.tailwindcss.com?plugins=forms,container-queries';
      script.onload = configureTailwind;
      document.head.appendChild(script);
    } else {
      configureTailwind();
    }
  }
}
