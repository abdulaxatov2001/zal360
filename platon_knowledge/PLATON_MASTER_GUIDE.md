# Platon Low-Code Platform - To'liq Qo'llanma va Spetsifikatsiya

Ushbu hujjat doc.platon.uz saytining barcha bo'limlaridan to'plangan to'liq ma'lumotlar bazasidir.



---
## Bo'lim: GUIDE > INDEX (uz/guide/index.html)

# Kirish ​

Platon.uz - veb ilovalarni tezroq ishlab chiqish uchun mo'ljallangan progressiv low-code platforma. Frontend uchun Vue bilan qurilgan Platon, dasturchilarga murakkab ilovalarni tezroq qurish imkonini beradi, boilerplate kodni kamaytirish va kuchli abstraksiyalarni taqdim etish orqali.

## Low-Code nima? ​

Agar siz low-code platformalar bilan yangi tanish bo'lsangiz, bilishingiz kerak bo'lgan narsalar:

Low-Code Dasturlash

Low-code platformalar dasturchilarga minimal qo'lda kodlash bilan ilovalar yaratish imkonini beradi. Har bir kod qatorini noldan yozish o'rniga, siz vizual interfeyslar, konfiguratsiya va deklarativ yondashuvlardan foydalanib funksionallik yaratasiz.

Dasturchilardan kodni yashiruvchi an'anaviy low-code platformalardan farqli o'laroq, Platon sizga to'liq nazoratni beradi - siz SQL so'rovlari va Vue manba kodini to'g'ridan-to'g'ri yozasiz, platforma esa ularni dinamik ravishda render qiladi va bajaradi.

## Asosiy Imkoniyatlar ​

Platon zamonaviy veb ilovalarning asosiy komponentlarini qurishda a'lo darajada:
* 

📊 Dinamik Jadvalar - SQL so'rovlari yozish orqali kuchli ma'lumotlar jadvallarini yarating. Platon so'rovingiz natijalarini avtomatik ravishda interaktiv, ko'p funksiyali jadvallarga aylantiradi, tartiblash, filtrlash va paginatsiya bilan.
* 

📝 Formalar - Vue komponentlari va reaktiv ma'lumotlar bog'lanishidan foydalanib, validatsiya, shartli maydonlar va dinamik xatti-harakatlar bilan murakkab formalarni yarating.
* 

🔌 API'lar - Endpointlar, so'rov/javob boshqaruvi va biznes mantiqiga to'liq nazorat bilan RESTful API'larni loyihalash va amalga oshirish. API handlerlaringizni tanish naqshlar yordamida yozing.
* 

🎨 Dinamik Sahifalar - Vue manba kodini yozish orqali to'liq maxsus sahifalar yarating. Platon komponentlaringizni render qiladi, har qanday UI yaratish uchun to'liq moslashuvchanlik beradi.

## Qanday Ishlaydi ​

Platon oddiy printsip asosida ishlaydi:
* Siz kod yozasiz - SQL so'rovlari va Vue komponentlari
* Platon render qiladi - Platforma sizning kodingizni dinamik ravishda bajaradi va ko'rsatadi
* Siz natijalarni olasiz - To'liq funksional jadvallar, formalar, API'lar va sahifalar

Dasturchilar uchun

Agar siz SQL va Vue bilan qulay bo'lsangiz, Platon bilan o'zingizni uyda kabi his qilasiz. Platforma sizning kodingizni yashirmaydi - u uni kuchli runtime imkoniyatlari bilan kuchaytiradi.

## Nima uchun Platon? ​
* Dasturchi-Do'st: Haqiqiy kod yozing, faqat konfiguratsiya emas
* Vue bilan quvvatlanadi: Siz allaqachon bilgan Vue ekotizimidan foydalaning
* SQL Native: SQL so'rovlaringiz bilan to'g'ridan-to'g'ri ma'lumotlar bazasiga kirish
* Moslashuvchan: Oddiy CRUD ilovalardan tortib murakkab biznes ilovalarigacha hamma narsani yarating
* Tez Rivojlantirish: Boilerplate kodni kamaytiring va biznes mantiqiga e'tibor qarating

## Boshlash ​

Birinchi ilovangizni yaratishga tayyormisiz? Tezkor boshlash qo'llanmasini tekshiring va bir necha daqiqada ishga tushiring.


---
## Bo'lim: GUIDE > STRUCTURE (uz/guide/structure.html)

# Project structure ​

Platonga xush kelibsiz! Ushbu qo'llanma sizga project structure'ni tushunishga va tezda ishga tushirishga yordam beradi.

## Mundarija ​
* Project Overview
* Included Projects
* Core
* Shared
* Remotes
* Starter
* Next Steps

## Project Overview ​

Platon Vue bilan qurilgan modular low-code platforma. Platforma bir-biri bilan bog'langan bir nechta project'lardan iborat bo'lib, ular birgalikda kuchli development experience ta'minlaydi.

Platform Architecture

Platon modular architecture'ga amal qiladi, bu yerda har bir project o'zining o'ziga xos rolini bajaradi. Ushbu project'larni tushunish platformada samarali harakat qilish va hissa qo'shishga yordam beradi.

## Included Projects ​

Platon bir nechta project'lardan iborat. Asosiy project'lar Core va Shared. Keling, ularning har birini ko'rib chiqamiz:

### Core ​

Core project Platon platformasining yurak qismi. U quyidagilarni bajaradigan markaziy hub vazifasini bajaradi:
* Turli module'lardan barcha configuration'larni to'playdi
* Remote project'lar va ularning connection'larini boshqaradi
* Hamma narsani bitta unified application'ga birlashtiradi
* Platforma uchun asosiy entry point ta'minlaydi

Key Responsibilities:
* Configuration management
* Remote module orchestration
* Application bootstrapping
* Core routing va navigation

### Shared ​

Shared project butun platforma bo'ylab ishlatiladigan reusable resource'larni o'z ichiga oladi:
* Components - Reusable Vue component'lar
* Utils - Utility function'lar va helper'lar
* Composables - Vue composition API composable'lar
* Helpers - Umumiy vazifalar uchun helper function'lar
* Constants - Shared constant'lar va configuration'lar

Shared imkoniyatlaridan to'liq foydalanish uchun `webpack.config.js` faylidagi `ModuleFederationPlugin` quyidagicha sozlang.js``  const { ModuleFederationPlugin } = require("webpack").container;
  new ModuleFederationPlugin({ 
        ...
      remotes: {
        shared: `shared@http://localhost:8083/remoteEntry.js`
      }, 
    })``

`sharedApp.js` faylini quyidagicha yaratingjs``const PlatonSharedApp = await import("shared/PlatonSharedApp") 
export const {
  // Components
	NotFound,
	PModal,
	PlatonChart,
	PlatonMapChart,
	Notification,
	NotificationContainer,
	PageLoadingView,
  EIMZOSign,
  RsImzoSign,
  IconPickerDialog,
  MapViewer,
  MapMarkerPicker,
	LangPicker,

  // Utils
	MapTiles,
  translations,
  themeChange,
  SharedStore,
  SharedStyles,
  SharedMixins,
  SharedDirectives,
  CreateHttpClient,
  VueLeafletImport,
  CodeMirrorImports,
  langLa,
  DrawingToolbarUz,
  PlatonModule
} = PlatonSharedApp

export default PlatonSharedApp.default``

main.js ichida `shared` ni sozlangjs``  import PlatonSharedApp, {SharedStore} from "./sharedApp.js" 
  Vue.use(PlatonSharedApp, { 
    components: ["LangPicker", ...], 
    $api: { baseURL: API_ENDPOINT, store: SharedStore },
    ...
    })``

`components` ichiga istalgan component nomini yozing va u global `Vue` componentlar qatoriga qo'shiladi.

Asosiy afzalliklari:
* Module'lar bo'ylab kod reusability
* Consistent UI/UX pattern'lar
* Shared business logic
* Centralized utility'lar

### Remotes ​

Remotes folder barcha remote project'lar uchun container. Bu o'zi project emas, balki remote module'larni tashkil qiladigan directory.

Structure:``remotes/
├── moduleName1/
├── moduleName2/
└── moduleName3/``

Usage Pattern: Barcha remote module'lar platforma bo'ylab `remotes/moduleName` sifatida murojaat qilinadi. Har bir remote module mustaqil project bo'lib, alohida develop qilinishi va deploy qilinishi mumkin.

Key Characteristics:
* Independent development va deployment
* Module federation support
* Lazy loading imkoniyatlari
* Isolated codebase'lar

### Starter ​

Starter bu platon remote modul yozish uchun boshlang'ich loyiha sifatida xizmat qiladi. Starter modulini Platon Starter sahifasi orqali yuklab olish va yangi modul uchun sozlash kerak bo'ladi.

Starter quyidagicha faylar va papkalardan iborat bo'ladi huddi yangi lekin kerakli plaginlar o'rnatilgan va sozlangan holda.``.
├─ src
│  ├─router
│  ├─utils
│  ├─views
│  ├─App.vue
│  ├─bootstrap.js
│  ├─main.js
│  └─sharedApp.js
├─ .env 
├─ package.json 
├─ ...
└─ webpack.config.js.json``

Eslatma

Starter bilan yangi modul yozish uchun Platon Shared moduli haqida to'liq ma'lumotga ega bo'lish kerak. Starter modulidagi barcha pluginlar to'liq Platon Shared moduliga tayanadi.

### Starter Shared config ​

Starter uchun shared moduli avvaldan sozlangan bo'ladi agar sozlanmagan bo'lsa quyidagicha sozlang. Agar sizda shared moduli sozlangan bo'lsa `sharedUrl` o'rniga shared moduli linkini joylashtiring. Masalan: `http://localhost:8080/```...
 plugins: [ 
    new ModuleFederationPlugin({ 
      ...,
      remotes: {
        shared: `shared@${sharedUrl}remoteEntry.js`
      },
      shared: {
        vue: {
          singleton: true,
          eager: true,
          requiredVersion: "^2.7.16"
        }
      }
    })
  ]``

Starter ichiga Shared moduli to'g'ri sozlangan bo'lsa Shared moduli ichidagi barcha component va utillar starter ichida ishlaydi.

Eslatma

Starter moduli uchun Platon Shared to'g'ri sozlanmasa starter moduli ishlamaydi. Starter modulini Platon Sharedsiz ishlatish imkonsiz.

### Starter Router ​

Starter router strukturasi ikkita `index.js` va `routes.js` fayldan iborat bo'ladi. `index.js` bu starterni o'zida ishlash uchun routerlar yoziladi huddi Vue proekt kabi. `routes.js` bu Host uchun maxsus routerlar ro'yxati hisoblanadi ushbu fayldagi ma'lumotlar Host uchun expose qilinadi va Host proekt avtomatik prefix qo'shadi.``export default [
  {
    path: "/",
    name: "MyPage",
    meta: { platonLayout: true },
    component: () => import("../views/MyStarterPage.vue")
  }, 
];``

### publicPath nima? ​

Webpack dagi Module Federation ishlatayotganda publicPath — bu build qilingan fayllar (chunks, remoteEntry.js va boshqalar) qaysi URL orqali yuklanishini bildiradigan base path. Webpack brauzerga fayllarni qayerdan olish kerakligini `publicPath` orqali biladi. `publicPath` host moduli uchun juda mukin hisoblanadi sizning modulingizdagi momponent va sahifalarni yuklash uchun `publicPath` foydalaniladi.

### Xulosa ​

Yangi modul yozish uchun starterda barcha configlar sonlangan shared va starter modullarini yuklab oling va config `.env` portlarni sozlang. Starterdagi barcha component va sahifalar vue proektkabi bo'ladi. Qo'shimcha router va webpack sozlamalari mavjut. Sharedda mavjut bo'lmagan istalgan plugin yoki componentni `npm` paket sifatida yuklab olish mumkin host app barcha `npm` plugin va componentlarni qo'llab quvatlaydi.

Afzallikalri:
* Configa va pluginlar tayyor
* Theme va Componentlar Platon Shareddan olinadi
* Host modulisiz yangi modul yaratish imkoniyati

## Next Steps ​

Endi project structure'ni tushunganingizdan so'ng, quyidagi tavsiya etilgan keyingi qadamlar:
* Review Shared Components - Shared project'ni ko'rib chiqing va qanday reusable resource'lar mavjudligini bilib oling
* Read the Documentation - Batafsil ma'lumot uchun boshqa qo'llanmalarni o'qishda davom eting


---
## Bo'lim: GUIDE > AUTH (uz/guide/auth.html)

# Avtorizatsiya ​

Avtorizatsiya modli orqali Platon tizim foydalanuvchilarni avtorizatsiyadan va ro'yxatdan o'tqazish imkoniyati mavjud. Avtorizatsiya moduli orqali turli tizimlar orqali avtorizatsiya qilish imkoniyati mavjud jumladan (Google, Facebook, Eimzo ...). Ushbu modul standart avtorizatsiya sahifasini yaratadi agar istasangiz Custom Providerlar yordamida o'zingizga maqul avtorizatsiya oynasini yaratishingiz mumkin.

## Custom Providerlar ​

Custom Providerlar yordamida foydalanuvchi o'ziga kerakli avtorizatsiya sahifasini yaratishi mumkin. Hozirda quyidagi providerlar mavjud quyida ulardan qanday foydalanish namunalari berilgan.

#### Custom Providerlarni yaratish ​

Custom Providerlarni yaratish uchun `initPtoviders` funksiyasidan foydalaniladi, parametrda `callback` funksiya qabul qiladi. Odatiy holda `callback` funksiya qiymati `null` bo'ladi.``(Vue, props)=>{
    const {onMounted}=Vue;
    onMounted(()=>{
        props.useProviders.initPtoviders((res)=>{
            console.log(res)
        })
    })
    return {
        ...
    }
}``

#### Providerlar ro'yxati ​
* `props.useProviders.useGoogleLogin()` google avtorizatsiya uchun ishlatiladi.
* `props.useProviders.useGoogleLoginPrompt()` google propmt uchun ishlatiladi.
* `props.useProviders.useFacebookLogin()` facebook uchun ishlatiladi.
* `props.useProviders.useEimzoLogin()` eimzo uchun ishlatiladi.
* `props.useProviders.useIDCardLogin()` IDCard uchun ishlatiladi.
* `props.useProviders.useAppleLogin()` apple id uchun ishlatiladi.
* `props.useProviders.useRsImzoLogin()` RsImzo uchun ishlatiladi.
* `props.useProviders.useAuth(login:string, password:string)` Login va parol uchun ishlatiladi.

#### Qo'shimcha imkoniyatlar ​
* `props.useProviders.changeCallback(cb:null | function)` callback funksiya o'zgartirish yoki qo'shish uchun ishlatiladi.
* `props.useProviders.removeCallback()` callback funksiyani o'chirish uchun.
* `props.useProviders.getFingerprint()` avtorizatsiya uchun device Id olish .
* `props.useProviders.useLogout()` tizimdan chiqish uchun.
* `props.useProviders.useGetUserInfo()` foydalanuvchi ma'lumotlarini olish uchun.
* `props.useProviders.useLoginSuccess(access_token:strin, refresh_token:string, refresh_expires_in:string, cb:null | function)` avtorizatsiyani muvaffqiyatli bajarish uchun.
* `props.useProviders.initPtoviders(cb:null | function)` Providerlarni yaratish uchun ishlatiladi sistema ishga tushganda faqat birmartta chaqirish kerak.


---
## Bo'lim: GUIDE > SHARED (uz/guide/shared.html)

# Shared App structure ​

Platonga xush kelibsiz! Ushbu qo'llanma sizga project structure'ni tushunishga va tezda ishga tushirishga yordam beradi.

## Mundarija ​
* Project Overview
* Included Projects
* Setup
* Components
* Utils
* Contants
* Next Steps

## Project Overview ​

Platon Vue bilan qurilgan modular low-code platforma. Platforma bir-biri bilan bog'langan bir nechta project'lardan iborat bo'lib, ular birgalikda kuchli development experience ta'minlaydi.

Platform Architecture

Platon modular architecture'ga amal qiladi, bu yerda har bir project o'zining o'ziga xos rolini bajaradi. Ushbu project'larni tushunish platformada samarali harakat qilish va hissa qo'shishga yordam beradi.

## Included Projects ​

Platon bir nechta project'lardan iborat. Asosiy project'lar Core va Shared. Keling, ularning har birini ko'rib chiqamiz:

### Core ​

Core project Platon platformasining yurak qismi. U quyidagilarni bajaradigan markaziy hub vazifasini bajaradi:
* Turli module'lardan barcha configuration'larni to'playdi
* Remote project'lar va ularning connection'larini boshqaradi
* Hamma narsani bitta unified application'ga birlashtiradi
* Platforma uchun asosiy entry point ta'minlaydi

Key Responsibilities:
* Configuration management
* Remote module orchestration
* Application bootstrapping
* Core routing va navigation

### Shared ​

Shared project butun platforma bo'ylab ishlatiladigan reusable resource'larni o'z ichiga oladi:
* Components - Reusable Vue component'lar
* Utils - Utility function'lar va helper'lar
* Composables - Vue composition API composable'lar
* Helpers - Umumiy vazifalar uchun helper function'lar
* Constants - Shared constant'lar va configuration'lar

Key Benefits:
* Module'lar bo'ylab code reusability
* Consistent UI/UX pattern'lar
* Shared business logic
* Centralized utility'lar

### Remotes ​

Remotes folder barcha remote project'lar uchun container. Bu o'zi project emas, balki remote module'larni tashkil qiladigan directory.

Structure:``remotes/
├── moduleName1/
├── moduleName2/
└── moduleName3/``

Usage Pattern: Barcha remote module'lar platforma bo'ylab `remotes/moduleName` sifatida murojaat qilinadi. Har bir remote module mustaqil project bo'lib, alohida develop qilinishi va deploy qilinishi mumkin.

Key Characteristics:
* Independent development va deployment
* Module federation support
* Lazy loading imkoniyatlari
* Isolated codebase'lar

## Next Steps ​

Endi project structure'ni tushunganingizdan so'ng, quyidagi tavsiya etilgan keyingi qadamlar:
* Review Shared Components - Shared project'ni ko'rib chiqing va qanday reusable resource'lar mavjudligini bilib oling
* Read the Documentation - Batafsil ma'lumot uchun boshqa qo'llanmalarni o'qishda davom eting


---
## Bo'lim: API > INDEX (uz/api/index.html)

# API Ma'lumotnoma ​

Platon API hujjatlariga xush kelibsiz. Bu bo'limda API haqida ma'lumotlar joylashtiriladi.

## Tez orada ​

API hujjatlari tez orada qo'shiladi.


---
## Bo'lim: EXAMPLES > INDEX (uz/examples/index.html)

# Runtime API Misollari ​

Bu sahifa VitePress tomonidan taqdim etilgan runtime API'lardan ba'zilarining foydalanishini namoyish etadi.

Asosiy `useData()` API joriy sahifa uchun sayt, mavzu va sahifa ma'lumotlariga kirish uchun ishlatilishi mumkin. Bu `.md` va `.vue` fayllarida ishlaydi:md``<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Natijalar

### Mavzu Ma'lumotlari
<pre>{{ theme }}</pre>

### Sahifa Ma'lumotlari
<pre>{{ page }}</pre>

### Sahifa Frontmatter
<pre>{{ frontmatter }}</pre>``

## Natijalar ​

### Mavzu Ma'lumotlari ​`{
  "nav": [
    {
      "text": "Bosh sahifa",
      "link": "/uz/"
    },
    {
      "text": "Qo'llanma",
      "link": "/uz/guide/"
    },
    {
      "text": "API",
      "link": "/uz/api/"
    },
    {
      "text": "Misollar",
      "link": "/uz/examples/"
    },
    {
      "text": "Platon",
      "link": "/uz/platon/"
    },
    {
      "text": "v1.1.0",
      "link": "#",
      "activeMatch": "^/$"
    }
  ],
  "sidebar": {
    "/uz/guide/": [
      {
        "text": "Qo'llanma",
        "items": [
          {
            "text": "Kirish",
            "link": "/uz/guide/"
          },
          {
            "text": "Struktura",
            "link": "/uz/guide/structure"
          },
          {
            "text": "Avtorizatsiya",
            "link": "/uz/guide/auth"
          }
        ]
      }
    ],
    "/uz/api/": [
      {
        "text": "API Ma'lumotnoma",
        "items": [
          {
            "text": "Umumiy ko'rinish",
            "link": "/uz/api/"
          }
        ]
      }
    ],
    "/uz/platon/": [
      {
        "text": "Platon Services",
        "items": [
          {
            "text": "Kirish",
            "link": "/uz/platon/"
          },
          {
            "text": "Auth",
            "link": "/uz/platon/auth"
          },
          {
            "text": "Menu",
            "link": "/uz/platon/menu"
          },
          {
            "text": "Page",
            "link": "/uz/platon/page"
          },
          {
            "text": "Form",
            "link": "/uz/platon/form"
          },
          {
            "text": "Table",
            "link": "/uz/platon/table"
          },
          {
            "text": "Cron",
            "link": "/uz/platon/cron"
          },
          {
            "text": "Excel Import",
            "link": "/uz/platon/excel-import"
          },
          {
            "text": "Export",
            "link": "/uz/platon/export"
          },
          {
            "text": "File",
            "link": "/uz/platon/file"
          },
          {
            "text": "Logging",
            "link": "/uz/platon/logging"
          },
          {
            "text": "Mail",
            "link": "/uz/platon/mail"
          },
          {
            "text": "Multi Database",
            "link": "/uz/platon/multi-database"
          },
          {
            "text": "SMS",
            "link": "/uz/platon/sms"
          },
          {
            "text": "Store",
            "link": "/uz/platon/store"
          },
          {
            "text": "Translation",
            "link": "/uz/platon/translation"
          }
        ]
      }
    ],
    "/uz/examples/": [
      {
        "text": "Misollar",
        "items": [
          {
            "text": "Umumiy ko'rinish",
            "link": "/uz/examples/"
          },
          {
            "text": "Menyular",
            "link": "/uz/examples/menu"
          },
          {
            "text": "Jadvallar",
            "link": "/uz/examples/table"
          },
          {
            "text": "Formalar",
            "link": "/uz/examples/form"
          },
          {
            "text": "Sahifalar",
            "link": "/uz/examples/page"
          },
          {
            "text": "API",
            "link": "/uz/examples/api"
          },
          {
            "text": "JSEval",
            "link": "/uz/examples/js-eval"
          },
          {
            "text": "Eksport",
            "link": "/uz/examples/export"
          },
          {
            "text": "Import",
            "link": "/uz/examples/import"
          },
          {
            "text": "Cron(Schedule)",
            "link": "/uz/examples/cron"
          },
          {
            "text": "Tarjimalar",
            "link": "/uz/examples/translation"
          },
          {
            "text": "Fayl Menejeri",
            "link": "/uz/examples/file-manager"
          },
          {
            "text": "Fayl Kategoriyalari",
            "link": "/uz/examples/file-category"
          },
          {
            "text": "Tizim sozlamalari",
            "collapsed": true,
            "items": [
              {
                "text": "Ma'lumotlar ombori nazorati",
                "link": "/uz/examples/database-control"
              }
            ]
          }
        ]
      }
    ]
  },
  "socialLinks": [
    {
      "icon": "gitlab",
      "link": "https://gitlab.platon.uz/platon/frontend-modules"
    }
  ],
  "footer": {
    "copyright": "Mualliflik huquqi © 2026 Platon. Versiya 1.1.0"
  }
}`

### Sahifa Ma'lumotlari ​`{
  "title": "Runtime API Misollari",
  "description": "",
  "frontmatter": {
    "outline": "deep"
  },
  "headers": [],
  "relativePath": "uz/examples/index.md",
  "filePath": "uz/examples/index.md"
}`

### Sahifa Frontmatter ​`{
  "outline": "deep"
}`

## Batafsil ​

Runtime API'larning to'liq ro'yxati uchun hujjatlarga qarang.


---
## Bo'lim: EXAMPLES > MENU (uz/examples/menu.html)

# Menyular
 ​

Ushbu sahifada umumiy platforma navigatsiyasini bajarib beruvchi menyular bo'limi bilan tanishib chiqishingiz mumkin.

## Asosiy ma'lumotlar ​ Istalgan dasturiy ta’minot bir necha funksional bo’limlardan tashkil topgan bo’ladi. Odatda bu bo’limlarga kirish, umumiy hamma resurslar ro’yhatini ko’rsatishda asosiy menyudan foydalaniladi. Platon platformasi dasturchi uchun juda qulay va mukammal menyu konstruktorini taklif qiladi. Ushbu bo’limda Veb-dasturga menyu qo’shish, uni tahrirlash va ko’rinishlarini boshqarish bo’yicha ma’lumotlar beriladi. 

### Bo'lim tuzilishi ​ Menyular bo'limiga o'tish uchun yon menyudagi Menyular bo'limini tanlashingiz lozim. 



### Asosiy sahifa ​ Menyular sahifasiga kirganingizda quyidagi sahifa ochiladi. 



Ushbu sahifada e'tibor berilishi lozim bo'lgan qismlar:
* Izlash maydoni. Qo'shilgan menyular orasidan izlash.
* `Sinxronizatsiyalash` tugmasi. Menyular ro'yxatini foydalanuvchi ishchi muhiti bilan sinxronizatsiyalashtirib oladi.
* Nomi ustuni. Tanlangan menyuni tahrirlash oynasini ochadi.
* `Qo'shish` tugmasi. Yangi menyu qo'shish oynasini ochib beradi.

### Yangi menyu qo'shish oynasi ​

 tugmasi bosilganida quyidagi oyna ochiladi: 

#### Asosiy ma'lumotlar bo'limi ​
* parent. Ota menyu bo'limini ko'rsatish uchun.
* sort_order. Saralash tartibi.
* badge_type. Menyu haqidagi ma'lumotlarni olib kelish uchun ishlatiladi. Buni ikki xil yo'l bilan ishlatish mumkin: 
* SQL orqali ma'lumot olib kelish
* Platon API orqali ma'lumot olib kelish


* state. Ko'rinish holati.

INFO

E'tibor bering! state maydoni Platon konstruktorining barcha elementlarida uchraydi va uch xil ko'rinishda bo'lishi mumkin:
* active – joriy elementni tizimda ko'rinuvchi holatga o'tkazadi.
* hidden – joriy elementni tizim ichida ko'rinmas holatiga o'tkazadi.
* archive – joriy elementni arxivlashtirib qo'yadi.
* link. Ushbu menyu olib boruvchi havola. Ushbu maydonda menyu ochilganda foydalanuvchilarga qanday sahifa , jadval , forma ochilishini belgilaymiz. Masalan: 
 Biron bir sahifani ochish uchun : `pages/{sahifa_nomi}` , 
 Forma ochish uchun esa : `forms/{forma_nome}` , 
 Jadval ochilishi uchun esa : `tables/{jadval_nomi}`

