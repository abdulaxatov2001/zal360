# Visits (Tashriflar) & File Upload API Hujjatlari

Ushbu hujjat mobil ilova dasturchilari uchun sport zaliga tashriflarni (visits/check-in) amalga oshirishda zarur bo'lgan tekshiruvlar va fayllarni (rasm, selfi va h.k.) serverga yuklash hamda boshqarish API'larini o'z ichiga oladi.

- **Asosiy API domeni:** `https://zal360.uz/endpoint/api`
- **Fayl xizmati domeni:** `https://zal360.uz/file/api`
- **Autentifikatsiya formati:** `Authorization: Bearer <access_token>`

---

## 1. Tashriflar uchun fayl/rasm yuklash (Upload Visit File)

Foydalanuvchi sport zaliga tashrif buyurganida yoki QR kod orqali identifikatsiyadan o'tayotganida talab etiladigan fotosuratni (selfi yoki rasm) `visits` kategoriyasiga yuklash uchun ishlatiladi. Ushbu so'rov muvaffaqiyatli bajarilgach, server faylning noyob identifikatori (`id`) va parametrlarini qaytaradi. Ushbu `id` keyinchalik tashrifni (visit check-in) tasdiqlovchi so'rovlarga biriktiriladi.

- **URL:** `https://zal360.uz/file/api/v1/public/upload/category/visits`
- **Method:** `POST`
- **Content-Type:** `multipart/form-data`
- **Headers:**
  - `Authorization: Bearer <access_token>`

---

### So'rov (Request Body — `form-data`)

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `file` | `file` (Binary / Image) | Ha | Yuklanayotgan fotosurat yoki fayl (masalan: `.jpg`, `.jpeg`, `.png`) |

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/file/api/v1/public/upload/category/visits' \
--header 'Authorization: Bearer eyJraWQiOiIzNTdiNDUxNy0zOGQ2LTQwMTQtODczNC0zY2FkMDI5MGI4ZTgiLCJhbGciOiJSUzI1NiJ9.eyJ1cGRhdGVfaWQiOiIiLCJzdWIiOiIzYWQ5ZDFlMS1mNjM3LTQ1N2UtYj' \
--form 'file=@"/Users/macbook_uz/Downloads/2026-09-08 11.28.46.jpg"'
```

---

### Javoblar (Responses)

#### 1. Muvaffaqiyatli javob (200 OK)

Fayl serverga muvaffaqiyatli yuklanganda, uning parametrlari va saqlangan identifikatori qaytariladi:

```json
{
    "id": "8a818196c9def99832c211f7",
    "name": "2026-09-08 11.28.46",
    "size": 28654,
    "extension": "jpg",
    "contentType": "image/jpeg",
    "createdAt": "08.09.2026 14:31:22"
}
```

#### Javob parametrlarining tavsifi:

| Maydon | Turi | Tavsifi |
| :--- | :--- | :--- |
| `id` | `string` | Yuklangan faylning noyob identifikatori (File ID). Keyingi tashrif (visit) API'lariga aynan shu ID uzatiladi |
| `name` | `string` | Yuklangan faylning dastlabki nomi |
| `size` | `integer` | Fayl hajmi (baytlarda) |
| `extension` | `string` | Fayl formati kengaytmasi (masalan: `jpg`, `png`) |
| `contentType` | `string` | Faylning MIME turi (masalan: `image/jpeg`) |
| `createdAt` | `string` | Fayl serverga yuklangan sana va vaqt (`DD.MM.YYYY HH:mm:ss` formatida) |

---

## 2. Foydalanuvchining zalga tashrif buyura olishini tekshirish (Check Can Visit)

Foydalanuvchi sport zaliga tashrif buyurishidan (check-in qilishdan) oldin, uning obunasi faolmi, tashriflar limiti yetarlimi yoki zalga kirish huquqi mavjudligini oldindan tekshirish uchun ishlatiladi.

- **URL:** `/mobile/v1/get/check/can_visit`
- **To'liq URL:** `https://zal360.uz/endpoint/api/mobile/v1/get/check/can_visit`
- **Method:** `GET`
- **Headers:**
  - `Authorization: Bearer <access_token>`

---

### So'rov (Request)

`GET` so'rovi bo'lgani sababli `body` talab qilinmaydi. Avtorizatsiya headeri orqali joriy foydalanuvchi obunasi holati tekshiriladi.

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/endpoint/api/mobile/v1/get/check/can_visit' \
--header 'Authorization: Bearer eyJraWQiOiIzNTdiNDUxNy0zOGQ2LTQwMTQtODczNC0zY2FkMD...'
```

---

### Javoblar (Responses)

#### 1. Muvaffaqiyatli javob (200 OK)

Foydalanuvchining tashrif buyurish holati tekshirilganda qaytadigan javob:

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-09-09T05:50:40.585+00:00",
    "code": null,
    "path": null,
    "data": {
        "can_visit": true,
        "message": "Ruxsat berildi"
    },
    "response": {},
    "statusText": "OK",
    "status": 200
}
```

