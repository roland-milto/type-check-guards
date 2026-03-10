# areWeakMaps

## Tavsif

`areWeakMaps` qiymatning bo‘sh bo‘lmagan massiv ekanini va undagi har bir element `WeakMap` ekanini tekshiradi; faqat
shu holatda `true`, aks holda `false` qaytaradi.

### Foydalanish holati

Ish vaqtida keladigan ma’lumotlarni (masalan, parse qilingan JSON, plagin kirishlari yoki bo‘shroq tiplashtirilgan
konfiguratsiya) tekshirib, u `WeakMap` instansiyalaridan iborat bo‘sh bo‘lmagan massiv ekanini iteratsiya qilish va
`WeakMap` metodlarini chaqirishdan oldin ta’minlash; agar biror element `WeakMap` bo‘lmasa yoki massiv bo‘sh bo‘lsa
`false` qaytaradi.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Noma’lum kirishni bo‘sh bo‘lmagan `WeakMap[]` sifatida ishlatishdan oldin uni tekshirish uchun `areWeakMaps`dan
> foydalaning; u bo‘sh massivlar uchun `false` qaytaradi.

### Afzalliklar

- Berilgan massivdagi har bir element `WeakMap` instansiyasi ekanini ta’minlaydi.
- Bo‘sh massivlar uchun `false` qaytaradi, bu “ma’lumot yo‘q” holatini tasodifan yaroqli kirish sifatida qabul
  qilishning oldini oladi.
- Barcha elementlarda `WeakMap`ga xos amallarni bajarishdan oldin himoya (guard) sifatida foydali.

## Foydalanish

### Sintaksis

Funksiya:

- `areWeakMaps(array)`

Parametrlar:

- `array`: `WeakMap` instansiyalarini tekshirish uchun massiv.

### Funksiyani lokal import qilish

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list WeakMap instansiyalaridan iborat bo‘sh bo‘lmagan massiv
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // bo‘sh bo‘lmagan WeakMap[] emas
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areWeakMaps(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Fayl 30 January 2026 at 13:40:16 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>