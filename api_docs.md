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

#### 1. Muvaffaqiyatli javob (200 OK)
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

#### 2. Xatolik: Avval ro'yxatdan o'tilgan (400 Bad Request)
Agar kiritilgan telefon raqam tizimda avval mavjud bo'lsa, tizim ro'yxatdan o'tishni rad etadi:

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

#### 3. Xatolik: Qayta yuborish limiti / Spam cheklovi (400 Bad Request)
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

Foydalanuvchi telefoniga kelgan 4 xonali SMS kodni `session_id` bilan birga yuborib tasdiqlaydi. Kod to'g'ri bo'lsa, tizimda foydalanuvchi yaratiladi va avtomatik ravishda to'liq login tokenlari qaytariladi.

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

#### 1. Muvaffaqiyatli javob (200 OK)
Kod to'g'ri bo'lganda yangi foydalanuvchi yaratiladi va `data.login.data` ichida uning `access_token` hamda `refresh_token` lari qaytadi.

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
                "access_token": "eyJraWQiOiIxMmQyNzRiNC00MTZlLTQ5YWYtYWFjNS04MTA0MzQ1MjVmNzEiLCJhbGciOiJSUzI1NiJ9...",
                "refresh_token": "eyJraWQiOiIxMmQyNzRiNC00MTZlLTQ5YWYtYWFjNS04MTA0MzQ1MjVmNzEiLCJhbGciOiJSUzI1NiJ9...",
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

#### 2. Xatolik: Tasdiqlash kodi noto'g'ri (400 Bad Request)
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

#### 3. Xatolik: Sessiya topilmadi yoki muddati tugagan (400 Bad Request)
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

Mavjud foydalanuvchini avtorizatsiya qilish va unga yangi `access_token` hamda `refresh_token` berish uchun ishlatiladi.

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

#### 1. Muvaffaqiyatli javob (200 OK)
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

#### 2. Xatolik: Login yoki parol noto'g'ri (400 Bad Request / 401 Unauthorized)
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

## 4. Tokenni yangilash (Refresh Token)

`access_token` muddati tugaganda, foydalanuvchini tizimdan chiqarmasdan yangi `access_token` va yangilangan `refresh_token` olish uchun ishlatiladi.

- **URL:** `https://zal360.uz/auth/api/v1/refresh/token`
- **Method:** `POST`
- **Content-Type:** `application/json`
- **Headers:** `X-Device-Token` *(ixtiyoriy)*

### So'rov (Request Body)

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `refresh_token` | `string` | Ha | Login vaqtida berilgan mavjud refresh token |

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/auth/api/v1/refresh/token' \
--header 'Content-Type: application/json' \
--data '{
    "refresh_token": "eyJraWQiOiIxMmQyNzRiNC00MTZlLTQ5YWYtYWFjNS04MTA0MzQ1MjVmNzEiLCJhbGciOiJSUzI1NiJ9..."
}'
```

---

### Javoblar (Responses)

#### 1. Muvaffaqiyatli javob (200 OK)
Tokenlar muvaffaqiyatli yangilanganda yangi `access_token` va `refresh_token` qaytariladi.

```json
{
    "status": 200,
    "timestamp": 1787025141358,
    "data": {
        "access_token": "eyJraWQiOiIxMmQyNzRiNC00MTZlLTQ5YWYtYWFjNS04MTA0MzQ1MjVmNzEiLCJhbGciOiJSUzI1NiJ9...",
        "refresh_token": "eyJraWQiOiIxMmQyNzRiNC00MTZlLTQ5YWYtYWFjNS04MTA0MzQ1MjVmNzEiLCJhbGciOiJSUzI1NiJ9...",
        "token_type": "Bearer",
        "expires_in": 1787113141335,
        "refresh_expires_in": 1787213698000
    },
    "statusText": "OK"
}
```

#### 2. Xatolik: Yaroqsiz yoki muddati o'tgan token (401 Unauthorized)
Agar `refresh_token` noto'g'ri yoki muddati eskirgan bo'lsa, mobil ilova foydalanuvchini login sahifasiga yo'naltirishi (`logout`) kerak:

```json
{
    "error": "401 UNAUTHORIZED",
    "message": "Яроқсиз токен",
    "timestamp": "2026-08-18T03:56:09.111+00:00",
    "code": "app.client.code.for.logout",
    "path": "/v1/refresh/token",
    "data": null,
    "response": null,
    "statusText": "Unauthorized",
    "status": 401
}
```

---

## 5. Parolni qayta tiklash (Forgot Password - SMS kod yuborish)

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

#### 1. Muvaffaqiyatli javob (200 OK)
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

#### 2. Xatolik: Foydalanuvchi topilmadi (Raqam ro'yxatdan o'tmagan)
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

#### 3. Xatolik: Qayta yuborish limiti / Spam cheklovi
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

## 6. Parol yangilashni tasdiqlash (Forgot Check Code & Auto Login)

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

#### 1. Muvaffaqiyatli javob (200 OK)
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

#### 2. Xatolik: Tasdiqlash kodi noto'g'ri (400 Bad Request)
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

#### 3. Xatolik: Sessiya topilmadi yoki muddati tugagan (400 Bad Request)
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

## 7. Tashkilot filiallarini olish (Get Branches by Org ID)

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

#### 1. Muvaffaqiyatli javob (Filiallar mavjud bo'lsa - 200 OK)
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

#### 2. Bo'sh javob (Filiallar mavjud bo'lmasa - 200 OK)
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

## 8. Fayl / Rasm yuklash (Upload File / Photo)

Mijozning fotosurati yoki boshqa hujjatlarini serverga yuklash uchun ishlatiladi. API yuklangan faylning unikal `id` sini qaytaradi va bu `id` mijoz qo'shish API'sida `photo` maydoniga uzatiladi.

- **URL:** `https://zal360.uz/file/api/v1/upload/form`
- **Method:** `POST`
- **Headers:** 
  - `Authorization: Bearer <token>`
  - `Content-Type: multipart/form-data`

