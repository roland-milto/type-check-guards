# isError

## Tavsif

Berilgan `value` `Error` instansiyasi ekanligini tekshiradi.

### Foydalanish holati

`catch` blokidan, callbackdan yoki tashqi kutubxonadan keladigan `unknown` qiymatni olganingizda va `message`, `name`
yoki `stack`ni o‘qishdan oldin uning `Error` ekanligini xavfsiz aniqlashingiz kerak bo‘lganda `isError`dan foydalaning.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `unknown` qiymatlarni (`catch`dan keladiganlar kabi) `Error` sifatida ko‘rib chiqishdan oldin himoyalash uchun
`isError`dan foydalaning.

### Afzalliklar

- `Error` instansiyasi ekanligini qiymatni oddiy runtime tekshiruvdan o‘tkazish imkonini beradi.
- `message` yoki `stack` kabi `Error` xossalariga murojaat qilishdan oldin noma’lum kirishlarni toraytirishga yordam
  beradi.
- `catch`, tashqi APIlar yoki tiplanmagan manbalardan kelgan qiymatlarni qayta ishlashda runtime istisnolari xavfini
  kamaytiradi.

## Foydalanish

### Sintaksis

Funksiya:

- `isError(value)`

Parametrlar:

- `value`: `Error` turi bilan solishtirib tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isError(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isError](../_analysis/isError.md)

<br>

---

<small>Fayl 6 February 2026 at 12:47:38 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>