# areNaNs

## Tavsif

`areNaNs` massivdagi barcha elementlar `NaN` ekanini tekshiradi va faqat har bir element `NaN` bo‘lsa `true` qaytaradi.

### Foydalanish holati

Kiruvchi ma’lumotlarni tekshirish: `NaN` sentinel qiymat sifatida ishlatilganda va butun massiv faqat `NaN` dan iborat
ekanini qat’iy ta’minlash kerak bo‘lganda (masalan, to‘liq yo‘qolgan sonli qatorni aniqlash).

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Massiv faqat sonli `NaN` qiymatini o‘z ichiga olishini (satrni songa majburan o‘zgartirmasdan) tekshirish kerak
> bo‘lganda `areNaNs` dan foydalaning.

### Afzalliklar

- Faqat har bir element `NaN` bo‘lgandagina `true` qaytaradi (barcha elementlar bo‘yicha qat’iy tekshiruv).
- Satrlarni sonlarga majburan o‘zgartirmaydi; "NaN" kabi qiymatlar `NaN` bo‘lib qolmaydi va natijani `false` qiladi.
- To‘ldirilmagan (bo‘sh) massivlar uchun `false` qaytaradi, bo‘sh kirishda tasodifiy `true` chiqib ketishining oldini
  oladi.

## Foydalanish

### Sintaksis

Funksiya:

- `areNaNs(array)`

Parametrlar:

- `array`: `NaN` qiymatlari bor-yo‘qligini tekshirish uchun massiv.

### Funksiyani lokal import qilish

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // rost
const b = areNaNs([NaN, 1, NaN]); // yolg'on
const c = areNaNs([NaN, "NaN", NaN]); // yolg'on
const d = areNaNs([NaN, null, NaN]); // yolg'on
const e = areNaNs([] as unknown[]); // yolg'on
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areNaNs(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Fayl 30 January 2026 at 15:54:14 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>