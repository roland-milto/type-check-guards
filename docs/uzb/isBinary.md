# isBinary

## Tavsif

`isBinary` qiymatning ikkilik satr (ixtiyoriy ravishda `0b`/`0B` prefiksi bilan) ekanini aniqlaydi va `true` yoki
`false` qaytaradi.

### Foydalanish holati

Keyingi ishlov berishdan oldin foydalanuvchi kiritgan satrlarni (masalan, forma maydonlari, CLI argumentlari,
konfiguratsiya qiymatlari) faqat ikkilik raqamlardan iborat ekanini va ixtiyoriy ravishda `0b`/`0B` prefiksiga ega
bo‘lishi mumkinligini tekshirish.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Noto‘g‘ri kiritmalardan qochish uchun satrni `BigInt`/`Number` ga tahlil qilish yoki o‘girishdan oldin `isBinary` dan
> type guard sifatida foydalaning.

### Afzalliklar

- `0b`/`0B` prefiksi bilan yoki prefikssiz ikkilik satrlarni qabul qiladi.
- Bo‘sh satrlarni hamda boshida/oxirida bo‘shliq belgilariga ega satrlarni (ASCII ≤ 32) rad etadi.
- Istisno (throw) qilmasdan `true`/`false` qaytaradi, bu esa noma’lum kiritmalar uchun xavfsiz qiladi.

## Foydalanish

### Sintaksis

Funksiya:

- `isBinary(value)`

Parametrlar:

- `value`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // rost
const b = isBinary("1010");   // rost
const c = isBinary("0b1020"); // yolg'on
const d = isBinary(0b1010);     // yolg'on

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isBinary(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Fayl 31 January 2026 at 23:11:50 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>