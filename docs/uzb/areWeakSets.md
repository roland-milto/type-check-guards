# areWeakSets

## Tavsif

Kiritma bo‘sh bo‘lmagan massiv bo‘lib, undagi har bir element `WeakSet` bo‘lsa, faqat shu holatda `true` qaytarishini
tekshiradi.

### Foydalanish holati

Ish vaqtida kiritiladigan ma’lumotlarni (masalan, API’lardan, konfiguratsiyadan yoki foydalanuvchi taqdim etgan
ma’lumotlardan) tekshirib, `WeakSet` xatti-harakatiga bog‘liq mantiqni davom ettirishdan oldin sizda `WeakSet`
instansiyalarining bo‘sh bo‘lmagan ro‘yxati borligini ta’minlash.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `areWeakSets` dan noma’lum kiritmani `WeakSet[]` sifatida ishlatishdan oldin uni tekshirish uchun foydalaning. U bo‘sh
> massivlar va massiv bo‘lmagan qiymatlar uchun `false` qaytaradi.

### Afzalliklar

- Kiritilgan massivdagi har bir element `WeakSet` ekanini ta’minlaydi.
- Bo‘sh massivlar uchun `false` qaytaradi, bu ma’lumot yo‘qligida tasodifiy “hammasi yaroqli” natijalarining oldini
  oladi.
- Kiritma to‘ldirilgan massiv bo‘lmasa (jumladan `null` bo‘lsa), xavfsiz tarzda `false` qaytarib ishlamay qoladi.
- `WeakSet` instansiyalarini talab qiladigan amallarni bajarishdan oldin guard sifatida foydali.

## Foydalanish

### Sintaksis

Funksiya:

- `areWeakSets(array)`

Parametrlar:

- `array`: `WeakSet` obyektlari bor-yo‘qligi tekshiriladigan massiv.

### Funksiyani lokal import qilish

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a WeakSet instansiyalaridan iborat bo‘sh bo‘lmagan massiv
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areWeakSets(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Fayl 30 January 2026 at 14:11:48 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>