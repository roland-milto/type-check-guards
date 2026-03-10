# arePlainObjects

## Tavsif

Massivning barcha elementlari oddiy obyekt ekanini tekshiradi; faqat har bir element talablarga javob bersa `true`
qaytaradi.

### Foydalanish holati

Tashqi yoki tiplanmagan ma’lumotlarni (masalan, parse qilingan JSON, API payloadlari, forma yuborishlari) tekshirib,
iteratsiya qilish va xususiyatlarni o‘qishdan oldin bo‘sh bo‘lmagan massiv kelganini va undagi har bir yozuv oddiy
obyekt ekanini tasdiqlash.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> TypeScript’da noma’lum kirishni `Record<string, unknown>[]` (yoki yanada qat’iy obyekt shakli) sifatida ishlatishdan
> oldin uni tekshirish uchun `arePlainObjects` dan foydalaning.

### Afzalliklar

- Kirish massividagi har bir element oddiy obyekt ekanini ta’minlaydi; faqat barcha elementlar mos kelgandagina `true`
  qaytaradi.
- Noto‘g‘ri kirishlarni erta rad etadi (massiv bo‘lmaganlar yoki bo‘sh massivlar) va `false` qaytaradi.
- Obyekt-literal obyektlarni ham, `Object.create(null)` orqali yaratilgan obyektlarni ham yaroqli oddiy obyektlar
  sifatida qabul qiladi.

## Foydalanish

### Sintaksis

Funksiya:

- `arePlainObjects(array)`

Parametrlar:

- `array`: Oddiy obyekt elementlari bor-yo‘qligi tekshiriladigan massiv.

### Funksiyani lokal import qilish

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // rost
const b = arePlainObjects([{}, Object.create(null)]); // rost
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // yolg'on
const d = arePlainObjects([] as unknown[]); // yolg'on
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.arePlainObjects(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Fayl 30 January 2026 at 16:56:29 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>