INFO

Qo'shimcha ma'lumot! Ushbu maydonga foydalanuvchilarning ruxsati yoki id siga qarab boshqa boshqa saxifalarni ochish shartlarini ham berishimiz mumkin. Masalan: Ruxsati admin bo'lgan foydalanuvchilar uchun users sahifasi, ruxsati admin bo'lmagan foydalanuvchilar uchun esa boshqa sahifani ochishimiz kerak bo'lsa, ya'ni: 
`bjs: ($user.has_perm('admin')) ? 'pages/users': 'pages/user2'` Bu holatda ushbu menyuga bosilganda ruxsati admin bo'lgan foydalanuvchilar uchun users sahifasi ochiladi, aks holda esa user2 sahifasi ochiladi.

INFO

Qo'shimcha ma'lumot! Qo'shimcha ravishda fjs: funksiyasi orqali javascriptning boshqa shartlarini ham ishlatishimiz mumkin Ya'ni 
`fjs: (() => { shartlar va return })();`
* name maydonlari. Menyu matni.

WARNING

E'tibor bering! 
name1, name2, name3 va name4 ma'lumotlari 4 xil holatda to'ldirilishi lozim: 
`name1` – O'zbek kirill yozuvida
`name2` – Rus tilida
`name3` – O'zbek lotin yozuvida
`name4` – Ingliz tilida


### Qo'shimcha ma'lumotlar bo'limi ​
* visibility. Foydalanuvchi tipiga qarab ko'rinishni belgilash. Ushbu maydonda bu menyu kimlarga ko'rinishini anqilab berishiligimiz mumkin, yani bu menyu ruxsat berilmagan foydalanuvchilarga umuman ko'rinmaydi.

INFO

Qo'shimcha ma'lumot! Ushbu maydonda ham link singari `$user` orqali foydalanuvchi ma'lumotlarini olamiz. Masalan: `$user.has_perm('admin')` Ya'ni bu menyu faqat admin bo'lgan foydalanuvchilarga ko'rinadi.

WARNING

Muhim eslatma!
 Bu cheklovlar platon adminlar uchun ishlamaydi.
* icon. Menyu ikon rasmi.

TIP

Qo'shimcha ma'lumot!
 Platon platformasida avvaldan icon rasmlari kiritilgan bo'lib, ularni `Ctrl` + `I` klaviatura kombinatsiyasini bosgan holda ko'rishingiz mumkin.
* has_divider_before. Menyu bo'limidan avval chegara qo'yish.
* main. Menyu bo'limi vebsaytga kirishi bilan ochilishini ta'minlash.
* is_track_menu. Menyular bo'limida belgilan aynan bir menyuni belgilanganligini ifodalovchi vizual effekt.

## Qulayliklar ​ Menyular bo'limi bir qancha qo'shimcha qulayliklarni taklif qiladi. Quyida uchbu qulayliklar haqida gap boradi. 

### Ichki menyular qo'shish ​

WARNING

Ogohlantirish!
 Misol sifatida keltiriluvchi Ichki menyular qo'shish qo'llanmasida havolalar qo'llanilmaydi. Shunig uchun har bir menyu bo'limida link maydoni bo'sh qoldirilgan. 

 Bu misolda asosiy e'tibor `parent` maydonini ishlatishga qartilgan.

Menyular panelida dasturchi bir nechta menyuni ma'lum bir menyu ostida birlashtira oladi. Buning uchun bir menyu ichiga boshqa bir menyuni parent sifatida ko'rsatish kifoya. Quyida ushbu holat ko'rsatib o'tiladi.

### Menyu qo'shishga misollar ​

#### Diagnostika menyusi. ​



#### Loglar menyusi. ​



#### Natija ​ Natijada menyular sahifasi Sizfa bunday ko'rinishga ega bo'lishi lozim: 



### Menyu havolalari ​

Menyu bo'limi biror sahifaga yuborishi uchun uni qo'shish vqtida `link` maydoni to'ldirilishi kerak. Havolalar bir necha xil bo'lishi mumkin:
* Ichki havola. Platon platformasi ichidagi biror sahifa, jadval yoki formaga yuborishi. Misol uchun: `forms/reports``tables/products``pages/index`
* Tashqi havola. Platondan tashqaridagi biror vebsayt havolsaiga yuborishi. Bunda HTTP protokol ko'rsatilishi shart. Misol uchun: `https://google.com`

### Menyuga yorliq qo'yish ​ Menyuda quyidagi rasmda ko'rsatilganidek yorliq qo'yish qulayligi mavjud. Bunda Menyu qo'shish oynasidagi badge maydoni to'ldirilishi maqsadga muvofiqdir. 



Eng asosiy talab – bu `badge` maydonini SQL so'rov orqali ko'rsatishdir. Ya'ni ushbu maydonda Siz Ma'lumotlar bazasidan biror ma'lumotni SQL so'rov sifatida olib kelishingiz mumkin. 
 Misol uchun: `SELECT COUNT(id) FROM users.` Ushbu so'rov foydalanuvchilar sonini olib keladi.

Bundan tashqari Siz oddiy matnni ham yorliq sifatida ko'rsatishingiz mumkin. Buning uchun `badge` maydonida, misol uchun: `SELECT 'new'` degan yozuvni yozishingiz mumkin. Shunda Siz tanlagan menyu bo'limi yonida `new` yozuvi paydo bo'lib qoladi.


---
## Bo'lim: EXAMPLES > TABLE (uz/examples/table.html)

# Jadvallar ​

Platon Jadvallar bo'limi haqida umumiy ma'lumotlar

## Asosiy ma'lumotlar ​

Platon platformasi Ma'lumotlari bazasi sifatida PostgreSQL ma'lumotlarni boshqarish tizimini ishlatadi. Ushbu ma'lumotlar bazasi avvaliga Platonning asosiy jadvallar tizimini saqlaydi. Lekin dasturchi o'zi istagan holda be'malol istalgan jadvalini tuzib unda qo'shimcha ma'lumotlarni saqlay olishi mumkin. Platon platformasi esa o'z o'rnida ma'lumotlarni ushbu jadvallar tizimiga saqlash, ulardan ma'lumotlarni chaqirish va ma'lumotlarni tahrirlash vazifasini o'ziga oladi.

Ammo ma'lumotlar soni kattaligi, jadvallar tizimi murakkab bo'lganligi uchun Platon platformasi foydalanuvchiga ushbu ma'lumotlarga Jadvallar bo'limi orqali murojaat qilish qulayligini taklif qiladi.

Jadvallar bo'limining asosiy vazifasi serverda joylashgan katta miqdordagi axborotlarni qayta ishlab (SQL yoki API yordamida) foydalanuvchi xohishiga binoan kerakli bo'lgan ma'lumotlarni virtual jadvalda aks ettirish hisoblanadi. Bunda dasturchi:
* bir jadval ma’lumotlarini Platon virtual jadvalida ko’rsatishi mumkin;
* bir necha Ma’lumotlar bazasidagi jadvallar ma’lumotlarini Platondagi bitta virtual jadvalga yig’ib ko’rsatishi mumkin;
* bir ma’lumotga tobe bo’lgan boshqa ma’lumotlarni ikkinchi darajali virtual jadvallar asosida aks ettirishi mumkin.

## Bo'lim tuzilishi ​

Virtual jadvallar bilan ishlash uchun dasturchi uchun alohida Jadvallar sahifasi taklif qilinadi. Umuman olganda, jadvallar bilan ishlashda bir necha funksiyalar, sahifalar va oynalar mavjud bo'lib, quyida ushbu elementlar haqida so'z boradi.

### Jadvallar sahifasi ​ Asosiy jadvallar sahifasiga kirganingizda quyidagi ko'rinish ochiladi: 



Ushbu sahifada asosiy e'tibor berishingiz kerak bo'lgan bo'limlar mavjud:
* Izlash maydoni. Virtual jadvallar orasidan izlashga yordam beradi.
* `Sinxronizatsiyalash` tugmasi. Virtual jadvallarni foydalanuvchi ishchi muhiti bilan sinxronizatsiyalashtirib oladi.
* Jadvallar ro'yhati. Tizimda qo'shilgan barcha jadvallar ro'yhati. Ro'yhatdagi ustunlar havolasini bosganda quyidagilar ochiladi: 
* Nomlanishi. Jadvalni tahrirlash oynasini ochadi.
* Holati. Jadval ustunlari statusini ko'rsatib turadi (active/hidden/archived).
* Sarlavhasi. Jadval ustunlari ro'yhatini ochib beradi.
* Header. Jadvalni ko'rish sahifasini ochib beradi.
* Darajasi. Jadvallar ierarxiyasini aks ettirib turadi.
* Vazifalar. Jadvalga oid vazifalar usutuni.
* `Qo'shish tugmasi.` Yangi virtual jadval qo'shish oynasini ochib beradi.

### Jadval qo'shish / tahrirlash oynasi ​

`Qo'shish` tugmasi bosilganidan keyin, platforma sizga yangi jadval qo'shish oynasini ochib beradi:



Maydonlar vazifasi quyida keltiriladi:
* name. Jadvalning platformadagi murojaat nomi.
* level. Jadval darajasi (Jadvallar darajalari bo'yicha ushbu sahifada ma'lumot keltirilgan).
* state. Ko'rinish holati.

INFO

E'tibor bering!
`state` maydoni Platon konstruktorining barcha elementlarida uchraydi va uch xil ko'rinishda bo'lishi mumkin:

`active` – joriy elementni tizimda ko'rinuvchi holatga o'tkazadi.
`hidden` – joriy elementni tizim ichida ko'rinmas holatiga o'tkazadi.
`archive` – joriy elementni arxivlashtirib qo'yadi.

* data_source. Ma'lumot manbai.
* public. Jadvalni ommaviy qilish, ya'ni ro'yhatdan o'tmaganlar uchun ko'rsatish.
* title. Jadvalning brauzer yorlig'idagi (вкладка) nomi.
* header. Jadval sarlavhasi.

WARNING

E'tibor bering! Title va Header ma'lumotlari 4 xil holatda to'ldirilishi lozim:
`1-uz` – O'zbek kirill yozuvida
`2-ru` – Rus tilida
`3-la` – O'zbek lotin yozuvida
`4-en` – Ingliz tilida

* pagination_size. Ma'lumotlarni sahifalab ajratishda ularning soni.
* refresh_timeout. Ma'lumotlarni avtoyangilash vaqti.
* left_fixed. chap tomondan "muzlatilgan" ustunlar soni.
* right_fixed. o'ng tomondan "muzlatilgan" ustunlar soni.
* grouping_field. Bir xil ma'lumotlga ega bo'lgan ustun ma'lumotlari bo'yicha guruhlash.
* fixed_height. Jadval balandligini o'zgarmas qilish.
* notification_event. Bildirishnoma.
* datasource. Manba.
* sql. SQL so'rov.

TIP

Eslatma!
 Bu maydon majburiy bo'lib, unda yozilgan SQL so'rov Ma'lumotlar bazasida turuvchi ma'lumotlarni chaqirishga xizmat qiladi.
* params_sql. sql maydonda kerak bo'ladigan qiymatlar uchun so'rov. Masalan, yangi havola uchun SQL so'rov.

WARNING

Eslatma!
 Platon platformasining bir qulayliklaridan biri – havolalar generatsiyasi uchun SQL so'rov yozish qulayligidir. Unga ko'ra Siz SQL so'rov yozgan holda havola parametrlarini generatsiya qildirishingiz mumkin.

Bu qulaylik haqida ko'proq ma'lumotga va tasavvurga ega bo'lish uchun joriy dokumentatsiyadagi Birinchi qadamlar bo'limidagi sodda dasturlar ishlab chiqish qadamlarini ko'rib chiqing.
* visibility. Foydalanuvchi `role`iga qarab ko'rinishni belgilash.
* js. Jadval uchun JavaScript kod.
* css. Jadval CSS stili.

# Jadval ustunlari sahifasi ​

Ustunlar sahifasi virtual jadvalda aks ettiriluvchi va shu jadvalga SQL so'rov asosida keluvchi ma'lumotlarni o'zida ko'rsatuvchi ustunlar ro'yxatini ko'rish va boshqarishga yordam beradi.

Bu oynaga quyidagi ketma-ketliklar orqali boriladi:
* Asosiy Jadvallar oynasidan Header ustunidagi kerakli jadval tanlash: 
* Tanlangan jadvaldan Ustunlar tugmasini tanlash: 
* Jadval ustunlarini taxrirlash oynasi: 

Umuman olganda, bu sahifada har bir jadval ustuni haqida to'liq ma'lumot olishingiz mumkin. E'tibor berishingiz lozim bo'lgan asosiy elementlar:
* `**title**` ustuni. Ustun ma'lumotlarini tahrirlash oynasini ochadi.
* `**Qo'shish tugmasi.**` Yangi ustun qo'shish oynasini ochadi.

### Jadval ko'rinishi sahifasi ​

Bu sahifada tizimga qo'shilgan jadvalni ko'rish mumkin. Uning ko'rinishi jadvaldagi ma'lumotlarga qarab ikki xil ko'rinishda bo'lishi mumkin.

Ustunlar qo'shilmagan Jadval ko'rinishi:

Ma'lumot yo'q Jadval ko'rinishi

To'ldirilgan Jadval ko'rinishi

Jadval sahifasi Sizga natijada to'ldirilgan virtual jadval qanday ko'rinishda bo'lishini ko'rsatadi. Jadval ostida faqat administratorga ko'rinuvchi boshqaruvchi tugmalar mavjud.
* `Sozlash tugmasi.` Ushbu tugmani bosish orqali jadvalni sozlash oynasi ochiladi.
* `Ustun qo'shish tugmasi.` Yangi ustun qo'shish oynasi ochiladi.
* `Ustunlar tugmasi.` Jadvalga qo'shilgan ustunlarni tahrirlash, ko'rish va o'chirish sahifasi ochiladi.
* `Yangi filter qo'shish tugmasi.` Yangi filter qo'shish uchun hizmat qiladi.
* `Filterlar ro'yxati tugmasi.` Yaratilgan filterlar ro'yhatini ko'rish, tahrirlash va o'chirish imkoniyati mavjud
* `Yangi tugma qo'shish tugmasi.` Jadvalga tugma qo'shish.
* `Tugmalar ro'yxati tugmasi.` Tugmalar ro'yhatini ko'rish.

### Jadval Ustunlari ​





Jadval qo'shish oynasida quyidagi maydonlar mavjud:
* table_name. Jadval nomi.
* parent_id. Ota ustun IDsi.
* data_field. Ma'lumotlar bazasidagi jadval ustuni nomi.
* sort_order. Ustunlar orasida tartibni brlgilaydi.
* state. Ko'rinish holati.

TIP

E'tibor bering!
`state` maydoni Platon konstruktorining barcha elementlarida uchraydi va uch xil ko'rinishda bo'lishi mumkin:
* `active` – joriy elementni tizimda ko'rinuvchi holatga o'tkazadi.
* `hidden` – joriy elementni tizim ichida ko'rinmas holatiga o'tkazadi.
* `archive` – joriy elementni arxivlashtirib qo'yadi.
* table_level. Joriy jadval qatlami.
* link. Ustun ma'lumotlari havola bo'lishi uchun havola. Bu maydonda orqali keyingi forma yoki jadvalga ma'lumot uzatish mumkin.
 (misol uchun: `/{link}?bosilganKatakQiymati=@qiymat&querydagiQiymat=#qiymat`)
* visibility. Foydalanuvchi tipiga qarab ko'rinishni belgilash.
* title. Jadvalning ustuni nomi. Ma'lumotlarni dinamik olib kelish mumkin (`:paramdagiMa'lumot`)
* hint. Ustun ma'lumotiga sichqoncha olib borilganida chiquvchi yordamchi ma'lumot.
* sum. Jadvalning eng oxirgi qatorida umumiy ma'lumot chiqarish. Bu funksiya bilan qatordagi sonlarning qiymatlari yig'indisi va sonini hisoblash mumkin (`@_sum` va `@_count`)

WARNING

E'tibor bering!
 Title va Hint ma'lumotlari 4 xil holatda to'ldirilishi lozim:
`1-uz` – O'zbek kirill yozuvida.
`2-ru` – Rus tilida.
`3-la` – O'zbek lotin yozuvida.
`4-en` – Ingliz tilida.

* width. Ustun kengligi.
* data_align. Ma'lumotning ustun ichida joylashuvi (Chap, O'rta, O'ng tomon).
* footer_align. Eng oxirgi qator ma'lumotlarining ustun ichida joylashuvi.
* value_transformation. JavaScript tilidagi element kodi. Jadval ma'lumotlarini olish (`data.ustunQiymati`), bosilgan katak qiymatini olish (`value`)

Ushbu maydonda jadval ustunlari uchun tirli xildagi JavaScript amallarini bajarish mumkin. Hamda ushbu maydonda VUE.JS ning Options API usulidan foydalaniladi.

TIP

Misol uchun!
js``return {
    template:<div> </div>,
    data(){
        return{
        }
    },
    methods: {
    },
    mounted(){
        console.log(q('query_data'))
        // bu yerda q orqali linkdan kelgan malumot ushlanmoqda
    }``
* number_format. Raqamlar formati.
* color_condition. Shartli rang belgilash.
* font_color. Matn rangi.
* background_color. Fon rangi.
* data_nowrap. footer_nowrap. Matn ustun kengiligiga sig'magan holatda matnni keyingi qatorga o'tkazmaslik.
* sortable. Ustun bo'yicha saralash.

### Jadval Filterlari ​

Jadval filterlari jadvaldagi katta miqdordagi ma'lumotlar orasidan filterlash qulayligini beradi.





Oynadagi maydonlar:
* table_name. filterlanuvchi jadval nomi.
* table_level. ushbu filter jadvalning qaysi qatlamiga ta'sir qilishi.
* sort_order. boshqa filterlar bilan saralanishi.
* key. ta'sir qiluvchi ustun nomi.
* type. filter tipi.
* title. filter nomi.

WARNING

E'tibor bering!
Title ma'lumotlari 4 xil holatda to'ldirilishi lozim:
`title1-uz` – O'zbek kirill yozuvida
`title2-ru` – Rus tilida
`title3-la` – O'zbek lotin yozuvida
`title4-en` – Ingliz tilida

* position. jadvalga nisbatan joylashuv.
* width. Bootstrap'ning 12 ustunlik tizimida nechta ustun egallashi.
* default_value. default qiymat.
* class. CSS class.
* style. qo'shimcha CSS stillar.
* visibility. ko'rinish tartibini belgilash.
* Filterga boshlang'ich malumot qo'shish

### Jadval Tugmalari ​

Jadvalga bog'liq bo'lgan biror vazifani bajarish uchun odatda jadval atrofida tugmalar turadi. Ular Jadvalga yangi ma'lumot qo'shish, yoki mavjud ma'lumotlarni o'zgartirish uchun ishlatiladi.




* table_name. filterlanuvchi jadval nomi.
* table_level. ushbu filter jadvalning qaysi qatlamiga ta'sir qilishi.
* sort_order. boshqa filterlar bilan saralanishi.
* state. ko'rinish holati.
* type. filter tipi.
* title. filter nomi.

WARNING

E'tibor bering!
Title ma'lumotlari 4 xil holatda to'ldirilishi lozim:
`title1-uz` - O'zbek kirill yozuvida
`title2-ru` – Rus tilida
`title3-la` – O'zbek lotin yozuvida
`title4-en` – Ingliz tilida

* position. jadvalga nisbatan joylashuv.
* width. Bootstrap'ning 12 ustunlik tizimida nechta ustun egallashi.
* link. Tugma ochuvchi havola.
* icon. Tugma ustidagi ikonka.

INFO

Tavsiya! Platon platformasi Sizga tayyor ikonkalar ro'yhatini taklif qiladi. Ularni ko'rish uchun `Ctrl` + `I` tugmalar kombinatsiyasini bosing.
* class. CSS class.
* style. qo'shimcha CSS stillar.
* visibility. ko'rinish tartibini belgilash.

# Multi Table ​

Biz sahifalar orqali Platonda mutlitable yani 2 va undan ortiq jadvlallarni tablar orqali ham ishlatishligimiz mumkin bo'ladi.

Masalan ustozlar va o'quvchilar jadvalini bir sahifada tablar oqali chiqarishni ko'rsak: Platonda yangi sahifa ochiladi hamda quydagi tayyor komponentadan foydalanishimiz mumkin.

INFO

Sahifaning Html qismiga:html``<section class="w-100">
    <multi-table :titles="dataList"
                 :tables="dataTables"
                 main-table="edu-fields"
                 :control-buttons="true"
                 :use_external_buttons="false"
                 :show-header="true"
                 :sperateFilters="true"
                 :useExternalFilters="false">
    </multi-table>
</section>``
* Bu yerda:
* `dataList` Tablardagi jadvallar sarlafhasi
* `dataTables` Jadvallar listi

INFOjs``    {
    data(){
        return{
            dataList:['Utsozlar', 'Talabalar' ],
            dataTables:['teachers' , 'students']
        }
    }
}``


---
## Bo'lim: EXAMPLES > FORM (uz/examples/form.html)

# Formalar ​

Platon platformasidagi ma'lumotlar bilan ishlash uchun qo'llaniladigan Formalar qo'llanmasi.

## Asosiy ma'lumotlar ​

Formalar bo'limining asosiy funksionali web-sahifa foydalanuvchilari tomonidan ma'lumotlar kiritilishi uchun mo'ljallangan oyna shaklini yasash hisoblanadi. Batafsil ->

## Bo'lim tuzilishi ​

### Form yaratish ​

Forma yaratish uchun Platon platformasi navigatsiya panelining Formalar bo'limiga o'tiladi. Ushbu ochilgan sahifada Platon platformasida ilgari ochilgan formalar ro'yxati aks etadi. Ushbu sahifa pastgi qismida joylashgan `Qo'shish` tugmasi bosiladi va quyidagi oyna ("forma") ochiladi: 



#### Forma yaratishda inputlar type va vazifasi: ​
* name: text formatdagi qiymatlarni qabul qiladi va bu formani nomi hisoblanadi. Unda probel bo`lmasligi kerak.
* source_table_name: formaga to`ldirilgan ma'lumot databasedagi qaysi tablega yozishini aytish kerak.
* data_source: forma qaysi databasega borib saqlashi kerak ma'lumotni (PROJECT,PLATON,CLICKHOUSE).
* sequence_name: forma bazadagi tablega qaysi sequens bilan insert qilishini aytish kerak.
* data_filter: formadagi ma'lumotlarga filter qo'yish uchun foydalaniladi;text``data_type = #data_type
type_id = 1``
* unique_fields: ushbu funksional ma'lumotlar bazasidagi `column` unique bo`lishini taminlaydi;text``username``
* focused_field_name: formaga kirganda qaysi column focusda turishini belgilaydi. Bu yerga forma elementlarini data_field qiymati yoziladi va faqat 1ta element focusda bo`lishi mumkin;text``name ✅
name,username ❌``
* grid_offset: formaning ikki tomonidan joy tashlab berish uchun xizmat qiladi;
* group_by: forma qaysi guruhga mansub ekanini bildiradi;
* next_link: forma to'ldirilib, saqlash tugmasi bosilganidan so'ng ochilishi lozim bo'lgan sahifa manzilini yozish uchun foydalaniladi. Saqlashdan so'ng modal yoki blank oyna yopilishi uchun `back` nomli maxsus `url` dan foydalaniladi;
* public: formaga Authorization mavjud bo'lmaganda ham kirish mumkin bo'ladi. Public qilingan formalarda `$user` userParams dan foydalanish mumkin emas;
* add_title: ushbu forma web-sahifasi manzili (https) qismining sarlavhasini yozish uchun foydalaniladi;
* edit_title: tahrirlash sarlavhasini nomlash uchun ishlatiladi;
* add_header: ushbu forma sarlavhasini yozish uchun foydalaniladi;
* edit_header: ushbu forma sarlavhasini taxrirlash uchun foydalaniladi;
* default_sql: forma saqlaganda doimiy saqlashi kerak bo'lgan qiymatlarni shu qismda aytib ketish kerak;sql``select #type_id as type_id, --forma ochilganda paramdagi type_id ni bazaga ham saqlab ketish kerak
       #parent_id as parent_id, 
       1 as category_id``
* params_sql: paramsdagi o`zgaruvchilarni saqlab turish uchun. Bu sql faqat select uchun;sql``SELECT $user.locale as locale, 
       $user.id as moderator_user_id, 
       to_char(now(),'yyyy-mm-dd hh24:mm') as moderator_view_date , 
       'ACTIVE' as status_moderator``
* before_add_sql: forma yangi ma'lumot qo'shishdan oldin bajariladigan sql. Unda `update` va `insert` querylar yozish mumkin. Bir nechta querylarni ham `;` bilan ajratib yozish mumkin.`@{data_field}` belgisi orqali forma element qiymatlarini olish mumkin faqat;sql``update ob_ads_moderators m
set state=0
from ob_ads ads
where ads.id = #id 
and m.ads_id = ads.id 
and ads.status != @status::ads_status;

insert into ob_ads_moderators(created_by,
                              ads_id,
                              moderator_conclusion_id,
                              moderator_conclusion_note,
                              moderator_view_date,
                              moderator_user_id,
                              moderator_status)
select $user.id::bigint,
       id,
       (attributes ->> 'moderator_conclusion_id')::bigint,
       (attributes ->> 'moderator_conclusion_note')::varchar,
       now(),
       $user.id::bigint,
       @status::ads_status
