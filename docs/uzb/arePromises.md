# arePromises

## Tavsif

`arePromises` massivdagi barcha elementlar `Promise` instansiyalari ekan-emasligini aniqlaydi.

### Foydalanish holati

Dinamik tarzda tuzilgan yoki tashqaridan berilgan ro‘yxatda faqat promise-lar borligini ularni jamlashdan oldin (
masalan, `Promise.all` bilan) tekshiring.

> **TypeScript foydalanuvchilari uchun eslatma:**
>
> `Promise.all` yoki faqat promise uchun mo‘ljallangan boshqa amallarni chaqirishdan oldin `unknown[]` ni tekshirish
> uchun `arePromises` dan foydalaning; u bo‘sh massivlar uchun `false` qaytaradi.

### Afzalliklar

- Promise-ga xos mantiqni qo‘llashdan oldin har bir element `Promise` ekanini ta’minlaydi.
- To‘ldirilmagan (bo‘sh) massivlar uchun `false` qaytaradi, bo‘sh kirishlar bo‘yicha noaniq natijalarni oldini oladi.
- Tashqi manbalardan keladigan `unknown[]` bilan ishlaganda runtime guard sifatida foydali.

## Foydalanish

### Sintaksis

Funksiya:

- `arePromises(array)`

Parametrlar:

- `array`: `Promise` instansiyalarini tekshirish uchun massiv.

### Funksiyani lokal import qilish

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values ish vaqtida Promise nusxalaridan iborat massiv
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Obyektni global import qilish

Funksiyalarni obyektning global metodlari sifatida import qilish uchun quyidagidan foydalaning:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Shundan so‘ng quyidagi metod global tarzda mavjud bo‘ladi:

- `Type.arePromises(array)`

## Funksiya tahlili

Bu yerda funksiyalarga turli parametrlar kiritilganda hosil bo‘ladigan chiqishning jadval tahlili
hujjatlashtirilgan: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Fayl 30 January 2026 at 23:50:29 (UTC) kuni *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** dan foydalanib *
*[Roland Milto](https://roland-milto.de/)** tomonidan yaratildi.</small>