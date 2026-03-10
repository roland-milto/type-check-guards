# areUndefined

## Açıklama

`areUndefined`, verilen bir dizideki her öğenin `undefined` olup olmadığını kontrol eder.

### Kullanım durumu

İsteğe bağlı sonuçlar listesinin gerçek değer içermediğini (yalnızca `undefined`) doğrulayın; örneğin, eksik girdilerin
`undefined` olarak temsil edildiği arama sonuçlarını map ettikten sonra tüm aramaların başarısız olduğunu doğrulamak
istediğinizde.

> **TypeScript kullanıcıları için not:**
>
> `areUndefined` fonksiyonunu, bir `unknown[]` dizisinin yalnızca `undefined` değerleri içerdiğini doğrulamanız
> gerektiğinde kullanın; dahili `isFilledArray` kontrolü nedeniyle boş diziler ve dizi olmayan/geçersiz girdiler için
`false` döndürür.

### Avantajlar

- `isFilledArray` aracılığıyla dolu bir dizi gerektirerek, dizi olmayanlar ve boş diziler için `false` döndürür.
- Niyetini açıkça ortaya koyarak yalnızca bazılarını değil, her bir öğenin `undefined` olmasını sağlar.
- Bilinmeyen girdi koleksiyonlarını doğrularken guard tarzı bir predicate olarak kullanışlıdır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areUndefined(array)`

Parametreler:

- `array`: `undefined` öğeleri açısından kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Not: boş diziler için false döndürür
const r4 = areUndefined([]); // false

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areUndefined(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Dosya 30 January 2026 at 13:58:24 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>