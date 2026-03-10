# arePrimitives

## Tavsif

`arePrimitives` berilgan, bo‘sh bo‘lmagan massivdagi barcha elementlar primitiv turlar ekanini baholaydi.

### Foydalanish holati

Kiruvchi ma’lumotlar (masalan, query parametrlari, CSV qatori qiymatlari yoki ID/teglar ro‘yxati) faqat primitiv
qiymatlardan iborat ekanini serializatsiya qilish, xeshlash, loglash yoki obyektlarni qabul qilmasligi kerak bo‘lgan
API’larga uzatishdan oldin tekshiring.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Keyingi ishlov berishdan oldin `unknown[]` faqat primitiv qiymatlardan (string, number, bigint, boolean, symbol,
> undefined yoki null) iborat ekanini ta’minlash kerak bo‘lganda `arePrimitives`dan foydalaning.

### Afzalliklar

- Faqat har bir element primitiv qiymat bo‘lgandagina `true` qaytaradi, bu uni “obyektlar/funksiyalar yo‘q” massivlari
  uchun qat’iy tekshiruvchi qiladi.
- Tezda to‘xtaydi: primitiv bo‘lmagan element topilishi bilanoq `false` qaytaradi.
- Massiv bo‘lmaganlar va bo‘sh massivlar uchun ham (to‘ldirilgan-massiv tekshiruvi orqali) `false` qaytaradi, noto‘g‘ri
  kirishni tasodifan qabul qilib yuborishning oldini oladi.

## Foydalanish

### Sintaksis

Funksiya:

- `arePrimitives(array)`

Parametrlar:

- `array`: Primitiv turdagi elementlar bor-yo‘qligini tekshirish uchun massiv.

### Funksiyani lokal import qilish

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // rost
const r2 = arePrimitives(b); // rost
const r3 = arePrimitives(c); // yolg'on
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.arePrimitives(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Fayl 31 January 2026 at 00:07:12 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>