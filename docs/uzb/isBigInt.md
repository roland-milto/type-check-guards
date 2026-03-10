# isBigInt

## Tavsif

`isBigInt` berilgan qiymat `bigint` turiga mansubligini tekshiradi: BigInt primitivlari uchun `true`, aks holda `false`
qaytaradi.

### Foydalanish holati

BigInt-ga xos hisob-kitoblarni bajarish yoki qiymatlarni faqat BigInt qabul qiladigan maydonlarda saqlashdan oldin,
tiplanmagan manbalardan (masalan, JSON parsing, foydalanuvchi kiritishi, tashqi APIlar) kelgan qiymatlarni tekshirish va
toraytirish.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> BigInt arifmetikasi (masalan, `+`, `*`) BigInt operandlarini talab qilgani uchun, undan oldin `unknown` ni `bigint` ga
> toraytirish uchun `isBigInt` dan foydalaning.

### Afzalliklar

- `bigint` primitiv turi uchun sodda va ishonchli runtime tekshiruvni taqdim etadi.
- Faqat BigInt uchun mo‘ljallangan amallarni bajarishdan oldin `unknown` qiymatlarni toraytirishga yordam beradi.
- Soxta ijobiy natijalardan qochadi: oddiy sonlar, satrlar va boshqa turlar `false` qaytaradi.

## Foydalanish

### Sintaksis

Funksiya:

- `isBigInt(value)`

Parametrlar:

- `value`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // rost
console.log(isBigInt(10));  // yolg‘on
console.log(isBigInt("10")); // yolg‘on
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isBigInt(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Fayl 31 January 2026 at 23:33:49 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>