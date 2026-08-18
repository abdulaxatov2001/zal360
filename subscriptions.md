# Subscriptions & Branches API Hujjatlari (API Documentation)

Ushbu hujjat mobil ilova dasturchilari uchun sport zallari, filiallar va obunalar (subscriptions) bo'yicha server bilan aloqa qilishda ishlatiladigan API'larni o'z ichiga oladi.

- **Asosiy domen:** `https://zal360.uz/endpoint/api`
- **Autentifikatsiya formati:** `Authorization: Bearer <access_token>`

---

## 1. Barcha sport zallari filiallarini olish (Get All Branches)

Mobil ilovada barcha mavjud sport zallari va ularning filiallari ro'yxatini (nomi, tashkilot nomi, manzili, koordinatalari, ish vaqti, turi, yo'nalishlari va boshqalar) olish uchun ishlatiladi. Ushbu API avtorizatsiya talab qiladi.

- **URL:** `/mobile/v1/get/branches`
- **Method:** `GET`
- **Headers:** 
  - `Authorization: Bearer <token>`

### So'rov (Request)
`GET` so'rovi bo'lgani sababli `body` yo'q, faqat `Authorization` header talab qilinadi.

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/endpoint/api/mobile/v1/get/branches' --header 'Authorization: Bearer eyJra...'
```

---

### Javoblar (Responses)

#### 1. Muvaffaqiyatli javob (200 OK)
Filiallar ro'yxati mavjud bo'lganda quyidagi formatda to'liq ma'lumotlar massivi qaytadi:

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-18T07:22:17.927+00:00",
    "code": null,
    "path": null,
    "data": [
        {
            "branch_id": "7a5c35dd-98cc-41cf-a34f-db17cfa6190f",
            "branch_name": "bektemir Bulls",
            "org_name": "Azizbek's GYM",
            "org_id": "9148a242-7de9-4ac2-9d2f-9427aed3742c",
            "address": "qaysidir uyda",
            "address_additionally": "",
            "coordinates": "41.246603, 69.379925",
            "region": "Тошкент ш.",
            "district": "Бектемир т.",
            "btime": "07:00:00",
            "etime": "23:00:00",
            "type": "Эркак",
            "capacity": 100,
            "directions": "Футбол,Бокс",
            "location": null
        }
    ],
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

#### 2. Bo'sh javob (Filiallar mavjud bo'lmasa - 200 OK)
```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-18T07:22:17.927+00:00",
    "code": null,
    "path": null,
    "data": [],
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

---

## 2. Filial tariflarini / obunalarini olish (Get Branch Subscriptions)

Tanlangan filialga tegishli barcha tariflar (obunalar) ro'yxatini (nomi, vaqti, xizmat turi va narxi) olish uchun ishlatiladi. Ushbu API avtorizatsiya talab qiladi.

- **URL:** `/mobile/v1/get/branche_subscriptions`
- **Method:** `GET`
- **Headers:** 
  - `Authorization: Bearer <token>`
  - `Content-Type: application/json`

### So'rov (Request Body)

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `branch_id` | `string` (UUID) | Ha | Tariflari olinayotgan filialning identifikatori |

**Request namunasi (cURL):**
```bash
curl --location --request GET 'https://zal360.uz/endpoint/api/mobile/v1/get/branche_subscriptions' --header 'Authorization: Bearer eyJra...' --header 'Content-Type: application/json' --data '{
  "branch_id": "7a5c35dd-98cc-41cf-a34f-db17cfa6190f"
}'
```

---

### Javoblar (Responses)

#### 1. Muvaffaqiyatli javob (200 OK)
Filial tariflari mavjud bo'lganda quyidagi formatda massiv qaytadi:

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-18T09:22:18.563+00:00",
    "code": null,
    "path": null,
    "data": [
        {
            "id": "66f10d0a-caab-4549-8106-7f14bd811ba3",
            "name": "bronze",
            "start_time": "08:00:00",
            "end_time": "22:00:00",
            "service_type": "Фитнес",
            "price": 300000.00
        },
        {
            "id": "e7ae0a4c-75da-4bbf-a1d9-53d402fdf3c6",
            "name": "gold",
            "start_time": "00:00:00",
            "end_time": "00:00:00",
            "service_type": "Бокс",
            "price": 1000000.00
        }
    ],
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

#### 2. Bo'sh javob (Tariflar topilmasa - 200 OK)
```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-18T09:22:18.563+00:00",
    "code": null,
    "path": null,
    "data": [],
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```
