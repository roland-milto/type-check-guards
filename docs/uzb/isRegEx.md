# isRegEx

## Tavsif

Berilgan qiymat `RegExp` instansiyasi ekanligini aniqlaydi.

### Foydalanish holati

Foydalanuvchi taqdim etgan yoki dinamik qiymatlarni (masalan, konfiguratsiya, API payloadlari, plagin kiritmalari)
muntazam ifoda sifatida ishlatishdan oldin tekshiring.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `unknown` (yoki union) qiymatlarni RegExp’ga xos xususiyatlar yoki metodlardan foydalanishdan oldin toraytirish uchun
`isRegEx` dan foydalaning; u faqat `RegExp` instansiyasi bo‘lgan qiymatlar uchun `true` qaytaradi.

### Afzalliklar

- Qiymat `RegExp` ekanligini tekshirish uchun sodda runtime type guard taqdim etadi.
- Kod muntazam ifodani kutganda xatolarning oldini olishga yordam beradi (masalan, `test`, `exec` ni chaqirishdan yoki
  `source` ni o‘qishdan oldin).
- Regex literalari hamda `new RegExp(...)` orqali yaratilgan instansiyalar bilan ham ishlaydi.
- Regex bo‘lmagan kiritmalar uchun xatolik otmasdan, aniq boolean natija (`true`/`false`) qaytaradi.

## Foydalanish

### Sintaksis

Funksiya:

- `isRegEx(value)`

Parametrlar:

- `value`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input bu yerda RegExp
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isRegEx(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Fayl 30 January 2026 at 23:31:34 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>