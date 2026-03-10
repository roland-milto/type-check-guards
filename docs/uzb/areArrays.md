# areArrays

## Tavsif

`areArrays` qiymat to‘ldirilgan ikki o‘lchamli massiv ekanini va uning elementlarining barchasi massivlar ekanini
aniqlaydi.

### Foydalanish holati

Qator/ustun amallarini bajarishdan oldin jadval yoki matritsa ko‘rinishidagi kiritmalarni (masalan, CSV qatorlari, grid
ma’lumotlari yoki guruhlangan ro‘yxatlar) tekshirish uchun `areArrays` dan foydalaning; agar kiritma massiv bo‘lmasa,
bo‘sh bo‘lsa yoki ichida massiv bo‘lmagan biror element bo‘lsa, u `false` qaytaradi.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Ichma-ich massivlar bo‘ylab iteratsiya qilish yoki indekslashdan oldin qiymat bo‘sh bo‘lmagan 2D massiv ekanini va har
> bir qator massiv ekanini ta’minlash kerak bo‘lganda `areArrays` dan foydalaning.

### Afzalliklar

- Kiritma bo‘sh bo‘lmagan ikki o‘lchamli massiv ekanini va har bir elementi massiv ekanini tekshiradi.
- Guardlar va erta chiqishlar uchun mos bo‘lgan sodda boolean natijani (`true`/`false`) qaytaradi.
- Keyingi kod ichma-ich massiv amallarini (masalan, qatorlarni map qilish) nazarda tutganda runtime xatolarining oldini
  olishga yordam beradi.

## Foydalanish

### Sintaksis

Funksiya:

- `areArrays(array)`

Parametrlar:

- `array`: Tekshiriladigan kiritma.

### Funksiyani lokal import qilish

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value elementlari massivlardan iborat bo‘lgan 2D massiv
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areArrays(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Fayl 6 February 2026 at 13:42:07 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>