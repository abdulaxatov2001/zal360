# Platon Platformasi - Sahifa va Komponentlar Yaratish Bo'yicha Qisqacha Qo'llanma

Ushbu hujjat [Platon rasmiy hujjatlari](https://doc.platon.uz/uz/examples/page.html#sahifa-yaratish) asosida o'rganilgan ma'lumotlarning qisqacha mazmunini ifodalaydi.

## 1. Sahifa Yaratish
Platon platformasining "Sahifalar" modulida yangi sahifa qo'shish uchun quyidagi asosiy maydonlar to'ldiriladi:
- **name**: Sahifaning nomi (URL manzili sifatida ham ishlatiladi).
- **data_source**: Ma'lumotlarni qaysi manbadan olishni belgilaydi (`sql` yoki `platon_api`).
- **state**: Sahifaning holati (aktiv, yashirin, arxivlangan).
- **title 1, 2, 3, 4**: Turli tillardagi sahifa nomlari (O'zbek kirill, Rus, O'zbek lotin, Ingliz).
- **is_public**: Avtorizatsiyasiz foydalanuvchilar kira olishi uchun ruxsat berish (switch).

### Vue Editor orqali kod yozish
Agar **vue_editor** yoqilgan bo'lsa, quyidagi bo'limlarda kod yozish imkoniyati ochiladi:
- **sql**: SQL so'rovlarini yozish uchun. Misol uchun: `select * from table_name` ko'rinishida JSON orqali kiritiladi.
- **content**: HTML (Vue template) kodlari yoziladi. (Masalan, `v-for`, `{{...}}` kabi sintaksislar yordamida).
- **js**: Vue 2 Optional API sintaksisida JavaScript mantiqi yoziladi (`data()`, `mounted()`, `methods` va h.k.).
- **css**: Sahifaga xos dizayn stillari yoziladi.

## 2. API va Tizim Metodlari
Platon sahifalarida maxsus funksiyalar va o'zgaruvchilardan foydalanish mumkin:
- **Tarjimalar ($l)**: Sahifada ko'p tillilikni ishlatish uchun qulay metod.
  - HTML da: `{{ $l('kalit', 'Matn') }}`
  - JS da: `this.$l('kalit', 'Matn')`
- **Router parametrlarini olish ($route.query)**: URL manzilidan parametrlarni olish imkoniyati.
  - JS da: `this.$route.query.search` orqali URL-dagi qidiruv parametrlarini o'qish mumkin.
- **Komponentlar aro ma'lumot almashish**:
  - Jo'natish: `this.$sendEvent('hodisa_nomi', ma'lumot)`
  - Qabul qilish: `this.$onEvent('hodisa_nomi', this.metodNomi)` (Odatda `mounted` ichida chaqiriladi).

## 3. Vue Komponentlar Yasash
Xuddi Vue.js da bo'lgani kabi platonda ham alohida-alohida qayta ishlatiluvchi komponentalar yaratish mumkin.
Komponent qo'shish uchun:
1. Sahifalar bo'limidan komponenta qo'shish tugmasi bosiladi.
2. Quyidagi maydonlar to'ldiriladi:
   - **Name**: Komponenta nomi.
   - **Content**: HTML template.
   - **JS**: Vue 2 js kodlari.
   - **CSS**: Stillar.

Vue editor yoqilmagan bo'lsa, sahifa shunchaki `HTML` shablon sifatida kiritiladi.
Xulosa qilib aytganda, Platon o'z ichida to'liq Vue 2 muhitini (Options API) taqdim etib, SQL va Platon API integratsiyasini qulay tarzda amalga oshirish imkonini beradi.
