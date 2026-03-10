# isWeakMap

## Tavsif

Berilgan `value` `WeakMap` instansiyasi ekanligini aniqlaydi.

### Foydalanish holati

`isWeakMap` dan `unknown` qiymatni (masalan, ommaviy API, plagin tizimi yoki dinamik konfiguratsiyadan) qabul
qilganingizda va `WeakMap`-ga xos xatti-harakatlardan foydalanishdan oldin uning `WeakMap` ekanligini tekshirishingiz
kerak bo‘lganda foydalaning.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `isWeakMap` `instanceof WeakMap` tekshiruvini bajaradi; bu runtime guard bo‘lib, faqat haqiqiy `WeakMap`
> instansiyalari uchun `true` qaytaradi.

### Afzalliklar

- Qiymat `WeakMap` ekanligini tekshirish uchun sodda runtime tekshiruv.
- `WeakMap` talab qiladigan API’lardan noto‘g‘ri foydalanishning oldini olishga yordam beradi: xatolik otish o‘rniga
  `true`/`false` qaytaradi.
- `unknown` kirishlar bilan ishlaydi, bu esa modul chegaralarida (masalan, parsing, tashqi ma’lumotlar yoki tiplanmagan
  kod) qulay.

## Foydalanish

### Sintaksis

Funksiya:

- `isWeakMap(value)`

Parametrlar:

- `value`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a ish vaqtida WeakMap hisoblanadi
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isWeakMap(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Fayl 30 January 2026 at 13:27:30 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>