### So'rov (Form Data / Multipart)

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `form_element_id` | `string` / `number` | Ha | Forma elementining identifikatori. Masalan: `"45"` |
| `file` | `binary` (file) | Ha | Yuklanayotgan fayl (rasm: JPG, PNG va h.k.) |

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/file/api/v1/upload/form' \
--header 'Authorization: Bearer eyJra...' \
--form 'form_element_id="45"' \
--form 'file=@"/Users/user/Downloads/photo.jpg"'
```

---

### Javoblar (Responses)

#### 1. Muvaffaqiyatli javob (200 OK)
Fayl muvaffaqiyatli yuklanganda uning `id`, `name`, `size` va boshqa ma'lumotlari qaytadi. Ushbu `id` ni keyingi API'larda rasm ID si sifatida ishlatiladi:

```json
{
    "id": "8a818196143b5539a5ca264e",
    "name": "2026-08-15 14.25.55",
    "size": 58179,
    "extension": "jpg",
    "contentType": "image/jpeg",
    "createdAt": "18.08.2026 09:14:47"
}
```

---

## 9. Mijoz ma'lumotlarini kiritish / qo'shish (Add Client)

Foydalanuvchi tizimga kirgandan so'ng, o'zining shaxsiy ma'lumotlarini (F.I.O, jinsi, PINFL, rasm ID) to'ldirib ro'yxatdan o'tkazish uchun ishlatiladi. Ushbu API avtorizatsiya talab qiladi.

- **URL:** `/v1/post/client`
- **Method:** `POST`
- **Headers:** 
  - `Authorization: Bearer <token>`
  - `Content-Type: application/json`

### So'rov (Request Body)

| Parametr | Turi | Majburiymi? | Izoh |
| :--- | :--- | :---: | :--- |
| `full_name` | `string` | Ha | Mijozning to'liq ismi sharifi. Masalan: `Ali Valiyev` |
| `gender` | `string` | Ha | Jinsi (`male` yoki `female`) |
| `pinfl` | `number` / `integer` | Ha | 14 xonali JSHSHIR (PINFL). Masalan: `12345678901234` |
| `photo` | `string` | Ha | Fayl yuklash API'dan qaytgan fayl `id` si. Masalan: `8a818196143b5539a5ca264e` |

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/endpoint/api/v1/post/client' \
--header 'Authorization: Bearer eyJra...' \
--header 'Content-Type: application/json' \
--data '{
  "full_name": "Ali Valiyev",
  "gender": "male",
  "pinfl": 12345678901234,
  "photo": "8a818196143b5539a5ca264e"
}'
```

---

### Javoblar (Responses)

#### 1. Muvaffaqiyatli javob (200 OK)
Mijoz ma'lumotlari muvaffaqiyatli saqlanganda quyidagi javob qaytadi:

```json
{
    "error": null,
    "message": null,
    "timestamp": "2026-08-18T04:07:17.326+00:00",
    "code": null,
    "path": null,
    "data": {
        "exist": false,
        "valid_phone": {},
        "response": {},
        "insert": {}
    },
    "response": {},
    "status": 200,
    "statusText": "OK"
}
```

