# areTrue

## Tavsif

Bo‘sh bo‘lmagan massiv faqat boolean `true` qiymatlaridan iboratligini tekshiradi.

### Foydalanish holati

Davom etishdan oldin old shartlar yoki feature flag’lar to‘plami to‘liq yoqilganini (barcha qiymatlar `true`) tekshirish
uchun `areTrue` dan foydalaning; bo‘sh yoki noto‘g‘ri shakllangan kirishlar qanoatlantirilmagan (`false`) deb qaraladi.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `areTrue` bo‘sh massiv uchun ham, shuningdek qat’iy `true` bo‘lmagan istalgan qiymat mavjud bo‘lgan massivlar uchun
> ham `false` qaytaradi.

### Afzalliklar

- Faqat har bir element qat’iy `true` bo‘lganda va massiv bo‘sh bo‘lmaganda `true` qaytaradi.
- Tezda to‘xtaydi: `true` bo‘lmagan qiymat topilishi bilanoq `false` qaytaradi.
- Noto‘g‘ri kirishlarni (massiv bo‘lmaganlar yoki bo‘sh massivlar) `false` qaytarish orqali rad etadi.

## Foydalanish

### Sintaksis

Funksiya:

- `areTrue(array)`

Parametrlar:

- `array`: Barcha qiymatlari `true` ekanligini tekshirish uchun massiv.

### Funksiyani lokal import qilish

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areTrue(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Fayl 30 January 2026 at 13:53:22 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>