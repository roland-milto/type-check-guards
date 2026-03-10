# areStrings

## Tavsif

`areStrings` massiv bo‘sh emasligini va uning barcha elementlari satr ekanini tekshiradi; faqat shu holatda `true`
qaytaradi.

### Foydalanish holati

Tashqi yoki foydalanuvchi taqdim etgan ma’lumotlarni (masalan, query parametrlari, JSON payloadlar, CSV maydonlari)
tekshirib, qayta ishlashdan oldin sizda bo‘sh bo‘lmagan satrlar ro‘yxati borligini ta’minlash.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Faqat satrga xos mantiqni qo‘llashdan oldin noma’lum massivlarni tekshirish uchun `areStrings`dan foydalaning; u bo‘sh
> massivlar uchun `false` qaytaradi.

### Afzalliklar

- Har bir element satr (string) ekanini ta’minlaydi va aralash turdagi massivlarni `false` qaytarish orqali rad etadi.
- Bo‘sh massivlarni rad etadi, shuning uchun `true` faqat bo‘sh bo‘lmagan satrlar ro‘yxatini bildiradi.
- Faqat satrga xos amallarni (masalan, `trim`, `toLowerCase`) bajarishdan oldin tezkor runtime tekshiruv (guard)
  sifatida foydali.

## Foydalanish

### Sintaksis

Funksiya:

- `areStrings(value)`

Parametrlar:

- `value`: Expected type `string[]`.

### Funksiyani lokal import qilish

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input ish vaqtida bo‘sh bo‘lmagan string[]
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areStrings(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Fayl 30 January 2026 at 13:21:04 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>