#### Javob parametrlarining tavsifi (`data` obyekti):

| Maydon | Turi | Tavsifi |
| :--- | :--- | :--- |
| `can_visit` | `boolean` | Foydalanuvchi zalga tashrif buyura olish holati (`true` — ruxsat berilgan, `false` — cheklov mavjud yoki ruxsat yo'q) |
| `message` | `string` | Tekshiruv natijasi bo'yicha foydalanuvchiga ko'rsatiladigan xabar (masalan: `"Ruxsat berildi"`) |

---

## 3. Davomatni jo'natish / Tashrifni qayd etish (Submit Visit / Check-in)

Foydalanuvchining sport zaliga tashrifini (davomatini) tizimda tasdiqlash va ro'yxatga olish (check-in) uchun ishlatiladi. Ushbu so'rov orqali tashrif sanasi (`visit_date`), tashrif paytidagi fotosurat IDsi (`visit_photo_id`) hamda mijozning asosiy fotosurati IDsi (`main_photo_id`) yuboriladi.

- **URL:** `/mobile/v1/post/visits`
- **To'liq URL:** `https://zal360.uz/endpoint/api/mobile/v1/post/visits`
- **Method:** `POST`
- **Content-Type:** `application/json`
- **Headers:**
  - `Authorization: Bearer <access_token>`
  - `Content-Type: application/json`

---

### So'rov (Request Body — JSON)

```json
{
    "visit_date": "2026-09-11",
    "visit_photo_id": "8a8181963e9c4f102dfe2228",
    "main_photo_id": "8a8181963e9c4f102dfe2228"
}
```

#### So'rov parametrlarining tavsifi:

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `visit_date` | `string` | Ha | Tashrif sanasi (`YYYY-MM-DD` formatida, masalan: `"2026-09-11"`) |
| `visit_photo_id` | `string` | Ha | Tashrif jarayonida olingan fotosurat IDsi (1-bo'limdagi `/file/api/v1/public/upload/category/visits` orqali yuklangan rasm `id`si) |
| `main_photo_id` | `string` | Ha | Foydalanuvchining profil/taqqoslash uchun asosiy fotosurati IDsi |

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/endpoint/api/mobile/v1/post/visits' \
--header 'Authorization: Bearer eyJraWQiOiIzNTdiNDUx...' \
--header 'Content-Type: application/json' \
--data '{
    "visit_date": "2026-09-11",
    "visit_photo_id": "8a8181963e9c4f102dfe2228",
    "main_photo_id": "8a8181963e9c4f102dfe2228"
}'
```

---

### Javoblar (Responses)

#### 1. Muvaffaqiyatli javob (200 OK)

Tashrif (davomat) muvaffaqiyatli qayd etilganda:

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-09-11T09:29:21.789+00:00",
    "code": null,
    "path": null,
    "data": {
        "check_in": "2026-09-10",
        "id": "85b537c8-45ef-462c-88f3-5325423580c2"
    },
    "response": {},
    "statusText": "OK",
    "status": 200
}
```

#### Javob parametrlarining tavsifi (`data` obyekti):

| Maydon | Turi | Tavsifi |
| :--- | :--- | :--- |
| `id` | `string` (UUID) | Qayd etilgan tashrif (check-in) yozuvining tizimdagi noyob identifikatori |
| `check_in` | `string` | Tizimda qayd etilgan tashrif sanasi (`YYYY-MM-DD` formatida) |

---

### Ishlatilish Ketma-ketligi (To'liq Check-in Workflow):

1. **Oldindan tekshirish (1-qadam):**
   Foydalanuvchi zalga kelganda uning tashrif buyura olish huquqi tekshiriladi:
   `GET https://zal360.uz/endpoint/api/mobile/v1/get/check/can_visit`
   Agar `can_visit: true` qaytsa, keyingi bosqichga o'tiladi.

2. **Suratga olish va rasm yuklash (2-qadam):**
   Foydalanuvchi selfi / tashrif fotosuratini oladi va ushbu rasm serverga yuklanadi:
   `POST https://zal360.uz/file/api/v1/public/upload/category/visits`
   Muvaffaqiyatli javobdan rasmning noyob identifikatori `id` olinadi (bu `visit_photo_id` bo'ladi).

3. **Davomatni jo'natish / Tashrifni ro'yxatdan o'tkazish (3-qadam):**
   Olingan `visit_photo_id`, foydalanuvchining asosiy rasm IDsi (`main_photo_id`) va joriy sana (`visit_date`) bilan davomat yuboriladi:
   `POST https://zal360.uz/endpoint/api/mobile/v1/post/visits`
   Serverdan `id` (check-in UUID) va `check_in` sanasi qaytib, mijoz zalga kirgan deb belgilanadi.

