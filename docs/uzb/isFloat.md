# isFloat

## Tavsif

`isFloat` berilgan `value` chekli suzuvchi nuqtali son (butun son bo‘lmagan `number`) ekanligini aniqlaydi.

### Foydalanish holati

Kasr qiymatlar talab qilinadigan (masalan, narxlar, o‘lchovlar, stavkalar) foydalanuvchi kiritgan sonli qiymatlarni
tekshirish va butun sonlar, `NaN` hamda cheksizliklarni rad etish.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Faqat chekli, butun bo‘lmagan sonli kirishlarni qabul qilishingiz kerak bo‘lganda `isFloat`dan foydalaning; u butun
> sonlar va chekli bo‘lmagan sonlarni rad etadi.

### Afzalliklar

- Faqat chekli, butun bo‘lmagan sonlar uchun `true` qaytaradi (butun sonlar, `NaN`, `Infinity` va `-Infinity` bundan
  mustasno).
- Har qanday kirish turi (`unknown`) bilan ishlaydi va `typeof value === "number"` tekshiruvi orqali xavfsiz
  toraytiradi.
- Oldindan aytib bo‘ladigan xatti-harakat uchun o‘rnatilgan sonli tekshiruvlardan (`Number.isInteger`,
  `Number.isFinite`) foydalanadi.

## Foydalanish

### Sintaksis

Funksiya:

- `isFloat(value)`

Parametrlar:

- `value`: Qiymat suzuvchi nuqtali son ekanligini tekshirish uchun.

### Funksiyani lokal import qilish

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // value ish vaqtida son; u chekli va butun son emas
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isFloat(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Fayl 30 January 2026 at 16:10:29 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>