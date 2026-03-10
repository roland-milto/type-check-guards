# isSymbol

## Tavsif

`isSymbol` berilgan qiymat `symbol` turiga mansubligini aniqlaydi: symbol bo‘lsa `true`, aks holda `false` qaytaradi.

### Foydalanish holati

`unknown` qiymatni obyektlar va maplarda noyob identifikator, registry kaliti yoki hisoblangan xossa kaliti sifatida
ishlatishdan oldin uning `symbol` ekanini tekshiring.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Symbolga oid funksiyalarni chaqirishdan yoki uni hisoblangan xossa kaliti sifatida ishlatishdan oldin `unknown`ni
`symbol`ga toraytirish uchun `isSymbol`dan foydalaning.

### Afzalliklar

- JavaScript `symbol` primitiv turi uchun sodda va ishonchli runtime tekshiruvni taqdim etadi.
- `unknown` qiymatlarni symbolga xos API’lardan foydalanishdan yoki ularni kalit sifatida saqlashdan oldin toraytirishga
  yordam beradi.
- `typeof`dan foydalanib yolg‘on ijobiy natijalarning oldini oladi, chunki bu `symbol` qiymatlarni aniqlashning kanonik
  usulidir.

## Foydalanish

### Sintaksis

Funksiya:

- `isSymbol(value)`

Parametrlar:

- `value`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // bu yerda input symbol
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isSymbol(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Fayl 30 January 2026 at 14:29:21 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>