# Visits (Tashriflar) & File Upload API Hujjatlari

Ushbu hujjat mobil ilova dasturchilari uchun sport zaliga tashriflarni (visits/check-in) amalga oshirishda zarur bo'lgan fayllarni (rasm, selfi va h.k.) serverga yuklash va boshqarish API'larini o'z ichiga oladi.

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

### Ishlatilish Ketma-ketligi (Workflow):
1. Foydalanuvchi zalga keladi va zalning QR kodini skanerlaydi.
2. Ilova orqali identifikatsiya uchun suratga olinadi.
3. Fotosurat ushbu API (`/file/api/v1/public/upload/category/visits`) orqali serverga yuklanadi va javobdan `id` olinadi.
4. Olingan fayl `id`si va filialning `branch_id`si bilan birgalikda mijoz tashrifi (client visit / check-in) so'rovi yuboriladi.
