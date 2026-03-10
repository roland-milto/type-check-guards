# isNullOrUndefined

## Tavsif

Berilgan qiymat `null` yoki `undefined` ekanligini tekshiradi.

### Foydalanish holati

Ikkala `null` va `undefined` ni ham “qiymat yo‘q” deb qabul qilish kerak bo‘lganda, masalan ixtiyoriy kiritmalarni
tekshirish, API payloadlarini normallashtirish yoki ehtimol yo‘q bo‘lishi mumkin bo‘lgan qiymatni dereference qilishdan
oldin kod yo‘llarini himoyalashda `isNullOrUndefined` dan foydalaning.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Xususiyatlarga murojaat qilish yoki metodlarni chaqirishdan oldin yo‘q qiymatlardan himoyalanish uchun
`isNullOrUndefined` dan foydalaning; u faqat `null` va `undefined` uchun `true` qaytaradi.

### Afzalliklar

- `null` va `undefined` ni bitta joyda aniqlash uchun aniq va qayta foydalaniladigan guard taqdim etadi.
- Shartlar va validatsiyalarda oson birlashtiriladigan sodda boolean (`true`/`false`) qaytaradi.
- Xususiyatlarga murojaat qilish yoki metodlarni chaqirishdan oldin yo‘q qiymatlarni tekshirish orqali keng tarqalgan
  runtime xatolarining oldini olishga yordam beradi.

## Foydalanish

### Sintaksis

Funksiya:

- `isNullOrUndefined(value)`

Parametrlar:

- `value`: `null` yoki `undefined` ekanligi tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // yo‘q qiymatni qayta ishlash
}

console.log(isNullOrUndefined(b)); // true
console.log(isNullOrUndefined(c)); // false

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isNullOrUndefined(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Fayl 31 January 2026 at 00:35:47 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>