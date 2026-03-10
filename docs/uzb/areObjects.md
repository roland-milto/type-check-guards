# areObjects

## Tavsif

`areObjects` berilgan to‘ldirilgan massiv faqat obyektlardan iboratligini tekshiradi.

### Foydalanish holati

`areObjects` dan noma’lum massivni (masalan, JSON parse qilishdan yoki tashqi APIlardan) olganingizda va iteratsiya
qilib obyekt xossalariga murojaat qilishdan oldin u bo‘sh emasligini hamda har bir elementi obyekt ekanini ta’minlash
kerak bo‘lganda foydalaning.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `areObjects` dan `unknown[]` ni elementlarni obyekt sifatida ko‘rishdan oldin tekshirish uchun foydalaning; u bo‘sh
> massivlar uchun `false` qaytaradi.

### Afzalliklar

- Kiritma to‘ldirilgan massiv bo‘lib, har bir elementi obyekt bo‘lgandagina `true` qaytaradi.
- Obyekt bo‘lmagan element topilishi bilanoq erta to‘xtaydi va `false` qaytaradi.
- Obyektga xos amallarni bajarishdan oldin noma’lum kiritmani tekshirishga yordam beradi.

## Foydalanish

### Sintaksis

Funksiya:

- `areObjects(array)`

Parametrlar:

- `array`: Obyekt elementlari bor-yo‘qligi tekshiriladigan massiv.

### Funksiyani lokal import qilish

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value obyektlar bilan to‘ldirilgan massiv
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areObjects(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Fayl 31 January 2026 at 00:10:58 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>