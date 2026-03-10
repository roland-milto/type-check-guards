# areUndefined

## Tavsif

`areUndefined` berilgan massivdagi har bir element `undefined` ekanini tekshiradi.

### Foydalanish holati

Ixtiyoriy natijalar ro‘yxatida haqiqiy qiymatlar yo‘qligini (faqat `undefined`) tekshirish, masalan, qidiruvlarni map
qilgandan so‘ng yo‘q yozuvlar `undefined` bilan ifodalanganda va siz barcha qidiruvlar muvaffaqiyatsiz bo‘lganini
tasdiqlamoqchi bo‘lsangiz.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `areUndefined` dan `unknown[]` faqat `undefined` qiymatlardan iborat ekanini tasdiqlashingiz kerak bo‘lganda
> foydalaning; ichki `isFilledArray` tekshiruvi sababli u bo‘sh massivlar va massiv bo‘lmagan/yaroqsiz kirishlar uchun
`false` qaytaradi.

### Afzalliklar

- `isFilledArray` orqali to‘ldirilgan massivni talab qilgani uchun massiv bo‘lmagan qiymatlar va bo‘sh massivlar uchun
  `false` qaytaradi.
- Niyatni aniq qilib, faqat ayrimlari emas, balki har bir element `undefined` ekanini ta’minlaydi.
- Noma’lum kirish kolleksiyalarini tekshirishda guard-uslubidagi predikat sifatida foydali.

## Foydalanish

### Sintaksis

Funksiya:

- `areUndefined(array)`

Parametrlar:

- `array`: `undefined` elementlar bor-yo‘qligini tekshirish uchun massiv.

### Funksiyani lokal import qilish

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Eslatma: bo'sh massivlar uchun false qaytaradi
const r4 = areUndefined([]); // false
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areUndefined(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Fayl 30 January 2026 at 13:58:45 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>