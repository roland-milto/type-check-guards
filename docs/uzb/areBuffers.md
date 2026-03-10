# areBuffers

## Tavsif

`areBuffers` berilgan qiymat bo‘sh bo‘lmagan, to‘ldirilgan massiv ekanini va undagi har bir element `Buffer` ekanini
tekshiradi; shunday bo‘lsa `true`, aks holda `false` qaytaradi.

### Foydalanish holati

Kiruvchi bo‘lak (chunk) massivlarini (masalan, streamlardan, fayl yuklashlardan yoki tarmoq paketlaridan) tekshirib,
barcha qismlar `Buffer` instansiyalari ekanini tasdiqlang; so‘ng ularni birlashtirish, dekodlash yoki kriptografik yoxud
ikkilik ishlov berish funksiyalariga uzatishdan oldin.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `unknown[]` ni `Buffer.concat` kabi Bufferga xos APIlarni chaqirishdan oldin tekshirish uchun `areBuffers` dan
> foydalaning; bu funksiya faqat har bir element `Buffer` bo‘lgandagina `true` qaytarishini ta’minlaydi.

### Afzalliklar

- Kiritmadagi har bir element Node.js `Buffer` instansiyasi ekanini ta’minlaydi, faqat butun massiv mos kelgandagina
  `true` qaytaradi.
- Bo‘sh bo‘lmagan, to‘ldirilgan massivni talab qilib, yaroqsiz kiritmalarni erta rad etadi; bo‘sh massivlar yoki massiv
  bo‘lmagan qiymatlar uchun `false` qaytaradi.
- Faqat bufferga xos amallarni (masalan, birlashtirish, xeshlash, ikkilik protokollar) bajarishdan oldin qo‘riqlovchi (
  guard) sifatida foydali.

## Foydalanish

### Sintaksis

Funksiya:

- `areBuffers(array)`

Parametrlar:

- `array`: Buffer instansiyalari bor-yo‘qligini tekshirish uchun massiv.

### Funksiyani lokal import qilish

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areBuffers(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Fayl 31 January 2026 at 16:28:01 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>