# isNaN

## Tavsif

Satrlarni o‘zgartirmasdan, berilgan `value` `number` turidagi `NaN` ekanligini aniqlaydi.

### Foydalanish holati

Ishonchsiz yoki bo‘sh turdagi kirishni (masalan, API payloadlari, forma qiymatlari, parse qilingan JSON) tekshirib,
maxsus `NaN` qiymatini aniqlash va uni aniq qayta ishlash; `number` bo‘lmagan kirishlarni esa `NaN` emas deb hisoblash.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Kirish haqiqatan ham `number` ekanligini ta’minlagan holda (satrni raqamga o‘tkazmasdan) maxsus son qiymati `NaN`ni
> aniqlash kerak bo‘lganda `isNaN`dan foydalaning.

### Afzalliklar

- Raqam bo‘lmagan qiymatlarni (masalan, satrlarni) raqamga majburan o‘tkazmasdan qiymat `NaN` ekanligini tekshiradi.
- Faqat `number` turiga mansub va aynan `NaN` bo‘lgan qiymatlar uchun `true` qaytaradi.
- `unknown` kirishlar uchun xavfsiz va yashirin konversiyalar sababli yuzaga keladigan noto‘g‘ri ijobiy natijalardan
  qochadi.

## Foydalanish

### Sintaksis

Funksiya:

- `isNaN(value)`

Parametrlar:

- `value`: `number` turidagi `NaN` ekanligi tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // true
console.log(isNaN(b)); // false
console.log(isNaN(c)); // false

if (isNaN(a)) {
  // a son va aniqrog‘i NaN
}
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isNaN(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Fayl 30 January 2026 at 15:48:45 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>