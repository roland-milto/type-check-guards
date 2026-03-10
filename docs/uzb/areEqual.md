# areEqual

## Tavsif

`areEqual` massivdagi barcha elementlar berilgan kutilgan qiymatga tengligini tekshiradi va faqat bo‘sh bo‘lmagan
massivlarda har bir element mos kelsa `true` qaytaradi.

### Foydalanish holati

Ro‘yxatda faqat bitta ruxsat etilgan qiymat borligini tasdiqlash (masalan, barcha status flaglari `true`, barcha rollar
`"admin"`, yoki barcha sonli qiymatlar talab qilingan doimiy qiymatga teng) va bo‘sh kirishni yaroqsiz (`false`) deb
hisoblash.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Barcha elementlarni qat’iy tekshirish kerak bo‘lganda `areEqual`dan foydalaning; u bo‘sh massivlar uchun ham, massiv
> bo‘lmagan yoki to‘ldirilmagan har qanday kirish uchun ham `false` qaytaradi.

### Afzalliklar

- Faqat har bir element kutilgan qiymatga mos kelgandagina `true` qaytaradi; aks holda `false` qaytaradi.
- Tezda to‘xtaydi: mos kelmaydigan element topilishi bilanoq tekshirishni to‘xtatadi.
- Noto‘g‘ri kirishdan himoya qiladi: kirish to‘ldirilgan massiv bo‘lmasa `false` qaytaradi.

## Foydalanish

### Sintaksis

Funksiya:

- `areEqual(value, expected)`

Parametrlar:

- `value`: Tekshiriladigan massiv.
- `expected`: Massivdagi har bir element bilan solishtiriladigan element.

### Funksiyani lokal import qilish

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areEqual(value, expected)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Fayl 31 January 2026 at 23:52:47 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>