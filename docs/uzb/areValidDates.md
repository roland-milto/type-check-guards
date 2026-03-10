# areValidDates

## Tavsif

Massiv bo‘sh emasligini va to‘liq yaroqli `Date` obyektlaridan iboratligini aniqlaydi.

### Foydalanish holati

Sana bilan bog‘liq amallarni (saralash, diapazon tekshiruvlari, formatlash) bajarishdan oldin foydalanuvchi yoki API
taqdim etgan massivlarni tekshirish uchun `areValidDates` dan foydalaning; bu barcha yozuvlar haqiqiy, yaroqli `Date`
obyektlari ekanini va ro‘yxat bo‘sh emasligini ta’minlaydi.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `areValidDates` bo‘sh massiv uchun `false` qaytaradi; uni validatsiya bosqichi sifatida ishlatishdan oldin massiv
> bo‘sh bo‘lmasligi ko‘zda tutilganiga ishonch hosil qiling.

### Afzalliklar

- Faqat har bir element yaroqli `Date` instansiyasi bo‘lgandagina `true` qaytaradi (masalan, `new Date('invalid')` kabi
  yaroqsiz sanalar bo‘lmaydi).
- `false` qaytarish orqali bo‘sh kiritishni rad etadi, shuning uchun faqat mazmunli, bo‘sh bo‘lmagan sana ro‘yxatlarini
  qabul qilishingizni ta’minlaydi.
- Boshqa validatsiyalar bilan oson birlashtiriladigan sodda boolean guard-uslubidagi tekshiruvni taqdim etadi.

## Foydalanish

### Sintaksis

Funksiya:

- `areValidDates(array)`

Parametrlar:

- `array`: Tekshiriladigan massiv, unda `Date` obyektlari bo‘lishi mumkin.

### Funksiyani lokal import qilish

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // rost
console.log(areValidDates(b)); // yolg‘on
console.log(areValidDates(c)); // yolg‘on
console.log(areValidDates(d)); // yolg‘on

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areValidDates(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Fayl 30 January 2026 at 14:34:40 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>