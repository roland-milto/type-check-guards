# areDecimals

## Tavsif

Massivdagi barcha elementlar o‘nlik sonlar ekanligini va massiv to‘ldirilganligini tekshiradi, `true` yoki `false`
qaytaradi.

### Foydalanish holati

Foydalanuvchi taqdim etgan ro‘yxatlarni (masalan, CSV ustunlari yoki forma kiritmalari) parse qilish yoki
hisob-kitoblardan oldin massiv bo‘sh emasligini va har bir yozuv o‘nlik qiymat ekanligini ta’minlash uchun tekshirish.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `unknown[]` bo‘sh emasligini va har bir elementi o‘nlik ko‘rinishdagi qiymat ekanligini tezda boolean orqali
> tekshirish kerak bo‘lganda `areDecimals` dan foydalaning.

### Afzalliklar

- Elementlarni tekshirishdan oldin kirish massivining to‘ldirilganligini ta’minlaydi, bo‘sh ro‘yxatlarning tasodifan
  qabul qilinishining oldini oladi.
- Har bir elementni `isDecimal` bilan tekshiradi, shuning uchun aralash yoki yaroqsiz qiymatlar darhol `false`
  natijasini beradi.
- Guardlar va erta qaytish (early-return) asosidagi validatsiya oqimlari uchun mos bo‘lgan sodda boolean natijani (
  `true`/`false`) taqdim etadi.

## Foydalanish

### Sintaksis

Funksiya:

- `areDecimals(array)`

Parametrlar:

- `array`: Tekshiriladigan massiv.

### Funksiyani lokal import qilish

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // rost
console.log(areDecimals(b)); // yolg'on
console.log(areDecimals(c)); // yolg'on
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areDecimals(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Fayl 31 January 2026 at 15:59:44 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>