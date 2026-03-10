# areIntegers

## Tavsif

`areIntegers` berilgan massivdagi barcha elementlar butun son ekanini aniqlaydi: shunday bo‘lsa `true`, aks holda
`false` qaytaradi.

### Foydalanish holati

Mantiqingiz IDlar, hisoblagichlar, sahifalash ofsetlari yoki massiv indekslari kabi butun son qiymatlarining
to‘ldirilgan ro‘yxatini talab qilganda, foydalanuvchi kiritgan yoki tashqi ma’lumotlarni (masalan, so‘rov parametrlari,
JSON payloadlar, CSV qatorlari) tekshirish uchun `areIntegers`dan foydalaning.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `areIntegers`dan `unknown[]` kirishlarini faqat butun sonlardan iborat `number[]` sifatida ishlatishdan oldin runtime
> guard sifatida foydalaning. Agar u `false` qaytarsa, kirish yoki to‘ldirilgan massiv emas, yoki kamida bitta butun
> bo‘lmagan qiymatni o‘z ichiga oladi.

### Afzalliklar

- Faqat har bir element butun son bo‘lgandagina `true` qaytaradi; aks holda `false` qaytaradi.
- Faqat butun sonlar bilan bajariladigan amallarni (masalan, indekslash, sanash, IDlar) bajarishdan oldin noma’lum
  kirishni tekshirishga yordam beradi.
- Tezda to‘xtaydi: butun son bo‘lmagan element topilishi bilanoq tekshirishni to‘xtatadi.

## Foydalanish

### Sintaksis

Funksiya:

- `areIntegers(array)`

Parametrlar:

- `array`: Butun son elementlari bor-yo‘qligini tekshirish uchun massiv.

### Funksiyani lokal import qilish

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // rost
console.log(areIntegers(b)); // rost
console.log(areIntegers(c)); // yolg'on

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areIntegers(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Fayl 31 January 2026 at 01:01:08 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>