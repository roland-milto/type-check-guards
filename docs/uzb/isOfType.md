# isOfType

## Tavsif

Berilgan `value` ko‘rsatilgan tur satriga mos kelishini aniqlaydi: primitivlar uchun `typeof`dan, murakkab turlar uchun
esa zaxira usuldan foydalanadi.

### Foydalanish holati

`unknown` kirishlarni (masalan, API javoblari, foydalanuvchi kiritishi, parse qilingan JSON) tekshirish va toraytirish:
turga xos amallarni bajarishdan oldin qiymat kutilgan tur satriga mosligini tekshirish.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `unknown` qiymatlar bilan ishlaganda runtime turlar bo‘yicha tarmoqlanish uchun `isOfType`dan foydalaning; u `true`/
`false` qaytaradi va `null` hamda `undefined`ni aniq tarzda ko‘rib chiqadi.

### Afzalliklar

- Tezlik va aniqlik uchun primitivlarni bevosita `typeof` orqali tekshiradi.
- `typeof`ning o‘zi kutilganidek farqlay olmaydigan `null` va `undefined` holatlarini to‘g‘ri qayta ishlaydi.
- `getTypeOf` yordamida zaxira taqqoslash orqali murakkab yoki maxsus tur satrlarini qo‘llab-quvvatlaydi.
- Guardlar va tarmoqlanish (branching) uchun mos bo‘lgan sodda boolean natija (`true`/`false`) qaytaradi.

## Foydalanish

### Sintaksis

Funksiya:

- `isOfType(value, type)`

Parametrlar:

- `value`: `type`ga nisbatan sinovdan o‘tkaziladigan qiymat.
- `type`: Tekshiriladigan tur satrining ifodasi.

### Funksiyani lokal import qilish

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // bu yerda input son
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // bu yerda input satr
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isOfType(value, type)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Fayl 30 January 2026 at 17:07:15 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>