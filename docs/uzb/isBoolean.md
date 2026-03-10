# isBoolean

## Tavsif

Berilgan qiymat `boolean` ekanligini aniqlaydi.

### Foydalanish holati

Shartli mantiqda ishlatishdan oldin qiymat `boolean` ekanligiga ishonch hosil qilish uchun tashqi yoki tiplanmagan
ma’lumotlarni (masalan, environment variables, JSON payloads, query parameters) tekshiring.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Boolean amallarini qo‘llashdan oldin `unknown` turini `boolean` ga toraytirish uchun `isBoolean` dan foydalaning.

### Afzalliklar

- `typeof` yordamida sodda va tezkor runtime tekshiruv.
- Boolean-ga xos mantiqni qo‘llashdan oldin noma’lum kirishni tekshirishga yordam beradi.
- Oldindan aytib bo‘ladigan `boolean` natijani (`true`/`false`) qaytaradi.

## Foydalanish

### Sintaksis

Funksiya:

- `isBoolean(value)`

Parametrlar:

- `value`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // bu yerda input boolean
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isBoolean(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Fayl 30 January 2026 at 14:38:23 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>