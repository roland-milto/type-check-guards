# areBooleans

## Tavsif

`areBooleans` berilgan bo‘sh bo‘lmagan massiv faqat boolean qiymatlardan iboratligini tekshiradi; shunday bo‘lsa `true`,
aks holda `false` qaytaradi.

### Foydalanish holati

Foydalanuvchi taqdim etgan yoki tashqi ma’lumotlarni (masalan, JSON payloadlar, query paramlar, konfiguratsiya
massivlari) tekshirib, bo‘sh bo‘lmagan ro‘yxat faqat booleanlardan iborat ekanini tasdiqlang; so‘ng boolean mantiqini
qo‘llash yoki `boolean[]` kutadigan APIlarga uzatishdan oldin.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `unknown[]` ni `boolean[]` sifatida ishlatishdan oldin uni tekshirish uchun `areBooleans` dan foydalaning; u bo‘sh
> massivlar uchun `false` qaytaradi, shuning uchun bo‘sh ro‘yxatga ruxsat berilishi kerak bo‘lsa, bu holatni alohida
> tarzda ko‘rib chiqing.

### Afzalliklar

- Faqat har bir element boolean bo‘lganda va kirish qiymati bo‘sh bo‘lmagan massiv bo‘lgandagina `true` qaytaradi.
- Bo‘sh massivlarni rad etib ( `false` qaytarib), noto‘g‘ri ijobiy natijalarning oldini oladi.
- Faqat booleanlar bilan ishlaydigan amallardan oldin (masalan, `every`, `some`, mantiqiy reduksiyalar) runtime guard
  sifatida yaxshi ishlaydi.

## Foydalanish

### Sintaksis

Funksiya:

- `areBooleans(array)`

Parametrlar:

- `array`: Boolean elementlar bor-yo‘qligi tekshiriladigan massiv.

### Funksiyani lokal import qilish

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areBooleans(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Fayl 30 January 2026 at 14:43:09 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>