# isEmpty

## Tavsif

Berilgan qiymat bo‘sh yoki yo‘qligini aniqlaydi: `null`, `undefined`, bo‘sh/faqat bo‘sh joyli satrlar, bo‘sh massivlar,
bo‘sh `Map`/`Set`, yoki o‘zining sanab o‘tiladigan xususiyatlari bo‘lmagan obyektlar uchun `true` qaytaradi.

### Foydalanish holati

`isEmpty` dan kirishlarni tekshirish va bir nechta ma’lumot turlari bo‘ylab yo‘q/bo‘sh qiymatlarni aniqlash uchun
foydalaning (masalan, forma maydonlari, API payloadlari, konfiguratsiya obyektlari) — bu yerda `null`, `undefined`,
faqat bo‘sh joyli satrlar, bo‘sh kolleksiyalar va xususiyatsiz obyektlar bo‘sh deb qaralishi kerak.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `isEmpty` mantiqiy qiymat qaytaradigan utilita (TypeScript type predicate emas), shuning uchun u o‘zi mustaqil
> ravishda turlarni toraytirmaydi; uni kompilyatsiya vaqtida toraytirishdan ko‘ra validatsiya/tarmoqlanish uchun
> ishlating.

### Afzalliklar

- Bo‘shlikni tekshirishda `null` va `undefined` qiymatlarini `true` (bo‘sh) deb hisoblaydi.
- Uzunlikni tekshirishdan oldin qirqib (trim) olgani uchun faqat bo‘sh joylardan iborat satrlarni bo‘sh deb hisoblaydi.
- Keng tarqalgan konteyner turlarini (massivlar, `Map`, `Set`) hamda o‘zining sanab o‘tiladigan (enumerable)
  xususiyatlari bo‘lmagan oddiy obyektlarni qo‘llab-quvvatlaydi.
- `hasOwnProperty` tekshiruvlaridan foydalanib, meros qilib olingan xususiyatlarni hisoblashdan qochadi.
- Guardlar va validatsiya uchun mos bo‘lgan sodda mantiqiy (`true`/`false`) natijani qaytaradi.

## Foydalanish

### Sintaksis

Funksiya:

- `isEmpty(value)`

Parametrlar:

- `value`: Bo‘shligini tekshirish uchun qiymat.

### Funksiyani lokal import qilish

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isEmpty(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Fayl 6 February 2026 at 16:21:36 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>