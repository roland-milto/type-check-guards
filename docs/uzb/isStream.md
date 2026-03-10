# isStream

## Tavsif

`isStream` berilgan qiymat stream obyekti (Node.js streamga o‘xshash, `ReadableStream` yoki `WritableStream`) ekanligini
tekshiradi.

### Foydalanish holati

Oddiy obyektlar yoki streamlar bo‘lishi mumkin bo‘lgan kirishlarni (masalan, fayl yuklashlari, HTTP body’lari yoki qayta
ishlash pipeline’lari) tekshiring va qiymat stream ekanligiga qarab mantiqni tarmoqlang.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Stream metodlarini chaqirishdan oldin `unknown` turini toraytirish uchun `isStream` dan foydalaning; u Node.js
> streamga o‘xshash obyektlarni (`pipe`/`on` orqali) va ushbu global’lar mavjud bo‘lganda Web Streams’ni (
`ReadableStream`/`WritableStream`) taniydi.

### Afzalliklar

- `pipe` va `on` funksiyalarini tekshirish orqali keng tarqalgan Node.js streamga o‘xshash obyektlarni xavfsiz
  aniqlaydi.
- Mavjud bo‘lganda `ReadableStream` va `WritableStream` ni tanib, Web Streams’ni ham qo‘llab-quvvatlaydi.
- Guardlar va tarmoqlanish (branching) mantiqi uchun mos bo‘lgan sodda boolean natija (`true`/`false`) qaytaradi.

## Foydalanish

### Sintaksis

Funksiya:

- `isStream(value)`

Parametrlar:

- `value`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream oqimga o‘xshash; siz umumiy oqim APIlaridan xavfsiz foydalanishingiz mumkin
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isStream(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isStream](../_analysis/isStream.md)

<br>

---

<small>Fayl 30 January 2026 at 23:43:36 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>