from ob_ads
where id = #id 
and status != @status::ads_status;``
* after_add_sql: forma yangi ma'lumot qo'shishdan keyin bajariladigan sql. Ishlash prinsipi `before_add_sql` kabi;
* before_edit_sql: formadagi ma'lumot yangilanishdan oldin bajariladigan sql. Ishlash prinsipi `before_add_sql` kabi;
* after_add_sql: formadagi ma'lumot yangilangandan keyin bajariladigan sql. Ishlash prinsipi `before_add_sql` kabi;
* Js: formadagi elementlar ustida custom js codelari;
* css: forma elementlariga custom css codelari yozish uchun;
* visibility: forma permissionlari qanday userlar formani ko`rishi mumkin ekanini belgilanadi;text``$user.has_perm('moderator.user') && $user.has_perm('hy.admin')``
* can_create_condition: forma orqali qanday userlar malumot saqlashi mumkin ekani belgilanadi;text`` $user.has_perm('hy.admin') || $user.has_perm('platon.admin')``
* can_edit_condition: forma orqali qanday userlar malumotlarni o'zgartirishi mumkin ekani belgilanadi. Ishlash prinsipi `can_create_condition` kabi;
* can_delete_condition: forma orqali qanday userlar malumotni o'chirishi mumkin ekani belgilanadi. Ishlash prinsipi `can_create_condition` kabi;

### FormElements ​

Forma yaratib olinganidan so'ng quyidagi oyna paydo bo'ladi:

 Ushbu oynada quyidagi tugmalar mavjud:
* Foydalanuvchilar uchun 
* Saqlash: Ushbu tugmani bosish orqali formaga kirilgan ma'lumotlar saqlanadi.
* Chiqish: Ushbu tugmani bosish orqali forma shaklidan chiqib ketiladi.
* Dasturchilar uchun: 
* Oynani sozlash: Ushbu tugmadan formaga o'zgartirishlar kiritish uchun foydalaniladi.
* Yangi element qo'shish: Ushbu tugmadan formaga yangi elementlar (foydalanuvchi tomonidan ma'lumotlar kiritishga mo'ljallangan yacheykalar) qo'shish uchun foydalaniladi
* Elementlar ro'yxati: Ushbu tugmani bosish orqali forma sahifasidagi barcha elementlar ro'yxatini ko'rish mimkin.

### Yangi element qo'shish ​

Ushbu tugmadan formaga yangi elementlar (foydalanuvchi tomonidan ma'lumotlar kiritishga mo'ljallangan yacheykalar) qo'shish uchun foydalaniladi. Ushbu tugma bosilganida quyidagi oyna ochiladi:  Oyna quyidagi yacheykalardan iborat:
* `form`: formaning nomi (shuningdek, forma URLda ham shu nom bilan joylashadi);
* `type`: element funksiyasi yoki turi bo'lib quyidagilardan iborat: 
* a) fieldset - elementlarni joylashtirish uchun yangi maydon shakllantirib beradi;
* b) text - tekst kiritish uchun input yaratadi;
* c) raw_json - faqat json turidagi ma'lumotlarni qabul qilish uchun ishlatiladi;
* d) number - son (natural son) kiritish uchun input yaratadi;
* e) file - fayllar qabul qilish uchun input yaratadi;
* f) image - rasmlar qabul qilish uchun input yaratadi;
* g) button - turli xil so'rovlarni yuborish uchun tugma yaratadi;
* h) date - sanalarni qabul qilish uchun input yaratadi;
* i) select - bir nechta ma'lumotlardan birini tanlash imkoniyatini beruvchi input yaratadi;
* j) time - vaqtni qabul qilish uchun input yaratadi;
* k) multiselect - bir nechta ma'lumotlarni tanlash imkoniyatini beruvchi input yaratadi;
* l) checkbox - boolean turidagi ma'lumot qaytaradigan element yaratadi;
* m) textarea - katta hajmdagi tekstlarni kiritish uchun input yaratadi(description uchun);
* p) code - turli xil dasturlash tilidagi kodni saqlash imkoniyatini beradi (js, html, css, sql)
* r) html - bu orqali hohlagan API ga so'rov yuborish va hohlagan ko'rinishdagi dizayn yaratish mumkin;
* s) geo - ushbu element turi bo'yicha geopozitsiyani kiritish imkoniyati mavjud (map_center, map_zoom). Bunda qaysi karta orqali tanlashni active_map maydonida ko'rsatib ketiladi;
* t) geo polygon - ushbu elementda turi bo'yicha bir nechta geopozitsiyani kiritish imkoniyati mavjud ( map_center, map_zoom, is). Bunda qaysi karta orqali tanlashni active_map maydonida ko'rsatib ketiladi. Bundan tashqari bir nechta geopozitsiyalarni kiritish uchun is_multiple tugmasi active holatga keltiriladi;
* u) simple key-vale - unikal qiymatlarni shakllantirish uchun qo'llaniladi;
* v) tab - turli xil ma'lumotlarni sahifaviy joylashtirish uchun ishlatiladi;
* w) tab container - sahifaviy joylashtirilgan ma'lumotlarni ma'lum bir ko'rinishda jamlash;
* x) markdown editor, monaco_editor, vue_editor, wysiwyg - kontentlarni tahrirlash;
* `data_field`: ustunning ichki nomi. SQL so'rovlarida ushbu ichki kod nomi yoziladi;
* `parent`: boshqa elementlarni o'z ichiga oluvchi bosh element;
* `sort_order`: elementning forma sahifasidagi joylashgan o'rni (kichik raqamli elementlar sahifaning oldingi qismida, katta raqamli elementlar sahifaning keyingi qismida joylashadi);
* `default_value`: forma shakllantirish jarayonida ushbu element uchun default qiymat berish u/n ishlatiladi. Bu yerda shartga ko'ra qiymat olish mumkin va h.k;
* `width`: ushbu yacheykaga ustun kengligi yoziladi;
* `sql`: ushbu yacheyka SQL so'rovlari yozish uchun mo'ljallangan;
* `validation_sql`: inputdagi ma'lumotlarni validatsiya qilish. Yani bu yerda shart yoziladi va agar shu shartga to'g'ri kelmasa post bo'lmaydi masalan:sql``SELECT
 not EXISTS (SELECT 1 FROM table_name WHERE name = @name)
--Bu yerda agar kiritilayotgan name aval kiritlgan bo'lsa xatolik qaytaradi!``
* `is_attribute`: ushbu svitchdan ma'lumotlar bazasi 'attributes' ustuniga ma'lumotlar kiritish uchun foydalaniladi;
* `is_required svitchi`: ushbu svitch element yacheykasiga ma'lumotni kirgizmasdan turib saqlash imkonini bermaslik uchun foydalaniladi (yani ushbu svitch yoqilsa foydalanuvchi element yacheykasiga ma'lumot kirgizish shart hisoblanadi);
* `is_read_only svitchi`: ushbu svitch yoqilsa foydalanuvchi elementdagi ma'lumotlarni faqat o'qish imkoniga ega bo'ladi;
* `is_disabled: svitchi`: inputga kiritilgan ma'lumotni bazaga saqlamaslik imkoniyatini beradi;
* `label`: element yacheykasining sarlavhasini yozish uchun foydalaniladi;
* `hint`: elementga kiritiladigan ma'lumotlar bo'yicha yordamchi so'z yozish uchun foydalaniladi;
* `placeholder`: element yacheykasiga yozuv kiritilish uchun foydalaniladi (foydalanuvchi tomonidan yacheykaga ma'lumot kiritilganida ushbu yozuv o'chib ketadi);
* `visibility`: ushbu yacheykaga yaratilayotgan jadvalni ko'rish huquqiga ega bo'lgan foydalanuvchilar kiritiladi;
* `render_condition`: Forma elementlarining kiritilganligiga qarab boshqa elementlarni ko'rinishi yoki ko'rinmasligini hal qiladi. Agar render_condition maydoniga qiymat yozilsa, ma'lumotlar bazasida kiritilgan ma'lumotni saqlaydi. Aks holda ma'lumotlar bazasida null qiymatni saqlaydi;
* `style`: css kod yozish uchun mo'ljallangan
* `class`: element xususiyatlarini (rangi va boshqa) shakllantiruvchi kodlar yozish uchun foydalaniladi;

### FormJS ​

Qo'shimcha

Platon formalarning JS qismiga JavaScript ES6 kodlari yoziladi vue emas
* beforeSave: Ushbu funktsiya formadagi malumotlar saqlanishidan oldin ishladi. Odatda saqlashdan oldin inputlardagi ma'lumotlarni tekshirish , validatsiya qilish va boshqa turlixil maqsadlarda ishlatiladi. Masalan:js``this.beforeSave = () => {
    // javascript codlar
    // ushbu funkisya ichidagam fetch apilarni o'zimiz hohlaganimizdak ishlatishimiz mumkin. Masalan:
    // this.$api.get('api-url').then(res=>{})
    return true
}``

Diqqat

Agar beforeSave da `return: false` qaytsa formadagi ma'lumotlar saqlanmaydi.
* afterSave: Ushbu funksiya yuqoridagi beforeSave singari ishlaydi faqat formadagi ma'lumotlar saqlanganidan so'ng ishlaydi.js``this.afterSave = (id) => {
    // bu yerda ham biz JavaScript kodlarimizni yozishimiz mumkin .
    // `id` bu forma saqlangandagi malumotlar bazasiga tushgana qaytgan id
}``
* setVal: Ushbu metod platon formadagi inputlarga default ma'lumot yoki boshqa holatlarda ma'lumotlar yozish uchun ishlatiladi. Masalan:text``$setVal('Data_field' , 'value')
// Data_field qaysi inputga ma'lumot yozishi kerakligi
// value  yozilishi kerak bo'lgan ma'lumot``
* 

toast: Toastlar bu platonning custom Toastlari(ogoxlaruvlari)dir. Platonda ikki xil toast mavjud boo'lib (shaxsiy toastlariniham yasash mumkin!) `this.errorToast('Ogoxlantiruv habari')` yoki `this.$platonApp.errorToast('error')` Error yani qizil rangadi ogoxlantiruv. `this.greenToast('Ogoxlantiruv habari')` yoki `this.$platonApp.greenToast('success')` Green yani yashil rangadi ogoxlantiruv.


* 

$w: $w orqali Platon formadagi inputlarning o'zgarishini ushlab olishimiz mumkin. Masalan `username` `Data_field` inputini o'zgarganida qandaydir funktsiyani avtomatik ishlatmoqchi bo'lsak.js``const testFunc = () => {
    // odatiy JavaScript funktsiyasi
}
$w('username', testFunc);``js``$w('username', (val) => {
    test(val)
})

function test(a) {
    console.log(a)
}``
* $form.q: forma linkidagi o`zgaruvchilarni qiymatini olish uchun ishlatiladi;js``let user_id = $form.q('user_id')``
* $form.params: formadagi `params_sql` orqali olib kelingan qiymatlarni js ni ichida ishlatish uchun;text``$form.params.{{variable_name}}``
* $data: forma tahrirlash uchun ochilganda formaga keladigan elementlar qiymatlarini ushlash uchun ishlatiladi;text``$data.{{data_field}} // forma elementini dataField qiymati yoziladi;``
* this.$router.apps[0].navigateTo(): bu orqali hozir ochilib turgan formani boshqasi bilan almashtirish mumkin. Misol uchun formani save qilgandan keyin orqasidan boshqa forma ochilishi kerak bo'lsa afterSave function ichida yozilsa forma saqlangandan keyin boshqa formani ochadi;text``this.$router.apps[0].navigateTo(`forms/checkpone?_target=modal_40`)``
* Events: this.$onEvent() va this.$sendEvent() eventlarni almashish uchun functionlar 
* `this.$sendEvent()`: o'zgarishni yuborish uchun ishlatiladi;
* `this.$onEvent()`: o'zgarishni ushlab olish uchun ishlatiladjs`` this.$sendEvent('SAVE', id)
// buyerda forma save bo`lganligi va uni idsi event sifatida yuborilyapdi
this.$onEvent('SAVE', saveFunction)

function saveFunction(id) {
    console.log(save)
}

this.$onEvent('SAVE', (el) => {
    saveFunction(el)
})``
* $option(): formadagi `Select` typedagi elementlarni sql qiymatlarini olish mumkin.text``$option('dataField').{variableName}``
* form element hide va show: forma elementlarini js orqali canditionga qarab ko'rsatish yoki ko'rsatmaslik mumkin;js``$('.street_id').hide();
$('.street_id').show();
// buyerda .street_id forma elementi dataFieldi``
* $setAttr(): bu function forma elementi type select bo'lganda tanlash uchun chiqadigan datani set qilish uchun ishlatiladi. Misol uchun integratsiya orqali tanlanadigan qiymatlar o'zgarishi mumkin bo'lsa api orqali data olinib `$setAttr()` orqali set qilinadi;js``$api.get('path')
    .then(res => {
        $setAttr('street_id', 'data', data);
        $setAttr('element dataField',
            'bu elementni datasiga set qilish kerakligini anglatadi',
            'apidan olingan data array [{},{}]');
    })``
* $form.formElementsWithKey.DataField.{variable name}: foma elementlarini qiymatlari o`zgartirish uchun ishlatiladi;js``$form.formElementsWithKey.sold_amount.maxValue = params.left_amount
$form.formElementsWithKey.final_sum.maxValue = 50000000

function setLanguageFlags() {
    $form.formElementsWithKey['name'].label = $form.params.sale_type + ' ' + $form.formElementsWithKey['name'].label + ' ' + getFlagEmoji('uz') + ':';
    $form.formElementsWithKey['name_copy'].label = $form.params.sale_type + ' ' + $form.formElementsWithKey['name_copy'].label + ' ' + getFlagEmoji('uz') + ':';
    $form.formElementsWithKey['description'].label = $form.params.sale_type + ' ' + $form.formElementsWithKey['description'].label + ' ' + getFlagEmoji('uz') + ':';
    $form.formElementsWithKey['description_copy'].label = $form.params.sale_type + ' ' + $form.formElementsWithKey['description_copy'].label + ' ' + getFlagEmoji('uz') + ':';
    $form.formElementsWithKey['name_ru'].label = $form.params.sale_type + ' ' + $form.formElementsWithKey['name_ru'].label + ' ' + getFlagEmoji('ru') + ':';
    $form.formElementsWithKey['name_ru_copy'].label = $form.params.sale_type + ' ' + $form.formElementsWithKey['name_ru_copy'].label + ' ' + getFlagEmoji('ru') + ':';
    $form.formElementsWithKey['description_ru'].label = $form.params.sale_type + ' ' + $form.formElementsWithKey['description_ru'].label + ' ' + getFlagEmoji('ru') + ':';
    $form.formElementsWithKey['description_ru_copy'].label = $form.params.sale_type + ' ' + $form.formElementsWithKey['description_ru_copy'].label + ' ' + getFlagEmoji('ru') + ':';
}

function getFlagEmoji(countryCode) {
    let codePoints = countryCode.toUpperCase().split('').map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}``
* this.$user: bu function orqali kirib turgan user ma`lumotlarini olish mumkin.text``this.$user.{variableName}``
* this.$api.method(get,post,put,patch,delete): Apilar bilan ishlash uchun maxsus functionlar;js``this.$api.post(`path`, {data})
this.$api.put(`path`, {'Authorization': 'basic'}, {data})
this.$api.get(`path`)
this.$api.delete(`path`)``

Ma'lumot

Qolgan holatlar uchun JavaScript ES6 barcha funcsiyalari ishlaydi


---
## Bo'lim: EXAMPLES > PAGE (uz/examples/page.html)

# Sahifalar ​

Platon Platformasida o'ziga xos dizaynda sahifa qo'shish bo'limi

## Sahifalar ​

Platon platformasining Sahifalar modulidan rejalashtirilayotgan web-sahifa sahifalarini tuzish yoki shakllantirish uchun foydalaniladi. Ushbu shakllantirilayotgan sahifani foydalanuvchi talablariga ko'ra moslashtirilishi imkoniyati mavjud.

### Sahifa yaratish ​

Sahifa yaratish uchun Platon platformasi navigatsiya panelining Sahifalar bo'limiga o'tiladi. Ushbu ochilgan sahifada Platon platformasida ilgari ochilgan sahifalar ro'yxati aks etadi.



Ushbu sahifa pastida joylashgan `Qo'shish` tugmasi bosiladi va quyidagi oyna forma ochiladi:



Ushbu oyna quyidagi maydonlardan iborat:
* name: sahifaning nomi (shuningdek, sahifani ochish uchun URL sifatida ham ishlatiladi);``pageName``
* data_source: sahifadagi aks ettiriladigan ma'lumotlar axborotlar bazasidan qaysi instrument (`sql, platon_api`) yordamida olib kelinishi belgilanadi. `data_source` selectidagi `sql` elementi tanlanganda quyidagi oyna ko'rinadi:



`data_source` selectidagi `platon_api` elementi tanlanganda quyidagi oyna ko'rinadi:


* state: sahifaning holatini (aktiv, yashirin va arxivlangan) belgilash uchun ishlatiladi;
* note: note ning vazifasi siz yozib qo'ygan izohni yoki eslatmani yozib qoyish uchun mo'ljallangan.
* title 1,2,3,4: sahifaning nomi (1-kiril alifbosi asosidagi o'zbek tili, 2-rus tili, 3-lotin alifbosi asosidagi o'zbek tili, 4-ingliz tili);
* is_public: ushbu svitch belgilanganida, yaratilayotgan sahifani avtorizasiyadan o'tmagan internet foydalanuvchilari ko'rish imkoniyatiga ega bo'ladi;
* vue_editor: ushbu svich yoqilganida `html`, `css` hamda `js` kodlarni birlashtiradigan quyidagi vue_code maydoni ochiladi:


* sql: uchbu maydonda Sql so'rovlari yozish uchun mo'ljallangan;
 Misol:js``[
    {
        "alias": "name",
        "sql_result_type": "list",
        "sql": "select * from table_name"
    }
]``
* content - ushbu maydonda HTML komponentlari yoziladi; Misol:html``<div>
  <p v-for="item in data">
    {{item.name1}}
  </p>
</div>``
* js - ushbu maydon Javascript (Vue 2 optional API) kodlarini yozish uchun mo'ljallangan;
 Misol:js``{
  data(){
    return { data: [] }
  },

  mounted() {
    this.$api.get('test/test_endpint').then(res => {
      this.data = res.data.data;
    });
  }
}``
* Tarjimalar - $l
 Platon sahifalarni ichida ham tarjimalar qismida kiritilgan ma'lumotlarni ishlatishishmiz mumkin. Agar HTML teglari ichida ishlatilsa:html``<p class='title'>
  {{ $l('test_lang' , 'Men Platon dasturchisiman')}}
</p>``

Agar JS qismida ishlatilsajs``this.$l('test_lang', 'Men Platon dasturchisiman')``
* $router , params Platon sahifalarda linkadgi , malumotlarni olishjs``data(){
    return { params: this.$route.query }
},
mounted() {
   console.log(this.params.search)
   // ushbu holatda paramsdagi search valuesini olib beradi
}``
* $sendEvent Ushbu metod Platon compnentalarga malumot yuborish uchun ishlatiladi. Va `onEvent` orqali tutib olamiz Masalan:js``this.$sendEvent('change', 3)``
* $onEvent Ushbu metod orqali Platon sahifadan `sendEvent` orqali yuborilgan ma'lumotni tutib olamiz.js``this.$onEvent('change' , this.event)
    methods:{
        event(e){
        console.log(e)
    }
}``
* css -ushbu maydon CSS kodlarini yozish uchun mo'ljallangan; Misol:css``class_name {
    height: 100%;
    line-height: 1;
    background: #fafafa;
    font-size: 14px;
    color: red;
    font-weight: 500;
    font-family: Montserrat;
}``

## Vue component yasash ​

Platondaham vuejs singari componentalarga ajratib ishlash imkoniyati yaratilgan Buning uchun esa quydagi sahifa yaratish bo'limidagi quydagi tugmani bosish yetarli



Va bu yerda komponentalar ro'yxatini ko'ramiz:



agar qo'shish tugmasini bosilsa quydagi oyna ochiladi:



Ushbu oynada
* Name - Komponenta nomi
* Сontent - Sahifalar singari VUE templeate
* JS - Vue js 2 optional API
* CSS - CSS stayllari yoziladi

Vue editor yoqilmagan holatda sahifa yaratishga namuna:


* SQL Bu yerda SQL doimiy talab qilingan yani required bo'lganligi va bizga hozirda zarur bo'lmaganligi uchun `[]` bo'sh array berlgisini qo'yib ketdik.
* Content Ushbu sahifasida HTML (VUE templeate yoziladi)html``<templeate>
  <div id="app">
  <b-container class="custom-container">
    <b-form @submit.prevent="addTask">
      <b-form-group label="Task" label-for="task-input">
        <b-form-input
          id="task-input"
          v-model="newTask"
          placeholder="Enter your task"
          class="custom-input"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" class="custom-btn">Add Task</b-button>
    </b-form>
  </b-container>
</div>
</templeate>``
* JS Ushbu sahifada VUE js optional api javascript kodlari yoziladijs``{
  data() {
   return {
      newTask: '',
      tasks: []
   }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push(this.newTask);
        this.newTask = '';
      }
    }
  }
}``
* CSS Ushbu sahifada esa css kodlar yoziladicss``.custom-container {
     margin-top: 50px;
     max-width: 400px;
     background-color: #f7f7f7;
     padding: 20px;
     border-radius: 10px;
     box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
   }
.custom-btn {
     width: 100%;
     background-color: #5cb85c;
     border: none;
   }
.custom-input {
     border-radius: 5px;
     padding: 10px;
   }
.todo-list {
     margin-top: 20px;
     list-style-type: none;
     padding-left: 0;
   }
.todo-item {
     padding: 10px;
     background-color: #ffffff;
     border-radius: 5px;
     box-shadow: 0 1px 3px rgba(0,0,0,0.1);
     margin-bottom: 10px;
   }``

Va natijani ko'radigan bo'lsak bizda ushbu sahifa paydo bo'ladi:



INFO

Qo'shimcha
 Biz sahifalarda boshqa library kutubhonalardan ham foydalanishimiz mumkin.


---
## Bo'lim: EXAMPLES > API (uz/examples/api.html)

# API ​

Platon Platformasini tashqi resurslar bilan bog'lash uchun chiqariluvchi API-lar to'plami bo'limi

## API ​

API abbreviaturasi "Application Programming Interface" so'zlarining bosh harflaridan olingan bo'lib, dasturlarni dasturlash interfeysi yoki dastularni dasturiy interfeysi deb tarjima qilinadi. Ko'plab kompaniyalar API'ni tayyor mahsulot sifatida taqdim etishadi. Masalan, Weather Underground metereologik ma'lumotlar olish uchun API sotadi. API so'rovga misol tariqasida quyidagi havolani ko'rib chiqamiz:js``http.get("https://e-auksion.uz/api/front/lots")

{
    "totalPages": 193,
    "totalRows": 1927,
    "currentPage": 1,
    "gaming_lots_cnt": 0,
    "rows": [
        {
            "id": 2070118,
            "lot_number": "2070118",
            "name": "Қурилиши тугалланмаган мактаб биноси",
            "full_address": "Ташкентская область, Янгиюльский район, Шўралисой КФЙ, Хўжаобод МФЙ",
            "confiscant_categories_name": "Здания с незавершенным строительством",
            "category_id": 4,
            "start_price": 1.80503E9,
            "zaklad_summa": 9.02515E7,
            "auction_date_str": "20.06.2022 10:00",
            "order_end_time_str": "20.06.2022 09:00",
            "zaklad_percent": 5.0,
        }]
}``

### API larni kiritishda amal qilinishi kerak bo'lgan parametrlar ​





API ni qo'shishda quyidagi maydonlar to'ldirilishi kerak:
* path - ushbu maydonda yaratilayotgan API ning nomi kiritiladi. Odatda API ning nomi quyidagi formatda yoziladi `v1/yatt/bank`, lekin bu ixtiyoriy ravishda yoziladi.
* method - API ning yaratilishida ko'zda tutilgan maqsadga asosan qabul qilish, uzatish va h.k metodlarni kiritish uchun mo'ljallangan (ular `GET`, `POST`, `PUT`, `PATCH`, `DELETE` kabilardir).
* auth_handler - API ning avtorizatsiyasi uchun mo'ljallangan maydon bo'lib, o'z ichiga ikki turdagi parametrni qamrab oladi. Bular `Bearer Token` (JWT token asosida yaratiladi) hamda `Basic Auth` (API ga so'rov berayotgan user ma'lumotlari aniqlanadi).
* state - Loyihalarga qo'shilgan va biriktirilgan API larning holatini nazorat qilish uchun mo'ljallangan. O'z ichiga `active`, `hidden`, `archived` kabi parametrlarni qamrab oladi.
* access_condition - kimlarga API ga kirishga ruhsat berilishini hal etadi.
* note - API yuzasidan qisqa izoh kiritilishi uchun mo'ljallangan.
* has_transaction - API da ko'zda tutilgan bir nechta parametrlarni tekshirish va xato yuzaga kelsa o'z o'rniga qaytarib qo'yish uchun mo'ljallangan.
* result_cached_seconds - API da qaytishi kerak bo'lgan ma'lumotlarni necha soniyada keshlanishini ko'rsatish uchun mo'ljallangan.
* group_by - API larni guruhlash uchun mo'ljallangan.



API ni loyihalarga qo'shishda method qo'llanilishi bir nechta turga ajratiladi. Bular:
* `GET` - ma'lumotlarni qabul qilish uchun mo'ljallangan API larni kiritish nazarda tutiladi.
* `POST` - loyihada qo'llanilgan ma'lum forma, menyu, sahifa va h.k larda e'lon qilish uchun mo'ljallangan API lar nazarda tutiladi.
* `PUT` - ma'lum bir funksiya yoki protsedura ichida ko'rinishi ko'zda tutilgan kodlarni kiritish uchun mo'ljallangan API larni ishlatish.
* `PATCH` - e'lon qilinmasdan kiritilishi ko'zda tutilgan va shu bilan birga yangilash harakati ko'zda tutilgan API lar uchun qo'l keladi.
* `DELETE` - Qo'llanilgan funksiyalar ichidagi protsesslarda o'chirilishi nazarda tutilgan amallar uchun foydalanish nazarda tutilgan.



Autentifikatsiya parametrini sozlash maqsadida auth_handler da variant tanlanadi. Bular:
* `Bearer Token` - foydalanuvchiga biriktirilgan token orqali autentifikatsiya qilish.
* `Basic Auth` - standart bo'yicha biriktirilgan tokenga asosan autentifikatsiya.



Loyihalarga qo'shilgan va biriktirilgan API larning holatini nazorat qilish uchun state maydonining ahamiyati muhim. Chunki uning belgilanganligiga asosan qo'shilgan API ko'rinishi, ko'rinmasligi yoki arxivlanishi mumkin. Uning elementlari quyidagilar:
* `active` - ushbu holatda API va uning tashkil etuvchilari funksional jihatdan, qayerda ishlatilgan bo'lsa, to'liq amalga oshiriladi.
* `hidden` - agar API ishlashi jihatidan kerak bo'lmasa, uni ushbu holat orqalik o'chirib qo'ysa bo'ladi.
* `archived` - ma'lum bir API ni arxivlash uchun qo'llaniladi.



Ma'lum bir API ga kimlarga ruhsat berishni hal etish uchun access_condition maydoni ishlatiladi.



Agar kiritilgan API ga qisqa tushuntirishlar zarur bo'lsa, u holda note maydoniga kerakli bo'lgan asosiy yoki qo'shimcha ma'lumotlar qo'lda kiritiladi.



