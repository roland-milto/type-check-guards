# isFilledArray

## Tavsif

`value` kamida bitta elementga ega massiv ekanligini tekshiradi va `true` yoki `false` qaytaradi.

### Foydalanish holati

Iteratsiya qilish, birinchi elementga murojaat qilish yoki kamida bitta element talab qiladigan mantiqni qo‘llashdan
oldin kiruvchi ma’lumotlarni (masalan, API payloadlari, forma qiymatlari, konfiguratsiya) tekshirish uchun
`isFilledArray`dan foydalaning.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `isFilledArray` runtime guard bo‘lib, boolean qaytaradi; u massiv bo‘sh emasligini tasdiqlashdan tashqari element
> turlarini toraytirmaydi.

### Afzalliklar

- `Array.isArray` va uzunlik tekshiruvidan foydalanib bo‘sh bo‘lmagan massivni sodda va tez tekshirish.
- Kod massivda kamida bitta element bor deb faraz qilganda, runtime xatolarining oldini olishga yordam beradi.
- Aniq boolean natija: bo‘sh bo‘lmagan massivlar uchun `true`, aks holda `false` qaytaradi.

## Foydalanish

### Sintaksis

Funksiya:

- `isFilledArray(value)`

Parametrlar:

- `value`: Qiymat bo‘sh bo‘lmagan massiv ekanligini tekshirish uchun.

### Funksiyani lokal import qilish

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input ish vaqtida bo‘sh bo‘lmagan massiv
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isFilledArray(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Fayl 6 February 2026 at 11:49:23 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>