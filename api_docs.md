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

---

## 3. Tashkilot filiallarini olish (Get Branches by Org ID)

Foydalanuvchi (tashkilot) ga tegishli bo'lgan barcha filiallar ro'yxatini olish uchun ishlatiladi. Bu API avtorizatsiya (token) talab qiladi.

- **URL:** `/mobile/v1/get/branch_by_org_id`
- **Method:** `GET`
- **Headers:** `Authorization: Bearer <token>`

### So'rov (Request)
Bu so'rov `GET` bo'lganligi uchun `body` qismi yo'q. Avtorizatsiya tokenini jo'natish kifoya.

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/endpoint/api/mobile/v1/get/branch_by_org_id' \
--header 'Authorization: Bearer eyJra...'
```

---

### Javoblar (Responses)

Barcha javoblar `status: 200 OK` bilan qaytadi. Ma'lumotlar `data` massivi ichida keladi.

#### Muvaffaqiyatli javob (Filiallar mavjud bo'lsa)
Agar tashkilotning filiallari bo'lsa, ro'yxat ob'ektlar ko'rinishida qaytadi.

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-17T07:47:13.977+00:00",
    "code": null,
    "path": null,
    "data": [
        {
            "id": "7a5c35dd-98cc-41cf-a34f-db17cfa6190f",
            "name": "1 flial",
            "address": "qaysidir uyda",
            "coordinates": "41.339559, 69.293758",
            "direction": null,
            "region": "Андижон",
            "district": "Избоскан т.",
            "btime": "07:00:00",
            "etime": "23:00:00",
            "type": "Эркак",
            "directions": "Бокс"
        }
    ],
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

#### Bo'sh javob (Filiallar mavjud bo'lmasa)
Agar filiallar topilmasa, `data` bo'sh massiv (`[]`) shaklida qaytadi.

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-17T07:47:13.977+00:00",
    "code": null,
    "path": null,
    "data": [],
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

---

## 4. Mijoz qo'shish (Add Client)

Yangi mijozni (client) ro'yxatdan o'tkazish uchun ishlatiladi. API avtorizatsiya talab qiladi.

- **URL:** `/v1/post/clients`
- **Method:** `POST`
- **Headers:** 
  - `Authorization: Bearer <token>`
  - `Content-Type: application/json`

### So'rov (Request Body)

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `full_name` | `string` | Ha | Mijozning to'liq ismi sharifi. Masalan: `nimadir` |
| `gender` | `string` | Ha | Jinsi (`male` yoki `female`) |
| `pinfl` | `string` | Ha | JSHSHIR (PINFL). Masalan: `1234354543534` |
| `photo` | `string` | Ha | Mijoz rasmiga havola yoki base64. Masalan: `pdsd1221231dssfd` |

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/endpoint/api/v1/post/clients' \
--header 'Authorization: Bearer eyJra...' \
--header 'Content-Type: application/json' \
--data '{
     "full_name":"nimadir",
     "gender":"male/female",
     "pinfl":"1234354543534",
     "photo":"pdsd1221231dssfd"
}'
```

---

### Javoblar (Responses)

Muvaffaqiyatli saqlanganda API `200 OK` statusi bilan quyidagi javobni qaytaradi. 

#### Muvaffaqiyatli javob (200 OK)
```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-17T08:35:00.183+00:00",
    "code": null,
    "path": null,
    "data": {
        "response": {},
        "insert": {}
    },
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

#### Xatolik javobi (400 Bad Request)
Agar kiritilgan foydalanuvchi tizimda avval ro'yxatdan o'tgan bo'lsa (masalan, PINFL orqali), quyidagi xatolik qaytadi:

```json
{
    "error": "400 BAD_REQUEST \"bu foydalanuvchi avval ro'yhatdan o'tgan\"",
    "message": "bu foydalanuvchi avval ro'yhatdan o'tgan",
    "timestamp": "2026-08-17T08:44:59.863+00:00",
    "code": null,
    "path": "/v1/post/clients",
    "data": null,
    "response": null,
    "status": 400,
    "statusText": "Bad Request"
}
```

---

## 5. Tizimga kirish (Login)

Foydalanuvchini avtorizatsiya qilish va unga yangi `access_token` va `refresh_token` berish uchun ishlatiladi.

- **URL:** `/mobile/v1/login`
- **Method:** `POST`
- **Content-Type:** `application/json`

### So'rov (Request Body)

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `username` | `string` | Ha | Foydalanuvchining logini (yoki telefon raqami). Masalan: `52410015910048` |
| `password` | `string` | Ha | Parol. Masalan: `1` |

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/endpoint/api/mobile/v1/login' \
--header 'Content-Type: application/json' \
--data '{
  "username": "52410015910048",
  "password": "1"
}'
```

---

### Javoblar (Responses)

