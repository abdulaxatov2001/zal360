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
            "branch_id": "019d5f91-f059-4447-a610-10329e1d030e",
            "branch_name": "ATLET",
            "org_name": "BOOK TRADE KO MCHJ",
            "org_id": "1568b982-76f9-44b4-badc-fd5cc1af0ed7",
            "address": "Bodomzor",
            "address_additionally": "masjid oldida",
            "coordinates": "41.279238, 69.359093",
            "region": "Тошкент ш.",
            "district": "Яшнобод т.",
            "btime": "07:00:00",
            "etime": "23:00:00",
            "type": "Эркак",
            "capacity": 100,
            "directions": "Фитнес,Бокс",
            "facilities": "парковка,автотураргоҳ"
        }
    ],
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

**Javob maydonlari (Response Data Fields):**

| Maydon | Turi | Izoh |
| :--- | :--- | :--- |
| `branch_id` | `string` (UUID) | Filial identifikatori |
| `branch_name` | `string` | Filial (zal) nomi |
| `org_name` | `string` | Tashkilot nomi |
| `org_id` | `string` (UUID) | Tashkilot identifikatori |
| `address` | `string` | Filial manzili |
| `address_additionally` | `string` | Qo'shimcha mo'ljal / manzil izohi |
| `coordinates` | `string` | Xaritadagi koordinatalar (kenglik, uzunlik) |
| `region` | `string` | Viloyat / shahar nomi |
| `district` | `string` | Tuman nomi |
| `btime` | `string` (Time) | Ish boshlanish vaqti (`HH:mm:ss`) |
| `etime` | `string` (Time) | Ish tugash vaqti (`HH:mm:ss`) |
| `type` | `string` | Zaldan foydalanuvchilar toifasi (`Эркак`, `Аёл`, `Умумий`) |
| `capacity` | `integer` | Sig'imi (bir vaqtdagi odamlar soni) |
| `directions` | `string` | Mavjud sport yo'nalishlari (vergul bilan ajratilgan) |
| `facilities` | `string` | Qulayliklar (masalan: `парковка,автотураргоҳ`, `душ`, `сауна`) |

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

## 2. Filial tariflarini / obunalarini olish (Get Branch Subscriptions - v2)

Filialga tegishli barcha tariflar (obunalar) ro'yxatini yangilangan v2 formati bo'yicha (xizmat turi, jins turi, hafta kunlari, haftalik tashriflar soni, tashrif vaqti, vizual holati, boshlanish/tugash vaqtlari va qo'shimcha qulayliklar bilan birga) olish uchun ishlatiladi. Ushbu API avtorizatsiya talab qiladi.

- **URL:** `/mobile/v2/get/branche_subscriptions`
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
curl --location --request GET 'https://zal360.uz/endpoint/api/mobile/v2/get/branche_subscriptions' --header 'Authorization: Bearer eyJra...' --header 'Content-Type: application/json' --data '{
  "branch_id": "7a5c35dd-98cc-41cf-a34f-db17cfa6190f"
}'
```

---

### Javoblar (Responses)

#### 1. Muvaffaqiyatli javob (200 OK)
Filial tariflari mavjud bo'lganda (v2 formati):

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-09-07T08:32:32.713+00:00",
    "code": null,
    "path": null,
    "data": [
        {
            "id": "1e4f1b2f-467f-4f9e-ade7-c57801b2865d",
            "name": "bronza",
            "service_type": "Фитнес",
            "gender_type": "Умумий",
            "week_days": "Барча кунлар",
            "weekly_visits": 3,
            "visit_can": "исталган пайт",
            "visual_state": "актив",
            "add_options_text": "сауна, бассейн, парковка",
            "start_time": "07:00:00",
            "end_time": "23:00:00"
        },
        {
            "id": "d9646b1f-f9b3-4b9f-8613-3ee1699be6e0",
            "name": "silver",
            "service_type": "Фитнес",
            "gender_type": "Умумий",
            "week_days": "Душанба, Чоршанба, Жума, Якшанба",
            "weekly_visits": 4,
            "visit_can": "исталган пайт",
            "visual_state": "актив",
            "add_options_text": "сауна",
            "start_time": "07:00:00",
            "end_time": "00:00:00"
        }
    ],
    "response": {},
    "statusText": "OK",
    "status": 200
}
```

