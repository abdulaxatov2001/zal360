# Mobile API Hujjatlari (API Documentation)

Ushbu hujjat mobil ilova dasturchilari uchun tayyorlangan bo'lib, server bilan aloqa qilishda ishlatiladigan barcha asosiy API'larni o'z ichiga oladi.

- **Asosiy domen:** `https://zal360.uz/endpoint/api`
- **Autentifikatsiya formati:** `Authorization: Bearer <access_token>`

---

## 1. Ro'yxatdan o'tish (Register - SMS kod yuborish)

Yangi foydalanuvchini ro'yxatdan o'tkazish uchun telefon raqam va parol qabul qilinadi hamda tasdiqlash kodi (SMS) yuboriladi.

- **URL:** `/mobile/v1/register`
- **Method:** `POST`
- **Content-Type:** `application/json`

### So'rov (Request Body)

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `phone` | `string` | Ha | Foydalanuvchining telefon raqami. Masalan: `998943234311` |
| `password` | `string` | Ha | Foydalanuvchi tanlagan parol. Masalan: `121` |

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

#### Muvaffaqiyatli javob (200 OK)
SMS kod muvaffaqiyatli yuborilganda `session_id` qaytadi. Ushbu `session_id` keyingi bosqichda kodni tasdiqlash uchun kerak bo'ladi.

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-17T12:06:08.736+00:00",
    "code": null,
    "path": null,
    "data": {
        "session_id": "ANmnnvxQDyRGzKjEyrzGzOGsaEnbqCE8",
        "message": "Tasdiqlash kodi telefon raqamingizga yuborildi",
        "status": true
    },
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

#### Xatolik: Avval ro'yxatdan o'tilgan (400 Bad Request)
Agar kiritilgan telefon raqam tizimda avval mavjud bo'lsa:

```json
{
    "error": "400 BAD_REQUEST \"400 BAD_REQUEST \"bu raqam bilan avval tizimdan ro`yhatdan o`tilgan\"\"",
    "message": "Error on stage _body : 400 BAD_REQUEST \"bu raqam bilan avval tizimdan ro`yhatdan o`tilgan\"",
    "timestamp": "2026-08-18T03:27:28.399+00:00",
    "code": null,
    "path": "/mobile/v1/register",
    "data": null,
    "response": null,
    "status": 400,
    "statusText": "Bad Request"
}
```

#### Xatolik: Vaqt cheklovi / Spam limit (400 Bad Request)
Agar 2 daqiqa ichida qayta kod so'ralsa:

```json
{
    "error": "400 BAD_REQUEST \"400 BAD_REQUEST \"Kod allaqachon yuborilgan, 2 daqiqadan so‘ng qayta urinib ko‘ring\"\"",
    "message": "Error on stage _body : 400 BAD_REQUEST \"Kod allaqachon yuborilgan, 2 daqiqadan so‘ng qayta urinib ko‘ring\"",
    "timestamp": "2026-08-18T03:29:22.959+00:00",
    "code": null,
    "path": "/mobile/v1/register",
    "data": null,
    "response": null,
    "status": 400,
    "statusText": "Bad Request"
}
```

---

## 2. Ro'yxatdan o'tishni tasdiqlash (Check SMS Code & Auto Login)

Foydalanuvchi telefoniga kelgan 4 xonali SMS kodni `session_id` bilan birga yuborib tasdiqlaydi. Kod to'g'ri bo'lsa, tizimda user yaratiladi va avtomatik ravishda to'liq login tokenlari qaytariladi.

- **URL:** `/mobile/v1/check_code/sms`
- **Method:** `POST`
- **Content-Type:** `application/json`

