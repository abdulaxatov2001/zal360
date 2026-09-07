---
name: platon-framework
description: Platon Low-Code platformasining to'liq arxitekturasi, API, JSEval, Jadvallar, Formalar, Menyu, Cron, Eksport/Import va xizmatlari bo'yicha qo'llanma. Platon bilan bog'liq har qanday dasturlash, so'rovlar yoki tuzilmalar uchun ushbu skilldan foydalaniladi.
---

# Platon Low-Code Platformasi Qo'llanmasi

## Asosiy Tushunchalar va Arxitektura
Platon - PostgreSQL ma'lumotlar bazasiga asoslangan Low-Code platformasi bo'lib, veb-ilovalarni tez va qulay yaratish imkonini beradi.

### 1. Ko'rinish Holati (State)
Barcha elementlarda (Menu, Table, Form, Page, Column va b.) `state` maydoni bo'lib, 3 xil qiymat oladi:
* `active` - tizimda faol va ko'rinadi
* `hidden` - tizim ichida ko'rinmas
* `archive` - arxivlangan

### 2. Ko'p tillilik (Multi-language)
Sarlavha va matnlar 4 ta tilda to'ldiriladi:
* `1-uz` / `name1` / `title1`: O'zbekcha (kirill)
* `2-ru` / `name2` / `title2`: Ruscha
* `3-la` / `name3` / `title3`: O'zbekcha (lotin)
* `4-en` / `name4` / `title4`: Inglizcha

### 3. Dinamik Havolalar va Link Syntax
* `pages/{sahifa_nomi}` - Sahifani ochish
* `forms/{forma_nomi}` - Formani ochish
* `tables/{jadval_nomi}` - Jadvalni ochish
* Havola parametrlari: `/{link}?bosilganKatakQiymati=@qiymat&querydagiQiymat=#qiymat`
* Foydalanuvchi ma'lumotlari: `$user.has_perm('admin')`, `$user.id`, `$user.username`
* JavaScript orqali shartli link:
  * `bjs: ($user.has_perm('admin')) ? 'pages/users' : 'pages/user2'`
  * `fjs: (() => { /* js logic */ return 'pages/home'; })()`

### 4. Jadvallar (Tables) va Ustunlar (Columns)
* **SQL**: `sql` maydoni ma'lumotlar bazasidan ma'lumotlarni tortib keluvchi PostgreSQL so'rovidir.
* **Params SQL**: `params_sql` orqali havola va dinamik parametrlarni shakllantirish mumkin.
* **Sum**: `@_sum` va `@_count` orqali ustunlar bo'yicha jami va soni hisoblanadi.
* **Value Transformation**: Vue.js Options API orqali katak qiymatini tahrirlash:
  ```js
  return {
    template: `<div>{{ transformedValue }}</div>`,
    data() {
      return {
        // state
      };
    },
    methods: {
      // methods
    },
    mounted() {
      // q('query_data') orqali link/query parametrlarini olish mumkin
    }
  }
  ```
* **Multi-table**: `<multi-table :titles="dataList" :tables="dataTables" main-table="main" :control-buttons="true"></multi-table>`

### 5. Formalar (Forms)
* Forma maydonlari turlari: text, number, select, date, daterange, file, textarea, checkbox, radio, switch, editor va boshqalar.
* Validatsiya, shartli ko'rinish (`visibility`), qiymat o'zgarishida avtomatik hisob-kitoblar va API triggerlar.

### 6. JSEval va API Tizimi
* Server va mijoz tomonda dinamik JavaScript (`js-eval`) orqali biznes mantiqni boshqarish.
* Platon REST API, ma'lumotlar bazasiga to'g'ridan-to'g'ri xavfsiz so'rovlar, tashqi API integratsiyalari.

### 7. Xizmatlar (Services)
* **Auth**: Foydalanuvchilar, rollar va ruxsatnomalar (`$user`).
* **Cron / Schedule**: Rejalashtirilgan fon vazifalari.
* **Export / Import**: Excel, PDF, CSV eksport va Excel import qilish.
* **File Manager / Categories**: Fayllarni yuklash, saqlash, kategoriyalarga ajratish.
* **Multi-Database**: Bir nechta tashqi MB larga ulanish va boshqarish.
* **Logging & Monitoring**: Tizim harakatlari jurnali.
* **Mail & SMS**: Bildirishnomalar va xabarlar yuborish.
* **Translation**: Dinamik tarjimalar lug'ati.

Barcha batafsil ma'lumotlar va manbalar `platon_knowledge/PLATON_MASTER_GUIDE.md` faylida saqlangan.
