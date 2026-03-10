# isObject

## Tavsif

Berilgan `value` `object` ekanligini (`null`ni istisno qilgan holda) aniqlaydi.

### Foydalanish holati

Xossalarga murojaat qilishdan oldin noma’lum kirishlarni (masalan, parse qilingan JSON, API javoblari, hodisa
payloadlari) tekshirish uchun `isObject`dan foydalaning — qiymat obyekt ekanini va `null` emasligini ta’minlaydi.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `isObject` boolean qaytaradigan runtime guard; u obyektning aniq shakliga toraytirmaydi. Kuchliroq tiplash kerak
> bo‘lganda uni qo‘shimcha tekshiruvlar (masalan, xossa mavjudligi) bilan birga ishlating.

### Afzalliklar

- `typeof`i `"object"` bo‘lgan `null` bo‘lmagan qiymatlar uchungina `true` qaytaradi.
- JavaScriptdagi keng tarqalgan xatoni oldini oladi: aks holda `null` obyekt sifatida qabul qilinishi mumkin.
- Oddiy obyektlar va o‘rnatilgan obyekt instansiyalari (masalan, `Date`, `RegExp`) uchun ishlaydi.
- Himoyaviy dasturlash va kirish ma’lumotlarini tekshirish uchun mos bo‘lgan sodda, tez runtime tekshiruv.

## Foydalanish

### Sintaksis

Funksiya:

- `isObject(value)`

Parametrlar:

- `value`: `object` ekanligi tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input ish vaqtida null bo‘lmagan obyekt
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isObject(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isObject](../_analysis/isObject.md)

<br>

---

<small>Fayl 31 January 2026 at 00:26:21 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>