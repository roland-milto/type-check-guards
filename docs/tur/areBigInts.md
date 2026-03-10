# areBigInts

## Açıklama

`areBigInts`, bir değerin yalnızca `bigint` değerleri içeren boş olmayan bir dizi olup olmadığını belirler.

### Kullanım durumu

Bilinmeyen girdiyi (örn. ayrıştırılmış JSON benzeri veriler, API payload'ları veya `unknown` olarak türlendirilmiş
fonksiyon parametreleri) işlemeden önce bunun `bigint` değerlerinden oluşan boş olmayan bir dizi olduğundan emin olmak
için doğrulayın; yalnızca tüm öğeler `bigint` olduğunda `true`, aksi halde `false` döndürür.

> **TypeScript kullanıcıları için not:**
>
> Bilinmeyen girdide `bigint`-yalnız işlemler (örn. aritmetik, karşılaştırmalar) gerçekleştirmeden önce çalışma zamanı
> koruması olarak `areBigInts` kullanın.

### Avantajlar

- Her öğenin bir `bigint` olmasını sağlar; yalnızca tüm dizi eşleştiğinde `true` döndürür.
- Tasarım gereği ( `isFilledArray` aracılığıyla) dizi olmayanları ve boş dizileri reddeder; geçersiz girdilerin
  yanlışlıkla kabul edilmesini önler.
- Hızlı başarısızlık: `bigint` olmayan bir öğe bulunur bulunmaz `false` döndürür.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areBigInts(array)`

Parametreler:

- `array`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // doğru
console.log(areBigInts(b)); // yanlış
console.log(areBigInts(c)); // yanlış
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areBigInts(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Dosya 31 January 2026 at 23:27:41 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>