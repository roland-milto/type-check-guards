# areNullOrUndefined

## Tavsif

Berilgan massivdagi barcha elementlar `null` yoki `undefined` ekanligini tekshiradi.

### Foydalanish holati

Ixtiyoriy maydonlar ro‘yxatida haqiqiy qiymatlar yo‘qligini (faqat `null`/`undefined`) tekshiring, shundan so‘ng qayta
ishlashni o‘tkazib yuborish yoki “qiymatlar kiritilmagan” holatini ko‘rsatish haqida qaror qabul qiling.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Massiv faqat yo‘q qiymatlardan (`null`/`undefined`) iborat ekanini tekshirishingiz kerak bo‘lganda
`areNullOrUndefined` dan foydalaning. E’tibor bering, u bo‘sh massiv uchun `false` qaytaradi.

### Afzalliklar

- Faqat har bir element `null` yoki `undefined` bo‘lgandagina `true` qaytaradi.
- Bo‘sh massivlar uchun `false` qaytaradi, bu “ma’lumot yo‘q” holatini “hammasi yo‘q qiymatlar” holatidan ajratishga
  yordam beradi.
- `unknown[]` bilan ishlaydi, bu turlarni toraytirishdan oldin foydalanishni xavfsiz qiladi.

## Foydalanish

### Sintaksis

Funksiya:

- `areNullOrUndefined(array)`

Parametrlar:

- `array`: Tekshiriladigan massiv.

### Funksiyani lokal import qilish

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areNullOrUndefined(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Fayl 31 January 2026 at 00:31:55 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>