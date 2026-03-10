# areSymbols

## Tavsif

Kirish qiymati elementlari to‘liq symbol bo‘lgan to‘ldirilgan massiv ekanini tekshiradi va `true` yoki `false`
qaytaradi.

### Foydalanish holati

Konfiguratsiya maydoni (masalan, symbol sifatida ifodalangan noyob kalitlar ro‘yxati) `symbol[]` talab qiladigan
APIlarda ishlatishdan oldin faqat symbol-lardan iborat bo‘sh bo‘lmagan massiv ekanini tasdiqlash.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `areSymbols` dan noma’lum kirishni `symbol[]` sifatida ishlatishdan oldin tekshirish uchun foydalaning; u massiv
> bo‘lmagan qiymatlar va bo‘sh massivlar uchun `false` qaytaradi.

### Afzalliklar

- Faqat kirish qiymati bo‘sh bo‘lmagan massiv bo‘lib, har bir elementi symbol bo‘lgandagina `true` qaytaradi.
- Ichki to‘ldirilgan-massiv tekshiruvi orqali massiv bo‘lmagan qiymatlar va bo‘sh massivlarni rad etib, noto‘g‘ri ijobiy
  natijalarning oldini oladi.
- Keyingi ishlov berishdan oldin faqat symbol-lardan iborat ro‘yxatlarni tekshirish uchun runtime type guard sifatida
  foydali.

## Foydalanish

### Sintaksis

Funksiya:

- `areSymbols(array)`

Parametrlar:

- `array`: Symbol elementlari bor-yo‘qligini tekshirish uchun massiv.

### Funksiyani lokal import qilish

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a ish vaqtida faqat symbol-lardan iborat massiv
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areSymbols(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Fayl 30 January 2026 at 14:24:33 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>