# isBuffer

## Tavsif

Qiymat Node.js `Buffer` ekanligini tekshiradi va `true` yoki `false` qaytaradi.

### Foydalanish holati

Runtime paytida kirishlarni (masalan, API payloadlari, fayl ma’lumotlari yoki xabar buferlari) tekshirib, qayta
ishlashdan oldin qiymat `Buffer` ekanligiga ishonch hosil qiling va Node.js tashqarisida `Buffer` mavjud bo‘lmasligi
mumkin bo‘lgan holatlarda ishonchli tarzda `false` oling.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `Buffer`ga xos metodlarni chaqirishdan oldin `unknown` qiymatlarni `Buffer`ga toraytirish uchun `isBuffer`dan
> foydalaning.

### Afzalliklar

- `Buffer.isBuffer` yordamida Node.js `Buffer` instansiyalarini xavfsiz aniqlaydi.
- `Buffer` mavjud bo‘lmagan muhitlarda `false` qaytaradi va runtime xatolarining oldini oladi.
- `unknown` kirish qiymati bilan ishlaydi, bu uni runtime tekshiruvi va tur (type)ni toraytirish uchun mos qiladi.

## Foydalanish

### Sintaksis

Funksiya:

- `isBuffer(value)`

Parametrlar:

- `value`: Sinovdan o‘tkaziladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // a bu yerda Buffer
  console.log(a.toString("utf8"));
}
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isBuffer(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Fayl 31 January 2026 at 16:33:49 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>