# areHexadecimals

## Tavsif

Massivdagi barcha elementlar o‘n oltilik satrlar ekanini tekshiradi va faqat bo‘sh bo‘lmagan massivlarda har bir element
yaroqli bo‘lsa `true` qaytaradi.

### Foydalanish holati

`areHexadecimals` dan foydalanuvchi kiritgan ma’lumotlar yoki tashqi ma’lumotlarni (masalan, IDlar, checksumlar,
boshida '#' bo‘lmagan rang kodlari) o‘n oltilik tahlil qilish yoki keyingi qayta ishlashdan oldin tekshirish uchun
foydalaning.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `areHexadecimals` dan noma’lum kirishni qiymatlarni tahlil qilish yoki o‘zgartirishdan oldin tekshirish uchun
> foydalaning (masalan, `parseInt(value, 16)` dan oldin yoki BigInt ga o‘tkazishdan oldin).

### Afzalliklar

- Har bir element o‘n oltilik (hexadecimal) satr ekanini tekshiradi va faqat barcha elementlar mos kelganda `true`
  qaytaradi.
- Bo‘sh massivlarni ataylab rad etadi, kirish ma’lumotlari yo‘q bo‘lsa `false` qaytaradi.
- Guardlar va erta qaytish (early-return) orqali tekshirish uchun mos bo‘lgan sodda mantiqiy natijani (`true`/`false`)
  taqdim etadi.

## Foydalanish

### Sintaksis

Funksiya:

- `areHexadecimals(array)`

Parametrlar:

- `array`: O‘n oltilik satr elementlari bor-yo‘qligi tekshiriladigan massiv.

### Funksiyani lokal import qilish

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areHexadecimals(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Fayl 31 January 2026 at 23:08:25 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>