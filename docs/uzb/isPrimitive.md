# isPrimitive

## Tavsif

`isPrimitive` berilgan qiymat primitiv (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`, `symbol`)
ekanligini aniqlaydi.

### Foydalanish holati

Ish vaqtida (runtime) kirishlarni (masalan, API payload maydonlari, konfiguratsiya qiymatlari yoki foydalanuvchi taqdim
etgan ma’lumotlar) tekshirib, qiymatni serializatsiya qilish, loglash yoki faqat primitivlarga xos amallarni qo‘llashdan
oldin u primitiv ekanligini ta’minlash.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `unknown` kirishlarni obyekt yoki funksiya sifatida ko‘rishdan oldin ularni himoyalash (guard) uchun `isPrimitive`dan
> foydalaning; u primitivlar uchun `true`, obyektlar va funksiyalar uchun esa `false` qaytaradi.

### Afzalliklar

- Qiymat JavaScript primitivimi yoki yo‘qligini tez va ajratishsiz (allocation-free) tekshiradi.
- `null`ni primitiv sifatida to‘g‘ri ko‘radi (garchi `typeof null` `"object"` bo‘lsa ham).
- Faqat obyektlarga xos amallarni bajarishdan oldin `unknown` qiymatlarni toraytirishga yordam beradi.

## Foydalanish

### Sintaksis

Funksiya:

- `isPrimitive(value)`

Parametrlar:

- `value`: Primitiv tur ekanligini tekshirish uchun qiymat.

### Funksiyani lokal import qilish

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isPrimitive(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Fayl 30 January 2026 at 23:58:20 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>