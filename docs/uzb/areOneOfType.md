# areOneOfType

## Tavsif

`areOneOfType` bo‘sh bo‘lmagan massivdagi barcha elementlar ko‘rsatilgan runtime turlaridan biriga tegishli-yo‘qligini
tekshiradi.

### Foydalanish holati

Kiruvchi ma’lumotlarni (masalan, parse qilingan JSON) tekshirish: maydon bo‘sh bo‘lmagan massiv bo‘lishi va uning
elementlari ma’lum primitiv turlar to‘plami bilan cheklangan bo‘lishi kerak; massiv bo‘sh bo‘lsa yoki ruxsat etilmagan
tur mavjud bo‘lsa `false` qaytaring.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Bu funksiya boolean qaytaradi va kompilyatsiya vaqtida massiv element turlarini toraytirmaydi; keyingi qayta
> ishlashdan oldin uni runtime validatsiya bosqichi sifatida ishlating.

### Afzalliklar

- Massivdagi har bir element ruxsat etilgan runtime turlaridan kamida bittasiga mos kelishini ta’minlaydi; faqat butun
  massiv tekshiruvdan o‘tganda `true` qaytaradi.
- Noto‘g‘ri kirishlarni erta rad etadi: `array` yoki `types` bo‘sh bo‘lsa yoki to‘ldirilgan massiv bo‘lmasa `false`
  qaytaradi.
- `areOneOfType` ga bitta chaqiruv bilan aralash turdagi to‘plamlarni (masalan, sonlar va satrlar) tekshirish uchun
  foydali.

## Foydalanish

### Sintaksis

Funksiya:

- `areOneOfType(array, types)`

Parametrlar:

- `array`: Berilgan turlarga nisbatan tekshiriladigan elementlar massivi.
- `types`: Tekshiriladigan ma’lumot turlarini ifodalovchi satrlar massivi.

### Funksiyani lokal import qilish

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areOneOfType(array, types)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Fayl 31 January 2026 at 23:39:12 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>