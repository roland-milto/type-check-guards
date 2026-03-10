# areSets

## Tavsif

Berilgan bo‘sh bo‘lmagan massiv faqat `Set` instansiyalaridan iboratligini tekshiradi: shunday bo‘lsa `true`, aks holda
`false` qaytaradi.

### Foydalanish holati

Qiymat (masalan, foydalanuvchi kiritishi, JSON parsing yoki tashqi API’lardan) har bir setni qayta ishlashdan oldin
bo‘sh bo‘lmagan `Set` obyektlari massiv ekanini tasdiqlash.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `areSets`dan noma’lum kirishni tekshirish uchun foydalaning: iteratsiya qilishdan va har bir elementda `Set`
> API’larini (masalan, `.size`, `.has`, `.add`) chaqirishdan oldin.

### Afzalliklar

- Faqat kirish qiymati bo‘sh bo‘lmagan massiv bo‘lib, har bir element `Set` instansiyasi bo‘lgandagina `true` qaytaradi.
- Massivda elementlar bo‘lmaganda `false` qaytarib, bo‘sh massivlar uchun noto‘g‘ri ijobiy natijalarni oldini oladi.
- Har bir elementda `Set`ga xos amallarni bajarishdan oldin runtime tekshiruv (guard) sifatida foydali.

## Foydalanish

### Sintaksis

Funksiya:

- `areSets(array)`

Parametrlar:

- `array`: `Set` instansiyalari bor-yo‘qligi tekshiriladigan massiv.

### Funksiyani lokal import qilish

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a ish vaqtida Set instansiyalaridan iborat massiv
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // false
console.log(areSets(c)); // false
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areSets(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areSets](../_analysis/areSets.md)

<br>

---

<small>Fayl 30 January 2026 at 23:15:58 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>