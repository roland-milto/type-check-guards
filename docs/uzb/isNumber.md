# isNumber

## Tavsif

`isNumber` qiymat cheklangan (finite), `NaN` bo‘lmagan son ekanligini tekshiradi.

### Foydalanish holati

Hisoblashlar, saqlash yoki diapazon tekshiruvlaridan oldin ishonchsiz manbalardan (formalar, query paramlar, JSON
payloadlar) kelgan sonli kiritmalarni validatsiya qiling; shunda faqat cheklangan sonlar `true` bo‘lib o‘tadi, qolgan
hammasi `false` qaytaradi.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Arifmetik amallarni bajarishdan oldin `unknown` qiymatlarni tekshirish uchun `isNumber`dan foydalaning; u `NaN`,
`Infinity` va `-Infinity`ni rad etadi.

### Afzalliklar

- `true` faqat haqiqiy JavaScript sonlari uchun qaytariladi (tur tekshiruvi hamda `NaN` va cheksizlikni rad etish).
- `NaN`, `Infinity` yoki `-Infinity` tasodifan son sifatida o‘tib ketadigan keng tarqalgan validatsiya xatolarining
  oldini oladi.
- Noma’lum kirish ma’lumotlari (masalan, JSON, foydalanuvchi kiritishi, tashqi APIlar) uchun runtime guard sifatida
  yaxshi ishlaydi.
- Oddiy, tez va nojo‘ya ta’sirlarsiz.

## Foydalanish

### Sintaksis

Funksiya:

- `isNumber(value)`

Parametrlar:

- `value`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input yaroqli chekli son
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isNumber(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Fayl 30 January 2026 at 13:11:45 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>