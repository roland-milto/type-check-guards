# isMap

## Tavsif

Berilgan `value` `Map` ekanligini tekshiradi: agar shunday bo‘lsa `true`, aks holda `false` qaytaradi.

### Foydalanish holati

JSON parsing, tashqi API’lar yoki foydalanuvchi kiritishi kabi manbalardan `unknown` qiymat olganingizda va `Map`
amallarini bajarishdan oldin u `Map` ekanligiga ishonch hosil qilishingiz kerak bo‘lganda `isMap`dan foydalaning.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `isMap` — runtime guard bo‘lib, qiymat `Map` bo‘lsa `true`, aks holda `false` qaytaradi; `Map` API’larini chaqirishdan
> oldin `unknown` turini toraytirish uchun undan foydalaning.

### Afzalliklar

- Qiymat `Map` ekanligini tezkor runtime tekshiruvdan o‘tkazishni ta’minlaydi.
- `get`, `set` va `has` kabi `Map` metodlarini talab qiladigan kod yo‘llarini himoyalash orqali tur xatolarining oldini
  olishga yordam beradi.
- `unknown` kirish qiymatlari bilan ishlaganda yengil validatsiya bosqichi sifatida yaxshi ishlaydi.

## Foydalanish

### Sintaksis

Funksiya:

- `isMap(value)`

Parametrlar:

- `value`: Tekshiriladigan qiymat.

### Funksiyani lokal import qilish

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.isMap(value)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [isMap](../_analysis/isMap.md)

<br>

---

<small>Fayl 31 January 2026 at 16:42:34 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>