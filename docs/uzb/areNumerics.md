# areNumerics

## Tavsif

`areNumerics` qiymat bo‘sh bo‘lmagan massiv ekanini va barcha elementlari sonli ekanini tekshiradi.

### Foydalanish holati

Yig‘indi, o‘rtacha qiymat yoki boshqa sonli amallarni hisoblashdan oldin tashqi yoki tiplanmagan ma’lumotlarni (masalan,
JSON payloadlar, query parametrlari, forma kiritmalari) tekshirish uchun `areNumerics`dan foydalaning; u kirish qiymati
bo‘sh bo‘lmagan sonli massiv ekanini ta’minlaydi, aks holda `false` qaytaradi.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `unknown` kirishni sonli massiv sifatida ishlatishdan oldin uni himoyalash (guard) uchun `areNumerics`dan foydalaning;
> u massiv bo‘lmagan qiymatlar va bo‘sh massivlar uchun `false` qaytaradi.

### Afzalliklar

- Faqat kirish qiymati bo‘sh bo‘lmagan massiv bo‘lib, har bir elementi sonli bo‘lgandagina `true` qaytaradi.
- Tezda to‘xtaydi: sonli bo‘lmagan element topilishi bilanoq tekshirishni to‘xtatib, `false` qaytaradi.
- Sonli amallarni bajarishdan oldin noma’lum kirish qiymatini xavfsiz tarzda tekshirishga yordam beradi.

## Foydalanish

### Sintaksis

Funksiya:

- `areNumerics(array)`

Parametrlar:

- `array`: Sonli elementlar bor-yo‘qligini tekshirish uchun massiv.

### Funksiyani lokal import qilish

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // rost
console.log(areNumerics(b)); // rost
console.log(areNumerics(c)); // yolg'on
console.log(areNumerics(d)); // yolg'on
console.log(areNumerics(e)); // yolg'on

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areNumerics(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Fayl 6 February 2026 at 16:08:15 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>