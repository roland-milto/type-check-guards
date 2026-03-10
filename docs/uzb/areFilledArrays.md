# areFilledArrays

## Tavsif

`areFilledArrays` ikki o‘lchamli massiv bo‘sh emasligini va uning barcha submassivlari bo‘sh emasligini tekshiradi.

### Foydalanish holati

`areFilledArrays` dan jadval yoki matritsa ko‘rinishidagi kirishni (masalan, CSV qatorlari, grid ma’lumotlari,
guruhlangan natijalar) tekshirish uchun foydalaning, shunda kamida bitta submassiv borligini va submassivlarning hech
biri bo‘sh emasligini xavfsiz tarzda faraz qilishingiz mumkin.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> 2D massivda kamida bitta qator va har bir qatorda kamida bitta element borligini, uni aylanib chiqish (iteratsiya)
> yoki indekslashdan oldin ta’minlash kerak bo‘lganda `areFilledArrays` dan foydalaning.

### Afzalliklar

- Tashqi massiv bo‘sh emasligini va har bir ichki massiv ham bo‘sh emasligini tekshiradi; faqat ikkala shart
  bajarilgandagina `true` qaytaradi.
- Submassivlar ichidagi istalgan element turlari (masalan, sonlar, satrlar, obyektlar, ichma-ich massivlar) bilan
  ishlaydi, chunki u element mazmunini emas, massivning “to‘ldirilgan” holatini tekshiradi.
- Ikki o‘lchamli ma’lumotlarni qayta ishlashdan oldin tekshiruv (guard) sifatida mos keladigan sodda mantiqiy natija (
  `true`/`false`) beradi.

## Foydalanish

### Sintaksis

Funksiya:

- `areFilledArrays(array)`

Parametrlar:

- `array`: Tekshiriladigan ikki o‘lchamli massiv.

### Funksiyani lokal import qilish

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // rost
console.log(areFilledArrays(b)); // rost
console.log(areFilledArrays(c)); // rost
console.log(areFilledArrays(d)); // yolg'on
console.log(areFilledArrays(e)); // yolg'on
console.log(areFilledArrays(f)); // yolg'on

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areFilledArrays(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Fayl 6 February 2026 at 11:59:47 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>