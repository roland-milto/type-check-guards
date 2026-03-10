# isNull

## Tavsif

Berilgan `value` `null` ekanligini aniqlaydi.

### Foydalanish holati

`null` mazmunli sentinel qiymat bo‘lgan va uni `undefined` yoki boshqa qiymatlardan boshqacha tarzda qayta ishlash kerak
bo‘lgan holatlarda kirishlarni yoki API payload maydonlarini tekshirish uchun `isNull`dan foydalaning.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `null`ni `undefined` va boshqa falsy qiymatlardan farqlashingiz kerak bo‘lganda `isNull`dan foydalaning; u faqat
`null` uchun `true` qaytaradi.

### Afzalliklar

- `null`ni `undefined` bilan aralashtirmasdan aniq tekshiruvni ta’minlaydi.
- Har qanday kirish turi uchun ishonchli ishlaydi, chunki `unknown`ni qabul qiladi.
- Oddiy, tez va yon ta’sirlarsiz; faqat `true` yoki `false` qaytaradi.

## Foydalanish

### Sintaksis

Funksiya:

- `isNull(value)`

Parametrlar:

- `value`: `null` ekanligini tekshirish uchun qiymat.

### Funksiyani lokal import qilish

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // a bu yerda null
}
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isNull(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isNull](../_analysis/isNull.md)

<br>

---

<small>Fayl 31 January 2026 at 15:41:22 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>