# isPlainObject

## Tavsif

Berilgan `value` oddiy obyekt ekanini tekshiradi va shunday bo‘lsa `true`, aks holda `false` qaytaradi.

### Foydalanish holati

`unknown` kirishni (masalan, parse qilingan JSON, tashqi ma’lumotlar yoki funksiya argumentlari) kalitlarni o‘qish yoki
uni tiplashtirilgan konfiguratsiya obyektiga map qilishdan oldin oddiy obyekt ekanini tasdiqlash.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `isPlainObject` `unknown` qiymatni record-ga o‘xshash obyekt sifatida ishlatishdan oldin toraytirish uchun foydali; u
> faqat ichki tegi `[object Object]` bo‘lgan qiymatlar uchun `true` qaytaradi.

### Afzalliklar

- Qiymat oddiy obyekt (ya’ni, `Object` / `{}`) ekanini sodda va ishonchli tarzda tekshiradi va `true` yoki `false`
  qaytaradi.
- Oddiy obyektlarni massivlar, funksiyalar, `null` va boshqa oddiy bo‘lmagan obyekt turlaridan ajratishga yordam beradi.
- TypeScript’da obyekt xossalariga murojaat qilishdan oldin `unknown` qiymatlarni toraytirish uchun type guard sifatida
  foydali.

## Foydalanish

### Sintaksis

Funksiya:

- `isPlainObject(value)`

Parametrlar:

- `value`: Oddiy obyekt ekanligini tekshirish uchun qiymat.

### Funksiyani lokal import qilish

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // bu yerda input oddiy obyekt
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isPlainObject(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Fayl 6 February 2026 at 12:20:31 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>