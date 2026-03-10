# isHexadecimal

## Tavsif

`isHexadecimal` berilgan qiymat majburiy `0x`/`0X` prefiksiga ega bo‘lgan o‘n oltilik satr literalimi-yo‘qligini
tekshiradi.

### Foydalanish holati

`isHexadecimal` dan konfiguratsiya qiymatlari, API payload maydonlari yoki CLI argumentlarini tekshirish uchun
foydalaning: ular o‘n oltilik satr literallari (masalan, IDlar, maskalar yoki manzillar) ko‘rinishida berilishi va
atrofida bo‘sh joylar bo‘lmasligi kerak.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Foydalanuvchi kiritmasi yoki seriyalashtirilgan ma’lumotni tahlil qilish yoki o‘zgartirishdan oldin uni qat’iy o‘n
> oltilik literal satr (jumladan `0x`/`0X` prefiksi) sifatida tekshirish kerak bo‘lganda `isHexadecimal` dan
> foydalaning.

### Afzalliklar

- Qiymat satr ekanini va qat’iy o‘n oltilik literal formatiga mos kelishini tekshiradi (majburiy `0x`/`0X` prefiksi
  talab qilinadi).
- Boshida yoki oxirida bo‘sh joyi bor satrlarni rad etadi, bu esa to‘ldirilgan (padded) kiritmalarni tasodifan qabul
  qilib yuborishning oldini oladi.
- Ixtiyoriy ishorani qo‘llab-quvvatlaydi va prefiks hamda raqamlar uchun registrga sezgir emas; `true`/`false` ni
  bashoratli tarzda qaytaradi.

## Foydalanish

### Sintaksis

Funksiya:

- `isHexadecimal(value)`

Parametrlar:

- `value`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // rost
isHexadecimal("-0Xff"); // rost
isHexadecimal("1A2B"); // yolg'on (prefiks yo'q)
isHexadecimal(" 0x1A2B"); // yolg'on (boshidagi bo'sh joy)
isHexadecimal(0x1a2b); // yolg'on (satr emas)
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isHexadecimal(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Fayl 31 January 2026 at 23:01:49 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>