### So'rov (Request Body)

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `session_id` | `string` | Ha | Register API'dan qaytgan 32 belgili sessiya ID si |
| `code` | `string` | Ha | Telefonga SMS orqali borgan 4 xonali tasdiqlash kodi. Masalan: `1897` |

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/endpoint/api/mobile/v1/check_code/sms' \
--header 'Content-Type: application/json' \
--data '{
    "session_id": "kP9oiwjHwUeQuI4pXY3J8pe6V3Ylb4Q5",
    "code": "1897"
}'
```

---

### Javoblar (Responses)

#### Muvaffaqiyatli javob (200 OK)
Kod to'g'ri bo'lganda yangi foydalanuvchi yaratiladi va `data.login.data` ichida uning `access_token` va `refresh_token` lari qaytadi.

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-18T03:34:13.228+00:00",
    "code": null,
    "path": null,
    "data": {
        "response": {
            "statusCode": "OK",
            "statusCodeValue": 200
        },
        "login": {
            "status": 200,
            "timestamp": 1787024053227,
            "data": {
                "access_token": "eyJraWQiOiIxMmQyNzRi...",
                "refresh_token": "eyJraWQiOiIxMmQyNzRi...",
                "token_type": "Bearer",
                "expires_in": 1787112053199,
                "refresh_expires_in": 1787289053217
            },
            "statusText": "OK"
        }
    },
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

#### Xatolik: Kod noto'g'ri (400 Bad Request)
```json
{
    "error": "400 BAD_REQUEST \"400 BAD_REQUEST \"Kiritilgan tasdiqlash kodi noto‘g‘ri\"\"",
    "message": "Error on stage check : 400 BAD_REQUEST \"Kiritilgan tasdiqlash kodi noto‘g‘ri\"",
    "timestamp": "2026-08-18T03:32:55.903+00:00",
    "code": null,
    "path": "/mobile/v1/check_code/sms",
    "data": null,
    "response": null,
    "status": 400,
    "statusText": "Bad Request"
}
```

#### Xatolik: Sessiya topilmadi yoki muddati tugagan (400 Bad Request)
```json
{
    "error": "400 BAD_REQUEST \"400 BAD_REQUEST \"Sessiya topilmadi yoki kodning amal qilish muddati tugagan\"\"",
    "message": "Error on stage check : 400 BAD_REQUEST \"Sessiya topilmadi yoki kodning amal qilish muddati tugagan\"",
    "timestamp": "2026-08-18T03:34:57.512+00:00",
    "code": null,
    "path": "/mobile/v1/check_code/sms",
    "data": null,
    "response": null,
    "status": 400,
    "statusText": "Bad Request"
}
```

---

## 3. Tizimga kirish (Login)

Mavjud foydalanuvchini avtorizatsiya qilish va unga yangi `access_token` va `refresh_token` berish uchun ishlatiladi.

- **URL:** `/mobile/v1/login`
- **Method:** `POST`
- **Content-Type:** `application/json`

### So'rov (Request Body)

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `username` | `string` | Ha | Foydalanuvchi logini (odatda `user` + telefon raqam). Masalan: `user998943234311` |
| `password` | `string` | Ha | Foydalanuvchi paroli. Masalan: `2` |

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/endpoint/api/mobile/v1/login' \
--header 'Content-Type: application/json' \
--data '{
  "username": "user998943234311",
  "password": "2"
}'
```

---

### Javoblar (Responses)

