# isSet

## Tavsif

Berilgan qiymat `Set` ekanligini aniqlaydi.

### Foydalanish holati

Tashqi manbalardan (masalan, JSON parsing, foydalanuvchi kiritishi yoki uchinchi tomon APIlari) keladigan kirishlarni
tekshirib, `Set` amallarini bajarishdan oldin qiymat `Set` ekanligiga ishonch hosil qiling.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `Set`-ga xos `.add`, `.has` yoki `.size` kabi APIlarni chaqirishdan oldin `unknown` qiymatlarni toraytirish uchun
`isSet` dan foydalaning.

### Afzalliklar

- Qiymat `Set` ekanligini tasdiqlash uchun oddiy runtime tekshiruvni taqdim etadi.
- Qiymat `Set` bo‘lmaganda erta tarmoqlanishga imkon berib, tur xatolarining oldini olishga yordam beradi.
- Har qanday `Set` tarkibi (bo‘sh yoki to‘ldirilgan) bilan ishlaydi va doimiy ravishda `true`/`false` qaytaradi.

## Foydalanish

### Sintaksis

Funksiya:

- `isSet(value)`

Parametrlar:

- `value`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a ish vaqtida Set hisoblanadi
  console.log(a.size);
}

console.log(isSet(b)); // yolg‘on

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isSet(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isSet](../_analysis/isSet.md)

<br>

---

<small>Fayl 30 January 2026 at 23:11:44 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>