**Javob maydonlari (Response Data Fields):**

| Maydon | Turi | Izoh |
| :--- | :--- | :--- |
| `id` | `string` (UUID) | Tarif (obuna) identifikatori |
| `name` | `string` | Tarif nomi (masalan, `bronza`, `silver`) |
| `service_type` | `string` | Xizmat turi (masalan, `Фитнес`) |
| `gender_type` | `string` | Mo'ljallangan jins turi (`Умумий`, `Эркак`, `Аёл`) |
| `week_days` | `string` | Haftadagi qatnash kunlari |
| `weekly_visits` | `integer` | Bir haftadagi tashriflar soni |
| `visit_can` | `string` | Tashrif vaqti imkoniyati (`исталган пайт`) |
| `visual_state` | `string` | Vizual holati (`актив`) |
| `add_options_text` | `string` | Qo'shimcha qulayliklar/xizmatlar (`сауна, бассейн, парковка`) |
| `start_time` | `string` (Time) | Boshlanish vaqti (`HH:mm:ss`) |
| `end_time` | `string` (Time) | Tugash vaqti (`HH:mm:ss`) |

#### 2. Bo'sh javob (Tariflar topilmasa - 200 OK)
```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-09-07T08:32:32.713+00:00",
    "code": null,
    "path": null,
    "data": [],
    "response": {},
    "statusText": "OK",
    "status": 200
}
```

---

## 3. Obuna jadvallarini olish (Get Subscription Schedules)

Tanlangan tarifga (obunaga) tegishli mashg'ulot kunlari va vaqt jadvallari ro'yxatini olish uchun ishlatiladi. Ushbu API avtorizatsiya talab qiladi. 
duration_type = 1 bolganda mashgulot vaqti  cheklangan boladi . duration_type = 0 bolsa cheklanmaganb boladi.
- **URL:** `/mobile/v1/get/subscription_schedules`
- **Method:** `GET`
- **Headers:** 
  - `Authorization: Bearer <token>`

### So'rov (Query Parameters)

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `subscription_id` | `string` (UUID) | Ha | Jadvallari olinayotgan obuna (tarif) identifikatori |

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/endpoint/api/mobile/v1/get/subscription_schedules?subscription_id=07e61722-bff1-49dd-88d9-9d102791088e' --header 'Authorization: Bearer eyJra...'
```

---

### Javoblar (Responses)

#### 1. Muvaffaqiyatli javob (200 OK)
Obuna jadvallari (vaqt oralig'i, davomiyligi va narxi) mavjud bo'lganda:

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-25T03:23:24.258+00:00",
    "code": null,
    "path": null,
    "data": [
        {
            "id": 6,
            "start_time": "07:00:00",
            "end_time": "10:00:00",
            "duration_type": 1,
            "duration_time": "02:00:00",
            "price": 1500000.00
        },
        {
            "id": 7,
            "start_time": "10:00:00",
            "end_time": "16:00:00",
            "duration_type": 1,
            "duration_time": "02:00:00",
            "price": 1300000.00
        }
    ],
    "response": {},
    "statusText": "OK",
    "status": 200
}
```

