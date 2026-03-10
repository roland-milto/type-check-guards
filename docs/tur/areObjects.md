# areObjects

## Açıklama

`areObjects`, sağlanan dolu bir dizinin yalnızca nesneler içerip içermediğini kontrol eder.

### Kullanım durumu

`areObjects` fonksiyonunu, bilinmeyen bir dizi aldığınızda (ör. JSON ayrıştırmadan veya harici API'lerden) ve yineleme
yapıp nesne özelliklerine erişmeden önce dizinin boş olmadığından ve her öğenin bir nesne olduğundan emin olmanız
gerektiğinde kullanın.

> **TypeScript kullanıcıları için not:**
>
> `unknown[]` değerini öğeleri nesneymiş gibi ele almadan önce doğrulamak için `areObjects` kullanın; boş diziler için
`false` döndürür.

### Avantajlar

- Yalnızca girdi dolu bir dizi olduğunda ve her öğe bir nesne olduğunda `true` döndürür.
- Nesne olmayan bir öğe bulunur bulunmaz erken durur ve `false` döndürür.
- Nesneye özgü işlemler gerçekleştirmeden önce bilinmeyen girdiyi doğrulamaya yardımcı olur.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areObjects(array)`

Parametreler:

- `array`: Nesne öğeleri içerip içermediği kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value, nesnelerle dolu bir dizidir
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areObjects(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Dosya 31 January 2026 at 00:10:47 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>