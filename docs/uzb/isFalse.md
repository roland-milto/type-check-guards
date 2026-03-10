# isFalse

## Tavsif

`isFalse` berilgan qiymat boolean literal `false` ga qat’iy tengligini tekshiradi.

### Foydalanish holati

Noma’lum ma’lumotlarni (masalan, JSON, query params yoki foydalanuvchi kiritishi) tekshirishda, faqat aniq boolean
qiymat `false` haqiqiy flag sifatida qabul qilinishi, qolgan hammasi esa rad etilishi kerak bo‘lganda.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Faqat literal `false` ni qabul qilib, boshqa barcha falsy qiymatlarni rad etishingiz kerak bo‘lganda `isFalse` dan
> foydalaning; u faqat `value === false` bo‘lganda `true` qaytaradi.

### Afzalliklar

- Majburlashsiz boolean literal `false` uchun qat’iy tekshiruvni ta’minlaydi.
- `false` ni `0`, `""`, `null` va `undefined` kabi boshqa falsy qiymatlardan farqlashga yordam beradi.
- Noma’lum kirishni tekshirishda niyatni aniq ko‘rsatib, o‘qiluvchanlikni yaxshilaydi.

## Foydalanish

### Sintaksis

Funksiya:

- `isFalse(value)`

Parametrlar:

- `value`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // bu yerda input aynan false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isFalse(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Fayl 31 January 2026 at 16:45:02 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>