#### Muvaffaqiyatli javob (200 OK)
Login va parol to'g'ri bo'lsa, tizim yangi tokenlarni `data.data` ob'ektida qaytaradi.

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-18T03:30:36.790+00:00",
    "code": null,
    "path": null,
    "data": {
        "status": 200,
        "timestamp": 1787023836789,
        "data": {
            "access_token": "eyJraWQiOiIxMmQyNzRiNC00MTZlLTQ5YWYtYWFjNS04MTA0MzQ1MjVmNzEiLCJhbGciOiJSUzI1NiJ9...",
            "refresh_token": "eyJraWQiOiIxMmQyNzRiNC00MTZlLTQ5YWYtYWFjNS04MTA0MzQ1MjVmNzEiLCJhbGciOiJSUzI1NiJ9...",
            "token_type": "Bearer",
            "expires_in": 1787111836753,
            "refresh_expires_in": 1787288836773
        },
        "statusText": "OK"
    },
    "response": {
        "headers": {
            "Content-Type": [
                "application/json"
            ]
        }
    },
    "status": 200,
    "statusText": "OK"
}
```

#### Xatolik: Login yoki parol noto'g'ri (400 Bad Request / 401 Unauthorized)
```json
{
    "error": "400 BAD_REQUEST \"Remote endpoint [http://10.1.1.22:8084/auth/api/v1/login] returned error on stage _body: 401 on POST request for \\\"http://10.1.1.22:8084/auth/api/v1/login\\\": [no body]\"",
    "message": "Remote endpoint [http://10.1.1.22:8084/auth/api/v1/login] returned error on stage _body: 401 on POST request for \"http://10.1.1.22:8084/auth/api/v1/login\": [no body]",
    "timestamp": "2026-08-18T03:31:09.573+00:00",
    "code": null,
    "path": "/mobile/v1/login",
    "data": "RequestBody Base64: e3Bhc3N3b3JkPVsyXSwgdXNlcm5hbWU9W3VzZXI5OTg5NDMyMzQzMTddfQ==",
    "response": null,
    "status": 400,
    "statusText": "Bad Request"
}
```

---

## 4. Parolni qayta tiklash (Forgot Password - SMS kod yuborish)

Foydalanuvchi parolini unutganda, telefon raqami va yangi parolini kiritadi. Agar raqam tizimda mavjud bo'lsa, tasdiqlash uchun SMS kod yuboriladi.

- **URL:** `/mobile/v1/update_password`
- **Method:** `PUT`
- **Content-Type:** `application/json`

### So'rov (Request Body)

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `phone_number` | `string` | Ha | Foydalanuvchining telefon raqami. Masalan: `998943234311` |
| `password` | `string` | Ha | O'rnatilishi kerak bo'lgan yangi parol. Masalan: `2` |

**Request namunasi (cURL):**
```bash
curl --location --request PUT 'https://zal360.uz/endpoint/api/mobile/v1/update_password' \
--header 'Content-Type: application/json' \
--data '{
    "phone_number": "998943234311",
    "password": "2"
}'
```

---

### Javoblar (Responses)

#### Muvaffaqiyatli javob (200 OK)
SMS kod yuborilganda `session_id` qaytadi.

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-18T03:36:31.078+00:00",
    "code": null,
    "path": null,
    "data": {
        "response": {},
        "check": {
            "session_id": "b5DhXg4K2BRH66kBbuy9YhXly1FRooM4",
            "message": "Tasdiqlash kodi telefon raqamingizga yuborildi",
            "status": true
        }
    },
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

#### Xatolik: Foydalanuvchi topilmadi (Ro'yxatdan o'tmagan)
```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-18T03:37:49.929+00:00",
    "code": null,
    "path": null,
    "data": {
        "response": {},
        "check": {
            "message": "998943234331 bu raqam avval tizimdan ro'yxatdan o'tmagan",
            "status": 400
        }
    },
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

#### Xatolik: Vaqt cheklovi / Spam limit
```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-17T12:50:20.910+00:00",
    "code": null,
    "path": null,
    "data": {
        "response": {},
        "check": {
            "message": "Kod allaqachon yuborilgan, 2 daqiqadan so‘ng qayta urinib ko‘ring",
            "status": 400
        }
    },
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

---

## 5. Parol yangilashni tasdiqlash (Forgot Check Code & Auto Login)

SMS orqali yuborilgan tasdiqlash kodini tekshiradi. Kod to'g'ri bo'lsa, foydalanuvchining yangi paroli bazada yangilanadi va darhol avtomatik login qilinib, yangi tokenlar qaytariladi.

- **URL:** `/mobile/v1/forgot/check_code`
- **Method:** `POST`
- **Content-Type:** `application/json`

### So'rov (Request Body)

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `session_id` | `string` | Ha | `update_password` API'dan qaytgan 32 belgili sessiya ID si |
| `code` | `string` | Ha | Telefonga yuborilgan 4 xonali SMS kod. Masalan: `7883` |

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/endpoint/api/mobile/v1/forgot/check_code' \
--header 'Content-Type: application/json' \
--data '{
    "session_id": "FTg7YNDE8eYTKLDNsqwms3MiNjwBPrGw",
    "code": "7883"
}'
```

---

### Javoblar (Responses)

