# arePromises

## Açıklama

`arePromises`, bir dizideki tüm öğelerin `Promise` örnekleri olup olmadığını belirler.

### Kullanım durumu

Dinamik olarak oluşturulan veya haricen sağlanan bir listenin, birleştirmeden önce (ör. `Promise.all` ile) yalnızca
promise’lerden oluştuğunu doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> `Promise.all` veya yalnızca promise’lere yönelik diğer işlemleri çağırmadan önce `unknown[]` doğrulamak için
`arePromises` kullanın; boş diziler için `false` döndürür.

### Avantajlar

- Promise’a özgü mantıkla devam etmeden önce her öğenin bir `Promise` olmasını sağlar.
- Dolu olmayan diziler için `false` döndürerek boş girdilerde belirsiz sonuçları önler.
- Harici kaynaklardan gelen `unknown[]` ile çalışırken çalışma zamanında bir koruma (guard) olarak kullanışlıdır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `arePromises(array)`

Parametreler:

- `array`: Promise örneklerini kontrol etmek için kullanılacak dizi.

### Yerel fonksiyon içe aktarma

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values çalışma zamanında Promise örneklerinden oluşan bir dizidir
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.arePromises(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Dosya 30 January 2026 at 23:50:17 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>