# isInteger

## Tavsif

Berilgan `value` xavfsiz butun son ekanligini aniqlaydi.

### Foydalanish holati

Ishonchsiz kirishni (masalan, query parametrlari, JSON payloadlar, muhit o‘zgaruvchilari) massiv indekslari, sahifalash,
hisoblagichlar yoki ma’lumotlar bazasi IDlari uchun butun son sifatida ishlatishdan oldin tekshiring.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Noma’lum kirishni sonli butun sifatida ishlatishdan oldin tekshirish uchun `isInteger` dan foydalaning; u faqat
`typeof value === "number"` va `Number.isSafeInteger(value)` bo‘lgan qiymatlar uchun `true` qaytaradi.

### Afzalliklar

- Tur va son xavfsizligini birgalikda tekshiradi: kirish qiymati son va xavfsiz butun son bo‘lgandagina `true`
  qaytaradi.
- Sonli majburlash (coercion) bilan bog‘liq keng tarqalgan xatolarning oldini oladi: "5" kabi satrlar to‘g‘ri ravishda
  `false` qaytaradi.
- Butun bo‘lmagan sonlarni va xavfsiz bo‘lmagan butun sonlarni rad etadi, shu bois IDlar, hisoblagichlar va massiv
  indekslash uchun mos.

## Foydalanish

### Sintaksis

Funksiya:

- `isInteger(value)`

Parametrlar:

- `value`: Butun son holatini tekshirish uchun qiymat.

### Funksiyani lokal import qilish

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // rost
const b = isInteger(-100);   // rost
const c = isInteger("5");    // yolg'on
const d = isInteger(5.5);    // yolg'on
const e = isInteger(null);   // yolg'on

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isInteger(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Fayl 31 January 2026 at 00:51:57 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>