# isOneOfType

## Tavsif

`isOneOfType` berilgan `value` taqdim etilgan tur satrlaridan kamida bittasiga mos kelishini aniqlaydi; agar biror
moslik topilsa `true`, aks holda `false` qaytaradi.

### Foydalanish holati

Keyingi mantiqqa o‘tishdan oldin bir nechta maqbul runtime turlariga (masalan, `number` yoki `string`) ruxsat berish
orqali bo‘sh tiplangan yoki tashqi ma’lumotlarni (masalan, parse qilingan JSON, so‘rov parametrlari) tekshirish.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Bir qiymat runtime’da bir nechta ruxsat etilgan turlardan istalgan biriga mos kelishini tekshirmoqchi bo‘lsangiz
`isOneOfType` dan foydalaning; u kamida bitta tur mos kelsa `true`, aks holda `false` qaytaradi.

### Afzalliklar

- Bir chaqiruvda qiymatni bir nechta ruxsat etilgan turlarga nisbatan tekshiradi va birinchi moslikda `true` qaytaradi.
- Shartli mantiq va erta qaytishlar bilan yaxshi uyg‘unlashadigan sodda boolean natijani taqdim etadi.
- `unknown` kirishlar bilan ishlaydi, bu uni runtime chegaralarida (masalan, tashqi ma’lumotlar, foydalanuvchi
  kiritishi) foydali qiladi.

## Foydalanish

### Sintaksis

Funksiya:

- `isOneOfType(value, types)`

Parametrlar:

- `value`: Ko‘rsatilgan turlarga nisbatan tekshiriladigan qiymat.
- `types`: Qiymatning ehtimoliy turlarini ifodalovchi tur satrlari massivi.

### Funksiyani lokal import qilish

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input ish vaqtida obyekt hisoblanadi
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isOneOfType(value, types)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Fayl 6 February 2026 at 13:59:20 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>