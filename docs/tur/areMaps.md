# areMaps

## Açıklama

`areMaps`, verilen bir dizinin boş olmadığını ve tüm öğelerinin `Map` örnekleri olup olmadığını belirler.

### Kullanım durumu

Bilinmeyen girdiyi (örn. JSON ayrıştırma, harici API'ler veya dinamik kaynaklardan) boş olmayan bir `Map` nesneleri
listesi olarak ele almadan önce doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> Boş bir dizi için `false` döndürür; yalnızca dizi dolu olduğunda ve her öğe bir `Map` olduğunda `true` döndürür.

### Avantajlar

- Her öğenin bir `Map` örneği olmasını sağlar; yalnızca tüm dizi denetimi geçtiğinde `true` döndürür.
- Tasarım gereği boş dizileri reddeder; “veri yok” durumunun geçerli girdi olarak yanlışlıkla kabul edilmesini önler.
- Bir koleksiyon genelinde `Map`-e özgü işlemleri (örn. `.get()`, `.set()`, yineleme) gerçekleştirmeden önce bir
  koruma (guard) olarak kullanışlıdır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areMaps(array)`

Parametreler:

- `array`: Denetlenecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items'in çalışma zamanında Map örneklerinden oluşan boş olmayan bir dizi olduğu garanti edilir
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // şunlar için false: boş diziler veya Map olmayan herhangi bir değer içeren diziler
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areMaps(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Dosya 31 January 2026 at 16:15:01 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>