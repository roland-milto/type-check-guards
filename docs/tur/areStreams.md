# areStreams

## Açıklama

`areStreams`, bir değerin her öğesi `Stream` olan dolu bir dizi olup olmadığını belirler.

### Kullanım durumu

Kullanıcı tarafından sağlanan veya dinamik olarak oluşturulan koleksiyonları (örn. birden fazla dosya okuma akışı) bir
grup olarak pipe etmek, resume etmek veya başka işlemler uygulamadan önce doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> `areStreams` öğesini, bilinmeyen girdiyi `Stream[]` olarak ele almadan önce doğrulamak için kullanın; yalnızca değer
> boş olmayan bir dizi olduğunda ve her öğe bir `Stream` olduğunda `true` döndürür.

### Avantajlar

- Bir girdinin, her öğesi bir `Stream` olan dolu bir dizi olmasını sağlar.
- İşlemeden önce akış koleksiyonlarını doğrulamak için basit bir `true`/`false` koruması sağlar.
- Hızlı başarısız olur: `Stream` olmayan bir öğe bulunur bulunmaz `false` döndürür.
- Kod tüm öğelerin `Stream` örnekleri olduğunu varsaydığında çalışma zamanı hatalarını önlemeye yardımcı olur.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areStreams(array)`

Parametreler:

- `array`: Stream nesneleri açısından kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input, Stream nesnelerinden oluşan dolu bir dizidir
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areStreams(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Dosya 30 January 2026 at 23:36:02 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>