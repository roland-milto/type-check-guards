# isOctal

## Tavsif

Qiymat yaroqli sakkizlik literal satr (masalan, `0o755`) ekanini aniqlaydi.

### Foydalanish holati

Foydalanuvchi kiritmalari yoki konfiguratsiya qiymatlari sakkizlik literal satr ko‘rinishida bo‘lishi shart bo‘lgan
holatlarda (masalan, `0o644` kabi fayl ruxsat rejimlari) ularni tahlil qilish yoki o‘zgartirishdan oldin tekshirish.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `isOctal` tur qo‘riqchisi (`value is string`). `true` natijadan so‘ng, TypeScript tekshirilgan o‘zgaruvchini `string`
> turigacha toraytiradi.

### Afzalliklar

- Qat’iy tur qo‘riqchisini taqdim etadi: faqat kirish qiymati sakkizlik literal formatiga mos keladigan satr
  bo‘lgandagina `true` qaytaradi.
- Bo‘sh satrlarni va boshida/oxirida bo‘shliq (ASCII boshqaruv/bosh joy) bo‘lgan satrlarni rad etadi, tasodifiy mos
  kelishlarni kamaytiradi.
- Ixtiyoriy ishorani qo‘llab-quvvatlaydi va `0o`/`0O` prefiksi uchun registrga sezgir emas.
- Satr bo‘lmagan kirishlar uchun istisno otish o‘rniga `false` qaytarib, moslashuvchan ishlaydi.

## Foydalanish

### Sintaksis

Funksiya:

- `isOctal(value)`

Parametrlar:

- `value`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // rost
console.log(isOctal(b)); // rost
console.log(isOctal(c)); // yolg'on
console.log(isOctal(d)); // yolg'on

if (isOctal(a)) {
  // bu yerda a satr
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isOctal(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Fayl 30 January 2026 at 15:44:04 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>