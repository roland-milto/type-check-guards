# isArray

## Tavsif

`isArray` berilgan qiymat massiv ekanligini tekshiradi va agar shunday bo‘lsa `true`, aks holda `false` qaytaradi.

### Foydalanish holati

Noma’lum ma’lumotlarni (masalan, parse qilingan JSON yoki API javoblari) tekshirib, iteratsiya qilish, indekslash yoki
`.length` ga murojaat qilishdan oldin qiymat massiv ekanligiga ishonch hosil qilish.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Massivlar uchun runtime tekshiruv kerak bo‘lganda `isArray` dan foydalaning; u boolean qaytaradi va `unknown`
> qiymatlar bilan chaqirish xavfsiz.

### Afzalliklar

- Turli muhitlar (masalan, iframe) bo‘ylab massivni ishonchli aniqlash uchun ichki `Array.isArray` dan foydalanadi.
- Guardlar va tarmoqlanish (branching) mantiqi uchun mos bo‘lgan sodda boolean natijani (`true`/`false`) qaytaradi.
- Parametr `unknown` bo‘lgani uchun istalgan kirish turi bilan ishlaydi.

## Foydalanish

### Sintaksis

Funksiya:

- `isArray(value)`

Parametrlar:

- `value`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input ish vaqtida massiv
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isArray(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isArray](../_analysis/isArray.md)

<br>

---

<small>Fayl 6 February 2026 at 11:32:36 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>