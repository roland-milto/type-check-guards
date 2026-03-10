# areNumbers

## Tavsif

`areNumbers` qiymat bo‘sh bo‘lmagan massiv ekanini va barcha elementlari son ekanini tekshiradi.

### Foydalanish holati

Jami, o‘rtacha yoki boshqa sonli agregatsiyalarni hisoblashdan oldin foydalanuvchi yoki API taqdim etgan ma’lumotlar
bo‘sh bo‘lmagan sonlar massivi ekanini tasdiqlash.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> Sonli hisob-kitoblarni bajarishdan oldin noma’lum massivlarni tekshirish uchun `areNumbers`dan foydalaning; u bo‘sh
> massivlar uchun ham, tarkibida son bo‘lmagan qiymat bor massivlar uchun ham `false` qaytaradi.

### Afzalliklar

- Faqat kirish qiymati bo‘sh bo‘lmagan massiv bo‘lib, har bir elementi son bo‘lgandagina `true` qaytaradi.
- Bo‘sh massivlar va massiv bo‘lmagan kirishlarni rad etib, noto‘g‘ri ijobiy natijalarning oldini oladi.
- Ish vaqtida xatolardan qochish uchun sonli amallardan (masalan, yig‘ish, o‘rtacha olish) oldin qo‘riqlovchi sifatida
  foydali.

## Foydalanish

### Sintaksis

Funksiya:

- `areNumbers(array)`

Parametrlar:

- `array`: Son elementlari bor-yo‘qligi tekshiriladigan massiv.

### Funksiyani lokal import qilish

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.areNumbers(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Fayl 30 January 2026 at 13:06:29 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>