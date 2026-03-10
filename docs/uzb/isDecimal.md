# isDecimal

## Tavsif

`isDecimal` qiymat boshida/oxirida bo‘shliq bo‘lmagan va yaroqli o‘nlik formatga ega o‘nlik satr ko‘rinishi ekanini
tekshiradi.

### Foydalanish holati

Tahlil qilish yoki saqlashdan oldin, atrofida hech qanday bo‘shliq bo‘lmagan holda o‘nlik satr (ixtiyoriy ishorali)
sifatida berilishi shart bo‘lgan forma maydonlari, API payloadlari yoki konfiguratsiya qiymatlarini tekshirish.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `isDecimal`dan foydalanuvchi kiritmasini uni o‘zgartirishdan oldin (masalan, `Number(value)` bilan) tekshirish uchun
> foydalaning, ayniqsa bo‘shliqlar rad etilishi kerak bo‘lganda.

### Afzalliklar

- Kiritma qat’iy ravishda satr ekanini va o‘nlik-literal andozasiga mos kelishini tekshiradi.
- Noaniq tahlil (parsing)ning oldini olish uchun boshidagi va oxiridagi bo‘shliqlarni (jumladan boshqaruv belgilarini)
  rad etadi.
- Regexni ishga tushirishdan oldin tezkor dastlabki tekshiruvlarni (tur tekshiruvi va birinchi/oxirgi belgi) bajaradi.
- Guardlar va kiritmani tekshirish uchun mos bo‘lgan sodda boolean natijani (`true`/`false`) qaytaradi.

## Foydalanish

### Sintaksis

Funksiya:

- `isDecimal(value)`

Parametrlar:

- `value`: O‘nlik satr formati uchun tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v bu yerda satr (ishga tushirish vaqtida tekshirilgan)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isDecimal(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Fayl 31 January 2026 at 15:55:18 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>