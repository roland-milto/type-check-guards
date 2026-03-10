# isNumeric

## Tavsif

`isNumeric` berilgan `value` raqamli hisoblanishini, uning aniqlangan turini `NUMERIC_TYPES` bilan solishtirish orqali
belgilaydi.

### Foydalanish holati

Raqamli amallarni bajarishdan oldin kirishlarni (masalan, API payloadlari, forma qiymatlari, konfiguratsiya) tekshirish
va `NUMERIC_TYPES` ga muvofiq raqamga o‘xshash turlarni (masalan, `BigInt`) izchil qabul qilish uchun `isNumeric` dan
foydalaning.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `isNumeric` boolean qaytaruvchi predikat; uni qiymat kutubxona tomonidan belgilangan raqamli turlar to‘plamiga
> kirishini tekshiruvchi runtime tekshiruv sifatida qabul qiling.

### Afzalliklar

- Raqamli aniqlash mantiqini markazlashtirish va kod bazasi bo‘ylab tekshiruvlarni izchil saqlash uchun `getTypeOf`
  hamda `NUMERIC_TYPES` dan foydalanadi.
- Tarmoqlanish va guard-uslubidagi foydalanish uchun qulay bo‘lgan sodda boolean (`true`/`false`) qaytaradi.
- `NUMERIC_TYPES` tomonidan belgilangan bir nechta raqamli ko‘rinishlarni (masalan, `number`, `BigInt`)
  qo‘llab-quvvatlaydi.

## Foydalanish

### Sintaksis

Funksiya:

- `isNumeric(value)`

Parametrlar:

- `value`: Raqamli tur ekanligini tekshirish uchun qiymat.

### Funksiyani lokal import qilish

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v kutubxonaning tur qoidalariga ko'ra raqamli deb hisoblanadi
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isNumeric(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Fayl 6 February 2026 at 15:55:13 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>