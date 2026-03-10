# areErrors

## Tavsif

Massiv bo‘sh emasligini va faqat `Error` obyektlaridan iboratligini tekshiradi, `true` yoki `false` qaytaradi.

### Foydalanish holati

Runtime’da berilgan `unknown[]` (masalan, jamlangan muvaffaqiyatsizliklar, validatsiya natijalari yoki deserializatsiya
qilingan ma’lumotlar) ustidan iteratsiya qilish, loglash yoki qayta uloqtirishdan oldin u `Error` obyektlarining bo‘sh
bo‘lmagan ro‘yxati ekanini tekshirish.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `areErrors` faqat har bir elementi `Error` bo‘lgan to‘ldirilgan massiv uchun `true` qaytaradi; bo‘sh massiv uchun yoki
> biror element `Error` bo‘lmasa `false` qaytaradi.

### Afzalliklar

- Har bir element `Error` instansiyasi ekanini ta’minlaydi, bu esa xatolarni xavfsiz qayta ishlash va loglash imkonini
  beradi.
- Bo‘sh massivlarni rad etadi, tasodifan “xatolar yo‘q” holatlari haqiqiy xatolar ro‘yxati sifatida qabul qilinishining
  oldini oladi.
- `unknown[]` kirishlari (masalan, APIlardan yoki `catch` bloklaridan) bilan ishlaganda runtime guard sifatida yaxshi
  ishlaydi.

## Foydalanish

### Sintaksis

Funksiya:

- `areErrors(array)`

Parametrlar:

- `array`: `Error` obyektlari bor-yo‘qligini tekshirish uchun massiv.

### Funksiyani lokal import qilish

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value Error obyektlaridan iborat bo‘sh bo‘lmagan massiv
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areErrors(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Fayl 6 February 2026 at 12:36:11 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>