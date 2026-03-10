# areIndexesFound

## Açıklama

`areIndexesFound`, bir değerin öğelerinin tümü geçerli indeksler olan boş olmayan bir dizi olup olmadığını kontrol eder;
öyleyse `true`, değilse `false` döndürür.

### Kullanım durumu

Dizilere erişmek veya dizileri dilimlemek için kullanmadan önce, indeks listesi olması beklenen kullanıcı tarafından
sağlanan ya da harici verileri (örn. ayrıştırılmış JSON) doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> `areIndexesFound` fonksiyonunu, bilinmeyen girdiyi öğelerini dizi indeksleri olarak ele almadan önce doğrulamak için
> kullanın; boş diziler ve indeks olmayan değerler içeren diziler için `false` döndürür.

### Avantajlar

- Yalnızca girdi dolu bir dizi olduğunda ve her öğe geçerli bir indeks olduğunda `true` döndürür.
- Hızlı başarısız olur: indeks olmayan bir öğeyle karşılaşır karşılaşmaz `false` döndürür.
- Değerleri dizi konumları veya ofsetleri olarak kullanmadan önce bir koruma (guard) olarak faydalıdır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areIndexesFound(array)`

Parametreler:

- `array`: İndeks uyumluluğu açısından kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // Burada, `a`'nın indekslerle doldurulmuş bir dizi olduğu doğrulanır.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areIndexesFound(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Dosya 31 January 2026 at 01:04:38 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>