#### 2. Xatolik: Avval ro'yxatdan o'tgan (400 Bad Request)
Agar kiritilgan foydalanuvchi ma'lumotlari (masalan, PINFL) orqali tizimda avval mijoz sifatida ro'yxatdan o'tilgan bo'lsa:

```json
{
    "error": "400 BAD_REQUEST \"bu foydalanuvchi avval ro'yhatdan o'tgan\"",
    "message": "bu foydalanuvchi avval ro'yhatdan o'tgan",
    "timestamp": "2026-08-18T04:05:55.195+00:00",
    "code": null,
    "path": "/v1/post/client",
    "data": null,
    "response": null,
    "status": 400,
    "statusText": "Bad Request"
}
```

---

## 10. Barcha sport zallari filiallarini olish (Get All Branches)

Mobil ilovada barcha mavjud sport zallari va ularning filiallari ro'yxatini (nomi, tashkilot nomi, manzili, koordinatalari, ish vaqti, turi, yo'nalishlari va boshqalar) olish uchun ishlatiladi. Ushbu API avtorizatsiya talab qiladi.

- **URL:** `/mobile/v1/get/branches`
- **Method:** `GET`
- **Headers:** 
  - `Authorization: Bearer <token>`

### So'rov (Request)
`GET` so'rovi bo'lgani sababli `body` yo'q, faqat `Authorization` header talab qilinadi.

**Request namunasi (cURL):**
```bash
curl --location 'https://zal360.uz/endpoint/api/mobile/v1/get/branches' \
--header 'Authorization: Bearer eyJra...'
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
            "branch_id": "1c917e03-9883-4c7f-bd84-32daccd8f2e6",
            "branch_name": "Яшнобод фитнесс",
            "org_name": "Кодиров Ш М",
            "org_id": "20a4d3ad-b0ea-49bd-9658-c9507f6020fb",
            "address": "",
            "address_additionally": "",
            "coordinates": "41.269620, 69.309654",
            "region": "Тошкент ш.",
            "district": "Яшнобод т.",
            "btime": "07:00:00",
            "etime": "23:00:00",
            "type": "Умумий",
            "capacity": null,
            "directions": "Фитнес",
            "location": null
        },
        {
            "branch_id": "35bada9e-a41e-4402-b2d9-2c0f72efe6b5",
            "branch_name": "Фитнес залл",
            "org_name": "Кодиров Ш М",
            "org_id": "20a4d3ad-b0ea-49bd-9658-c9507f6020fb",
            "address": "",
            "address_additionally": "",
            "coordinates": "41.357906, 69.290943",
            "region": "Тошкент ш.",
            "district": "Юнусобод т.",
            "btime": "07:00:00",
            "etime": "23:00:00",
            "type": "Эркак",
            "capacity": null,
            "directions": "Фитнес",
            "location": null
        },
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
        },
        {
            "branch_id": "88b61662-028d-42d2-8212-d1303622d261",
            "branch_name": "uchtepa Bulls",
            "org_name": "Azizbek's GYM",
            "org_id": "9148a242-7de9-4ac2-9d2f-9427aed3742c",
            "address": "qaysidir uyda",
            "address_additionally": "",
            "coordinates": "41.303137, 69.175561",
            "region": "Тошкент ш.",
            "district": "Учтепа т.",
            "btime": "07:00:00",
            "etime": "23:00:00",
            "type": "Эркак",
            "capacity": 100,
            "directions": "Футбол,Тенис",
            "location": null
        },
        {
            "branch_id": "9aa2a159-4871-422e-9acd-ec695dd98aac",
            "branch_name": "Чилонзор фитнесс",
            "org_name": "Кодиров Ш М",
            "org_id": "20a4d3ad-b0ea-49bd-9658-c9507f6020fb",
            "address": "",
            "address_additionally": "",
            "coordinates": "41.281618, 69.198761",
            "region": "Тошкент ш.",
            "district": "Чилонзор т.",
            "btime": "07:00:00",
            "etime": "23:00:00",
            "type": "Эркак",
            "capacity": null,
            "directions": "Фитнес",
            "location": null
        },
        {
            "branch_id": "c6cfd8b2-4f7c-4eab-ae1e-b476ae59ef8c",
            "branch_name": "bodomzor Bulls",
            "org_name": "Azizbek's GYM",
            "org_id": "9148a242-7de9-4ac2-9d2f-9427aed3742c",
            "address": "qaysidir uyda",
            "address_additionally": "",
            "coordinates": "41.339559, 69.293758",
            "region": "Тошкент ш.",
            "district": "Юнусобод т.",
            "btime": "07:00:00",
            "etime": "23:00:00",
            "type": "Эркак",
            "capacity": 100,
            "directions": "Футбол,Фитнес",
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
