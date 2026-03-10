# getTypeOf

## Tavsif

`getTypeOf` berilgan qiymat uchun batafsil, odam o‘qiy oladigan tur yorlig‘ini qaytaradi, jumladan aniqlashtirilgan
raqamli turlar va obyektlarning aniq ko‘rinishlari.

### Foydalanish holati

Kirish validatsiyasi va diagnostikada tur aniqlashni me’yorlashtirish uchun `getTypeOf`dan foydalaning—masalan, `nan`ni
rad etish, faqat `integer` IDlarni qabul qilish, `decimal` kabi raqamli satrlarni oddiy `string`dan boshqacha ko‘rib
chiqish yoki `date` va `regexp` kabi obyekt turlarini aniq loglash uchun.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Qaytish turi `DataTypeAsString | string`. Uni tavsiflovchi yorliq sifatida qabul qiling; tarmoqlanishda `integer`,
`float`, `nan`, `array`, `null` va `undefined` kabi ma’lum literal qiymatlar bilan solishtiring.

### Afzalliklar

- JavaScript’ning `typeof`iga qaraganda aniqroq tur satrini qaytaradi, jumladan `integer`, `float` va `nan` kabi raqamli
  kichik turlarni ham.
- `null` va `undefined`ni mos ravishda `null` va `undefined` sifatida aniq farqlaydi.
- Keng tarqalgan raqamli satr formatlarini aniqlaydi va ularni oddiy `string` o‘rniga `binary`, `octal`, `decimal` yoki
  `hexadecimal` sifatida qayd etadi.
- Shuningdek massivlarni `array` sifatida aniqlaydi va aniq obyekt tur nomlarini (masalan, `date`, `regexp`, `map`,
  `set`) berish uchun `Object.prototype.toString`dan foydalanadi.
- Izchil, odam o‘qiy oladigan tur yorliqlari kerak bo‘ladigan validatsiya, loglash va nosozliklarni tuzatishda juda
  foydali.

## Foydalanish

### Sintaksis

Funksiya:

- `getTypeOf(value)`

Parametrlar:

- `value`: Ma’lumot turini aniqlash kerak bo‘lgan qiymat.

### Funksiyani lokal import qilish

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Namuna tekshiruvlar
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.getTypeOf(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Fayl 6 February 2026 at 13:15:39 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>