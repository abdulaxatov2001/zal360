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

### Ishlatilish Ketma-ketligi (Workflow):
1. Foydalanuvchi ilovada yoki zalga kelganda uning tashrif buyura olishi tekshiriladi (`/mobile/v1/get/check/can_visit`).
2. Agar `can_visit: true` bo'lsa, foydalanuvchi zalning QR kodini skanerlaydi.
3. Ilova orqali identifikatsiya uchun suratga olinadi.
4. Fotosurat ushbu API (`/file/api/v1/public/upload/category/visits`) orqali serverga yuklanadi va javobdan `id` olinadi.
5. Olingan fayl `id`si va filialning `branch_id`si bilan birgalikda mijoz tashrifi (client visit / check-in) so'rovi amalga oshiriladi.
