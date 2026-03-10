# areBigInts

## Tavsif

`areBigInts` qiymat `bigint` qiymatlaridan iborat bo‘lgan bo‘sh bo‘lmagan massiv ekan-emasligini aniqlaydi.

### Foydalanish holati

Noma’lum kirishni (masalan, JSON-ga o‘xshash tarzda parse qilingan ma’lumotlar, API payloadlari yoki `unknown` deb
tiplashtirilgan funksiya parametrlari) qayta ishlashdan oldin u `bigint` qiymatlaridan iborat bo‘lgan bo‘sh bo‘lmagan
massiv ekanini tekshirish; faqat barcha elementlar `bigint` bo‘lgandagina `true`, aks holda `false` qaytaradi.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Noma’lum kirishda `bigint`-gina amallarni (masalan, arifmetika, taqqoslashlar) bajarishdan oldin `areBigInts`dan
> runtime guard sifatida foydalaning.

### Afzalliklar

- Har bir element `bigint` ekanini ta’minlaydi; faqat butun massiv mos kelgandagina `true` qaytaradi.
- Dizayn bo‘yicha massiv bo‘lmagan qiymatlar va bo‘sh massivlarni rad etadi (`isFilledArray` orqali), noto‘g‘ri
  kirishlarni tasodifan qabul qilib yuborishning oldini oladi.
- Tezkor rad etish: `bigint` bo‘lmagan element topilishi bilanoq `false` qaytaradi.

## Foydalanish

### Sintaksis

Funksiya:

- `areBigInts(array)`

Parametrlar:

- `array`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // rost
console.log(areBigInts(b)); // yolg'on
console.log(areBigInts(c)); // yolg'on
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areBigInts(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Fayl 31 January 2026 at 23:27:52 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>