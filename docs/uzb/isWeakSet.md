# isWeakSet

## Tavsif

Berilgan `value` obyektlardan iborat `WeakSet` ekanligini aniqlaydi.

### Foydalanish holati

`isWeakSet` dan tiplanmagan kirishni (masalan, tashqi APIlardan, dinamik konfiguratsiyadan yoki `unknown` qiymatlardan)
qabul qilganda va `WeakSet`-ga xos amallarni bajarishdan oldin uning `WeakSet` ekanligini tekshirishingiz kerak
bo‘lganda foydalaning.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `isWeakSet` dan runtime paytida `unknown` qiymatni `WeakSet<object>` ga toraytirish uchun foydalaning; `WeakSet` faqat
> obyekt havolalarini o‘z ichiga olishi mumkinligini yodda tuting.

### Afzalliklar

- Qiymat `WeakSet` ekanligini tekshirish uchun sodda runtime tekshiruvni taqdim etadi.
- Faqat `WeakSet` instansiyalari shunday sifatida ko‘rib chiqilishini ta’minlab, tur xatolarining oldini olishga yordam
  beradi.
- Har qanday `unknown` kirish bilan ishlaydi va aniq boolean natija (`true`/`false`) qaytaradi.

## Foydalanish

### Sintaksis

Funksiya:

- `isWeakSet(value)`

Parametrlar:

- `value`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a ish vaqtida WeakSet hisoblanadi
}
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isWeakSet(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Fayl 30 January 2026 at 14:19:48 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>