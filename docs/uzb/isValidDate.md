# isValidDate

## Tavsif

`isValidDate` berilgan qiymat yaroqli `Date` obyekti ekanini tekshiradi va faqat haqiqiy, yaroqsiz bo‘lmagan sanalar
uchun `true` qaytaradi.

### Foydalanish holati

Foydalanuvchi kiritgan ma’lumot yoki API ma’lumotlarida sana bo‘lishi mumkin bo‘lgan qiymatlarni tekshirish: sana
hisob-kitoblari, formatlash yoki taqqoslashni bajarishdan oldin qiymat haqiqiy `Date` instansiyasi ekanini va yaroqsiz
sana emasligini ta’minlash.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `unknown` tipidagi qiymatlarda `Date` metodlarini (masalan, `toISOString`, `getTime`) chaqirishdan oldin, ular yaroqli
`Date` obyektlari ekanini ta’minlash uchun `isValidDate` dan foydalaning.

### Afzalliklar

- Qiymat `Date` instansiyasi ekanini ta’minlaydi va shunchaki sana-ga o‘xshash satr yoki son emasligini tekshiradi.
- `NaN` vaqt qiymatlarini tekshirish orqali yaroqsiz sanalarni (masalan, `new Date("invalid")`) rad etadi.
- Shart operatorlari va validatsiya pipeline’larida ishlatish oson bo‘lgan sodda boolean guard.
- Avval kirishni tekshirish orqali sana metodlarini chaqirishda runtime xatolarining oldini olishga yordam beradi.

## Foydalanish

### Sintaksis

Funksiya:

- `isValidDate(value)`

Parametrlar:

- `value`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input yaroqli Date nusxasi
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isValidDate(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Fayl 30 January 2026 at 16:53:38 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>