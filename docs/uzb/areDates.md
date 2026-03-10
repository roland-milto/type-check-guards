# areDates

## Tavsif

`areDates` berilgan massiv to‘ldirilganini va faqat `Date` obyektlaridan iboratligini aniqlaydi; barcha elementlar
yaroqli sanalar bo‘lgandagina `true` qaytaradi.

### Foydalanish holati

`areDates` dan noma’lum kirishni (masalan, parse qilingan JSON, forma ma’lumotlari, API payloadlari) sana-ga xos
mantiqni ishga tushirishdan oldin tekshirish uchun foydalaning: vaqt bo‘yicha saralash, formatlash yoki oraliqlarni
hisoblash.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Faqat bo‘sh bo‘lmagan va har bir elementi `Date` bo‘lgan massivlar uchun `true` qaytaradi; bo‘sh massivlar `false`
> beradi.

### Afzalliklar

- Massiv bo‘sh emasligini uning tarkibini tekshirishdan oldin ta’minlaydi, bo‘sh kirishlar uchun `true` qaytishining
  oldini oladi.
- Har bir element `Date` instansiyasi ekanini tekshiradi va birinchi nomuvofiqlikda darhol `false` qaytaradi.
- Massiv elementlarida sana-ga xos amallarni bajarishdan oldin guard-uslubidagi tekshiruv sifatida foydali.

## Foydalanish

### Sintaksis

Funksiya:

- `areDates(array)`

Parametrlar:

- `array`: `Date` obyektlari bor-yo‘qligi tekshiriladigan massiv.

### Funksiyani lokal import qilish

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // true
console.log(areDates(b)); // false
console.log(areDates(c)); // false

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areDates(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areDates](../_analysis/areDates.md)

<br>

---

<small>Fayl 31 January 2026 at 15:32:57 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>