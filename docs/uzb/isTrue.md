# isTrue

## Tavsif

`isTrue` berilgan qiymatning `true` ga qat’iy tengligini aniqlaydi.

### Foydalanish holati

Faqat literal `true` qabul qilinishi, qolgan hamma narsa esa `false` sifatida ko‘rilishi kerak bo‘lgan flaglar, feature
toggle’lar yoki konfiguratsiya qiymatlarini tekshirish uchun `isTrue` dan foydalaning.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Faqat boolean literal `true` ni qabul qilish kerak bo‘lganda, shunchaki truthy qiymatlarni emas, `isTrue` dan
> foydalaning.

### Afzalliklar

- Boolean literal `true` uchun qat’iy tekshiruvni ta’minlaydi (majburiy o‘zgartirishsiz).
- `true` ni `1`, `"true"` yoki `{}` kabi truthy qiymatlardan farqlashga yordam beradi.
- Guardlar va validatsiya pipeline’lari uchun mos bo‘lgan sodda, oldindan aytib bo‘ladigan xatti-harakat.

## Foydalanish

### Sintaksis

Funksiya:

- `isTrue(value)`

Parametrlar:

- `value`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // rost
const b = isTrue(1);         // yolg'on
const c = isTrue("true");   // yolg'on

if (isTrue(a)) {
  // bu yerda a rost
}
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isTrue(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Fayl 30 January 2026 at 13:46:48 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>