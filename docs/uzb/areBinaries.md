# areBinaries

## Tavsif

Berilgan qiymat yaroqli ikkilik satrlardan iborat bo‘sh bo‘lmagan massiv ekanini tekshiradi va faqat barcha elementlar
tekshiruvdan o‘tsa `true` qaytaradi.

### Foydalanish holati

`areBinaries` dan noma’lum ro‘yxatni (masalan, JSON, formalar yoki APIlardan) olganingizda va uni tahlil qilish yoki
qayta ishlashdan oldin u ikkilik satrlardan iborat bo‘sh bo‘lmagan massiv ekanini ta’minlashingiz kerak bo‘lganda
foydalaning.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Noma’lum kiritmani sonlar/BigIntlarga aylantirishdan oldin tekshirish uchun `areBinaries` dan foydalaning; u massiv
> bo‘sh emasligini va har bir element yaroqli ikkilik satr ekanini ta’minlaydi.

### Afzalliklar

- Qiymat bo‘sh bo‘lmagan massiv ekanini va har bir element yaroqli ikkilik satr ekanini tekshiradi.
- Guardlar, erta qaytishlar va kiritmalarni tekshirish uchun mos bo‘lgan sodda mantiqiy natijani (`true`/`false`)
  qaytaradi.
- Ikkilik bo‘lmagan yozuv mavjud bo‘lgan massivlarni rad etib, keyingi bosqichdagi tahlil (parsing) xatolarining oldini
  oladi.

## Foydalanish

### Sintaksis

Funksiya:

- `areBinaries(array)`

Parametrlar:

- `array`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // rost
console.log(areBinaries(b)); // yolg‘on
console.log(areBinaries([])); // yolg‘on
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areBinaries(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Fayl 31 January 2026 at 23:16:27 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>