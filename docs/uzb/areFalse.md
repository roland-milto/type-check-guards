# areFalse

## Tavsif

`areFalse` berilgan massivdagi barcha elementlar qat’iy ravishda mantiqiy `false` ekanini tekshiradi.

### Foydalanish holati

Davom etishdan oldin feature flaglar, tekshiruvlar yoki guard natijalari ro‘yxatining barchasi `false` ekanini
tasdiqlash (masalan, hech qanday to‘sqinlik qiluvchi shartlar yo‘qligini tekshirish).

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Massiv bo‘sh emasligini va faqat mantiqiy `false` qiymatini o‘z ichiga olishini qat’iy tekshirish kerak bo‘lganda
`areFalse` dan foydalaning.

### Afzalliklar

- Har bir element qat’iy `false` ekanini ta’minlaydi (truthy/falsey majburlashsiz).
- `isFilledArray` orqali to‘ldirilgan massiv talab qilinishi sababli, massiv bo‘lmagan qiymatlar yoki bo‘sh massivlar
  uchun `false` qaytaradi.
- Samaradorlik uchun birinchi `false` bo‘lmagan elementda erta to‘xtaydi.

## Foydalanish

### Sintaksis

Funksiya:

- `areFalse(array)`

Parametrlar:

- `array`: Tekshiriladigan massiv, istalgan turdagi elementlarni o‘z ichiga olishi mumkin.

### Funksiyani lokal import qilish

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // rost
const b = areFalse([false, true, false]);  // yolg'on
const c = areFalse([false, "false", false]); // yolg'on
const d = areFalse([]); // yolg'on
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areFalse(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Fayl 31 January 2026 at 16:19:06 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>