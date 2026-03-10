# areStreams

## Tavsif

`areStreams` qiymat har bir elementi `Stream` bo‘lgan to‘ldirilgan massiv ekan-emasligini aniqlaydi.

### Foydalanish holati

Foydalanuvchi taqdim etgan yoki dinamik tarzda tuzilgan to‘plamlarni (masalan, bir nechta fayl o‘qish streamlari) piping
qilish, resume qilish yoki ularni guruh sifatida boshqacha tarzda ishlatishdan oldin tekshirish.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Noma’lum kiritmani `Stream[]` sifatida ko‘rib chiqishdan oldin uni tekshirish uchun `areStreams`dan foydalaning; u
> faqat qiymat bo‘sh bo‘lmagan massiv bo‘lsa va har bir element `Stream` bo‘lgandagina `true` qaytaradi.

### Afzalliklar

- Kiritma har bir elementi `Stream` bo‘lgan to‘ldirilgan massiv ekanini ta’minlaydi.
- Qayta ishlashdan oldin stream to‘plamlarini tekshirish uchun sodda `true`/`false` himoyasini taqdim etadi.
- Tezda to‘xtaydi: `Stream` bo‘lmagan element topilishi bilanoq `false` qaytaradi.
- Kod barcha elementlar `Stream` instansiyalari deb faraz qilganda, runtime xatolarining oldini olishga yordam beradi.

## Foydalanish

### Sintaksis

Funksiya:

- `areStreams(array)`

Parametrlar:

- `array`: Stream obyektlari bor-yo‘qligini tekshirish uchun massiv.

### Funksiyani lokal import qilish

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input Stream obyektlaridan iborat to‘ldirilgan massiv
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areStreams(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Fayl 30 January 2026 at 23:36:19 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>