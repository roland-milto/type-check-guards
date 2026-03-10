# isUndefined

## Tavsif

Berilgan qiymat `undefined` ekanligini tekshiradi.

### Foydalanish holati

Ixtiyoriy kirishlarni qo‘riqlash, yetishmayotgan xususiyatlarni aniqlash yoki “taqdim etilmagan” (`undefined`) bilan
“aniq bo‘sh” (`null`) holatlarini farqlash uchun `isUndefined` dan foydalaning.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `undefined` ni ( `null` emas) aynan aniqlash kerak bo‘lganda `isUndefined` dan foydalaning. U xavfsiz, chunki
`typeof value === "undefined"` ga tayanadi.

### Afzalliklar

- `typeof` yordamida `undefined` uchun aniq va oshkora tekshiruvni ta’minlaydi, e’lon qilinmagan o‘zgaruvchilar bilan
  bog‘liq chekka holatlardan qochadi.
- Qo‘riqlash (guard), tarmoqlanish (branching) va validatsiya mantiqi uchun mos bo‘lgan sodda boolean natijani (`true`/
  `false`) qaytaradi.
- `undefined` ni `null`, `0`, `""` yoki `NaN` kabi boshqa “bo‘sh” qiymatlardan farqlashga yordam beradi.

## Foydalanish

### Sintaksis

Funksiya:

- `isUndefined(value)`

Parametrlar:

- `value`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // bu yerda x aniqlanmagan
} else {
  // bu yerda x aniqlanmagan emas
}

const a = isUndefined(undefined); // rost
const b = isUndefined(null);      // yolg'on
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isUndefined(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Fayl 30 January 2026 at 14:04:59 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>