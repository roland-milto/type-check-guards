# areOctals

## Tavsif

`areOctals` berilgan qiymat bo‘sh bo‘lmagan, yaroqli sakkizlik satrlardan iborat massiv ekanini aniqlaydi.

### Foydalanish holati

`areOctals` dan foydalanuvchi kiritmalari, konfiguratsiya qiymatlari yoki API payloadlarini tekshirishda, ular sakkizlik
literal(lar)ni (masalan, `0o755` kabi fayl ruxsat rejimlari) o‘z ichiga olishi shart bo‘lganda va bo‘sh massivlarni yoki
har qanday yaroqsiz elementlarni `false` qaytarish orqali rad etmoqchi bo‘lganingizda foydalaning.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `areOctals` dan foydalanib, (masalan, `Number(...)` orqali yoki maxsus tahlil qilish bilan) o‘zgartirishdan oldin
> sizda har bir elementi yaroqli sakkizlik satr bo‘lgan bo‘sh bo‘lmagan `unknown[]` borligini ta’minlang.

### Afzalliklar

- Qiymat bo‘sh bo‘lmagan massiv ekanini va har bir element sakkizlik (octal) satr ekanini tekshiradi; faqat barcha
  elementlar tekshiruvdan o‘tganda `true` qaytaradi.
- Tezda muvaffaqiyatsiz bo‘ladi: sakkizlik bo‘lmagan element topilishi bilanoq `false` qaytaradi.
- Ish vaqtida xatolar va nomuvofiq kirishlarni qayta ishlashning oldini olish uchun sakkizlik satrlarni tahlil qilish
  yoki o‘zgartirishdan oldin qo‘riqlovchi (guard) sifatida foydali.

## Foydalanish

### Sintaksis

Funksiya:

- `areOctals(array)`

Parametrlar:

- `array`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value sakkizlik satrlardan iborat bo‘sh bo‘lmagan massiv
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areOctals(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Fayl 30 January 2026 at 14:59:05 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>