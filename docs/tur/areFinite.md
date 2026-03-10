# areFinite

## Açıklama

`areFinite`, bir değerin öğeleri tamamen sonlu sayılardan oluşan boş olmayan bir dizi olup olmadığını kontrol eder;
öyleyse `true`, değilse `false` döndürür.

### Kullanım durumu

Hesaplamalar yapmadan önce sayısal girdi dizilerini (örn. grafik serileri, koordinat listeleri, ölçüm örnekleri)
doğrulayın; sonuç, yalnızca tüm değerler sonlu sayılar olduğunda `true` olur.

> **TypeScript kullanıcıları için not:**
>
> Bir dizinin boş olmadığından ve yalnızca sonlu sayılar içerdiğinden emin olmanız gerektiğinde `areFinite` kullanın;
> boş diziler ve `NaN` ya da sonsuzluklar içeren diziler için `false` döndürür.

### Avantajlar

- Yalnızca girdi boş olmayan bir dizi olduğunda ve her öğe sonlu bir sayı olduğunda `true` döndürür.
- Her öğe için `isFinite` kontrollerine dayanarak `Infinity`, `-Infinity` ve `NaN` değerlerini reddeder.
- Koruyucular ve doğrulama akışları için uygun, basit bir boolean sonuç (`true`/`false`) sağlar.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areFinite(array)`

Parametreler:

- `array`: Tüm öğelerinin sonlu olup olmadığının kontrol edileceği dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // doğru
console.log(areFinite(b)); // yanlış
console.log(areFinite(c)); // yanlış

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areFinite(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Dosya 30 January 2026 at 16:37:43 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>