#### Muvaffaqiyatli javob (200 OK)
Loging va parol to'g'ri bo'lsa, tizim yangi tokenlarni qaytaradi. Barcha kerakli tokenlar `data.data` ob'ekti ichida joylashgan bo'ladi.

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-17T06:38:18.207+00:00",
    "code": null,
    "path": null,
    "data": {
        "status": 200,
        "timestamp": 1786948698206,
        "data": {
            "access_token": "eyJraWQiOi...",
            "refresh_token": "eyJra...",
            "token_type": "Bearer",
            "expires_in": 1787036698175,
            "refresh_expires_in": 1787213698194
        },
        "statusText": "OK"
    },
    "response": {
        "headers": {
            "Content-Type": ["application/json"]
        }
    },
    "status": 200,
    "statusText": "OK"
}
```

#### Xatolik javobi (400 Bad Request / 401 Unauthorized)
Agar login yoki parol xato kiritilsa (yoki masalan body umuman berilmasa), avtorizatsiya serveri xatolik qaytaradi.

```json
{
    "error": "400 BAD_REQUEST \"Remote endpoint [http://10.1.1.22:8084/auth/api/v1/login] returned error on stage _body: 401  on POST request for \\\"http://10.1.1.22:8084/auth/api/v1/login\\\": [no body]\"",
    "message": "Remote endpoint [http://10.1.1.22:8084/auth/api/v1/login] returned error on stage _body: 401  on POST request for \"http://10.1.1.22:8084/auth/api/v1/login\": [no body]",
    "timestamp": "2026-08-17T08:51:22.267+00:00",
    "code": null,
    "path": "/mobile/v1/login",
    "data": "RequestBody Base64: e3Bhc3N3b3JkPVsyXSwgdXNlcm5hbWU9WzUyNDEwMDE1OTEwMDQ4XX0=",
    "response": null,
    "status": 400,
    "statusText": "Bad Request"
}
```

---

## 6. Ro'yxatdan o'tish (Register)

Yangi foydalanuvchini tizimdan ro'yxatdan o'tkazish uchun ishlatiladi.

- **URL:** `/mobile/v1/register`
- **Method:** `POST`
- **Content-Type:** `application/json`

### So'rov (Request Body)

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `phone` | `string` | Ha | Foydalanuvchining telefon raqami. Masalan: `998943234311` |
| `password` | `string` | Ha | Foydalanuvchi paroli. Masalan: `121` |

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/endpoint/api/mobile/v1/register' \
--header 'Content-Type: application/json' \
--data '{
  "phone": "998943234311",
  "password": "121"
}'
```

---

### Javoblar (Responses)

Ikkala holatda ham API `200 OK` status qaytaradi. Natijani `data.status` maydoniga qarab ajratish kerak.

#### Muvaffaqiyatli javob (Ro'yxatdan o'tdi)
Foydalanuvchi muvaffaqiyatli saqlanganda `data.status` qiymati `true` qaytadi.

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-17T08:55:06.968+00:00",
    "code": null,
    "path": null,
    "data": {
        "message": "Saqlandi",
        "status": true
    },
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

#### Xatolik javobi (Avval ro'yxatdan o'tgan)
Agar bu raqam bilan avval ro'yxatdan o'tilgan bo'lsa, `data.status` qiymati `false` qaytadi. Dasturchi foydalanuvchiga "bu raqam bilan avval tizimdan ro'yxatdan o'tilgan" degan xabarni ko'rsatishi kerak.

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-17T08:54:40.170+00:00",
    "code": null,
    "path": null,
    "data": {
        "message": "bu raqam bilan avval tizimdan ro`yhatdan o`tilgan",
        "status": false
    },
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

---

## 7. Parolni yangilash / qayta tiklash (Update Password)

Foydalanuvchi parolini esdan chiqarganda yoki yangilamoqchi bo'lganda ishlatiladi. Odatda bu API'ga murojaat qilishdan oldin `sent_code/sms` va `check_code/sms` API'lari orqali foydalanuvchining raqami tasdiqlangan bo'lishi kerak.

- **URL:** `/mobile/v1/update_password`
- **Method:** `PUT`
- **Content-Type:** `application/json`

### So'rov (Request Body)

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `phone_number` | `string` | Ha | Foydalanuvchining telefon raqami. Masalan: `998943234311` |
| `password` | `string` | Ha | Yangi parol. Masalan: `2` |

**Request namunasi (cURL):**
```bash
curl --location --request PUT 'https://zal360.uz/endpoint/api/mobile/v1/update_password' \
--header 'Content-Type: application/json' \
--data '{
    "phone_number": "998943234311",
    "password":"2"
}'
```

---

### Javoblar (Responses)

#### Muvaffaqiyatli javob (200 OK)
Parol muvaffaqiyatli o'zgartirilganda quyidagi javob qaytadi.

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-17T09:25:05.523+00:00",
    "code": null,
    "path": null,
    "data": {
        "exist": true,
        "valid": {},
        "response": {},
        "update": {}
    },
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

#### Xatolik javobi (400 Bad Request)
Agar kiritilgan telefon raqam tizimda ro'yxatdan o'tmagan bo'lsa, xatolik qaytariladi. Dasturchi foydalanuvchiga "Bu raqam avval ro'yxatdan o'tmagan" mazmunida xabar berishi kerak.

```json
{
    "error": "400 BAD_REQUEST \"99894323431 bu raqam avval tizimdan ro'yxatdan o'tmagan\"",
    "message": "99894323431 bu raqam avval tizimdan ro'yxatdan o'tmagan",
    "timestamp": "2026-08-17T09:26:00.608+00:00",
    "code": null,
    "path": "/mobile/v1/update_password",
    "data": null,
    "response": null,
    "status": 400,
    "statusText": "Bad Request"
}
```
