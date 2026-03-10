# areFinite

## Tavsif

`areFinite` qiymat bo‘sh bo‘lmagan massiv ekanligini va uning elementlari barchasi chekli sonlar ekanligini tekshiradi;
shunday bo‘lsa `true`, aks holda `false` qaytaradi.

### Foydalanish holati

Hisob-kitoblarni bajarishdan oldin raqamli kirish massivlarini (masalan, diagramma qatorlari, koordinatalar ro‘yxatlari,
o‘lchov namunalari) tekshirish; natija faqat barcha qiymatlar chekli sonlar bo‘lgandagina `true` bo‘lishini ta’minlash.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Massiv bo‘sh emasligini va faqat chekli sonlardan iboratligini ta’minlash kerak bo‘lganda `areFinite` dan foydalaning;
> u bo‘sh massivlar uchun ham, tarkibida `NaN` yoki cheksizliklar bo‘lgan massivlar uchun ham `false` qaytaradi.

### Afzalliklar

- Faqat kirish qiymati bo‘sh bo‘lmagan massiv bo‘lib, har bir elementi chekli son bo‘lgandagina `true` qaytaradi.
- Har bir element uchun `isFinite` tekshiruvlariga tayanib, `Infinity`, `-Infinity` va `NaN` qiymatlarini rad etadi.
- Guardlar va validatsiya oqimlari uchun mos bo‘lgan sodda boolean natijani (`true`/`false`) taqdim etadi.

## Foydalanish

### Sintaksis

Funksiya:

- `areFinite(array)`

Parametrlar:

- `array`: Barcha elementlarining chekli ekanligi tekshiriladigan massiv.

### Funksiyani lokal import qilish

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // rost
console.log(areFinite(b)); // yolg‘on
console.log(areFinite(c)); // yolg‘on

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areFinite(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Fayl 30 January 2026 at 16:38:03 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>