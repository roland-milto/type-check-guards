# isIndexFound

## Tavsif

`isIndexFound` berilgan qiymat manfiy bo‘lmagan butun son ekanligini aniqlaydi, bu indeks topilganini bildiradi.

### Foydalanish holati

Qidiruv natijasi massiv yoki satrga indekslashdan oldin foydalanish mumkin bo‘lgan indeksni (butun son `>= 0`)
bildirayotganini tekshiring; bu `-1` yoki son bo‘lmagan qiymatlardan tasodifiy foydalanishning oldini oladi.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `indexOf`, `findIndex` yoki `-1` (yoki boshqa yaroqsiz qiymatlar) “topilmadi”ni bildirishi mumkin bo‘lgan maxsus
> qidiruvlardan keyin `isIndexFound`dan foydalaning. U `true` qaytarganda, qiymat son bo‘ladi va uni massiv/satr indeksi
> sifatida xavfsiz ishlatish mumkin.

### Afzalliklar

- Manfiy bo‘lmagan butun sonni tekshirish orqali indeks topilgan-topilmaganini aniqlash uchun sodda type guard taqdim
  etadi.
- Faqat haqiqiy indeksga o‘xshash qiymatlar (butun sonlar `>= 0`) uchun `true` qaytaradi; manfiylarni, butun
  bo‘lmaganlarni va son bo‘lmaganlarni rad etadi.
- `-1` qiymatini “topilmadi” sifatida qaytaradigan APIlar bilan ishlaganda off-by-one va sentinel-qiymat xatolaridan
  qochishga yordam beradi.

## Foydalanish

### Sintaksis

Funksiya:

- `isIndexFound(value)`

Parametrlar:

- `value`: Manfiy bo‘lmagan butun son ekanligini tekshirish uchun qiymat.

### Funksiyani lokal import qilish

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx bu yerda son va >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// indexOf bilan odatiy foydalanish
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isIndexFound(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Fayl 31 January 2026 at 00:48:31 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>