API da ko'zda tutilgan bir nechta parametrlarni tekshirish va xato yuzaga kelsa o'z o'rniga qaytarib qo'yish mumkin. Buning uchun has_transaction tugmasi bosiladi. Bu asosan bir dona xatolik yuzaga kelsa ham, ma'lumotlarni saqlash uchun as qotadi.



API da qaytishi kerak bo'lgan ma'lumotlarni necha soniyada keshlanishini ko'rsatib o'tish uchun, result_cached_seconds maydonida soniyalar kiritiladi.



Agar mazkur API ni guruhlash kerak bo'lsa, group_by maydonida umumiy guruh nomi kiritib o'tiladi. API larni qanday yaratishni ko'rib chiqdik! Endi ularning tashkil etuvchilari, ya'ni stage larni ko'rib chiqamiz.

### Stage maydonlari ​

Quyidagi ketma-ketliklar orqali, yangi API stage qo'shish formasiga o'tiladi:






* alias - ushbu inputga stagelarining nomi yoziladi.
* handler - ushbu inputda stagening turi tanlanadi, ya’ni qanday turdagi ma'lumot uzatilishi yoki olinishi kerakligi belgilanadi. Ushbu tanlov selektida qanday turdagi ma'lumot tanlanganligiga qarab, modal oyna ham shakllantiriladi.
* parent - ushbu inputda stagelarni bir-biriga qaram qilib qo'yish mumkin, ya'ni bir stage ni ikkinchisiga bog'lab qo'yish imkoniyatini beradi.
* sort order - stagelarni tartiblash imkoniyatini beradi.
* state - stage ning holatini aks ettiradi. U o'z ichiga bir qator holatlarni qamrab oladi. Ular: 
* `archived` - faylni to'laligicha arxivga solish uchun
* `hidden` - foydalanmaslik uchun holatini noaktiv qilish uchun
* `active` - ishlatish uchun soz holatda ekanligini bildirish uchun
* note - description berish ya'ni statge yuzasidan qisqa ta'rifni kiritish uchun ishlatiladi. Bunda stage ning nima uchun mo'ljallangani hamda uning mohiyati haqida qisqacha ma'lumot kiritish tavsiya etiladi.
* access_condition - stagening qanday holatda ishlash shartini kiritish uchun mo'ljallangan
* serialize_result - ushbu input stagedagi ma'lumotlarni tashabbuskorga qaytarish yoki qaytarmasligini ifodalaydi.

### Stage ning turlari ​



HTTP Request Handler - bu tur tashqi API ga murojaat qilish uchun ishlatiladi. Bunda:
* method - request turi tanlanish imkoniyatini beradi (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).
* url - API ning manzilini ko'rsatish uchun mo'ljallangan.
* content_type - response turini ko'rsatish uchun mo'ljallangan (`application/json`, `text/plain`, `text/html`, `multipart/form-data`, `application/x-www-form-urlencoded`, `application/pdf`, `application/octet-stream`).
* body - agar malumotni post qilish kerak bo'lsa, ushbu ma’lumotni shu joyda bayon qilish mumkin.
* headers - auth ma'lumotlarini kiritish uchun mo'ljallangan maydon bo'lib o'z ichiga Key va Value ma'lumotlarini kiritish talab etiladi.



SQL Bulk insert - bu turda ko'plab ma'lumotlarni ya'ni ma'lumotlar listini saqlash imkoniyati mavjud. Bunda:
* sql - ushbu maydonda qaysi jadvalga va qaysi ustunga saqlashni ifodalash uchun postgre sql so'rovlar yoziladi.
* batch_data_source - ushbu stagega kelayotgan list nomi yoziladi `#list` kabi.



SQL insert - bu tur bitta objectni insert qilish uchun ishlatiladi. Bunda:
* sql - ushbu maydonda qaysi jadvalga va qaysi ustunga saqlashni ifodalash uchun postgresql so'rovlar yoziladi.
* returning_fields - insertdan keyin qaysi ustunidagi ma'lumotni qaytarishni yozib ko'rsatish uchun ishlatiladi.



SQL select - bu tur ma'lumotlarni o'qib olish uchun ishlatiladi. Bunda:
* sql - ushbu maydonda qaysi jadvalga va qaysi ustunga saqlashni ifodalash uchun posgresql so'rovlar yoziladi.
* result_type - ushbu selectda jadvaldan olingan ma'lumotni qanday korinishda kelishi kerakligini nazorat qilish mumkin.



static_json - bu tur asosan ikkita va undan ortiq stagedagi malumotlarni birlashtirish uchun ishlatiladi. Bunda:
* static-json – barcha json formatidagi ma'lumotlar shu yerda yig'iladi.



handler_group - ikki va undan ortiq stagega parent qilib olish va aynan shu stagega shart berish orqali qolganlarini boshqarish mumkin.



joinChildObject - API dagi Objectlar ichida object qurish.



JSEval - bu tur stage ning javascript va java orqali yaratilishi uchun ishlatiladi.



requestDataConvertor

WARNING

? please add info



stageDataConvertor - Stagelardagi ma'lumotlarni boshqa turga convert qilish uchun



Validation - bu tur tizimda qo'llanilishi mumkin bo'lgan validatsiyalar uchun ishlatiladi. Bunda apiga kerakli bo'lgan maydonni tizim ko'rsatmasa (bermasa), berishini sorab 500 xato qaytaradi. Bunda:
* Condition – validatsiya to'g'ri ishlashi uchun shart berish joyi.
* Error_massage – xato haqidagi batafsil ma'lumot kiritish joyi. Bunda xatoni bir nechta tilda kiritish imkoni mavjud.

## Quyida siz API'ning ishlash tartibini ko'rishingiz mumkin ​



## Stages ​

INFO

Platon apida stagelar orqali bita api da ko'plab stagelar yozishimiz mumkin, Handlerlar ketma ketligi orqali, yuqoridagi stage ma'lumotlari esa `:` orqali ushlanadi, parametrdagi ma'lumotlar esa `#` beligi orqali ushlanadi.

"API" ro'yxatga olinganidan so'ng uning bosqichlari stages kiritilishi kerak. Stage'lar bu APIga keluvchi so'rovlarning turlaridir. APIga keluvchi so'rovlar `GET`, `POST`, `PUT`, `PATCH`, `DELETE` ko'rinishiga ega bo'lishi mumkin.

Handler uchun ishlatiladigan so'rovlar quyidagilardan iborat:

`SQL Select` - bazadan ma'lumotlarni chaqirish uchun ishlatiladi `SQL Insert` - bazaga ma'lumotni kiritish uchun ishlatiladi `SQL Update` - bazadagi ma'lumotlarni o'zgartirish uchun ishlatiladi `SQL Bulk Insert` - bazadagi bir nechta ma'lumotlarni bir vaqtni o'zida kiritish uchun ishlatiladi `SQL Batch Update` - bazadagi bir nechta ma'lumotlarni bir vaqtni o'zida o'zgartirish uchun ishlatiladi `Handler group` - Stagelardagi ma'lumotlarni gruxlash `Static JSON` - Static ma'lumotlarni json shaklida yozish uchun `HTTP Request Handler` - API ichida boshqa API larga murojaat qilish uchun `Joined Child Object` - API dagi Objectlar ichida object qurish `Validation` - Validatsiya qo'yish `Stage Data Converter` - Stagelardagi ma'lumotlarni boshqa turga convert qilish uchun `Request Data Converter` - ???? `JS Eval` - API lar ichida JavaScript kodlar yozish uchun.

Handlerlarning ishlatilishiga namunalar:

Quydagi misollar test platonda cars jadvali ustida olib boriladigan ishlar uchun query na'munalar.
* SQL Selectslq``select id,
       car_name,
       car_brand
from cars
where state = 1``

Ushbu misolda cars jadvalidagi state = 1 bo'lgan barcha avtomobillar (list ko'rinishida) qaytadi.

Agarda parametr orqali qandaydir ma'lumot orqali querydagi ma'lumotlar saralansa ularni query ichida `#` belgisi orqali ushlaymiz.
* SQL Insertsql``insert into cars
    ( id ,
    car_name ,
    car_brand)
values
    (1::integer ,
    #car_name::varchar ,
    #car_brand::varchar)``
* SQL Updatesql``update cars
  set car_name = #car_name::varchar
where id = #id::integer``
* SQL Bulk Insert - SQL Bulk Insert orqali biz ma'lumotlar omboriga bir nechta ma'lumotlarni list ko'rinishida yuborish uchun ishlatamiz. Masalan, bizda cars nomi array bor va unda bir nechta avtomobillar post qilinadi.js``cars = [
  { id: 1, car_name: 'Model S', car_brand: 'Tesla' },
  { id: 2, car_name: 'Civic', car_brand: 'Honda' },
  { id: 3, car_name: 'Mustang', car_brand: 'Ford' },
  { id: 4, car_name: 'Corolla', car_brand: 'Toyota' },
  { id: 5, car_name: 'A4', car_brand: 'Audi' }
];``

Agarda biz yuqoridagi cars ga o'xshash list ni yuborish uchun aynan Bulk Insert ishlatamiz. Namuna:



Bu yerda batch_data_source ga kelayotgan array ni `#` belgisi orqali ushlab olamiz.

Queryda esa quydagicha yoziladi:sql``insert into cars
      ( id , car_name , car_brand)
values
      (@id ,
       @car_name ,
       @car_brand)``

array ichidagi ma'lumotlarni `@` belgisi orqali ushlaymiz.
* SQL Batch Update Bu yerda list ko'rinishidagi ma'lumotlar yangilanadi:



Querydagi yozilishi:sql``update cars
       set car_name = @car_name::varchar
where id = @id::integer``
* Handler group - Handler group orqali API lardagi stagelarni guruxlashimiz mumkin, Masalan, APIlarda quydagi stagelar mavjud dep hisoblasak:



va bizda qaysidur APIlarni guruxlash kerak bo'lsa Handler groupdan foydalanamiz.
* Static JSON - Static Json orqali API ga mur'ojaat qilinganda statik bo'lgan ma'lumotlarni json shaklida yoziladi. Masalan:

 )json``{
  "id":1,
  "name":"test"
}``

Va natija PostMan orqali olinganda quydagi natijani olishimiz mumkin.


* HTTP Request Handler - Bu orqali tashqi va boshqa API larga murojaat amalga ochiriladi murojaat qilinadi.


* URL - Murojat qilinishi kerek bo'lgan API URLi. Headersga yuborilayotgan APIning headersda bermoqchi bo'lgan narsalar yoziladi.
* Joined Child Object - Ushbu handler orqali biz API lardan qaytayotgan Objectlar ichida child objectlar qurishimiz mumkin Masalan, bizda API dan quydagi ko'rinishda ma'lumot keladi:json``[
        {
            "id": "1",
            "status": 1,
            "car_type": 1,
            "car_name": "BMW X5",
            "car_brand": "BMW"
        },
        {
            "id": "2",
            "status": 1,
            "car_type": 1,
            "car_name": "NEXIA 3",
            "car_brand": "GM-Uzbekistan"
        }
]``

Va ushbu holatdagi so'rov esa yuqorida ko'rsatilganidek oddiy select yozilgan:



SQL query esa quyidagicha :sql``select id,
       status,
       car_type,
       car_name,
       car_brand
from cars
where state = 1``

Endi bizga agarda ma'lumotlar boshqa ko'rinishida kerak bo'lsa yani ichma-ich objectlar orqali kerak bo'lsa u holda Joined Child Object oraqli qilamiz, yani:json``[
        {
            "id": "1",
            "status": 1,
            "car": {
                "name": "BMW X5",
                "type": 1,
                "brand": "BMW"
            }
        },
        {
            "id": "2",
            "status": 1,
            "car": {
                "name": "NEXIA 3",
                "type": 2,
                "brand": "GM-Uzbekistan"
            }
        }
]``

Ko'rinishida kerak bo'lsa


* Alias - Bu yerda object ichidagi child object nomi
* Parent - Qaysi stagedan ma'lumotlar olishi
* Join_prefix - Nima bo'yicha saralab ajratib olishi
* Validation - Validation orqali kelayotgan ma'lumotlarni tekshirishimiz va xato qaytarishimiz mumkin.


* condition orqali shartlarni tekshiriladi
* error_message1 orqali xato qaytganda yuboriluvchi tekst larni yozamiz
* Stage Data Converter Ushbu stage orqali biz boshqa stage ma'lumotlarni convert qilishimiz mumkin.


* Converter ushbu maydonda ma'lumotlarni qaysi turdan qaysi turga conver qilishni tanlanadi.
* Parent ushbu maydon qaysi stagedan ma'lumotlarni olish kerakligi yani ota stage
* Property_name ushbu maydonda qaysi ma'lumotlarni qayta ishlash kerakligini belgilaymiz.
* Request Data Converter
* JS Eval - JS eval orqali API lar ichida JavaScript kodlar yoziladi.



APIda mavjud bosqichlarning ro'yxati APIning havolasiga bosilganda chiqadi



APIga yangi bosqich qo'shish uchun `Qo'shish` tugmasini bosing va kerakli ma'lumotlarni to'ldiring:
* Bosqich aliasi yani nomlanishi - 1
* Bosqichning turi SQL so'rov, tashqi HTTP so'rov va hokazolar - 2
* Bosqichning so'rov kodi - 3 Barcha ma'lumotlarni kiritgach saqlash - 4 tugmasini bosing



WARNING

E'tibor qarating har bir bosqich turi uchun (Stage handler) o'zgacha qo'shimcha ma'lumotlar qismi mavjud

### HTTP Request handler stage ​

API ning ushbu bosqich turida tashqi serverda joylashgan manbaadan api so'rov orqali ma'lumot yuklash uchun foydalaniladi. Qo'shimcha CORS xatoligi (Cross-Origin Resource Sharing)ni oldini olish uchun Request handler bosqichidan foydalaniladi. Misol tariqasida tashqi serverdagi manbaga api so'rov yuboramiz Rasmda:
* Bosqich turi HTTP Request handler - 1
* Bosqichning qaysi tashqi APIga murojaat qilish turi va havolasi - 2
* Bosqichning tashqi API jo'natilayotgan ma'lumot formati - 3
* Bosqichning tashqi API jo'natilayotgan body qismi - 4
* Bosqichning tashqi API jo'natilayotgan header qismi - 5


---
## Bo'lim: EXAMPLES > JS-EVAL (uz/examples/js-eval.html)

# JSEval ​

Oxirgi yangilanishda o‘zingizning kodingizni ishlab chiqish, qo‘llab-quvvatlash va sinab ko‘rishga yordam beradigan yangi redaktor qo‘shdik. Redaktor VS Code da faol foydalaniladigan, Microsoft ning progressiv redaktoridagi MonacoEditor bazasida ishlaydi va ushbu redaktorda qo‘llab-quvvatlanadigan barcha funksionallar va instrumentlardan foydalanish imkonini beradi. Shuningdek, yangi ishlab chiqish muhitiga ES6/7/8(https://www.codingame.com/playgrounds/3629/5-features-of-es-6-7-8-that-supercharge-your-javascript) versiyalari sintaksisini qo‘llab-quvvatlash, kodni testdan o‘tkazish va sozlash uchun qulay konsol qo‘shilgan.
* JsEval da berilgan imkoniyatlar: 
* Variables
* JSON
* CONSOLE
* Throws
* HTTP
* UTIL
* JDBS
* REDIS
* FILE
* JWT
* UserActions

Shaklning tayanch (bazoviy) elementi ikki qismga bo‘lingan:

Kodni ko‘rish – bu blokda redaktorda yozilgan kodingizning bir qismi ko‘rinadi Redaktorni chaqirish uchun faol tugma



Shaklning (formaning) asosiy elementi Redaktorning interfeysining o‘zi 3 ta panelga bo‘lingan ish maydonidan iborat. Yuqori chap panelda (1) kod redaktori joylashgan, uning o‘ng tomonida test uchun redaktor (4) va oynaning pastki qismidagi konsol (7) joylashgan.



Redaktor interfeysi Kod redaktori - VS Code ning asosiy (bazoviy) funksionalini qo‘llab-quvvatlaydi. Saqlash [Ctrl+S] - redaktordagi ma’lumotlarni shaklda (formada) saqlaydi. Saqlash va chiqish - redaktordagi ma’lumotlarni shaklda (formada) saqlaydi va ishlab chiqish muhitini yopadi. Testlar redaktori – kodga testlar yozish oynasi. Testlarni ishga tushirish [Alt+Enter] – testlarni ishga tushiradi va uning natijalarini konsolga chiqaradi. Chiqish [Esc] – ishchi oynani yopadi. Konsol - xatolar haqidagi xizmat xabarlarni, interfeys loglaridagi Console (log, warning, error) va testlarni bajarish natijalarini ko‘rsatish oynasi. Konsolni tozalash [Ctrl+L] - konsoldagi ma’lumotlarni tozalaydi.

## Variables ​
* requestParams
* userParams
* variables.{satageName}

## JSON ​

JS Evalda mavjud eng muhim imkoniyatlardan biri bu API so'rovdan kelgan manbaalarni ustida JSON metodlari orqali ishlashdir. Misol uchun API so'rovdan kelgan "string" ma'lumotlarni JavaScript obyektiga o'tkazish, yoki API so'rovdan kelgan "obyekt" ma'lumotlarni "string" ko'rinishiga o'girish vazifalari bajariladi.
* `parse()`: Bu serverdan parametr sifatida JSON ma'lumotini oladi va JavaScript obyektini qaytaradi.js``const txt = '{"name":"John", "age":30, "city":"New York"}'
const obj = JSON.parse(txt);

// va biz "obj" o'zgaruvchanini ushbu ko'rinishda olamiz:

// obj = {
//    age: 30,
//    city: "New York",
//    name: "John"
// }``
* `stringify()`: Bu parametr sifatida "obyektni" oladi va ekvivalent JSON stringini serverga jo'natish uchun tayyor holda qaytaradi.js``const obj = {
    age: 35,
    city: "New Orlean",
    name: "Samwell"
}
const str = JSON.stringify(obj);

// va biz "str" o'zgaruvchini JSON shaklida serverga jo'natish uchun ushbu ko'rinishda olamiz:

// {"name":"John","age":30,"city":"New York"}``

## CONSOLE ​

JS Evalda biz consolening eng asosiy va eng ko'p ishlatiladigan metodlarini biriktirganmiz. Kod ishlashini kuzatish, natijalarni ko'rish va error xatoliklarni aniqlash uchun JS Eval consolidan foydalanilsa bo'ladi.

Rasmda ko'rsatilganidek, console JS Eval editorining pastgi qismida joylashgan va 2 ta tugmadan iborat:
* "Console"ga o'tish tugmasi - 1
* "Console"ni tozalash tugmasi - 2



Keling mavjud console metodlar bilan birin ketin tanishib chiqamiz:
* `console.log()` - xabarni oladi va natijani consolga chiqaradi. Shuningdek, u JavaScript obyektlarini, massivlarni - JavaScript-dagi barcha ma'lumotlar turlarini chiqarishi mumkin. Bundan tashqari, u chiqazilayotgan xabarlar ko'rinishini tushunarli tarzga keltirib beradi.js``console.log("Hello World"); // String
console.log({name: "Sam Simon", age: 43,}); // Object
console.log(["Apple", "Banana", "Orange"]); // Array``


* `console.error()` - console.log() buyrug'i barcha ma'lumotlarni chiqazuvchi buyruq bo'lishini ko'rib chiqdik, shundan kelib chiqib aytish mumkinki console.error() ham console.log() buyrug'iga juda o'xshash bo'lib xatoliklarni o' zinigina chiqazib beradi.js``console.error("Something is wrong");
console.error("Xatolikni o'zingiz hohlaganday xabar bilan chiqarish");``


* `console.warn()` - ushbu console buyrug'i ham huddi console.log() buyrug'iga o'xshash bo'lib eslatma va tafsiyalarni chiqarish uchun ko'pincha ishlatilinadi. Shuningdek, warn() buyrug'i xatosiz ammo noto'g'ri yozilgan kodlarni belgilash uchun ham ishlatiladi.js``console.warn("Some warning");
console.warn("Ushbu bo'limda o'zingiz hohlagan eslatma habarlarni chiqarishingiz mumkin");``



## THROWS ​

JSEval functionni bo`lib kutilgan errorlarni http status orqali throw otish uchun kerak bo'ladi. Misol uchun JsEval orqali requestParamdan kirib kelgan qiymatlarni validatsiya qilish mumkin.js``const _name = requestParams.name;  // required  type: varchar
const category_id = requestParams.category_id;  // required  type: bigint
const main_photo = requestParams.main_photo;   // required  type: varchar
const description = requestParams.description;  // required  type: varchar

if (!_name) throws.responseException('BAD_REQUEST', 'name is required')
if (typeof _name != 'string') throws.responseException('BAD_REQUEST', 'name must be string')
if (_name.length > 255) throws.responseException('PAYLOAD_TOO_LARGE', 'name limit is 255')

if (!category_id) throws.responseException('BAD_REQUEST', 'category_id is required')
if (typeof category_id != 'number') throws.responseException('BAD_REQUEST', 'category_id must be number')
if (category_id < 0) throws.responseException('PAYLOAD_TOO_LARGE', 'category_id must be positive number')


if (!main_photo) throws.responseException('BAD_REQUEST', 'main_photo is required')
if (typeof main_photo != 'string') throws.responseException('BAD_REQUEST', 'main_photo must be string')
if (main_photo.length > 255) throws.responseException('PAYLOAD_TOO_LARGE', 'main_photo limit is 255')

if (typeof description != 'string') throws.responseException('BAD_REQUEST', 'description must be string')
if (description.length > 255) throws.responseException('PAYLOAD_TOO_LARGE', 'description limit is 255')``js``throws.responseException(HTTP STATUS,TROWS MESSAGE)``
* HTTP STATUS- http statuslari
* TROWS MESSAGE - biz qaytarmoqchi bo`lgan istalgan yozuv text.

### HTTP STATUSLAR ​js``CONTINUE(100, "Continue"),
    // Hamma so'rovlar joyida ekanligi va davom ettirish mumkinligini bildirib turuvchi kod

SWITCHING_PROTOCOLS(101, "Switching Protocols"),
    // Ushbu kod Upgrade: sarlavhasini mavjud so'roviga yuboriladi va server sarlavhada ko'rsatilgan protokolga o'tganligini bildiradi.

PROCESSING(102, "Processing"),
    // "Ish olib borilmoqda". Ushbu kod server so'rovni qabul qilganligini va uni ustida ishlash hali tugallanmaganligini bildiradi.

CHECKPOINT(103, "Checkpoint"),
    //

OK(200, "OK"),
    // "Muvaffaqiyatli". So‘rov muvaffaqiyatli bajarildi.

CREATED(201, "Created"),
    // "Yaratildi". So‘rov muvaffaqiyatli bajarildi va natijada resurs yaratildi. Ushbu kod odatda PUT so'roviga javob sifatida yuboriladi.

ACCEPTED(202, "Accepted"),
    // "Qabul qildi". So'rov qabul qilindi, lekin hali ko'rib chiqilmagan holatda keluvchi kod.

NON_AUTHORITATIVE_INFORMATION(203, "Non-Authoritative Information"),
    // "Ma'lumotlar ishonchli emas." Bu kod qaytarilgan ma'lumot asl server tomonidan emas, balki boshqa manbadan olinganligini bildiradi.

NO_CONTENT(204, "No Content"),
    // "Kontent mavjud emas." So'rovga javob beradigan kontent yo'q, ammo foydali bo'lishi mumkin bo'lgan javob sarlavhalari yuboriladi.

RESET_CONTENT(205, "Reset Content"),
    // "Kontentni qayta yuklash". Ushbu kod so'rov yuborilgan hujjatning ko'rinishini qayta yuklash kerakligini bildirish uchun yuboriladi.

PARTIAL_CONTENT(206, "Partial Content"),
    // "Qismlarga bo'lingan tuzilish". Ushbu kod bir nechta qismlarda yuklab olish uchun mo'ljallangan so'rovlarda ishlatiladi.

MULTI_STATUS(207, "Multi-Status"),
    // Ushbu kod bir nechta mustaqil jarayonlarning holatini ta'minlaydi

ALREADY_REPORTED(208, "Already Reported"),
    //

IM_USED(226, "IM Used"),
    //

MULTIPLE_CHOICES(300, "Multiple Choices"),
    // "Tanlov ko'pligi". Ushbu kod so'rovda bir nechta javoblar mavjud bo'lganda yuboriladi. Va user-agent yoki foydalanuvchi javoblardan birini tanlashi kerakligini bildiradi.

MOVED_PERMANENTLY(301, "Moved Permanently"),
    // "To'liq ko'chirilgan." Ushbu kod so'ralgan manbaning "URI"si o'zgartirilganligini bildiradi.

FOUND(302, "Found"),
    // "Topildi". Ushbu kod so'ralgan manba topilgan va unga vaqtinchalik o'zgartirilganligini bildiradi..

MOVED_TEMPORARILY(302, "Moved Temporarily"),
    //

SEE_OTHER(303, "See Other"),
    // "Boshqa manbalarni ko'rish". Ushbu kod mijozni GET so'rovi bilan boshqa URIdan man'lumotni olishga yo'naltirish uchun yuboriladi.

NOT_MODIFIED(304, "Not Modified"),
    //

USE_PROXY(305, "Use Proxy"),
    //

TEMPORARY_REDIRECT(307, "Temporary Redirect"),
    //

PERMANENT_REDIRECT(308, "Permanent Redirect"),
    //

BAD_REQUEST(400, "Bad Request"),
    //

UNAUTHORIZED(401, "Unauthorized"),
    //

PAYMENT_REQUIRED(402, "Payment Required"),
    //

FORBIDDEN(403, "Forbidden"),
    //

NOT_FOUND(404, "Not Found"),
    //

METHOD_NOT_ALLOWED(405, "Method Not Allowed"),
    //

NOT_ACCEPTABLE(406, "Not Acceptable"),
    //

PROXY_AUTHENTICATION_REQUIRED(407, "Proxy Authentication Required"),
    //

REQUEST_TIMEOUT(408, "Request Timeout"),
    //

CONFLICT(409, "Conflict"),
    //

GONE(410, "Gone"),
    //

LENGTH_REQUIRED(411, "Length Required"),
    //

PRECONDITION_FAILED(412, "Precondition Failed"),
    //

PAYLOAD_TOO_LARGE(413, "Payload Too Large"),
    //

REQUEST_ENTITY_TOO_LARGE(413, "Request Entity Too Large"),
    //

URI_TOO_LONG(414, "URI Too Long"),
    //

REQUEST_URI_TOO_LONG(414, "Request-URI Too Long"),
    //

UNSUPPORTED_MEDIA_TYPE(415, "Unsupported Media Type"),
    //

REQUESTED_RANGE_NOT_SATISFIABLE(416, "Requested range not satisfiable"),
    //

EXPECTATION_FAILED(417, "Expectation Failed"),
    //

I_AM_A_TEAPOT(418, "I'm a teapot"),
    //

INSUFFICIENT_SPACE_ON_RESOURCE(419, "Insufficient Space On Resource"),
    //

METHOD_FAILURE(420, "Method Failure"),
    //

DESTINATION_LOCKED(421, "Destination Locked"),
    //

UNPROCESSABLE_ENTITY(422, "Unprocessable Entity"),
    //

LOCKED(423, "Locked"),
    //

FAILED_DEPENDENCY(424, "Failed Dependency"),
    //

TOO_EARLY(425, "Too Early"),
    //

UPGRADE_REQUIRED(426, "Upgrade Required"),
    //

PRECONDITION_REQUIRED(428, "Precondition Required"),
    //

TOO_MANY_REQUESTS(429, "Too Many Requests"),
    //

REQUEST_HEADER_FIELDS_TOO_LARGE(431, "Request Header Fields Too Large"),
    //

UNAVAILABLE_FOR_LEGAL_REASONS(451, "Unavailable For Legal Reasons"),
    //

INTERNAL_SERVER_ERROR(500, "Internal Server Error"),
    //

NOT_IMPLEMENTED(501, "Not Implemented"),
    //

BAD_GATEWAY(502, "Bad Gateway"),
    //

SERVICE_UNAVAILABLE(503, "Service Unavailable"),
    //

GATEWAY_TIMEOUT(504, "Gateway Timeout"),
    //

HTTP_VERSION_NOT_SUPPORTED(505, "HTTP Version not supported"),
    //

VARIANT_ALSO_NEGOTIATES(506, "Variant Also Negotiates"),
    //

INSUFFICIENT_STORAGE(507, "Insufficient Storage"),
    //

LOOP_DETECTED(508, "Loop Detected"),
    //

BANDWIDTH_LIMIT_EXCEEDED(509, "Bandwidth Limit Exceeded"),
    //

NOT_EXTENDED(510, "Not Extended"),
    //

NETWORK_AUTHENTICATION_REQUIRED(511, "Network Authentication Required");``

## HTTP ​

Bu function JsEval ichida apilar bilan ishlash imkoniyatini beradi.

Qo'shimcha

APIga murojaatlarning quyidagi turlari mavjud. Unga murojaat quyidagicha amalga oshiriladi:
* http.get(...)
* http.post(...)
* http.put(...)
* http.patch(...)
* http.delete(...)
* `GET` metod uchun:js``http.get(url,header,errorCallback)
// buyerda url require qolgan o`garuvchilar mazburiy emas 

