# areJson

## Tavsif

Massivning barcha elementlari JSON satrlari ekanini tekshiradi: massiv to‘ldirilgan va har bir element yaroqli JSON
bo‘lsagina `true` qaytaradi; aks holda `false` qaytaradi.

### Foydalanish holati

Kiruvchi ma’lumotlarni (masalan, query parametrlari, muhit o‘zgaruvchilari yoki tashqi APIlardan) tekshirish:
JSON-kodlangan satrlar massivi kutilganda va bo‘sh massivlarni yoki JSON bo‘lmagan istalgan yozuvlarni rad etmoqchi
bo‘lganda.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `areJson` dan `unknown[]` ichida faqat JSON satrlari borligini ularni (masalan, `JSON.parse` bilan) tahlil qilishdan
> oldin tekshirish kerak bo‘lganda foydalaning.

### Afzalliklar

- Faqat har bir element yaroqli JSON satri bo‘lgandagina `true` qaytaradi; aks holda `false` qaytaradi.
- Tezda to‘xtaydi: JSON bo‘lmagan element topilishi bilanoq tekshirishni to‘xtatadi.
- Dizayn bo‘yicha bo‘sh massivlarni rad etadi, to‘ldirilmagan kirish uchun `false` qaytaradi.

## Foydalanish

### Sintaksis

Funksiya:

- `areJson(array)`

Parametrlar:

- `array`: JSON satr elementlari bor-yo‘qligini tekshirish uchun massiv.

### Funksiyani lokal import qilish

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // rost
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // yolg‘on
const empty = areJson([]); // yolg‘on

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areJson(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areJson](../_analysis/areJson.md)

<br>

---

<small>Fayl 30 January 2026 at 16:18:04 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>