# isFinite

## Tavsif

Berilgan `value` cheklangan `number` ekanligini aniqlaydi.

### Foydalanish holati

Sonli hisob-kitoblarni bajarishdan oldin noma’lum kirishni (masalan, JSON, formalar yoki APIlardan) tekshirish uchun
`isFinite` dan foydalaning, qiymat haqiqiy, cheklangan son ekanligini ta’minlang.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `isFinite` faqat cheklangan sonlar uchun `true` qaytaradi; `NaN`, `Infinity` va son bo‘lmagan har qanday qiymat uchun
`false` qaytaradi.

### Afzalliklar

- Ishonchli cheklilik tekshiruvi uchun o‘rnatilgan `Number.isFinite` dan foydalanadi.
- Faqat cheklangan sonlar uchun `true` qaytaradi; `NaN`, `Infinity` va son bo‘lmagan kirishlar uchun `false` qaytaradi.
- Validatsiya va himoya (guard) mantiqi uchun mos bo‘lgan sodda, nojo‘ya ta’sirlarsiz predikat.

## Foydalanish

### Sintaksis

Funksiya:

- `isFinite(value)`

Parametrlar:

- `value`: Cheklilikka tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // bu yerda value chekli son
  const doubled = value * 2;
  console.log(doubled);
}
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isFinite(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Fayl 30 January 2026 at 16:32:15 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>