let data = http.get('https://example.com/test')
console.log('data', data)


let data = http.get('https://example.com/test', {'Authorization': 'Basic dGVzdDp0ZXN0'})
console.log('data',data)

let data = http.get('https://example.com/test', {'Authorization': 'Basic dGVzdDp0ZXN0'}, function(e,s){
  throws.responseException('FORBIDDEN', 'Some text');
}
console.log('data',data)``
* `DELETE` metod uchun:js``http.delete(url,header,errorCallback)
// buyerda url require qolgan o`garuvchilar mazburiy emas 
let data = http.delete('https://example.com/test')
console.log('data', data)


let data = http.delete('https://example.com/test', {'Authorization': 'Basic dGVzdDp0ZXN0'})
console.log('data',data)

let data = http.delete('https://example.com/test', {'Authorization': 'Basic dGVzdDp0ZXN0'}, function(e,s){
  throws.responseException('FORBIDDEN', 'Some text');
}
console.log('data',data)``
* `POST` `PUT` `PATH` metod uchun:js``http.post(url, data, header, errorCallback)
// buyerda url require qolgan o`garuvchilar mazburiy emas 

let data = http.post('https://example.com/test')
console.log('data', data)


let data = http.post('https://example.com/test', {'Authorization': 'Basic dGVzdDp0ZXN0'})
console.log('data', data)

let data = http.post('https://example.com/test', {'data': {}}, {'Authorization': 'Basic dGVzdDp0ZXN0'})
console.log('data', data)

let data = http.post('https://example.com/test', {'data': {}}, {'Authorization': 'Basic dGVzdDp0ZXN0'}, function (e, s) {
    throws.responseException('FORBIDDEN', 'Some text');
}
console.log('data', data)``

## UTIL ​

JsEvalning `'util'` qismida dasturchilar uchun turli xildagi utilitalar va ehtiyoj katta bo'lgan instrumental funksionallari kiritilgan, ulardan biri Base64-decode-encode. Base64 - bu binary-to-text encoding sxemalari guruhi bo'lib, ular ikkilik ma'lumotlarni (Binary malumotlar) ASCII formatida radix-64 ko'rinishiga aylantirish orqali ifodalaydi. Base64 atamasi "a specific MIME content transfer encoding"dan kelib chiqqan.

Platon APIning JsEval bosqichida ham ushbu imkoniyat kiritilgan bo'lib, ma'lumotlarning base64 ko'rinishini olishingiz va aksincha, kontentning base64 yig'inini qayta ma'lumotlarga o'girishingiz mumkin.
* 

*Utils"dagi mavjud buyruqlar:
* 

`util.decodeBase64()`: berilgan textni base64 formatga o`tkazadi;js``let text = "Utilsdagi mavjud buyruqlar"
let base64Text = util.decodeBase64(text)
return base64Text

//  VXRpbHNkYWdpIG1hdmp1ZCBidXlydXFsYXI=``
* `util.encodeBase64()`: base64 formatdagi textni encode qiladi:js``let base64Text = "VXRpbHNkYWdpIG1hdmp1ZCBidXlydXFsYXI="
let text = util.encodeBase64(base64Text)
return text

// Utilsdagi mavjud buyruqlar``
* `util.decodeJwt()`: jwt decode qilish uchun ishlatiladi:js``
let jwt = 'eyJraWQiOiJmNTJhMjA3My1iNzIyLTRkZjAtYTlkNi1mNWY5NTk3MTBkNmMiLCJhbGciOiJSUzI1NiJ9.eyJ1cGRhdGVfaWQiOjgsInN1YiI6IjVmZTUwZDI4LTljNWUtNGViNC1iOTQ4LTE0NTE1ZmQ2ZTEzYiIsInJvbGVzIjoiIiwiaXNzIjoiIiwidHlwZSI6IkJlYXJlciIsImxvY2FsZSI6InV6Iiwic2lkIjoiYmVjYTNjMTktZDI1Mi00YTc5LWIzMTMtZGI3NjA5NGRhN2U4IiwiYXVkIjoiYWNjb3VudCIsImZ1bGxfbmFtZSI6IiIsImV4cCI6MTc2NzY5ODg5OCwic2Vzc2lvbl9zdGF0ZSI6IlNUQVRFTEVTUyIsImlhdCI6MTc2NzY4MDg5OCwianRpIjoiZWM4NjQ0ZDItMDhlYS00OGVhLTk3Y2MtZmYwMDAyNTVkNjlmIiwidXNlcm5hbWUiOiJyb290In0.EMFiFvJ6eTDTNlGVWfuv9rvGDaYFBjPenQKQhMjJTw6vEhk8OcCVOcYP32yfGu83ARgMxPWqIWbunsXBW8FWWeh0aM0qQ9GjxysD9qDC26FR-PtGw8Uggkro2RSQwjUD_WGXKwtkNKRk3G-E4ENDDiDSG2fuQM3SWcwwDRhwRDlYT22uWM1hG-JQlkW1PGAmPGmvEAzcaPS3dbn_J6jqFVBG9VrqcoA_d3r_AMm5Sq_PmF3R05Lqgm1H33rhf5lTZ-22JqfzdG1uZ3sNCIxBDzOZQANhmbICKbNgWCr2eyd-S20BFvDhIvPgbBIeezViHtxJ70kqdmW1Yi4wOCQfrg'
let data = util.decodeJwt(jwt)
return data

// "data": {
// "signature": "EMFiFvJ6eTDTNlGVWfuv9rvGDaYFBjPenQKQhMjJTw6vEhk8OcCVOcYP32yfGu83ARgMxPWqIWbunsXBW8FWWeh0aM0qQ9GjxysD9qDC26FR-PtGw8Uggkro2RSQwjUD_WGXKwtkNKRk3G-E4ENDDiDSG2fuQM3SWcwwDRhwRDlYT22uWM1hG-JQlkW1PGAmPGmvEAzcaPS3dbn_J6jqFVBG9VrqcoA_d3r_AMm5Sq_PmF3R05Lqgm1H33rhf5lTZ-22JqfzdG1uZ3sNCIxBDzOZQANhmbICKbNgWCr2eyd-S20BFvDhIvPgbBIeezViHtxJ70kqdmW1Yi4wOCQfrg",
// "header": {
//   "kid": "f52a2073-b722-4df0-a9d6-f5f959710d6c",
//           "alg": "RS256"
// },
// "body": {
//   "update_id": 8,
//           "sub": "5fe50d28-9c5e-4eb4-b948-14515fd6e13b",
//           "roles": "",
//           "iss": "",
//           "type": "Bearer",
//           "locale": "uz",
//           "sid": "beca3c19-d252-4a79-b313-db76094da7e8",
//           "aud": "account",
//           "full_name": "",
//           "exp": 1767698898,
//           "session_state": "STATELESS",
//           "iat": 1767680898,
//           "jti": "ec8644d2-08ea-48ea-97cc-ff000255d69f",
//           "username": "root"
// }``

## JDBS ​

Java ma'lumotlar bazasiga ulanish (JDBC) bu Java dasturlariga ma'lumotlar bazasini boshqarish tizimlariga kirish imkonini beruvchi standart amaliy dasturlash interfeysi.

Ushbu standart interfeys va sinflardan foydalanib, dasturchilar ma'lumotlar bazalariga ulanadigan ilovalarni yozishlari mumkin bo'ladi.
* "JDBC" dagi mavjud buyruqlar: 
* `jdbc.query(sql,args)`: berilgan queryni bazaga execute qiladi:js``let sql = `
  select id, name1 as name
  from lists
  where type_id = :typeId
    and state = :state
    and id = :id
`
//{typeId: 1, state: 1, id: 6} sql parametrlari 
let data = jdbc.query(sql, {typeId: 1, state: 1, id: 6})
return data
//"data": {
//          "id": 6,
//          "name": "Бухоро"
//        }``js``let typeId =  1 
let state = 1 
let id = 6
let sql = `
  select id, name1 as name
  from lists
  where type_id = ${typeId}
    and state = ${state}
    and id = ${id}
`
let data = jdbc.query(sql, {})
return data``

Qo'shimcha

`jdbc.query()`dan faqat object qaytadi;
* `jdbc.execute()`: buni ham ishlash prinspi `jdbc.query()` kabi farqi bundan qiymat qaytmaydi; `jdbc.execute()` ko`pincha update , delete va insert methodlari uchun tavsiya etladi;js``let sql = `
  update lists
  set state = 1
  where type_id = :typeId
    and id = :id
`
//{typeId: 1, id: 6} sql parametrlari 
jdbc.execute(sql, {typeId: 1, id: 6})
return "success"``js``let typeId =  1 
let state = 1 
let id = 6
let sql = `
   update lists
  set state = 1
  where type_id = ${typeId}
    and id = ${id}
`
jdbc.execute(sql, {})
// yoki 
jdbc.execute(sql) // argument yoq bo`lsa berish majburiy emas
return "success"``
* `jdbc.queryForMap()`: bu ham `jdbc.query()` bilan bir xil ishlaydi. Farqi querydan so'ng args(parametr) berish shart emas;js``let sql = `
  select id, name1 as name
  from lists
  where type_id = :typeId
    and state = :state
    and id = :id
`
//{typeId: 1, state: 1, id: 6} sql parametrlari 
let data = jdbc.queryForMap(sql, {typeId: 1, state: 1, id: 6})
return data
//"data": {
//          "id": 6,
//          "name": "Бухоро"
//        }``js``let typeId =  1 
let state = 1 
let id = 6
let sql = `
  select id, name1 as name
  from lists
  where type_id = ${typeId}
    and state = ${state}
    and id = ${id}
`
let data = jdbc.queryForMap(sql, {})
//yoki 
let data = jdbc.queryForMap(sql) // argument yoq bo`lsa berish majburiy emas
return data``

Qo'shimcha

`jdbc.queryForMap()`dan faqat object qaytadi;
* `jdbc.queryForJsonMap()`: `jdbc.queryForMap` bilan ishlash jihatdan bir xil faqat natijasi json ko`rinishida qaytadi;js``let typeId =  1 
let state = 1 
let id = 6
let sql = `
  select id, name1 as name , json_build_object('id',1,'name',2) as child
  from lists
  where type_id = ${typeId}
    and state = ${state}
    and id = ${id}
`
let data = jdbc.queryForJsonMap(sql)
return data``json``//bu queryForMap dan qaytgan javob; 
"data": {
        "id": 6,
        "name": "Бухоро",
        "child": {
            "type": "json",
            "value": "{\"id\" : 1, \"name\" : 2}",
            "null": false
        }
    }``json``//bu queryForJsonMap dan qaytgan javob; 
    "data": {
        "id": 6,
        "name": "Бухоро",
        "child": {
            "id": 1,
            "name": 2
        }
    },``
* `jdbc.queryForList`: bu function boshqalardan farqi bu `LIST` qaytaradi;js``let typeId =  1
let state = 1
let sql = `
  select id, name1 as name , json_build_object('id',1,'name',2) as child
  from lists
  where type_id = ${typeId}
    and state = ${state}
`
let data = jdbc.queryForList(sql)
return data``

yoki argumentlarni obyect qilib berish ham mumkinjs``let sql = `
  select id, name1 as name
  from lists
  where type_id = :typeId
    and state = :state
`
//{typeId: 1, state: 1} sql parametrlari 
let data = jdbc.queryForList(sql, {typeId: 1, state: 1})
return data``
* natijasi:text``"data": [
  {
    "id": 0,
    "name": "Республика",
    "child": {
      "type": "json",
      "value": "{\"id\" : 1, \"name\" : 2}",
      "null": false
    }
  },
  {
    "id": 3,
    "name": "Андижон",
    "child": {
      "type": "json",
      "value": "{\"id\" : 1, \"name\" : 2}",
      "null": false
    }
  },
  ...
]``
* `jdbc.queryForJsonList`: `jdbc.queryForList` bilan ishlashi bir xil farqi bunda ham qaytadigan javob `JSON`ga cast qilib qaytariladi;js``let typeId =  1
let state = 1
let sql = `
  select id, name1 as name , json_build_object('id',1,'name',2) as child
  from lists
  where type_id = ${typeId}
    and state = ${state}
`
let data = jdbc.queryForJsonList(sql)
return data``

yoki argumentlarni obyect qilib berish ham mumkinjs``let sql = `
  select id, name1 as name
  from lists
  where type_id = :typeId
    and state = :state
`
//{typeId: 1, state: 1} sql parametrlari 
let data = jdbc.queryForJsonList(sql, {typeId: 1, state: 1})
return data``
* natijasi:text``"data": [
        {
            "id": 0,
            "name": "Республика",
            "child": {
                "id": 1,
                "name": 2
            }
        },
        {
            "id": 3,
            "name": "Андижон",
            "child": {
                "id": 1,
                "name": 2
            }
        },
        {
            "id": 8,
            "name": "Жиззах",
            "child": {
                "id": 1,
                "name": 2
            }
        },
        ...
    ]``

## REDIS ​

Redis qisqartmasi masofaviy lug'at serveri degan ma'noni anglatadi. Redis nima uchun ishlatiladi? Redis - bu tizim xotirasida saqlangan ma'lumotlarga xizmat ko'rsatishda ish faoliyatini yaxshilash uchun NoSQL ma'lumotlar bazasi yoki xotira-kesh do'koni sifatida ishlay oladigan rivojlangan kalit-qiymat do'koni.
* "Redis" dagi mavjud buyruqlar: 
* `redis.publicSet()`: redisga ma`lumot saqlash uchun ishlatiladi;js``//redis.publicSet('key','value',time to live(millisecond))
let key = redis.publicSet('key','value',10000)
//yoki
let key = redis.publicSet('key','value') //TTL berish majburiy emas 
return key``
* `redis.publicClear()`:js``let key = redis.publicClear('key')
return key``
* `redis.publicGet()`:js``let key = redis.publicGet('key','value',10000)
return key``

## FILE ​

Bu functions orqali jsEvalda file yuklash va load qilishda foydalaniladi
* functions: 
* `fs.loadFileBase64()`: bu orqali bazaga saqlangan fileni base64 formatda olishimiz mumkin;js``let fs = require('files');

let fileBase64 = fs.loadFileBase64(fileID);

return fileBase64``
* `fs.saveFileBase64()`: Base64 formatfagi fileni saqlashjs``let fs = require('files');

let file_id = fs.saveFileBase64(
    requestParams.photo.fileBase64, // Base64 text 
    requestParams.photo.contentType, // fileType misol uchun application/pdf 
    requestParams.photo.fileName, // shu file name
    "file_category" // file_category name  Fayl kategoriyalari menusidan olinadi  
);

return file_id``

## JWT ​

Bu functions orqali jwt generatsiya qilish mumkin; js``let jwt = require('jwt')

// !!! PAYLOAD REQUIRED

let result = jwt.generateToken(payload) // shunchaki data 
// yoki 
let result = jwt.generateToken(payload, header) //  data va header berish kerak
// yoki 
let result = jwt.generateToken(payload, header, signature) // data, header va signature berish kerak
// yoku
let result = jwt.generateToken(signature, payload) // signature va  data bu yerda head shart emas

return result;``

Qo'shimcha

Qiymatlar berilmagan holatlarda project configadan olinadi qiymatlar. Faqat `Payload` berish majburiy;

## UserActions ​
* Functionlari : 
* `userActions.refreshUser(UserId)`: berilgan userni ma`lumotlarini cachedan yangilaydi;
* `userActions.hasPermission(permission,userId)`: berilgan permission berilgan userIDda bor yoki yoq ekanini tekshiradi;
* `userActions.loadToken(login,password)`: berilgan login password orqali Bearer JWT token generatsiya qiladi;
* `userActions.loadToken(login,password,isAlwaysCheckPassword)`: parol o'zgaridagan holatlarda `isAlwaysCheckPassword` true qilib qo'yish kerak;
* `userActions.databaseConnection()`: databaseControl tomonidan yaratilgan databaselarni shu yo`l orqali ishlatish mumkin:js``let db = userActions.databaseConnection({"name":"auth"});
let data = variables.hash_password;

let sql = `update pa_auth_users
            set password = '${data.password}',
                updated_at = now()
            where id = '${data.user_id}'
            and state = 1
            returning id;
            `
let exist = db.queryForMap(sql)
userActions.refreshUser(data.user_id)
return exist``


---
## Bo'lim: EXAMPLES > EXPORT (uz/examples/export.html)

# Export ​

Ushbu bo'lim hujjat shablonlari bilan ishlash va ulardan foydalanish imkonini beradi

# Eksport ​

Export bo'limi hujjat shablonlarini kiritish hamda loyihalarda ulardan foydalanish uchun ishlatiladi. Ixtiyoriy loyihalarda bir qator hisobotlarni shakllantirish uchun qo'l keladi.



Eksport bo'limida bir qator navigatsiya elementlari mavjud. Bular:
* Asosiy oynadagi `Eksport` tugmasi orqali asosiy oynaga o'tish
* Eksport resurslari jadvalida kiritilgan ma'lumotlarni `izlash` navigatori orqali izlash
* Mavjud ma'lumotlarni `Sinxronizatsiyalash` qilish tugmasi
* Yangi resurslarni `Qo'shish` tugmasi



Eksport resurslari ichidan ma'lumotni qidirish uchun `izlash` navigatoridan foydalanish mumkin. Bunda ma'lumotga tegishli biron bir elementni izlash oynasida yozib, qidirish tugmasi bosiladi. Agar resurslar ro'yxatida mavjud bo'lsa, tizim kiritilgan ma'lumot uchun bir nechta variantlarni chiqarib beradi. Foydalanuvchi shu variantlardan kerakligini tanlab foydalanish uchun ishlatadi.



Resurslar ro'yxatidagi ma'lumotlarni optimallashtirish uchun `Sinxronizatsiyalash` tugmasi bosiladi. Bu tugma metodlarga ulangan resurslarni tekshirib ma'lumotni optimallashtirish uchun xizmat qiladi.





Ixtiyoriy vaqtda export resurslari jadvalidagi ma'lumotlarni qanday shakllanganligini hamda qanday parametrlarni o'z ichiga olishini ko'rishimiz mumkin. Buning uchun jadvaldagi ma'lumotni ustiga bosish kifoya.



Eksport ma'lumotlariga yangi resurs qo'shish uchun `Qo'shish` tugmasi bosiladi. Ochilgan modal oynada bir qator ma'lumotlar kiritiladi. Kiritilayotgan resursning type elementiga qarab to'ldiriladigan maydonlar tuslanadi. Modal oynada type maydoni uchun `Word` elementi tanlanganda, quyidagi maydonlar generatsiya qilinadi:
* name - resursni mazmunan to'g'ri ifodalovchi qisqa nomlash uchun mo'ljallangan.
* type - export uchun mo'ljallangan faylning formatini ifodalaydi hamda unga mos parametrlarni ochilishi uchun xizmat qiladi.
* data_source_type - `sql`, `platon_table` hamda `platon_api` kabi parametrlarni o'z ichiga olib, resursning qanday ma'lumot ko'rinishida kelishini ifodalaydi.
* template file - resursning tematikasi qanday bo'lishini ifodalash va shakllantirish uchun xizmat qiladi.
* output_file_name - chiquvchi fayl qay tarzda nomlanishini ifodalaydi.
* state - ushbu resursning holati qaysi tartibda turganligini ifodalaydi. O'z ichiga `active`, `hidden` hamda `archived` kabi statuslarni oladi.
* sql - ma'lumotlar bazasida so'rovlar orqali protsesni ifodalash uchun mo'ljallangan. Undan foydalanishni quyidagi misolda ko'rishingiz mumkin:

TODO

Is this true example?js``http.get("https://e-auksion.uz/api/front/lots")

{
    "totalPages": 193,
    "totalRows": 1927,
    "currentPage": 1,
    "gaming_lots_cnt": 0,
    "rows": [
        {
            "id": 2070118,
            "lot_number": "2070118",
            "name": "Қурилиши тугалланмаган мактаб биноси",
            "full_address": "Ташкентская область, Янгиюльский район, Шўралисой КФЙ, Хўжаобод МФЙ",
            "confiscant_categories_name": "Здания с незавершенным строительством",
            "category_id": 4,
            "start_price": 1.80503E9,
            "zaklad_sum`ma": 9.02515E7,
            "auction_date_str": "20.06.2022 10:00",
            "order_end_time_str": "20.06.2022 09:00",
            "zaklad_percent": 5.0,`
        }]
}``
* params_sql - ma'lumotlar bazasida so'rovlar parametrlari ifodalash uchun mo'ljallangan. Undan foydalanishni quyidagi misolda ko'rishingiz mumkin:sql``select coalesce(concat(t.name1, 'нинг'), '')             as org_name,
       coalesce(concat(t.name1, 'нинг'), '')             as org_name1,
       coalesce(t.name2, '')                             as org_name2,
       coalesce(concat(t.name3, 'ning'), '')             as org_name3,
       coalesce(t.name4, '')                             as org_name4,
       coalesce(#search, '')                             as search,
       coalesce(#org_id::bigint, $user.extraData.org_id) as org_id
from sm_orgs t
where t.state = 1
  and t.id = $user.extraData.org_id``
* cache_seconds - ushbu maydon keshlash mexanizmi uchun xizmat qilib, qancha muddat oralig'ida yangilab borishini ifodalaydi. Bunda kiritiladigan ma'lumot butun (`int`) sonlarda ifodalanishi kerak.
* datasource - qo'llanilayotgan eksport ma'lumoti qaysi resursdan kelishini ifodalash uchun mo'ljallangan. U o'z ichiga `Postgres` hamda `Clickhouse` resurslarini oladi.



data_source_type tanlangan turiga qarab modal oynada mos maydonlarni chiqarib beradi. U o'z ichiga uch turdagi ma'lumotni oladi. Bular:
* sql - sql so'rovlarni jalb qilish hamda ularni ishlatish uchun xizmat qiladi.
* platon_table - platon ma'lumotlarida mavjud bo'lgan jadvallarning nomi asosida shakllantirishga xizmat qiladi.
* platon_api - Platon ma'lumotlar bazasida mavjud ekspluatatsiya uchun ochiq bo'lgan API lardan foydalanish uchun xizmat qiladi.
* data_source_type da `platon_api` turi tanlanganga modal oynada qo'shimcha data object maydoni ochiladi. Ushbu ochilgan maydonda kerakli API tanlanadi va eksport funksionalida ishlatilishi uchun kiritiladi.



data_source_type da `sql` turi tanlanganda modal oynada bir nechta maydonlar shakllanadi. Bular:
* template file - local diskda mavjud bo'lgan hujjatlarni jalb qilish uchun mo'ljallangan.
* output_file_name - chiquvchi fayl qanday nomlanishi kerakligini ifodalaydi.
* state - eksport resursining holatini ifodalash uchun xizmat qiladi.
* sql - ma'lumotlar bazasida so'rovlar orqali protsesni ifodalash uchun mo'ljallangan. Undan foydalanishni quyidagi misolda ko'rishingiz mumkin:js``http.get("https://e-auksion.uz/api/front/lots")

{
    "totalPages": 193,
    "totalRows": 1927,
    "currentPage": 1,
    "gaming_lots_cnt": 0,
    "rows": [
        {
            "id": 2070118,
            "lot_number": "2070118",
            "name": "Қурилиши тугалланмаган мактаб биноси",
            "full_address": "Ташкентская область, Янгиюльский район, Шўралисой КФЙ, Хўжаобод МФЙ",
            "confiscant_categories_name": "Здания с незавершенным строительством",
            "category_id": 4,
            "start_price": 1.80503E9,
            "zaklad_sum`ma": 9.02515E7,
            "auction_date_str": "20.06.2022 10:00",
            "order_end_time_str": "20.06.2022 09:00",
            "zaklad_percent": 5.0,`
        }]
}``
* params_sql - ma'lumotlar bazasida so'rovlar parametrlari ifodalash uchun mo'ljallangan. Undan foydalanishni quyidagi misolda ko'rishingiz mumkin:sql``select coalesce(concat(t.name1, 'нинг'), '')                as org_name,
       coalesce(concat(t.name1, 'нинг'), '')                as org_name1,
       coalesce(t.name2, '')                                as org_name2,
       coalesce(concat(t.name3, 'ning'), '')                as org_name3,
       coalesce(t.name4, '')                                as org_name4,
       coalesce(#search, '')                                as search,
       coalesce(#org_id::bigint, $user.extraData.org_id)    as org_id
from sm_orgs t
where t.state = 1
  and t.id = $user.extraData.org_id``
* cache_seconds - ushbu maydon keshlash mexanizmi uchun xizmat qilib, qancha muddat oralig'ida yangilab borishini ifodalaydi. Bunda kiritiladigan ma'lumot butun (`int`) sonlarda ifodalanishi kerak.
* datasource - qo'llanilayotgan eksport ma'lumoti qaysi resursdan kelishini ifodalash uchun mo'ljallangan. U o'z ichiga `Platon`, `Postgres` hamda `Clickhouse` resurslarini oladi.



data_source_type da `platon_table` turi tanlanganga modal oynada qo'shimcha data object maydoni ochiladi. Ushbu ochilgan maydonda kerakli jadval nomi tanlanadi va eksport funksionalida ishlatilishi uchun kiritiladi.



Eksport modal oynasida sql hamda params_sql maydonlaridan ma'lumotlar bazasi so'rovlari uchun unumli foydalanish imkoniyati mavjud.



Modal oynada type maydonida `Excel` turi tanlanganida unga mos ravishda qo'shimcha maydonlar ochiladi. Bular:
* process_type - eksport resursini ishga tushirish darajasini kiritish uchun qo'llaniladi. Ushbu maydon o'z ichiga ikki xil tanlovni oladi `Immediate` - zudlik bilan ishga tushirish uchun, `Alternate` - alternativ tartibda ishga tushirish uchun.



Modal oynada type maydonida `Csv` turi tanlanganida sql maydoni o'chiriladi. Ushbu holatda modal oynada bir qator maydonlar aks etadi. Bular:
* name - resursni mazmunan to'g'ri ifodalovchi qisqa nomlash uchun mo'ljallangan.
* type - export uchun mo'ljallangan faylning formatini ifodalaydi hamda unga mos parametrlarni ochilishi uchun xizmat qiladi.
* data_source_type - `sql`, `platon_table` hamda `platon_api` kabi parametrlarni o'z ichiga olib, resursning qanday ma'lumot ko'rinishida kelishini ifodalaydi.
* data object - jadval nomlari orqali variantlarni berish va tanlash imkoniyatini beradi.
* output_file_name - chiquvchi fayl qanday nomlanishi kerakligini ifodalaydi.
* state - eksport resursining holatini ifodalash uchun xizmat qiladi.
* params_sql - ma'lumotlar bazasida so'rovlar parametrlari ifodalash uchun mo'ljallangan. Undan foydalanishni quyidagi misolda ko'rishingiz mumkin:sql``select coalesce(concat(t.name1, 'нинг'), '')             as org_name,
       coalesce(concat(t.name1, 'нинг'), '')             as org_name1,
       coalesce(t.name2, '')                             as org_name2,
       coalesce(concat(t.name3, 'ning'), '')             as org_name3,
       coalesce(t.name4, '')                             as org_name4,
       coalesce(#search, '')                             as search,
       coalesce(#org_id::bigint, $user.extraData.org_id) as org_id
from sm_orgs t
where t.state = 1
  and t.id = $user.extraData.org_id``
* cache_seconds - ushbu maydon keshlash mexanizmi uchun xizmat qilib, qancha muddat oralig'ida yangilab borishini ifodalaydi. Bunda kiritiladigan ma'lumot butun (`int`) sonlarda ifodalanishi kerak.

## Amaliy tajriba. ​

Yuqorida yozilgan ma'lumotlarni `dev.realsoft.accademy` saytida real loyihada ishlatib ko'ramiz. Buning uchun avval biz jadval va Excel fayl tayyorlab olishimiz kerak bo'ladi. Jadvalimiz quydagi ko'rinishga ega



Bizda quydagi jadval bor bo'lsa, so'ng quyidagicha Excel fayl yaratamiz:



Va ushbu Excel faylga примечаний (eslatma) lar qo'shamiz





Excel fayl ham tayyor bo'lgach endi export bo'limidan yangi export yaratamiz:



Endi ushbu yaratilgan export ni jadvalldagi tugmalarga ulaymiz.



Hamda ushbu tugma bosilganida Natijani ko'rishimiz mumkin.



Barcha kerakli ma'lumotlar tanlanib va to'ldirilib `Saqlash` tugmasi bosiladi. Shu tariqa eksport uchun kiritilgan ma'lumotlar jadvalda shakllanadi va foydalanish uchun ruhsatga ega bo'lgan ixtiyoriy dasturchi undan foydalanish huquqiga ega bo'ladi.


---
## Bo'lim: EXAMPLES > IMPORT (uz/examples/import.html)

# Import ​

Ushbu bo'lim hujjat shablonlari bilan ishlash va ulardan foydalanish imkonini beradi.

## Import ​

Import bo'limi hujjat shablonlarini kiritish hamda loyihalarda ulardan foydalanish uchun ishlatiladi. Ixtiyoriy loyihalarda bir qator hisobotlarni shakllantirish uchun qo'l keladi.



Import bo'limida bir qator navigatsiya elementlari mavjud. Bular:
* Asosiy oynadagi `Import` tugmasi orqali asosiy oynaga o'tish.
* Import resurslari jadvalida kiritilgan ma'lumotlarni `izlash` navigatori orqali izlash.
* Mavjud ma'lumotlarni `Sinxronizatsiyalash` qilish tugmasi.
* Yangi resurslarni `Qo'shish` tugmasi.



Import resurslari ichidan ma'lumotni qidirish uchun `izlash` navigatoridan foydalanish mumkin. Bunda ma'lumotga tegishli biron bir elementni izlash oynasida yozib, qidirish tugmasi bosiladi. Agar resurslar ro'yxatida mavjud bo'lsa, tizim kiritilgan ma'lumot uchun bir nechta variantlarni chiqarib beradi. Foydalanuvchi shu variantlardan kerakligini tanlab foydalanish uchun ishlatadi.



Resurslar ro'yxatidagi ma'lumotlarni optimallashtirish uchun `Sinxronizatsiyalash` tugmasi bosiladi. Bu tugma metodlarga ulangan resurslarni tekshirib ma'lumotni optimallashtirish uchun xizmat qiladi.



Ixtiyoriy vaqtda import resurslari jadvalidagi ma'lumotlarni qanday shakllanganligini hamda qanday parametrlarni o'z ichiga olishini ko'rishimiz mumkin. Buning uchun yuqoridagi suratlarda ko'rsatilgan ketma-ketliklarni bajarish lozim.







TODO

Please add information for each input and selects. In the old doc has the information about export on the import page?

## Amaliy tajriba ​

Foydalanuvchilar jadvalini amaliy tajribada kiritib ko'ramiz.
* Avval import bo'limidan yangi import yaratamiz.


* Yangi obrabotchik (handler) yaratamiz.


* SQL qismini yozamiz: bu yerda `@A` ,`@B`, `@C`, ... excel fayldagi yacheykalar nomlari.


* Yangi jadval va import tugmasini yaratamiz.


* Tugmaga import nomini yozamiz.


* Tugmani bosamiz va faylni yuklaymiz, Hamda natija tayyor.



Barcha kerakli ma'lumotlar tanlanib va to'ldirilib `Saqlash` tugmasi bosiladi. Shu tariqa eksport uchun kiritilgan ma'lumotlar jadvalda shakllanadi va foydalanish uchun ruhsatga ega bo'lgan ixtiyoriy dasturchi undan foydalanish huquqiga ega bo'ladi.


---
## Bo'lim: EXAMPLES > CRON (uz/examples/cron.html)

# Cron (Schedule) ​

Platon Platformasida rejalashtirilgan amallarni boshqarish bo'limi

## Cron (Schedule) ​

Platon platformasidagi Cron (Schedule) vazifasi - muayyan vaqt oralig'ida berilgan so'rovnomani bajarish. Ushbu shakllantirilgan Navigatsiya paneli (yoki Menyular ro'yxati) ni foydalanuvchi talabiga ko'ra moslashtirish imkoniyati mavjud.

Cron (Schedule) imkoniyatidan foydalanish uchun platon platformasi ning navigatsiya ro'yxatidagi Cron (Schedule) bo'limiga o'tiladi.




* Nomi - Cronning nomi unique (yagona) bo'lishligi kerak.
* CRON formatidagi vaqt - Cronning takroriy davri (qancha da bir ishlashligi).
* Urunishlar soni - Urinishlar soni agar 0 bo'lsa davomiy bo'ladi.
* Kod turi - Cron kodi turi 3 xil turi mavjud: 
* SQL
* Request API
* JS Eval
* Log darajasi - Loglarning yoqilganligi va ularning qamrovi darajasi
* group_by - Cronlarni guruhlash


* Request API - Qaysi API ga murojaat qilish kerakligini belgilash
* Methods - API type lari `GET`, `PUT`, `DELETE`, `POST`
* Content_type - Api dagi content turi (odatda `aplication/json` fomati ko'p ishlatiladi).
* Header - Key va valuelar odatda so'rovning Avtorizatsiya va Headerda yuborilishi kerak bo'lgan ma'lumotlar yoziladi.
* Key - Header uchun kalit (masalan, `Authorization`)
* Value - Header uchun qiymat (masalan, `JWT token qiymati`)


* Datasource - Qaysi turdagi ma'lumotlar ombori bilan ishlanishi (`Postgres` yoki `Clickhouse`)
* SQL - strukturalashgan so'rovlar (query lar)

Cron `SQL` orqali bajarish kerak bo'lsa kod turi bo'limidan `SQL-Ma'lumotlar omboriga so'rov` tanlanadi va kerakli bo'limlarni to'ldirib chiqiladi.



Cron `API` orqali bajarish kerak bo'lsa kod turi bo'limidan `Request API-Tashqi APIga so'rov` tanlanadi va kerakli bo'limlar to'ldirib chiqiladi.



Cron `JS Eval` orqali bajarish kerak bo'lsa kod turi bo'limidan `JS Eval-JavaScript kodeni bajarish` tanlanadi va kerakli bo'limlar to'ldirib chiqiladi.



## Asosiy ma'lumotlar quyidagi yacheykalardan iborat: ​
* Nomi (birinchi yacheyka) - cronni nomlaysiz;
* CRON formatidagi vaqt (ikkinchi yacheyka) - siz yozgan kod ni siz belgilagan vaqtda ishlatish;js``// misol uchun
* * * * *            // har bir minutda
*/30 * * * *         // har 30-minutda
30 16 * * *          // har kuni 16:30 da
30 16 2 * *          // har oyni 2-sanasida 16:30 da
30 16 2 11 *         // har yili noyabr oyining 2-sanasida 16:30 da
30 16 * 11 Mon-Fri   // har yili noyabr oyining Dushanbadan jumagacha hafta kunlarining 16:30 da``
* Urunishlar soni (uchinchi yacheyka) - agar qandaydir xatolik sodir bo'lib ishlamay qolsa `n` marotaba qayta urinib ko'rish;js``// misol uchun
0 // tanlansa cronda xatolik sodir bo'lsa ham cronni o'chirmaydi va bajarishni davom etadi
3 // 3 marta urinib ko'radi
5 // 5 marta urinib ko'radi``
* Kod turi (to'rtinchi yacheyka): 
* SQL - ma'lumotlar omboriga aloqador so'rovni amalga oshirish.
* Request - tashqi va Platon URL ga so'rovnoma jo'natish.
* JS Eval - JavaScript kodeni bajarish.

## Qo'shimcha ma'lumotlar ​

Cron (Schedule) ning vazifasiga keladigan bo'lsak har bir kod larda qo'yiladigan yulduzlarni qanday farqlash.
* 

Maydon yulduzcha (*) bo'lishi mumkin, bu har doim "birinchi-oxirgi" degan ma'noni anglatadi. "Oy kuni" yoki "hafta kuni" maydonlari uchun yulduzcha o'rniga savol belgisi (?) qo'llanilishi mumkin.
* 

Raqamlar diapazonlari chiziqcha (-) bilan ajratilgan ikkita raqam bilan ifodalanadi. Belgilangan diapazon o'z ichiga oladi.
* 

/n bilan diapazondan yoki (*) keyin raqam qiymatining diapazon bo'ylab oralig'ini belgilaydi.
* 

Inglizcha nomlar "oy" va "hafta kuni" maydonlari uchun ham ishlatilishi mumkin. Muayyan kun yoki oyning birinchi uchta harfidan foydalaning (holat muhim emas).
* 

"Oy kuni" va "hafta kuni" maydonlarida "oxirgi" degan ma'noni anglatuvchi L harfi bo'lishi mumkin va har bir sohada har xil ma'noga ega.
* 

"Oy kuni" maydonida L *"oyning oxirgi kuni" degan ma'noni anglatadi. Agar manfiy ofset (ya'ni L-n) bo'lsa, bu "oyning n-dan oxirgi kuni" degan ma'noni anglatadi. Agar keyin W (ya'ni LW) bo'lsa, bu "oyning oxirgi ish kuni" degan ma'noni anglatadi.
* 

"Hafta kuni" maydonida L "haftaning oxirgi kuni" degan ma'noni anglatadi. Agar raqam yoki uch harfli nom (ya'ni dL yoki DDDL) bilan prefiks bo'lsa, bu "oydagi d (yoki DDD) haftasining oxirgi kuni" degan ma'noni anglatadi.



### Cron (Schedule) har bir yulduz lar qanday axamiyatga ega: ​
* birinchi yulduz sekund degani;
* ikkinchi yulduz minut degani;
* uchinchi yulduz soat degani;
* to'rtinchi yulduz kun degani;
* beshinchi yulduz oy degani;
* oltinchi yulduz hafta degani;
* yettinchi yulduz yil degani;
* "0 0 * * * *" = har kunning har bir soatining tepasi.
* "*/10 * * * * *" = har o'n soniyada.
* "0 0 8-10 * * *" = har kuni soat 8, 9 va 10.
* "0 0 6,19 * * *" = har kuni 6:00 va 19:00.
* "0 0/30 8-10 * * *" = har kuni 8:00, 8:30, 9:00, 9:30, 10:00 va 10:30.
* "0 0 9-17 * * DUS-JUM" = ish kunlarining to'qqizdan beshgacha
* "0 0 0 25 12?" = har Rojdestvo kuni yarim tunda

Yanaham to'liqroq ma'lumot olish uchun crontab sahifasiga murojaat qilishimiz mumkin.


---
## Bo'lim: EXAMPLES > TRANSLATION (uz/examples/translation.html)

# Tarjimalar ​

Platon Platformasida ma'lumotlarni turli xil tillarda ko'rsatish bo'limi

## Tarjimalar ​

Platon platformasidagi Tarjimalar bo'limidan web-sahifadagi ma'lumotlarni 4 xil til (kirill alifbosidagi o'zbek tili, rus tili, lotin alifbosidagi o'zbek tili va ingliz tili) da aks ettirish uchun foydalaniladi.

Tarjimalar video darsligi

Tarjimalar funksionalini ochish uchun platon platformasining navigatsiya panelidagi `Tarjimalar` bo'limiga o'tiladi.



Tarjimalar moduli quyidagi tugmalardan iborat:
* frontend uchun tarjima qo'shish - ushbu tugmadan yangi tarjima qo'shish uchun foydalaniladi. Tugma bosilganida quyidagi oyna ochiladi:



Ochilgan oyna quyidagi yacheykalardan iborat:
* key - yaratilayotgan tarjima nomi, shuningdek, ushbu nom tarjima qilinayotgan sahifaning `js` yacheykasida kod yozish uchun foydalaniladi:


* 

value1-uz - sahifa ma'lumotlarining kirill alifbosidagi o'zbek tili dagi shaklini yozish uchun foydalaniladi;
* 

value2-ru - sahifa ma'lumotlarining rus tili dagi shaklini yozish uchun foydalaniladi;
* 

value3-la - sahifa ma'lumotlarining lotin alifbosidagi o'zbek tili dagi shaklini yozish uchun foydalaniladi;
* 

value4-en - sahifa ma'lumotlarining ingliz tili dagi shaklini yozish uchun foydalaniladi;
* 

description - tarjima uchun ta'rif yokida qayd yozish uchun foydalaniladi;
* 

Backend topish va keshni yangilash - ushbu tugmani bosish orqali "backend" tizimi avtamatik tarzda keshni yangilaydi.


---
## Bo'lim: EXAMPLES > FILE-MANAGER (uz/examples/file-manager.html)

# Fayl menejeri ​

Platon Platformasiga yuklangan qo'shimcha fayllarni boshqarish bo'limi

## Fayl menejer ​

Platon platformasidagi Fayl menejer orqali dasturchi yaratayotgan sayt yoki turli xil proektlarga rasm yoki video qoyishi mumkin. Fayl menejer funksionalini ochish uchun platon platformasi ning navigatsiya ro'yxatidagi File Menedjeri bo'limiga o'tiladi.



Bu yerga kirilgandan so'ng, ekranda mana quyidagicha ma'lumotlar chiqib keladi.



Fayl menejer quyidagi yacheykalardan iborat:
* Papkalar - Papkalar tugmasi bosilgandan so'ng ekranning chap tarafida nechta fayl borligi chiqib keladi.
* Papkadagi fayllar - Papkadagi faylarning vazifasi - qo'shilgan papkalarni ichidagi ma'lumotlarni ko'rsatish.
* Yangi papka - Yangi papka tugmasi bosilganida ekranda papkani nomini kiritish tugmasi paydo bo'ladi.


* Yangi fayl - yangi fayl tugmasi bosilganida ekranda kerakli bolgan faylni joylash tugmasi chiqadi.


---
## Bo'lim: EXAMPLES > FILE-CATEGORY (uz/examples/file-category.html)

# Fayl kategoriyalari ​

Platon Platformasida foydalanuvchi fayllari bilan ishlash bo'limi

## Fayl kategoriyalari ​

Platon platformasidagi Fayl kategoriyalari qanday fayl kategoriyalarini, file hajmini belgilab berish funksiyasini o'z ichiga oladi. Fayllar kategoriyalarini ochish uchun platon platformasi ning navigatsiya ro'yxatidagi Fayl kategoriyalari bo'limiga o'tiladi.



File kategoriyalari ga kirib, Qo'shish tugmasi bosilganidan so'ng, ekranda quyidagi ka'bi forma chiqadi.



Fayl kategoriyasi qo'shish quyidagi yacheykalardan iborat:
* name1-uz - name1-uz ning vazifasi kiritilgan fayl nomini kiril tilida ko'rsatish;
* name2-ru - name2-ru ning vazifasi kiritilgan fayl nomini rus tilida ko'rsatish;
* name3-la - name3-la ning vazifasi kiritilgan fayl nomini lotin tilida ko'rsatish;
* name4-en - name4-en ning vazifasi kiritilgan fayl nomini ingliz tilida ko'rsatish;


* slug - tashqi serverlardan API orqali fayl yuklashda ishlatiladi;
* upload_path - vazifasi joylashtirilgan faylni qanday chaqirish;
* max_size (KB) - joylashtirilgan faylning maksimal hajmi;
* state - ushbu yacheyka joylashtiralayotgan fayl ko'rinishi. Ushbu yacheykaga quyidagi kabi kommandalardan foydalanish mumkin: 
* active - kategoriyaning joriy vaqtda faol ekanligini belgilaydi;
* hidden - kategoriyaning joriy vaqtda no-faol, yashirin ekanligini belgilaydi;
* archived - kategoriyaning arxivlash uchun ishlatiladi;


* allowed_extensions - bu yerda yuklanadigan faylning jpg, png yoki pdf, ... ligini tanlanadi:



Ruxsat etilgan file kengaytmalar ro'yxati:text``jpg
png
jpeg
bmp
gif
doc
docx
xls
xlsx
pdf
ppt
pptx
txt
mov
pm4
mpeg4
avi``


---
## Bo'lim: EXAMPLES > DATABASE-CONTROL (uz/examples/database-control.html)

# Ma'lumotlar ombori nazorati (Database control) ​

Ushbu bo'lim, yaratilayotgan dastur uchun ma'lumotlar omboriga ulanish va nazorat qilish imkoniyatini taqdim etadi.

## Ma'lumotlar ombori nazorati ​

Ma'lumotlar ombori nazorati (Database control) bo'limi, dasturchilarga turli xil turdagi yoki turli serverlardagi ma'lumotlar ombori bilan ulanish imkoniyatini beradi. Bu bo'limga o'tish uchun quyidagi ketma-ketlikka amal qilish lozim:

Asosiy oyna -> Tizim sozlamalari -> Ma'lumotlar ombori nazorati



### Ma'lumotlar omborini yaratish ​

Ma'lumotlar omborini qo'shish uchun `Database yaratish` tugmasi tanlanishi kerak, va shunda ekranda quyidagicha forma hosil bo'ladi:






* 

Ma’lumotlar bazasi turini tanlang (Select database type) - tizim 5 turdagi ma'lumotlar ombori bilan ulanish imkoniyatini taqdim etadi:
* 

MySQL - ochiq kodli (Open Source), Oracle korporatsiyasi tomonidan qo'llab-quvvatlanadigan, mashhur relyatsion ma'lumotlar omborini boshqarish tizimi (RDBMS) laridan biri.
* 

PostgreSQL - ochiq kodli obyekt-relyatsion ma'lumotlar ombori tizimi. U o'zining ishonchliligi, standartlarga qat'iy rioya qilishi (SQL compliance) va murakkab so'rovlarni hamda katta hajmdagi ma'lumotlarni samarali qayta ishlashi bilan ajralib turadi. Ko'pincha murakkab backend tizimlarida ishlatiladi.
* 

SQL Server - Microsoft tomonidan ishlab chiqilgan relyatsion ma'lumotlar omborini boshqarish tizimi. Asosan korporativ muhitda, yirik biznes tizimlarida va .NET texnologiyalari bilan integratsiya qilingan loyihalarda keng qo'llaniladi. Transact-SQL (T-SQL) tilidan foydalanadi.
* 

Clickhouse - Katta hajmdagi ma'lumotlarni real vaqt rejimida analiz qilish (OLAP) uchun mo'ljallangan, ustunli (column-oriented) ochiq kodli ma'lumotlar ombori. U analitik so'rovlarni bajarish tezligi bo'yicha an'anaviy qatorli (row-oriented) tizimlardan (MySQL, Postgres) bir necha barobar tezroq ishlaydi.
* 

Oracle - Oracle korporatsiyasining flagman mahsuloti bo'lib, ishonchli, xavfsiz va keng ko'lamli (scalable) ma'lumotlar ombori hisoblanadi.
* 

Database - Ma'lumotlar ombori nomi;
* 

Name - Yagona (unique) nom, tizim, ushbu nom bilan konfiguratsiya fayl yaratadi, shuning uchun u yagona bo'lishi (takrorlanmasligi) maqsadga muvofiq;
* 

Username - Ma'lumotlar ombori foydalanuvchi nomi;
* 

Parol - Ma'lumotlar ombori foydalanuvchi paroli;
* 

Host - Ma'lumotlar ombori joylashgan host URI si yoki IP manzili;
* 

Port - Ma'lumotlar ombori joylashgan host porti;
* 

JDBC URL - Ma'lumotlar omboriga ulanish uchun avtomatik generatsiya qilinadigan JDBC manzil;
* 

Enable - Yaratilayotgan ma'lumotlar ombori joriy dastur uchun foydalanish yoki foydalanmaslikni belgilaydigan tugma;



### Ma'lumotlar omborini tahrirlash ​

`Actions` bo'limidan, tahrirlash tugmasi (icon) orqali, ma'lumotlar ombori konfiguratsiyasini moslashtirish mumkin:



### Ma'lumotlar omborini o'chirish ​

`Actions` bo'limidan, o'chirish tugmasi (icon) orqali, ma'lumotlar ombori konfiguratsiyasini o'chirish mumkin:


---
## Bo'lim: PLATON > INDEX (uz/platon/index.html)

# 📘 Platon Services ​

Ushbu hujjat Platon platformasi tomonidan taqdim etiladigan barcha asosiy servislar, ularning vazifalari, ishlash prinsiplari va integratsiya jarayonlarini umumiy ko‘rinishda yoritadi. Hujjat tizim arxitekturasi, modullar o‘zaro qanday muloqot qilishi va ular orqali qanday funksiyalar bajarilishi haqida to‘liq tasavvur beradi.

## 🚀 Platon Servicelarining Umumiy Maqsadi ​

Platon servislar to‘plami loyihaning funksional qismlarini modullar bo‘yicha ajratib, ularning har birida mustaqil ishlash va kengaytirilish imkoniyatini yaratadi. Servislar mikroservis arxitektura tamoyillariga asoslanib ishlab chiqilgan va quyidagi maqsadlarni ko‘zlaydi:
* Moslashuvchanlik: Har bir servis alohida ishlaydi va mustaqil rivojlantiriladi.
* Kengaytiriluvchanlik: Yangi imkoniyatlarni qo‘shish mavjud tizimga ta’sir qilmaydi.
* Xavfsizlik: Har bir servis avtentifikatsiya va avtorizatsiya qatlamlari bilan himoyalangan.
* Barqarorlik: Nosozlik bitta servisda yuz berishi butun tizim ishiga ta’sir qilmaydi.

## 🧩 Servislar Ro‘yxati ​

Quyida barcha Platon servislarining umumiy ro‘yxati va ularning qisqacha tavsifi beriladi.

## 1. Auth Service ​
* Foydalanuvchi autentifikatsiyasi va avtorizatsiyasi.
* Tokenlar (Access/Refresh) bilan ishlash.
* Role va permissionlar boshqaruvi.

### 2. Menu Service ​
* Admin paneli yoki ilova interfeysi uchun menyu strukturasini boshqarish.
* Dinamik menyu yaratish, o‘zgartirish va ko‘rinishni sozlash.

### 3. Page Service ​
* Dinamik sahifalar yaratish va boshqarish.
* Kontent, sahifa atributlari va ko‘rinish konfiguratsiyasi.

### 4. Form Service ​
* Formalarni yaratish, ularning maydonlari va validatsiya qoidalarini boshqarish.
* Dinamik shakllar generatsiyasi.

### 5. Table Service ​
* Jadval konfiguratsiyasi, kolonkalari va filtrlarini boshqarish.
* Admin uchun dinamik table generator.

### 6. Cron Service ​
* Avtomatik ishlar (scheduled jobs) yaratish va monitoring.
* Vazifalarni belgilangan vaqt asosida ishlatish.

### 7. Excel Import Service ​
* Excel fayllardan ma’lumotlarni yuklash.
* Mapping, validatsiya va import pipeline.

### 8. Export Service ​
* Data eksport qilish (Excel, CSV, WORD va boshqalar).
* Jadval va filtrlar asosida eksport moduli.

### 9. File Service ​
* Fayllarni yuklash, saqlash, o‘chirish va boshqarish.
* Lokal yoki bulutli storage (MinIO va boshqalar) bilan integratsiya.

### 10. Logging Service ​
* Tizim loglari, audit loglar, activity loglar.
* Har bir so‘rov, o‘zgarish va xatoliklarni qayd qilish.

### 11. Mail Service ​
* Email jo‘natish, shablonlar va tranzaksion xabarlar.
* SMTP konfiguratsiyasi va queue bilan ishlash.

### 12. Multi Database Service ​
* Bir nechta ma’lumotlar bazasi bilan ishlash imkoniyati.
* O‘qish/yozish bo‘yicha alohida konfiguratsiya.

### 13. SMS Service ​
* SMS yuborish servisi (OTP, eslatma, marketing xabarlari).
* Providerlar integratsiyasi (eskiz, playmobile va boshqalar).

### 14. Store Service ​
* Global konfiguratsiyalar, parametrlar va sozlamalar.
* Kalit-qiymat (key-value) tarzida sozlamalar boshqaruvi.

### 15. Translation Service ​
* Ko‘pchilik tillarni qo‘llash.
* Dinamik tarjimalar, JSON yoki DB asosidagi i18n boshqaruvi.

## 🏗️ Arxitektura ​

Platon servislarining arxitekturasi quyidagi tamoyillarga asoslanadi:
* Mikroservis modeli
* RESTful API interfeyslari
* Service-to-service kommunikatsiya
* Event-driven mexanizmlar
* Centralized logging va monitoring


---
## Bo'lim: PLATON > AUTH (uz/platon/auth.html)

# Auth Service ​

Auth servisi Platon platformasining asosiy xavfsizlik modulidir. Ushbu servis foydalanuvchilarni tizimga autentifikatsiya qilish, ularning shaxsini tasdiqlash va ruxsat darajalarini boshqarish uchun mas’uldir. Servis barcha boshqa modullar bilan integratsiya qilinadi va umumiy xavfsizlik qatlamini ta’minlaydi.

Auth servisi quyidagi asosiy vazifalarni bajaradi:
* Foydalanuvchini aniqlash (authentication)
* Kirish va chiqish jarayonlarini boshqarish
* Access va Refresh tokenlar generatsiyasi
* Role va permissionlar orqali ruxsatlarni boshqarish (authorization)
* Bir nechta kirish usullarini qo‘llab-quvvatlash (email, telefon, OAuth va boshqalar)
* Xavfsizlik siyosatlari va token muddatlarini nazorat qilish

Ushbu bo‘lim Auth servisining ishlash tamoyillari, konfiguratsiyasi, endpointlari va integratsiya jarayonlari haqida to‘liq ma’lumot beradi.

## Kirish Yo‘llari (Login Methods) ​

Auth servisi foydalanuvchilarni tizimga kirishini va ularning xavfsizligini ta’minlaydi. Platformada bir nechta kirish yo‘llari mavjud bo‘lib, har bir usul alohida parametrlar va xavfsizlik talablariga ega.

## 1. Email + Parol ​
* Tavsif: An’anaviy login usuli.
* Kerakli parametrlar:
* `email` (string) — foydalanuvchi emaili
* `password` (string) — foydalanuvchi paroli
* Natija: Access token (JWT), Refresh token
* Ruxsat: Foydalanuvchining roli va permissionlariga qarab endpointlarga kirish

## 2. Telefon + OTP ​
* Tavsif: Telefon raqam orqali vaqtinchalik kod (OTP) bilan login qilish.
* Kerakli parametrlar:
* `phone` (string) — foydalanuvchi telefon raqami
* `otp` (string) — yuborilgan bir martalik kod
* Natija: Access token, Refresh token
* Qo‘shimcha: Ikki faktorli autentifikatsiya (2FA) qo‘llab-quvvatlanadi

## 3. OAuth2 ​
* Providerlar
* `Google` - Google account orqali kirish.
* `Facebook` - Facebook account orqali kirish.
* `OneId` - O'zbekiston yagona identifikatsiya tizimi orqali kirish.
* `AppleOauth2` - `iCould` yoki `AppleId` orqali kirish
* `KeyCloak` - KeyCloak account orqali kirish.
* `Linkedin` - Linkedin account orqali kirish.
* `FaceId` - Yuz identifikatsiyasi orqali kirish
* Tavsif: Tashqi OAuth2 provider orqali login qilish
* Kerakli parametrlar:
* `method` — OAuth provider nomi (masalan `Google`, `Facebook`)
* `client_id`, `client_secret`, `code`, `redirect_uri` va boshqa providerga xos parametrlar
* (Kerak bo‘lsa) `otp` — 2FA uchun
* Natija: Access token, Refresh token
* Ruxsat: Platforma rol va permissionlariga bog‘liq

## 4. Elektron Imzo (E-imzo / RS-imzo) ​
* Tavsif: Foydalanuvchi E-imzo orqali autentifikatsiya qiladi
* Kerakli parametrlar:
* `pkcs7` (string) — imzo ma’lumotlari
* (Kerak bo‘lsa) `otp` — 2FA kodi
* Natija: Access token yoki sessiya
* Qo‘shimcha: Mobil login va timestamp tekshiruvi qo‘llab-quvvatlanadi

## 5. Refresh Token orqali sessiyani yangilash ​
* Tavsif: Avval olingan Refresh token orqali Access token yangilanadi
* Kerakli parametrlar:
* `refreshToken` (string)
* Natija: Yangi Access token
* Ruxsat: Foydalanuvchining hozirgi rollari va permissionlari bilan bog‘liq

## 6. Maxsus Kirish (Admin, Internal, Multi-factor) ​
* Foydalanuvchining roli va permissionlari orqali maxsus login variantlari mavjud: 
* Admin yoki operator loginlari
* Sessiyalarni terminatsiya qilish
* JWT sozlamalarini yangilash (faqat ruxsatli foydalanuvchilar)

## 🔑 Qo‘shimcha Xavfsizlik Tamoyillari ​
* Parollar shifrlangan holda saqlanadi (Pbkdf2Sha256Hasher yoki MD5)
* 2FA / OTP orqali ikki faktorli autentifikatsiya qo‘llaniladi
* Tokenlar (JWT) muddat bilan cheklangan
* Role va permissionlar har bir kirish yo‘li uchun tekshiriladi

Ushbu bo‘lim Auth servisidagi barcha kirish yo‘llari, ularni ishlatish uchun kerakli parametrlar va xavfsizlik qoidalari haqida umumiy tasavvur beradi.


---
## Bo'lim: PLATON > MENU (uz/platon/menu.html)

# Menu Service ​

Menu Service Platon platformasida foydalanuvchi menyularini boshqarish, yuklash va filtrlaydigan servisdir.
 U loyihaning va Platon platformasining menyularini ma’lumotlar bazasi va kesh orqali birlashtiradi.

## Umumiy Ma’lumot ​

Menu Service quyidagi imkoniyatlarni ta’minlaydi:
* Loyihaning va Platon platformasining menyularini yuklash
* Kesh orqali tezkor menyu ishlashini ta’minlash
* Foydalanuvchi ruxsatlariga asoslangan menyu filtratsiyasi
* Badge qiymatlarini (SQL yoki API orqali) hisoblash
* Dinamik menyu strukturasini hosil qilish

## Arxitektura Komponentlari ​

Asosiy vazifalari:
* Platon va loyihaga xos menyularni birlashtirish
* Badge qiymatlarini hisoblash (SQL yoki Platon API orqali)
* Dinamik va ierarxik menyu daraxtini yaratish

## Ruxsatlar ​
* Foydalanuvchi ruxsatlariga asoslanib filtrlanadi.
* Role va Permissionlarga qaragan holda menularni filter qiladi.


---
## Bo'lim: PLATON > PAGE (uz/platon/page.html)

# Page Service ​

Page Service — Platon platformasida sahifalarni boshqarish, yuklash va foydalanuvchi uchun tayyorlashga mo‘ljallangan servisdir.
 U sahifalarni ma’lumotlar bazasidan oladi, komponentlarini birlashtiradi va cache orqali tezkor ishlashni ta’minlaydi.

## Umumiy Ma’lumot ​

Page Service quyidagi imkoniyatlarni ta’minlaydi:
* Sahifalarni ma’lumotlar bazasidan yuklash
* Sahifalarning komponentlarini dinamik aniqlash va birlashtirish
* Ierarxik va modul asosidagi sahifa tuzilishini yaratish
* Foydalanuvchi ruxsatlariga asoslangan kirishni tekshirish
* Cache orqali sahifalarni tezkor ishlashini ta’minlash
* Public va private sahifalarni boshqarish
* Sahifalarni ma’lum interval bilan sinxronizatsiya qilish (scheduler)
* Xatoliklarni markaziy tizimga loglash (NATS orqali)

## Arxitektura Komponentlari ​
* Page Loader: Sahifalarni ma’lumotlar bazasidan yoki cache’dan olish
* Component Loader: Sahifa ichidagi komponentlarni aniqlash va ularni sahifaga birlashtirish
* Access Validator: Foydalanuvchi ruxsatlari asosida sahifa va komponentlarga kirishni tekshirish
* Cache Manager: Sahifalar va ularning komponentlarini keshga saqlash va kerak bo‘lganda yangilash
* Scheduler: Sahifa cache’ini ma’lum interval bilan yangilash
* Logging Service: Xatoliklar va ma’lumotlarni markaziy tizimga yuborish (NATS)

## Sahifalarni Boshqarish Imkoniyatlari ​
* Public va private sahifalarni farqlash va foydalanuvchi ruxsatlariga moslashtirish
* Dinamik sahifa kontentini tayyorlash va foydalanuvchi so‘roviga mos ravishda render qilish
* Komponentlar asosida sahifa tarkibini modul tarzida hosil qilish
* Foydalanuvchi tomonidan yuborilgan ma’lumotlarni sahifa bilan birlashtirish (request body)
* Sahifalar va komponentlar o‘rtasidagi bog‘liqliklarni aniqlash va rekursiv tarzda boshqarish

## Cache Imkoniyatlari ​
* Sahifalar va ularning komponentlari keshga saqlanadi
* Kesh orqali tezkor ishlash va server yukini kamaytirish
* Ma’lum interval bilan sahifalar avtomatik yangilanadi
* Yangi yoki o‘zgartirilgan sahifalar cache’ga avtomatik qo‘shiladi
* Keraksiz yoki eskirgan sahifalar cache’dan o‘chiriladi

## Xulosa ​

Page Service Platon platformasida sahifalarni modul va komponent asosida boshqarish, foydalanuvchi ruxsatlariga mos sahifalarni tayyorlash va cache orqali tezkor ishlashni ta’minlaydi.
 U public va private sahifalarni boshqaradi, sahifa komponentlarini birlashtiradi va xatoliklarni markaziy tizimga loglaydi.


---
## Bo'lim: PLATON > FORM (uz/platon/form.html)

# Form Service ​

Form Service Platon platformasida dinamik formalarni boshqarish, yaratish, yangilash, o‘chirish va qayta tiklash imkonini beruvchi servisdir.
 U foydalanuvchi so‘rovlariga mos forma meta ma’lumotlarini tayyorlaydi, kirishni tekshiradi va loglarni markaziy tizimga yuboradi.

## Umumiy Ma’lumot ​

Form Service quyidagi imkoniyatlarni ta’minlaydi:
* Formalarni yaratish, yangilash, o‘chirish va klonlash
* Formalarning meta ma’lumotlarini tayyorlash (create, update, restore)
* Foydalanuvchi tomonidan yuborilgan ma’lumotlarni qayta ishlash
* Ma’lumotlar bazasida yozuvlarni yaratish, yangilash va saqlash
* Foydalanuvchiga mos forma komponentlarini tayyorlash
* Public va private formalarni boshqarish
* Cache orqali tezkor ishlashni ta’minlash
* Xatoliklar va ma’lumotlarni markaziy tizimga loglash (NATS orqali)

## Database Interactions ​

Form Service quyidagi ma’lumotlar bazasi operatsiyalarini bajaradi:
* Create: Foydalanuvchi tomonidan yuborilgan ma’lumotlar asosida yangi forma yozuvi yaratadi va saqlaydi
* Update: Mavjud forma yozuvini yangilaydi va o‘zgartirishlarni saqlaydi
* Delete: Forma yozuvlarini mantiqiy yoki jismoniy o‘chirish
* Restore: O‘chirilgan yoki arxivlangan forma yozuvlarini qayta tiklash
* Clone: Mavjud forma yozuvini nusxalash va yangi yozuv sifatida saqlash
* Block/Unblock: Forma yozuvlarining bloklanganligini belgilash va foydalanuvchi kirishini boshqarish
* Retrieve: Ma’lumotlar bazasidan forma va komponentlarni olish, foydalanuvchi ruxsatlariga moslashtirish

Barcha CRUD operatsiyalar transactional tarzda amalga oshiriladi va foydalanuvchi sessiyasi bilan bog‘liq.

## Arxitektura Komponentlari ​
* Form Handler: Forma ma’lumotlarini yaratish, yangilash, klonlash va o‘chirish uchun biznes mantiqini bajaradi
* Form Loader: Forma meta ma’lumotlarini va komponentlarini tayyorlaydi
* Access Validator: Foydalanuvchi ruxsatlarini tekshiradi
* Cache Manager: Formalarni keshda saqlaydi va tezkor ishlashni ta’minlaydi
* Database Manager: CRUD operatsiyalarni bajaradi va transactionlarni boshqaradi
* Logging Service: Xatoliklar va operatsiyalarni markaziy tizimga yuboradi (NATS)
* Session Context: Foydalanuvchi sessiyasini va request parametrlarini boshqaradi

## Form Management Capabilities ​
* Dinamik formalarni yaratish, yangilash, klonlash, o‘chirish va tiklash
* Ma’lumotlar bazasida forma yozuvlarini CRUD operatsiyalari bilan boshqarish
* Formalarning meta ma’lumotlarini tayyorlash va foydalanuvchi so‘rovlariga moslashtirish
* Foydalanuvchi ruxsatlari asosida forma va komponentlarga kirishni tekshirish
* Public va private formalarni farqlash va ularga mos kirishni ta’minlash
* Request body orqali foydalanuvchi tomonidan yuborilgan ma’lumotlarni forma bilan birlashtirish
* Xatoliklar va muhim operatsiyalarni markaziy tizimga loglash

## Cache va Performance ​
* Forma meta ma’lumotlari va komponentlari cache’ga saqlanadi
* Tezkor kirish va server yukini kamaytirish ta’minlanadi
* Keshdagi formalar ma’lum interval bilan avtomatik yangilanadi
* Yangi yoki o‘zgartirilgan formalar cache’ga avtomatik qo‘shiladi
* Eskirgan yoki keraksiz formalar cache’dan o‘chiriladi

## Access Control ​
* Foydalanuvchi ruxsatlariga asoslanib forma va komponentlarga kirish nazorat qilinadi
* Role va permissionlar orqali foydalanuvchining forma kirish huquqi aniqlanadi

## Logging va Monitoring ​
* Foydalanuvchi so‘rovlari va forma operatsiyalari loglanadi
* Xatoliklar va muvaffaqiyatli operatsiyalar NATS orqali markaziy tizimga yuboriladi
* Bloklangan yozuvlar va forma holatlari markaziy monitoring orqali kuzatiladi

## Xulosa ​

Form Service Platon platformasida formalarni modul va komponent asosida boshqarish, foydalanuvchi ruxsatlariga mos formalarni tayyorlash, ma’lumotlar bazasida yozuvlarni saqlash va cache orqali tezkor ishlashni ta’minlaydi.
 U public va private formalarni boshqaradi, yozuvlarni bloklash va unblock qilish imkonini beradi, shuningdek xatoliklar va muhim operatsiyalarni markaziy tizimga loglaydi.


---
## Bo'lim: PLATON > TABLE (uz/platon/table.html)

# Table Service ​

Table Service tizimda dinamik jadvallar bilan ishlash uchun mo‘ljallangan markaziy servis hisoblanadi. Ushbu servis jadval strukturasi, ma’lumotlarni olish, filtrlash, sahifalash, keshlash va ruxsatlarni boshqarishni ta’minlaydi.

## Asosiy vazifalar ​
* Jadval metama’lumotlarini taqdim etish
* Jadval ma’lumotlarini olish
* Ko‘p darajali (level) jadvallarni qo‘llab-quvvatlash
* SQL asosida dinamik ma’lumot olish
* Filtrlangan va bog‘langan (tree/select) ma’lumotlarni qaytarish
* Jadval keshi bilan ishlash
* Xavfsizlik va ruxsatlarni tekshirish
* Public va authenticated rejimlarni qo‘llab-quvvatlash

## Jadval metama’lumotlari ​

Service jadvalning quyidagi konfiguratsion ma’lumotlarini taqdim etadi:
* Jadval umumiy tavsifi
* Ustunlar (columns) konfiguratsiyasi
* Filtrlar va ularning ishlash mantiqi
* Amallar (action/button) sozlamalari
* Sahifalash (pagination) parametrlari

Metama’lumotlar foydalanuvchi huquqlariga qarab cheklanishi mumkin.

## Jadval ma’lumotlari bilan ishlash ​

Jadval ma’lumotlari asosan SQL manba orqali olinadi va:
* Dinamik parametrlar bilan ishlaydi
* Session kontekstidagi qiymatlardan foydalanadi
* Sahifalash bilan qaytariladi

Agar jadval bir nechta darajaga ega bo‘lsa, yuqori darajadagi jadval konfiguratsiyasi asos sifatida ishlatiladi.

## Sahifalash (Pagination) ​
* Har bir jadval uchun sahifa o‘lchami alohida sozlanadi
* Sahifalash bo‘lmagan holatda barcha ma’lumotlar qaytarilishi mumkin
* Natija standart pagination strukturasida taqdim etiladi

## Filtrlash va bog‘langan ma’lumotlar ​

Service murakkab UI komponentlar uchun quyidagi imkoniyatlarni beradi:
* Jadvalga biriktirilgan filtrlar orqali ma’lumot olish
* Daraxtsimon (tree) strukturalar bilan ishlash
* Parent–child bog‘lanishlarni qo‘llab-quvvatlash
* Select va dependent select komponentlari uchun moslashuvchan yechim

## Xavfsizlik va ruxsatlar ​

Service quyidagilarni hisobga oladi:
* Foydalanuvchi autentifikatsiya holati
* Jadvalning ochiq yoki yopiq ekanligi
* Foydalanuvchining jadvalga kirish huquqi

Ruxsatsiz holatlarda jadval metasi yoki ma’lumotlari qaytarilmaydi.

## Keshlash (Cache) ​
* Jadval metama’lumotlari keshlanadi
* Kesh avtomatik ravishda yangilanib turadi
* Kerak bo‘lganda alohida jadval keshi tozalanadi va qayta yuklanadi

Bu mexanizm tizim unumdorligini sezilarli darajada oshiradi.

## Public rejim ​

Service autentifikatsiyasiz foydalanuvchilar uchun ham ishlay oladi:
* Ochiq jadvallar metama’lumotlarini olish
* Ochiq jadval ma’lumotlarini ko‘rish
* Xavfsizlik cheklovlari saqlangan holda ishlash


---
## Bo'lim: PLATON > CRON (uz/platon/cron.html)

# Cron Service ​

Cron Service — Platon platformasida rejalashtirilgan vazifalarni (cron job) boshqarish, ishga tushirish va nazorat qilish uchun mo‘ljallangan servisdir.
 U cron jadvalini ma’lumotlar bazasidan dinamik ravishda yuklaydi, tekshiradi, ishga tushiradi va ularning holatini kuzatadi.

Ushbu servis faqat `cron` Spring profili ostida ishlaydi.

## Umumiy Ma’lumot ​

Cron Service quyidagi imkoniyatlarni ta’minlaydi:
* Ma’lumotlar bazasidan cron vazifalarni dinamik yuklash
* Yangi, o‘zgartirilgan yoki o‘chirilgan vazifalarni avtomatik aniqlash
* Bir nechta bajarish turlarini qo‘llab-quvvatlash (SQL, HTTP so‘rov, JS Eval va boshqalar)
* Cron expressionlarni tekshirish va normalizatsiya qilish
* NATS orqali markazlashtirilgan log yuritish
* Cron vazifalarni qo‘lda yangilash (refresh) imkoniyati

## Arxitektura Komponentlari ​

Cron Service’ning asosiy logikasi joylashgan servis.

Asosiy vazifalari:
* Ma’lumotlar bazasidan cron jadvalini o‘qish
* Yangi yoki yangilangan schedule’larni ro‘yxatdan o‘tkazish
* O‘chirilgan yoki nofaol schedule’larni bekor qilish
* Cron expression va konfiguratsiyalarni tekshirish
* `TaskScheduler` orqali vazifalarni ishga tushirish

## Schedule Hayotiy Sikli ​
* Cron Service ma’lumotlar bazasidan schedule’larni yuklaydi
* Har bir schedule validatsiyadan o‘tkaziladi
* To‘g‘ri schedule’lar scheduler’ga qo‘shiladi
* Noto‘g‘ri schedule’lar bekor qilinadi va loglanadi
* O‘zgartirilgan yoki o‘chirilgan schedule’lar dinamik ravishda yangilanadi

## Cron Schedule Ro‘yxatdan O‘tkazish Jarayoni ​text``Database → Validation → Scheduler → Execution → Logging``

## Cron Schedule formati ​text``* * * * *             har bir minutda
*/30 * * * *          har 30-minutda
30 16 * * *           har kuni 16:30 da
30 16 2 * *           har oyni 2-sanasida 16:30 da
30 16 2 11 *          har yili noyabr oyining 2-sanasida 16:30 da
30 16 * 11 Mon-Fri    har yili noyabr oyining Dushanbadan jumagacha hafta kunlarining 16:30 da``


---
## Bo'lim: PLATON > EXCEL-IMPORT (uz/platon/excel-import.html)

# Excel Import Service ​

Excel Import Service Platon platformasida Excel fayllarini dinamik import qilish, ma’lumotlarni qayta ishlash va ma’lumotlar bazasiga saqlash imkonini beruvchi servisdir.
 U foydalanuvchi tomonidan yuklangan Excel fayllarini o‘qiydi, har bir satrni belgilangan handlerlarga yuboradi, ma’lumotlarni transformatsiya qiladi va bazaga yozadi.

## Umumiy Ma’lumot ​

Excel Import Service quyidagi imkoniyatlarni ta’minlaydi:
* Excel fayllarini import qilish va qayta ishlash
* Har bir satr uchun belgilangan handlerlarni bajarish (SQL yoki JSON asosida)
* Import jarayonida boshlang‘ich va yakuniy SQL kodlarini bajarish (`beforeImportSql` va `afterImportSql`)
* Foydalanuvchi sessiyasiga mos kontekstni qo‘llash
* Xatoliklarni markaziy tizimga loglash (NATS orqali)
* Cache orqali import konfiguratsiyalarini saqlash va tezkor ishlashni ta’minlash
* Import jarayonida tranzaksiyalarni boshqarish

## Arxitektura Komponentlari ​
* Excel Import Engine: Har bir satrni belgilangan handlerlarga yuboradi va ma’lumotlarni qayta ishlaydi
* DataBase Manager: Tranzaksiyalarni boshlash, commit va rollback qilish, SQL so‘rovlarni bajarish
* Cache Manager: Excel import konfiguratsiyalari va row handler’larni cache’da saqlaydi
* Spel Component: Handler ishlash shartlarini tekshiradi
* Logging Service: Xatoliklar va jarayon holatlarini markaziy tizimga yuboradi (NATS)
* ThreadPoolTaskScheduler: Cache va import konfiguratsiyalarini belgilangan intervallar bilan yangilash
* Rest Session Context: Foydalanuvchi sessiyasi va request parametrlarini boshqaradi

## Import Jarayoni ​
* Foydalanuvchi Excel faylini yuklaydi
* Service import konfiguratsiyasini cache yoki ma’lumotlar bazasidan oladi
* `beforeImportSql` bajariladi (agar mavjud bo‘lsa)
* Excel fayl satrma-satr o‘qiladi: 
* Har bir satr uchun barcha ustunlar o‘qiladi va tozalangan ma’lumotlar tayyorlanadi
* Har bir satrga tegishli handler ishlatiladi (SQL yoki JSON)
* Handler ishlash sharti (SpEL) tekshiriladi
* Satrdan olingan natijalar to‘plangan ma’lumotga qo‘shiladi
* `afterImportSql` bajariladi (agar mavjud bo‘lsa)
* Tranzaksiya commit qilinadi, xatolik yuz bersa rollback amalga oshiriladi
* Natija foydalanuvchiga qaytariladi va jarayon loglanadi

## Database Interactions ​

Excel Import Service quyidagi ma’lumotlar bazasi operatsiyalarini bajaradi:
* Retrieve Config: Import konfiguratsiyalarini cache yoki DB’dan olish
* Execute SQL: Importdan oldingi va keyingi SQL kodlarini bajarish
* Row Handlers Execution: Har bir satrni handlerlar orqali DB operatsiyalariga moslashtirish
* Transactional Execution: Barcha import jarayoni tranzaksion tarzda bajariladi

## Cache va Performance ​
* Import konfiguratsiyalari va row handler’lar cache’da saqlanadi
* Tezkor kirish va server yukini kamaytiradi
* Keshdagi konfiguratsiyalar belgilangan intervallar bilan yangilanadi
* Eskirgan yoki o‘zgartirilgan konfiguratsiyalar avtomatik ravishda cache’ga yangilanadi

## Logging va Monitoring ​
* Foydalanuvchi so‘rovlari va import jarayoni loglanadi
* Xatoliklar va muvaffaqiyatli import operatsiyalari NATS orqali markaziy tizimga yuboriladi
* Har bir satr va handler ishlash holati kuzatiladi

## Xulosa ​

Excel Import Service Platon platformasida Excel fayllarini modul va konfiguratsiya asosida import qilish, foydalanuvchi ma’lumotlarini qayta ishlash, ma’lumotlar bazasida saqlash va cache orqali tezkor ishlashni ta’minlaydi.
 U tranzaksion boshqaruv, handlerlar, Shartli bajarish (SpEL), importdan oldingi va keyingi SQL, xatoliklarni loglash kabi imkoniyatlarni taqdim etadi.


---
## Bo'lim: PLATON > EXPORT (uz/platon/export.html)

# Export Service ​

Export Service Platon platformasida turli formatdagi resurslarni (CSV, Excel, Word) yaratish va foydalanuvchiga taqdim etish imkonini beruvchi servisdir.
 U foydalanuvchi so‘rovlarini qabul qiladi, resursni tayyorlaydi, cache orqali tezkor ishlashni ta’minlaydi va loglarni markaziy tizimga yuboradi.

## Umumiy Ma’lumot ​

Export Service quyidagi imkoniyatlarni ta’minlaydi:
* Resurslarni yaratish va eksport qilish (CSV, Excel, Word)
* Resurslarni tayyorlashda foydalanuvchi parametrlarini qo‘llash
* Ma’lumotlar bazasidan kerakli parametrlarni olish va qayta ishlash
* Resurslarni vaqtinchalik fayl tizimida saqlash va foydalanuvchiga yuborish
* Cache orqali resurslarni tezkor kirish uchun boshqarish
* Xatoliklar va operatsiyalarni markaziy tizimga loglash (NATS orqali)

## Database Interactions ​

Export Service quyidagi ma’lumotlar bazasi operatsiyalarini bajaradi:
* Retrieve: Ma’lumotlar bazasidan eksport konfiguratsiyasini olish
* Params SQL Execution: Resurs yaratish jarayonida kerakli parametrlarni olish
* Transactional Handling: Parametrlarni olish va resursni yaratish jarayonlari xavfsiz tarzda amalga oshiriladi

Barcha CRUD operatsiyalar foydalanuvchi sessiyasi bilan bog‘liq.

## Arxitektura Komponentlari ​
* ExportResourceService: Asosiy servis bo‘lib, resurslarni tayyorlash, cache bilan ishlash va foydalanuvchiga yuborishni boshqaradi
* ExportHandler: Resurs formatiga mos ravishda (CSV, Excel, Word) fayl yaratish logikasini bajaradi
* CacheOperation: Resurslarni cache’da saqlash, yangilash va tozalash
* DataBase: Parametrlarni olish va SQL so‘rovlarini bajarish
* ThreadPoolTaskScheduler: Resurslarni va cache’ni rejalashtirilgan intervallarda yangilash
* RestSessionContext: Foydalanuvchi sessiyasi va parametrlarini boshqaradi
* ExportUtils: ExportHandler’larni aniqlash va moslashtirish
* Logging Service: Xatoliklar va muvaffaqiyatli operatsiyalarni markaziy tizimga yuboradi (NATS)
* FileService: Word va Excel shablon fayllarini yuklash va ishlatish

## Resource Management Capabilities ​
* CSV, Excel va Word formatlarida resurslar yaratish va foydalanuvchiga yuborish
* Parametrlar va request body orqali foydalanuvchi ma’lumotlarini resurs bilan birlashtirish
* Fayl tizimida vaqtinchalik resurslarni saqlash va eski fayllarni avtomatik tozalash
* Resurslarni cache orqali tezkor kirish va yukni kamaytirish
* Resurslarni yaratishda xatoliklar va muvaffaqiyatli operatsiyalarni markaziy tizimga loglash

## Cache va Performance ​
* Export resurslari cache’da saqlanadi
* Tezkor kirish va server yukini kamaytirish ta’minlanadi
* Cache’dagi resurslar ma’lum interval bilan yangilanadi
* Eski yoki keraksiz resurslar avtomatik tozalanadi
* Cache ishlatilganida SQL so‘rovlari va fayl yaratilishi kamroq bo‘ladi

## Access Control ​
* Foydalanuvchi ruxsatlariga asoslanib resurslarga kirish nazorat qilinadi
* Role va permissionlar orqali foydalanuvchining eksport resursiga kirish huquqi aniqlanadi
* Admin foydalanuvchilar barcha resurslarga kirish huquqiga ega

## Logging va Monitoring ​
* Foydalanuvchi so‘rovlari va eksport operatsiyalari loglanadi
* Xatoliklar va muvaffaqiyatli operatsiyalar NATS orqali markaziy tizimga yuboriladi
* Resurslarni tayyorlash va yuborish jarayonlari monitoring qilinadi

## Temporary Files Management ​
* Vaqtinchalik yaratilgan fayllar fayl tizimida saqlanadi (`media/temp/`)
* Har kuni kechqurun 12:00 da eski fayllar avtomatik o‘chiriladi
* Fayl yaratishda MD5 hash orqali unikal nom beriladi
* Fayllar eksport jarayonida fayl tizimidan foydalanuvchiga yuboriladi

## Handlers ​

### CSV Handler ​
* CSV formatida fayl yaratadi
* UTF-8 BOM qo‘shadi
* Random satrlarga checksum qo‘shadi
* Foydalanuvchi ma’lumotlarini va request body’ni faylga qo‘shadi

### Excel Handler ​
* Excel shablon faylini JXLS yordamida ishlaydi
* SQL parametrlarini va foydalanuvchi request body’ni shablonga qo‘shadi
* Checksum bilan satrlarni himoya qiladi
* Yaralgan Excel faylini foydalanuvchiga yuboradi

### Word Handler ​
* Word shablon faylini Aspose Words orqali ishlaydi
* Nested map va list ma’lumotlarini tekislashtiradi (flatten)
* Request body va SQL parametrlarini shablon o‘zgaruvchilari bilan almashtiradi
* Yaralgan Word faylini foydalanuvchiga yuboradi

## Xulosa ​

Export Service Platon platformasida turli formatdagi resurslarni foydalanuvchiga yuborish va tezkor ishlashni ta’minlaydi.
 U CSV, Excel va Word formatlarini qo‘llab-quvvatlaydi, SQL parametrlarini va foydalanuvchi ma’lumotlarini birlashtiradi, cache va vaqtinchalik fayl tizimi orqali samarali ishlashni ta’minlaydi, shuningdek xatoliklar va muvaffaqiyatli operatsiyalarni markaziy tizimga loglaydi.


---
## Bo'lim: PLATON > FILE (uz/platon/file.html)

# File Service ​

File Service tizimda fayllarni yuklash, saqlash, yuklab olish va qayta ishlash uchun mo‘ljallangan servis hisoblanadi. Ushbu servis fayllar bilan bog‘liq barcha jarayonlarni markazlashgan holda boshqaradi.

## Asosiy vazifalari ​
* Foydalanuvchi tomonidan yuborilgan fayllarni qabul qilish
* Fayllarni belgilangan qoidalarga asosan tekshirish
* Fayllarni server yoki obyektli storage’da saqlash
* Fayllarni va rasmlarni qayta yuklab berish
* Rasmlarni dinamik o‘lchamlarga moslab qayta ishlash
* Fayllarni bir storage’dan boshqasiga migratsiya qilish
* Barcha muhim xatoliklarni loglash

## Fayl yuklash imkoniyatlari ​

File Service fayllarni bir nechta usulda qabul qila oladi:
* Forma orqali yuborilgan fayllar
* Kategoriya asosida yuborilgan fayllar
* Base64 formatda yuborilgan fayllar

Yuklash jarayonida quyidagilar tekshiriladi:
* Fayl hajmi belgilangan limitdan oshmasligi
* Fayl kengaytmasi ruxsat etilgan formatlar ichida bo‘lishi
* Fayl kategoriyaga mos kelishi
* Fayl nomida xavfli yoki noto‘g‘ri yo‘l ko‘rsatkichlari bo‘lmasligi

## Fayllarni saqlash mexanizmi ​

Fayllar ikki xil usulda saqlanishi mumkin:
* Server fayl tizimida
* MinIO obyektli storage’da

Saqlash jarayonida:
* Fayl haqida barcha meta ma’lumotlar bazaga yoziladi
* Fayl joylashuvi va saqlash turi qayd etiladi
* Sana, hajm, format va kategoriya ma’lumotlari saqlanadi
* Operatsiya tranzaksiya asosida bajariladi

## Fayllarni yuklab olish ​

File Service saqlangan fayllarni foydalanuvchiga qaytarib bera oladi:
* Oddiy fayllar attachment sifatida beriladi
* Rasmlar brauzerda ko‘rish uchun inline rejimda beriladi
* Fayl mavjud bo‘lmasa, mos xatolik qaytariladi
* Content-Type va fayl nomi avtomatik belgilanadi

## Rasmlar bilan ishlash ​

Rasmlar uchun qo‘shimcha imkoniyatlar mavjud:
* Kenglik va balandlik bo‘yicha aniq o‘lcham berish
* Foiz asosida masshtablash
* Faqat kenglik yoki faqat balandlik bo‘yicha moslash
* Agar kerakli o‘lcham mavjud bo‘lmasa, avtomatik yaratish
* Qayta ishlangan rasmni kesh sifatida saqlash

## Migratsiya jarayoni ​

File Service fayllarni storage’lar o‘rtasida ko‘chirishni qo‘llab-quvvatlaydi:
* Serverdan MinIO’ga ko‘chirish
* MinIO’dan serverga qaytarish
* Limit asosida bosqichma-bosqich migratsiya
* Har bir migratsiya natijasi statistik ko‘rinishda qaytariladi

## Xavfsizlik va xatoliklar ​
* Noto‘g‘ri so‘rovlar uchun aniq xatoliklar qaytariladi
* Fayl topilmasa yoki ruxsat bo‘lmasa xatolik beriladi
* Saqlash jarayonidagi muammolar loglanadi
* Muhim xatoliklar monitoring tizimiga yuboriladi

## Xulosa ​

File Service — bu fayllar bilan ishlash uchun to‘liq funksional servis bo‘lib, u yuklashdan tortib, saqlash, qayta ishlash va migratsiyagacha bo‘lgan barcha jarayonlarni o‘z ichiga oladi. Servis yuqori xavfsizlik, moslashuvchanlik va kengaytiriluvchanlikni ta’minlaydi.


---
## Bo'lim: PLATON > LOGGING (uz/platon/logging.html)

# Logging Service ​

Logging Service — platformada yuz beradigan barcha log hodisalarini yig‘ish, qayta ishlash va saqlash uchun mo‘ljallangan markaziy servisdir.
 U asinxron tarzda yuborilgan log xabarlarini qabul qiladi va ularni tegishli log turlariga qarab qayta ishlaydi.

## Asosiy Vazifalar ​
* Markaziy log kanali orqali yuborilgan xabarlarni tinglash
* Log xabarlarini parse qilish va turiga qarab ajratish
* Turli log turlarini mos servislar orqali qayta ishlash
* Loglarni ma’lumotlar bazasida saqlash
* Monitoring va metrikalar tizimlariga loglarni uzatish
* Foydalanuvchi va tizim darajasida loglash qoidalarini qo‘llash

## Event-driven Arxitektura ​

Logging Service event-driven (hodisalarga asoslangan) arxitektura asosida ishlaydi:
* Markaziy log kanali (message broker) ga obuna bo‘ladi
* Loglar asinxron tarzda qabul qilinadi
* Asosiy biznes jarayonlariga ta’sir qilmasdan qayta ishlanadi
* Xatolarga chidamli va mustaqil ishlashni ta’minlaydi

## Qo‘llab-quvvatlanadigan Log Turlari ​

### User Logs (Foydalanuvchi Loglari) ​
* Foydalanuvchi tomonidan bajarilgan amallar loglanadi
* Foydalanuvchining shaxsiy loglash darajasi hisobga olinadi
* Keraksiz yoki filtrlangan endpointlar loglanmaydi
* Loglar foydalanuvchi identifikatori bilan bog‘lanadi
* Natijada foydalanuvchiga tegishli audit izi yaratiladi

### Cron Logs (Cron / Schedule Loglari) ​
* Rejalashtirilgan vazifalarning bajarilish holati loglanadi
* Cron nomi va cron expression saqlanadi
* Xatolik yoki muvaffaqiyat holatlari qayd etiladi
* Loglar tizim (root) foydalanuvchisi nomidan yoziladi
* Rejalashtirilgan jarayonlar monitoringi uchun ishlatiladi

### SQL Logs ​
* SQL so‘rovlar va ularning bajarilish statistikasi qayd etiladi
* Ma’lumotlar asinxron tarzda qayta ishlanadi
* Tashqi monitoring va analytics tizimlariga yuboriladi
* Asosiy servis ishiga yuklama bermaydi

## Loglarni Saqlash ​
* User va Cron loglari ma’lumotlar bazasida saqlanadi
* Har bir log quyidagi ma’lumotlarni o‘z ichiga oladi: 
* Foydalanuvchi identifikatori
* So‘rov yo‘li (path)
* So‘rov parametrlari
* Xabar (message)
* Batafsil ma’lumotlar (details)
* Log darajasi (INFO, ERROR va boshqalar)

## Filtrlash va Nazorat ​
* Foydalanuvchi loglash darajasiga qarab loglar yoziladi
* Ayrim texnik endpointlar logdan chiqarib tashlanadi
* Log darajalari orqali keraksiz shovqin kamaytiriladi

## Monitoring va Integratsiya ​
* SQL loglar tashqi monitoring tizimlariga uzatiladi
* Loglar asinxron executor orqali jo‘natiladi
* Tizim konfiguratsiyasi orqali yoqish yoki o‘chirish mumkin

## Xulosa ​

Logging Service platformadagi barcha muhim hodisalarni markazlashgan holda yig‘adi,
 ularni turlarga ajratadi va xavfsiz tarzda saqlaydi.
 Bu servis audit, monitoring va tizim barqarorligini ta’minlashda muhim rol o‘ynaydi.


---
## Bo'lim: PLATON > MAIL (uz/platon/mail.html)

# Elektron Pochta Yuborish Xizmati ​

Elektron Pochta Yuborish Xizmati tizimda oldindan tayyorlangan va saqlangan elektron xabarlarni yetkazish uchun javobgardir.
 U fon rejimida ishlaydi va foydalanuvchi to‘g‘ridan-to‘g‘ri aralashuvisiz elektron xabarlarni avtomatik ravishda yuboradi.

## Asosiy Vazifalari ​
* Yuborilmagan elektron xabarlarni davriy tekshiradi
* Belgilangan pochta serveri orqali elektron xabarlarni yuboradi
* Har bir xabarni qayta ishlashdan keyin holatini yangilaydi
* Xatoliklarni boshqaradi va xatolik haqida ma'lumot saqlaydi
* Yuborilgan va yuborilmagan xabarlar bo‘yicha statistik ma’lumot beradi

## Fon Rejimidagi Ishlash ​
* Xizmat belgilangan vaqt oralig‘ida avtomatik ishlaydi
* Har bir ishga tushirilishda cheklangan sonli xabarlar qayta ishlanadi
* Bu usul pochta serverining ortiqcha yuklanishini oldini oladi
* Barqaror va prognoz qilinadigan elektron pochta yetkazilishini ta’minlaydi


---
## Bo'lim: PLATON > MULTI-DATABASE (uz/platon/multi-database.html)

# Multi-Database ​

Ushbu mikroservis tizim ichidagi bir nechta ma’lumotlar bazasi konfiguratsiyalarini boshqarish uchun mo‘ljallangan.
 Bu service orqali 1ta proyectda bir nechta databaselarni yaratib ular ustida amallar bajarish mumkin.

## Asosiy Vazifalari ​
* Ma’lumotlar bazasi konfiguratsiyasini nomi bo‘yicha olish
* Barcha ma’lumotlar bazasi konfiguratsiyalarini olish
* Yangi ma’lumotlar bazasi konfiguratsiyalarini yaratish
* Mavjud konfiguratsiyalarni nomi bo‘yicha yangilash
* Ma’lumotlar bazasi konfiguratsiyalarini nomi bo‘yicha o‘chirish
* Ma`lumotlar bazasiga querylarni execute qilish

## Ishlash Tartibi ​
* Turli ma’lumotlar bazalari turlarini (PostgreSQL, Oracle, MySQL, ClickHouse, SQL Server) qo‘llab-quvvatlovchi service qatlamidan foydalanadi
* Database turiga qarab mos service implementatsiyasini factory orqali tanlaydi
* Bir nechta muhit uchun dinamik ma’lumotlar bazasi konfiguratsiyalarini boshqarishni qo‘llab-quvvatlaydi
* Barcha operatsiyalarni loglab boradi, shunda izlanish va tekshirish osonlashadi


---
## Bo'lim: PLATON > SMS (uz/platon/sms.html)

# SMS Service ​

Ushbu mikroservis SMS xabarlarini yuborish, ularning holatini yangilash va yuborish navbatini boshqarish uchun mo‘ljallangan.

## Asosiy Vazifalari ​
* Yangi SMS xabarlarini yaratish va navbatga qo‘yish
* SMS xabarlarining holatini yangilash (yetkazilgan, xatolik, yuborilmagan)
* SMS yuborish navbatini tekshirish va xabarlarni yuborish
* Yuborish jarayonidagi muvaffaqiyat va xatoliklarni loglash

## Ishlash Tartibi ​
* SMS xabarlari konfiguratsiyalangan gateway orqali REST API yordamida yuboriladi
* Telefon raqamlari tekshiriladi; noto‘g‘ri raqamlar avtomatik tarzda maxsus holatga o‘tkaziladi
* Gateway javobiga qarab xabar holati yangilanadi (Submitted, NotSent, PhoneInvalid)
* Har bir SMS yuborish operatsiyasi loglanadi, muvaffaqiyat va xatoliklar soni qayd etiladi
* Yuborish navbati belgilangan jadval bo‘yicha tekshiriladi va xabarlar yuboriladi


---
## Bo'lim: PLATON > STORE (uz/platon/store.html)

# Store Service ​

Ushbu mikroservis fayllarni saqlash, yuklash, yangilash, o‘chirish va ma’lumotlarini olish imkonini beradi.

## Asosiy Vazifalari ​
* Fayllarni va kataloglarni olish
* Fayl yoki katalog haqida batafsil ma’lumot olish
* Katalog ichidagi barcha fayllarni va papkalarni ko‘rish
* Fayllarni sahifa bo‘yicha ko‘rsatish
* Yangi fayllarni yuklash
* Fayl nomini yangilash
* Yangi katalog yaratish yoki mavjud katalogni boshqarish
* Fayllarni yoki kataloglarni o‘chirish

## Ishlash Printsipi ​
* Fayllar belgilangan papkada saqlanadi va yo‘llar orqali boshqariladi
* Yuklanayotgan fayllar nomi tozalanadi va kerak bo‘lsa kirill harflari lotin harflariga o‘tkaziladi
* Fayl yoki katalog mavjudligini tekshiradi, mavjud bo‘lsa xatolik beradi
* Faylni olishda, agar fayl rasm bo‘lsa, brauzerda ko‘rsatish, boshqa fayllar uchun esa yuklab olish formatida taqdim etiladi
* Fayl va kataloglar haqida ma’lumot: nomi, yo‘li, o‘lchami, turi va ichidagi elementlar soni qaytariladi
* Fayllarni ko‘rish va sahifalash imkoniyati mavjud
* Har bir operatsiya loglanadi va xatoliklar monitoring tizimiga yuboriladi

## Qo‘llab-quvvatlanadigan turlar ​
* Fayl
* Katalog

## Xavfsizlik va xatoliklarni boshqarish ​
* Fayl yoki katalog topilmasa tegishli xatolik qaytariladi
* Fayl yoki katalog allaqachon mavjud bo‘lsa xatolik bilan qaytadi
* Barcha operatsiyalar loglanadi va tizimda kuzatuv imkoniyati mavjud


---
## Bo'lim: PLATON > TRANSLATION (uz/platon/translation.html)

# Translation Service ​

Ushbu mikroservis loyihaning turli tillardagi matnlarini boshqarish, keshlarni yangilash va front-end hamda mobil ilovalar uchun tarjimalarni taqdim etish uchun mo‘ljallangan.

## Asosiy Vazifalari ​
* Tarjimalar keshini yangilash
* Front-end ilovasi uchun barcha tarjimalarni olish
* Mobil ilova uchun barcha tarjimalarni olish
* Loyiha va Platon tarjimalarini DB dan olish
* Tarjimalarni kalit-qiymat shaklida xaritaga aylantirish
* Matnlarni tarjima orqali qayta ishlash
* Hozirgi foydalanuvchi tilini aniqlash va mos tarjimani tanlash

## Ishlash Printsipi ​
* DB va Redis kesh orqali tarjimalar boshqariladi
* DB dan Platon va loyiha tarjimalarini olib, ularni birlashtirish
* Backend va front-end uchun tarjimalar alohida kategoriyalarda saqlanadi
* Tarjimalar kerakli til indeksiga qarab tanlanadi, agar til mavjud bo‘lmasa default qiymat ishlatiladi
* Tarjima keshini yangilashda eski, yangi va faol bo‘lmagan kalitlar avtomatik boshqariladi


---
## Bo'lim: COMPONENTS > REMOTES (uz/components/remotes.html)

### Remotes ​

Remotes folder barcha remote project'lar uchun container. Bu o'zi project emas, balki remote module'larni tashkil qiladigan directory.

Structure:``remotes/
├── moduleName1/
├── moduleName2/
└── moduleName3/``

Usage Pattern: Barcha remote module'lar platforma bo'ylab `remotes/moduleName` sifatida murojaat qilinadi. Har bir remote module mustaqil project bo'lib, alohida develop qilinishi va deploy qilinishi mumkin.

Key Characteristics:
* Independent development va deployment
* Module federation support
* Lazy loading imkoniyatlari
* Isolated codebase'lar


---
## Bo'lim: COMPONENTS > SHARED (uz/components/shared.html)

### Shared ​

Shared project butun platforma bo'ylab ishlatiladigan reusable resource'larni o'z ichiga oladi:
* Components - Reusable Vue component'lar
* Utils - Utility function'lar va helper'lar
* Composables - Vue composition API composable'lar
* Helpers - Umumiy vazifalar uchun helper function'lar
* Constants - Shared constant'lar va configuration'lar

Shared imkoniyatlaridan to'liq foydalanish uchun `webpack.config.js` faylidagi `ModuleFederationPlugin` quyidagicha sozlang.js``  const { ModuleFederationPlugin } = require("webpack").container;
  new ModuleFederationPlugin({ 
        ...
      remotes: {
        shared: `shared@http://localhost:8083/remoteEntry.js`
      }, 
    })``

`sharedApp.js` faylini quyidagicha yaratingjs``const PlatonSharedApp = await import("shared/PlatonSharedApp") 
export const {
  // Components
	NotFound,
	PModal,
	PlatonChart,
	PlatonMapChart,
	Notification,
	NotificationContainer,
	PageLoadingView,
  EIMZOSign,
  RsImzoSign,
  IconPickerDialog,
  MapViewer,
  MapMarkerPicker,
	LangPicker,

  // Utils
	MapTiles,
  translations,
  themeChange,
  SharedStore,
  SharedStyles,
  SharedMixins,
  SharedDirectives,
  CreateHttpClient,
  VueLeafletImport,
  CodeMirrorImports,
  langLa,
  DrawingToolbarUz,
  PlatonModule
} = PlatonSharedApp

export default PlatonSharedApp.default``

main.js ichida `shared` ni sozlangjs``  import PlatonSharedApp, {SharedStore} from "./sharedApp.js" 
  Vue.use(PlatonSharedApp, { 
    components: ["LangPicker", ...], 
    $api: { baseURL: API_ENDPOINT, store: SharedStore },
    ...
    })``

`components` ichiga istalgan component nomini yozing va u global `Vue` componentlar qatoriga qo'shiladi.

Asosiy afzalliklari:
* Module'lar bo'ylab kod reusability
* Consistent UI/UX pattern'lar
* Shared business logic
* Centralized utility'lar


---
## Bo'lim: COMPONENTS > STARTER (uz/components/starter.html)

### Starter ​

Starter bu platon remote modul yozish uchun boshlang'ich loyiha sifatida xizmat qiladi. Starter modulini Platon Starter sahifasi orqali yuklab olish va yangi modul uchun sozlash kerak bo'ladi.

Starter quyidagicha faylar va papkalardan iborat bo'ladi huddi yangi lekin kerakli plaginlar o'rnatilgan va sozlangan holda.``.
├─ src
│  ├─router
│  ├─utils
│  ├─views
│  ├─App.vue
│  ├─bootstrap.js
│  ├─main.js
│  └─sharedApp.js
├─ .env 
├─ package.json 
├─ ...
└─ webpack.config.js.json``

Eslatma

Starter bilan yangi modul yozish uchun Platon Shared moduli haqida to'liq ma'lumotga ega bo'lish kerak. Starter modulidagi barcha pluginlar to'liq Platon Shared moduliga tayanadi.

### Starter Shared config ​

Starter uchun shared moduli avvaldan sozlangan bo'ladi agar sozlanmagan bo'lsa quyidagicha sozlang. Agar sizda shared moduli sozlangan bo'lsa `sharedUrl` o'rniga shared moduli linkini joylashtiring. Masalan: `http://localhost:8080/```...
 plugins: [ 
    new ModuleFederationPlugin({ 
      ...,
      remotes: {
        shared: `shared@${sharedUrl}remoteEntry.js`
      },
      shared: {
        vue: {
          singleton: true,
          eager: true,
          requiredVersion: "^2.7.16"
        }
      }
    })
  ]``

Starter ichiga Shared moduli to'g'ri sozlangan bo'lsa Shared moduli ichidagi barcha component va utillar starter ichida ishlaydi.

Eslatma

Starter moduli uchun Platon Shared to'g'ri sozlanmasa starter moduli ishlamaydi. Starter modulini Platon Sharedsiz ishlatish imkonsiz.

### Starter Router ​

Starter router strukturasi ikkita `index.js` va `routes.js` fayldan iborat bo'ladi. `index.js` bu starterni o'zida ishlash uchun routerlar yoziladi huddi Vue proekt kabi. `routes.js` bu Host uchun maxsus routerlar ro'yxati hisoblanadi ushbu fayldagi ma'lumotlar Host uchun expose qilinadi va Host proekt avtomatik prefix qo'shadi.``export default [
  {
    path: "/",
    name: "MyPage",
    meta: { platonLayout: true },
    component: () => import("../views/MyStarterPage.vue")
  }, 
];``

### publicPath nima? ​

Webpack dagi Module Federation ishlatayotganda publicPath — bu build qilingan fayllar (chunks, remoteEntry.js va boshqalar) qaysi URL orqali yuklanishini bildiradigan base path. Webpack brauzerga fayllarni qayerdan olish kerakligini `publicPath` orqali biladi. `publicPath` host moduli uchun juda mukin hisoblanadi sizning modulingizdagi momponent va sahifalarni yuklash uchun `publicPath` foydalaniladi.

### Xulosa ​

Yangi modul yozish uchun starterda barcha configlar sonlangan shared va starter modullarini yuklab oling va config `.env` portlarni sozlang. Starterdagi barcha component va sahifalar vue proektkabi bo'ladi. Qo'shimcha router va webpack sozlamalari mavjut. Sharedda mavjut bo'lmagan istalgan plugin yoki componentni `npm` paket sifatida yuklab olish mumkin host app barcha `npm` plugin va componentlarni qo'llab quvatlaydi.

Afzallikalri:
* Configa va pluginlar tayyor
* Theme va Componentlar Platon Shareddan olinadi
* Host modulisiz yangi modul yaratish imkoniyati