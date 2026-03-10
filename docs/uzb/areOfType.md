# areOfType

## Tavsif

Berilgan `array` dagi barcha elementlar ko‘rsatilgan `type` ga tegishli ekanligini tekshiradi.

### Foydalanish holati

`areOfType` dan noma’lum kirishni (masalan, parse qilingan JSON, API payloadlari, foydalanuvchi kiritishi) tekshirish
uchun foydalaning, so‘ng massivning har bir elementida turga xos amallarni bajaring.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `areOfType` type guard bo‘lgani uchun, TypeScript `if (areOfType(...)) {}` bloki ichida massivni
`Array<DataTypeOf<T>>` ga toraytiradi.

### Afzalliklar

- TypeScript type guard taqdim etadi: u `true` qaytarganda, kirish qiymati `Array<DataTypeOf<T>>` ga toraytiriladi.
- Har bir elementni so‘ralgan runtime turi bo‘yicha tekshiradi, aralash turdagi massivlarning o‘tib ketishini oldini
  oladi.
- Tezda to‘xtaydi: mos kelmaydigan element topilishi bilanoq `false` qaytaradi.
- Dizayn bo‘yicha massiv bo‘lmaganlarni va bo‘sh massivlarni rad etadi (`isFilledArray` ga bog‘liq).

## Foydalanish

### Sintaksis

Funksiya:

- `areOfType(array, type)`

Parametrlar:

- `array`: Tekshiriladigan massiv.
- `type`: Massivdagi har bir elementga nisbatan tekshiriladigan tur.

### Funksiyani lokal import qilish

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values endi number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areOfType(array, type)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Fayl 30 January 2026 at 17:12:02 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>