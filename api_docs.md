# Mobile API Hujjatlari (API Documentation)

Ushbu hujjat mobil ilova dasturchilari uchun tayyorlangan bo'lib, server bilan aloqa qilishda ishlatiladigan barcha API'larni o'z ichiga oladi. Asosiy domen: `https://zal360.uz/endpoint/api`

---

## 1. SMS kod yuborish

Foydalanuvchining telefon raqamiga tasdiqlash kodini (SMS) yuborish uchun ishlatiladi. Agar tizimda ushbu raqamga allaqachon kod yuborilgan bo'lsa (va hali muddati tugamagan bo'lsa), API xatolik qaytaradi.

- **URL:** `/mobile/v1/sent_code/sms`
- **Method:** `POST`
- **Content-Type:** `application/json`

### So'rov (Request Body)

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `phone` | `string` | Ha | Foydalanuvchining telefon raqami (kodisiz yoki kod bilan). Masalan: `998943234311` |

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/endpoint/api/mobile/v1/sent_code/sms' \
--header 'Content-Type: application/json' \
--data '{
    "phone": "998943234311"
}'
```

---

### Javoblar (Responses)

#### Muvaffaqiyatli javob (200 OK)
Kod muvaffaqiyatli yuborilganda quyidagi ma'lumot qaytadi.

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-13T13:03:50.751+00:00",
    "code": null,
    "path": null,
    "data": {},
    "response": null,
    "status": 200,
    "statusText": "OK"
}
```

#### Xatolik javobi (400 Bad Request)
Agar foydalanuvchiga allaqachon kod yuborilgan bo'lsa va uning vaqti hali tugamagan bo'lsa, quyidagi xatolik (Already code send) qaytadi. Dasturchi buni ushlab "Kod allaqachon yuborilgan" degan xabarni chiqarishi kerak.

```json
{
    "error": "400 BAD_REQUEST \"400 BAD_REQUEST \\\"Already code send\\\"\"",
    "message": "Error on stage save_code : 400 BAD_REQUEST \"Already code send\"",
    "timestamp": "2026-08-13T13:01:51.762+00:00",
    "code": null,
    "path": "/mobile/v1/sent_code/sms",
    "data": null,
    "response": null,
    "status": 400,
    "statusText": "Bad Request"
}
```

---

## 2. SMS kodni tasdiqlash (Check code)

Foydalanuvchi telefoniga kelgan kodni tekshirish uchun ishlatiladi.

- **URL:** `/mobile/v1/check_code/sms`
- **Method:** `POST`
- **Content-Type:** `application/json`

### So'rov (Request Body)

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `phone` | `string` | Ha | Foydalanuvchining telefon raqami. Masalan: `998943234311` |
| `code` | `string` | Ha | Foydalanuvchiga yuborilgan tasdiqlash kodi. Masalan: `6268` |

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/endpoint/api/mobile/v1/check_code/sms' \
--header 'Content-Type: application/json' \
--data '{
    "phone": "998943234311",
    "code": "6268"
}'
```

---

### Javoblar (Responses)

Bu API doim **200 OK** bilan javob qaytaradi. Dasturchi kodning to'g'ri yoki noto'g'ri ekanligini `data.result` ga qarab ajratib olishi kerak.

#### Muvaffaqiyatli javob (Kod to'g'ri)
Agar kiritilgan kod to'g'ri bo'lsa, `data.result` qiymati `true` qaytadi.

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-13T13:06:16.643+00:00",
    "code": null,
    "path": null,
    "data": {
        "result": true,
        "response": {}
    },
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

#### Xatolik javobi (Kod noto'g'ri)
Agar kiritilgan kod noto'g'ri bo'lsa, `data.result` qiymati `false` qaytadi. Dasturchi buni tekshirib, foydalanuvchiga "Kod noto'g'ri kiritildi" xabarini chiqarishi kerak.

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-13T13:05:25.158+00:00",
    "code": null,
    "path": null,
    "data": {
        "result": false,
        "response": {}
    },
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```
