# isString

## Tavsif

`isString` berilgan qiymat satr (string) ekanligini aniqlaydi.

### Foydalanish holati

Foydalanuvchi kiritmalari, API payload maydonlari yoki konfiguratsiya qiymatlarini runtime’da tekshirib, qiymat satr
ekanligiga ishonch hosil qiling va shundan keyin satr amallarini (masalan, trim qilish, bo‘lish/splitting, registrni
o‘zgartirish) qo‘llang.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Satr metodlarini chaqirishdan oldin `unknown` yoki bo‘shroq tiplangan qiymatlarni tekshirish uchun `isString`dan
> foydalaning; u faqat `typeof value === "string"` bo‘lganda `true` qaytaradi.

### Afzalliklar

- `typeof` yordamida sodda va tez tekshiruv.
- Oldindan aytib bo‘ladigan boolean natija qaytaradi: satrlar uchun `true`, aks holda `false`.
- Bo‘sh va bo‘sh bo‘lmagan satrlar uchun ham ishlaydi.
- Satrga xos amallarni bajarishdan oldin yengil runtime himoya (guard) sifatida foydali.

## Foydalanish

### Sintaksis

Funksiya:

- `isString(value)`

Parametrlar:

- `value`: Satr turi ekanligi tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // bu yerda input satr
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isString(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isString](../_analysis/isString.md)

<br>

---

<small>Fayl 30 January 2026 at 13:16:16 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>