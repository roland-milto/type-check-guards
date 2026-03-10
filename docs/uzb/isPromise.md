# isPromise

## Tavsif

Berilgan qiymat `Promise` ekanligini aniqlaydi.

### Foydalanish holati

Pluginlar, dinamik importlar yoki bo‘shroq tiplangan API’lardan qaytgan qiymatlar bilan ishlashda, noma’lum kirishlarni
`Promise` sifatida ko‘rishdan oldin tekshirish uchun `isPromise`dan foydalaning.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `isPromise` `instanceof Promise` orqali tekshiradi, shuning uchun u faqat haqiqiy `Promise` instansiyalari uchun
`true` qaytaradi (umumiy thenable’lar uchun emas).

### Afzalliklar

- Qiymat `Promise` ekanligini tekshirish uchun sodda runtime tekshiruvni taqdim etadi.
- Haqiqiy `Promise` instansiyasini talab qiladigan kod yo‘llarini himoyalashga yordam beradi va bashoratli tarzda `true`
  yoki `false` qaytaradi.
- Haqiqiy `Promise` instansiyasini talab qilish orqali “thenable” obyektlardan (masalan, `{ then() {} }`) kelib
  chiqadigan noto‘g‘ri ijobiy natijalarning oldini oladi.

## Foydalanish

### Sintaksis

Funksiya:

- `isPromise(value)`

Parametrlar:

- `value`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // rost
console.log(isPromise(b)); // yolg‘on
console.log(isPromise(123)); // yolg‘on
console.log(isPromise(null)); // yolg‘on

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isPromise(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Fayl 30 January 2026 at 23:54:51 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>