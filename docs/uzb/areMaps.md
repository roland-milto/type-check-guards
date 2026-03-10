# areMaps

## Tavsif

`areMaps` berilgan massiv bo‘sh emasligini va uning barcha elementlari `Map` instansiyalari ekanini aniqlaydi.

### Foydalanish holati

Noma’lum kirishni (masalan, JSON parsing, tashqi APIlar yoki dinamik manbalardan) `Map` obyektlarining bo‘sh bo‘lmagan
ro‘yxati sifatida ishlatishdan oldin tekshirish.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Bo‘sh massiv uchun `false` qaytaradi; faqat massiv to‘ldirilgan va har bir element `Map` bo‘lgandagina `true`
> qaytaradi.

### Afzalliklar

- Har bir element `Map` instansiyasi ekanini ta’minlaydi; faqat butun massiv tekshiruvdan o‘tgandagina `true` qaytaradi.
- Bo‘sh massivlarni ataylab rad etadi, “ma’lumot yo‘q” holatini tasodifan yaroqli kirish sifatida qabul qilishning
  oldini oladi.
- To‘plam bo‘ylab `Map`ga xos amallarni (masalan, `.get()`, `.set()`, iteratsiya) bajarishdan oldin guard sifatida
  foydali.

## Foydalanish

### Sintaksis

Funksiya:

- `areMaps(array)`

Parametrlar:

- `array`: Tekshiriladigan massiv.

### Funksiyani lokal import qilish

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items ish vaqtida Map instansiyalaridan iborat bo‘sh bo‘lmagan massiv ekanligi kafolatlanadi
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // quyidagilar uchun false: bo‘sh massivlar yoki ichida Map bo‘lmagan istalgan qiymat bor massivlar
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areMaps(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Fayl 31 January 2026 at 16:15:17 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>