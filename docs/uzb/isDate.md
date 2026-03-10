# isDate

## Tavsif

`isDate` berilgan qiymat `Date` ekanligini aniqlaydi: `Date` instansiyalari uchun `true`, aks holda `false` qaytaradi.

### Foydalanish holati

`Date` amallarini (masalan, formatlash, taqqoslash yoki `toISOString()` ni chaqirish) bajarishdan oldin noma’lum
qiymatlarni (masalan, so‘rov ma’lumotlari, konfiguratsiya qiymatlari yoki parse qilingan JSON) tekshirish va
toraytirish.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `isDate` dan runtime’da `unknown` ni `Date` ga toraytirish uchun foydalaning; u faqat haqiqiy `Date` instansiyalari
> uchun `true` qaytaradi (sana satrlari uchun emas).

### Afzalliklar

- U qiymat `Date` ekanligini tekshirish uchun oddiy runtime guard taqdim etadi.
- Faqat `Date` instansiyalari validatsiyadan o‘tishini ta’minlab, type xatolarining oldini olishga yordam beradi.
- Sana bilan bog‘liq metodlardan foydalanishdan oldin noma’lum kirishlarni (masalan, API payloadlari) tekshirish uchun
  foydalidir.

## Foydalanish

### Sintaksis

Funksiya:

- `isDate(value)`

Parametrlar:

- `value`: `Date` turi ekanligi tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // bu yerda input Date hisoblanadi
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isDate(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isDate](../_analysis/isDate.md)

<br>

---

<small>Fayl 31 January 2026 at 15:48:20 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>