# areFloats

## Tavsif

`areFloats` berilgan massiv to‘ldirilganligini va uning barcha elementlari float ekanini tekshiradi.

### Foydalanish holati

JSON, query parametrlari yoki tashqi APIlardan kelgan `unknown[]` ni qabul qilganingizda va raqamli mantiq (masalan,
o‘rtacha qiymat olish, interpolatsiya yoki statistik hisob-kitoblar)ni ishga tushirishdan oldin u bo‘sh bo‘lmagan massiv
ekanini hamda har bir elementi float ekanini ta’minlashingiz kerak bo‘lganda `areFloats` dan foydalaning.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `areFloats` dan `unknown[]` ni faqat floatlardan iborat `number[]` sifatida ishlatishdan oldin guard sifatida
> foydalaning; u bo‘sh massivlar uchun ham, float bo‘lmagan istalgan element uchun ham `false` qaytaradi.

### Afzalliklar

- Faqat kirish qiymati bo‘sh bo‘lmagan massiv bo‘lib, uning har bir elementi suzuvchi nuqtali son (float) bo‘lgandagina
  `true` qaytaradi.
- Tezda to‘xtaydi: float bo‘lmagan element topilishi bilanoq `false` qaytaradi.
- Floatga xos hisob-kitoblarni bajarishdan oldin noma’lum kirishni tekshirishga yordam beradi.

## Foydalanish

### Sintaksis

Funksiya:

- `areFloats(array)`

Parametrlar:

- `array`: Float elementlar bor-yo‘qligini tekshirish uchun massiv.

### Funksiyani lokal import qilish

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // true
console.log(areFloats(b)); // false
console.log(areFloats(c)); // false

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areFloats(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Fayl 30 January 2026 at 16:00:25 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>