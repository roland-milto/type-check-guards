# areRegExes

## Tavsif

`areRegExes` qiymat faqat `RegExp` obyektlaridan iborat to‘ldirilgan massiv ekanini tekshiradi.

### Foydalanish holati

Konfiguratsiya opsiyasi (masalan, ruxsat berish/taqiqlash patternlari ro‘yxati) moslashtirish uchun ishlatishdan oldin u
muntazam ifodalardan iborat bo‘sh bo‘lmagan massiv ekanini tekshiring.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Iteratsiya qilish yoki patternlarni birlashtirishdan oldin `unknown` turini `RegExp[]` ga toraytirish uchun
`areRegExes` dan foydalaning.

### Afzalliklar

- Qiymat bo‘sh bo‘lmagan massiv ekanini va har bir element `RegExp` instansiyasi ekanini ta’minlaydi.
- Foydalanuvchi kiritmasi yoki konfiguratsiyani tekshirish uchun sodda boolean himoya (`true`/`false`) taqdim etadi.
- Keyingi kod barcha elementlar muntazam ifoda amallarini qo‘llab-quvvatlaydi deb faraz qilganda, runtime xatolarining
  oldini olishga yordam beradi.

## Foydalanish

### Sintaksis

Funksiya:

- `areRegExes(array)`

Parametrlar:

- `array`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // bu yerda patterns RegExp massividir
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areRegExes(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Fayl 30 January 2026 at 23:22:30 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>