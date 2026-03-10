# areIndexesFound

## Tavsif

`areIndexesFound` qiymat bo‘sh bo‘lmagan massiv ekanini va uning barcha elementlari yaroqli indekslar ekanini
tekshiradi; shunday bo‘lsa `true`, aks holda `false` qaytaradi.

### Foydalanish holati

Foydalanuvchi taqdim etgan yoki tashqi ma’lumotlarni (masalan, tahlil qilingan JSON) massivlarga murojaat qilish yoki
ularni kesish (slice) uchun ishlatishdan oldin, u indekslar ro‘yxati bo‘lishi kutilayotganini tekshirish.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Noma’lum kirishni uning elementlarini massiv indekslari sifatida qabul qilishdan oldin tekshirish uchun
`areIndexesFound` dan foydalaning; u bo‘sh massivlar va indeks bo‘lmagan qiymatlar mavjud bo‘lgan massivlar uchun
`false` qaytaradi.

### Afzalliklar

- U faqat kirish qiymati to‘ldirilgan massiv bo‘lib, har bir element yaroqli indeks bo‘lgandagina `true` qaytaradi.
- Tezda to‘xtaydi: indeks bo‘lmagan element uchragan zahoti `false` qaytaradi.
- Qiymatlarni massiv pozitsiyalari yoki siljishlar (offsetlar) sifatida ishlatishdan oldin tekshiruvchi (guard) sifatida
  foydali.

## Foydalanish

### Sintaksis

Funksiya:

- `areIndexesFound(array)`

Parametrlar:

- `array`: Indekslarga mosligini tekshirish uchun massiv.

### Funksiyani lokal import qilish

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // Bu yerda `a` indekslar bilan to‘ldirilgan massiv ekanligi tasdiqlanadi.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areIndexesFound(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Fayl 31 January 2026 at 01:04:52 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>