#### Muvaffaqiyatli javob (200 OK)
Parol yangilanadi va `data.login.data` ichida avtomatik kirish tokenlari qaytariladi.

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-18T03:42:39.073+00:00",
    "code": null,
    "path": null,
    "data": {
        "response": {},
        "login": {
            "status": 200,
            "timestamp": 1787024559072,
            "data": {
                "access_token": "eyJraWQiOiIxMmQyNzRiNC00MTZlLTQ5YWYtYWFjNS04MTA0MzQ1MjVmNzEiLCJhbGciOiJSUzI1NiJ9...",
                "refresh_token": "eyJraWQiOiIxMmQyNzRiNC00MTZlLTQ5YWYtYWFjNS04MTA0MzQ1MjVmNzEiLCJhbGciOiJSUzI1NiJ9...",
                "token_type": "Bearer",
                "expires_in": 1787112559054,
                "refresh_expires_in": 1787289559064
            },
            "statusText": "OK"
        }
    },
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

#### Xatolik: Kod noto'g'ri (400 Bad Request)
```json
{
    "error": "400 BAD_REQUEST \"400 BAD_REQUEST \"Kiritilgan tasdiqlash kodi noto‘g‘ri\"\"",
    "message": "Error on stage check : 400 BAD_REQUEST \"Kiritilgan tasdiqlash kodi noto‘g‘ri\"",
    "timestamp": "2026-08-18T03:39:28.664+00:00",
    "code": null,
    "path": "/mobile/v1/forgot/check_code",
    "data": null,
    "response": null,
    "status": 400,
    "statusText": "Bad Request"
}
```

#### Xatolik: Sessiya topilmadi yoki muddati tugagan (400 Bad Request)
```json
{
    "error": "400 BAD_REQUEST \"400 BAD_REQUEST \"Sessiya topilmadi yoki kodning amal qilish muddati tugagan\"\"",
    "message": "Error on stage check : 400 BAD_REQUEST \"Sessiya topilmadi yoki kodning amal qilish muddati tugagan\"",
    "timestamp": "2026-08-18T03:38:56.500+00:00",
    "code": null,
    "path": "/mobile/v1/forgot/check_code",
    "data": null,
    "response": null,
    "status": 400,
    "statusText": "Bad Request"
}
```

---

## 6. Tashkilot filiallarini olish (Get Branches by Org ID)

Foydalanuvchi (tashkilot) ga tegishli bo'lgan barcha filiallar ro'yxatini olish uchun ishlatiladi. Ushbu API avtorizatsiya talab qiladi.

- **URL:** `/mobile/v1/get/branch_by_org_id`
- **Method:** `GET`
- **Headers:** `Authorization: Bearer <token>`

### So'rov (Request)
`GET` so'rovi bo'lgani sababli `body` yo'q, faqat `Authorization` header talab qilinadi.

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/endpoint/api/mobile/v1/get/branch_by_org_id' \
--header 'Authorization: Bearer eyJra...'
```

---

### Javoblar (Responses)

#### Muvaffaqiyatli javob (Filiallar mavjud bo'lsa)
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

## 7. Mijoz qo'shish (Add Client)

Yangi mijozni (client) ro'yxatdan o'tkazish uchun ishlatiladi. API avtorizatsiya talab qiladi.

- **URL:** `/v1/post/clients`
- **Method:** `POST`
- **Headers:** 
  - `Authorization: Bearer <token>`
  - `Content-Type: application/json`

### So'rov (Request Body)

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `full_name` | `string` | Ha | Mijozning to'liq ismi sharifi. Masalan: `Ali Valiyev` |
| `gender` | `string` | Ha | Jinsi (`male` yoki `female`) |
| `pinfl` | `string` | Ha | JSHSHIR (PINFL). Masalan: `1234354543534` |
| `photo` | `string` | Ha | Mijoz rasmiga havola yoki base64 string |

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/endpoint/api/v1/post/clients' \
--header 'Authorization: Bearer eyJra...' \
--header 'Content-Type: application/json' \
--data '{
     "full_name":"Ali Valiyev",
     "gender":"male",
     "pinfl":"1234354543534",
     "photo":"pdsd1221231dssfd"
}'
```

---

### Javoblar (Responses)

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

#### Xatolik: Avval ro'yxatdan o'tgan (400 Bad Request)
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