#### 2. Bo'sh javob (Jadvallar mavjud bo'lmasa - 200 OK)
```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-25T03:24:49.000+00:00",
    "code": null,
    "path": null,
    "data": [],
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

---

## 4. Tarif tanlab obuna so'rovini yuborish (Create Client Subscription Request)

Mijoz tanlagan sport zali filiali, tarifi (obunasi), jadvali, boshlanish sanasi va vaqti bo'yicha obuna so'rovini yaratish uchun ishlatiladi. Ushbu API avtorizatsiya talab qiladi.

- **URL:** `/mobile/v1/post/client_subscriptions`
- **Method:** `POST`
- **Headers:** 
  - `Authorization: Bearer <token>`
  - `Content-Type: application/json`

### So'rov (Request Body)

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `org_id` | `string` (UUID) | Ha | Tashkilot identifikatori |
| `branch_id` | `string` (UUID) | Ha | Filial identifikatori |
| `subscription_id` | `string` (UUID) | Ha | Tanlangan tarif (obuna) identifikatori |
| `subscription_schedules_id` | `integer` | Ha | Tanlangan obuna jadvali identifikatori |
| `start_time` | `string` (Time) | Ha | Tanlangan mashg'ulot boshlanish vaqti (`HH:mm:ss`) |
| `bdate` | `string` (Date) | Ha | Obunaning boshlanish sanasi (`YYYY-MM-DD`) |
| `week_days` | `string` | Ha | Tanlangan hafta kunlari (masalan, `"{'1','2','3'}"`) |

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/endpoint/api/mobile/v1/post/client_subscriptions' \
--header 'Authorization: Bearer eyJra...' \
--header 'Content-Type: application/json' \
--data '{
  "org_id": "1568b982-76f9-44b4-badc-fd5cc1af0ed7",
  "branch_id": "019d5f91-f059-4447-a610-10329e1d030e",
  "subscription_id": "d9646b1f-f9b3-4b9f-8613-3ee1699be6e0",
  "subscription_schedules_id": 30,
  "start_time": "19:00:00",
  "bdate": "2026-09-01",
  "week_days": "{'\''1'\'','\''2'\'','\''3'\''}"
}'
```

---

### Javoblar (Responses)

#### 1. Muvaffaqiyatli javob (200 OK)
Obuna so'rovi muvaffaqiyatli yaratilganda yangi yaratilgan yozuvning `id` si (`insert.id`) qaytadi:

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-18T09:17:29.824+00:00",
    "code": null,
    "path": null,
    "data": {
        "response": {},
        "insert": {
            "id": "b5229032-0433-4d52-b681-911b269d232a"
        }
    },
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

---

## 5. Mijozning obunalari va arizalari ro'yxatini olish (Get Client Subscriptions)

Foydalanuvchi/mijozning barcha yuborgan obuna so'rovlari, arizalari va obunalari holatini (tashkilot, filial, tarif nomi va arizaning joriy statusi) olish uchun ishlatiladi. Ushbu API avtorizatsiya talab qiladi.

- **URL:** `/mobile/v1/get/client_subscriptions`
- **Method:** `GET`
- **Headers:** 
  - `Authorization: Bearer <token>`

### So'rov (Request)
`GET` so'rovi bo'lgani sababli `body` yo'q, faqat foydalanuvchi `Authorization: Bearer <token>` headeri talab qilinadi.

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/endpoint/api/mobile/v1/get/client_subscriptions' --header 'Authorization: Bearer eyJra...'
```

---

### Javoblar (Responses)

#### 1. Muvaffaqiyatli javob (200 OK)
Foydalanuvchining obunalari/arizalari ro'yxati mavjud bo'lganda:

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-19T07:43:29.411+00:00",
    "code": null,
    "path": null,
    "data": [
        {
            "id": "684c277d-cf5c-4133-9d80-62197f3d6ffa",
            "created_at": "2026-08-19T07:15:42.093+00:00",
            "org_name": "Azizbek's GYM",
            "branch_name": "bodomzor Bulls",
            "subscription_name": "bronze",
            "status": "moderatsiyada"
        }
    ],
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

#### 2. Bo'sh javob (Obunalar mavjud bo'lmasa - 200 OK)
```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-19T07:43:29.411+00:00",
    "code": null,
    "path": null,
    "data": [],
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```
