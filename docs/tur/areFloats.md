# areFloats

## Açıklama

`areFloats`, verilen bir dizinin dolu olup olmadığını ve tüm öğelerinin kayan noktalı sayılar olup olmadığını kontrol
eder.

### Kullanım durumu

JSON, sorgu parametreleri veya harici API'lerden gelen bir `unknown[]` aldığınızda ve ortalama alma, enterpolasyon veya
istatistiksel hesaplamalar gibi sayısal mantığı çalıştırmadan önce bunun her öğesi kayan noktalı sayı olan dolu bir dizi
olduğundan emin olmanız gerektiğinde `areFloats` kullanın.

> **TypeScript kullanıcıları için not:**
>
> `unknown[]` değerini yalnızca kayan noktalı sayılar içeren `number[]` olarak ele almadan önce koruma (guard) olarak
`areFloats` kullanın; boş diziler için ve kayan noktalı olmayan herhangi bir öğe için `false` döndürür.

### Avantajlar

- Yalnızca girdi boş olmayan bir dizi olduğunda ve her öğe bir kayan noktalı sayı olduğunda `true` döndürür.
- Hızlıca başarısız olur: kayan noktalı olmayan bir öğe bulunur bulunmaz `false` döndürür.
- Kayan noktalı sayılara özgü hesaplamalar yapmadan önce bilinmeyen girdiyi doğrulamaya yardımcı olur.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areFloats(array)`

Parametreler:

- `array`: Kayan noktalı öğeler içerip içermediği kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // doğru
console.log(areFloats(b)); // yanlış
console.log(areFloats(c)); // yanlış

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areFloats(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Dosya 30 January 2026 at 16:00:09 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>