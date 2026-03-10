# areNumerics

## Açıklama

`areNumerics`, bir değerin tüm öğeleri sayısal olan boş olmayan bir dizi olup olmadığını kontrol eder.

### Kullanım durumu

`areNumerics`i, toplamlar, ortalamalar veya diğer sayısal işlemleri hesaplamadan önce harici ya da türü belirtilmemiş
verileri (örn. JSON payload'ları, sorgu parametreleri, form girdisi) doğrulamak için kullanın; girdinin boş olmayan
sayısal bir dizi olmasını sağlar ve aksi halde `false` döndürür.

> **TypeScript kullanıcıları için not:**
>
> `unknown` girdiyi sayısal bir dizi olarak ele almadan önce korumak için `areNumerics` kullanın; dizi olmayanlar ve boş
> diziler için `false` döndürür.

### Avantajlar

- Yalnızca girdi boş olmayan bir dizi olduğunda ve her öğe sayısal olduğunda `true` döndürür.
- Hızlı başarısız olur: sayısal olmayan bir öğe bulunur bulunmaz kontrolü durdurur ve `false` döndürür.
- Sayısal işlemler yapmadan önce bilinmeyen girdiyi güvenle doğrulamaya yardımcı olur.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areNumerics(array)`

Parametreler:

- `array`: Sayısal öğeler içerip içermediği kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // doğru
console.log(areNumerics(b)); // doğru
console.log(areNumerics(c)); // yanlış
console.log(areNumerics(d)); // yanlış
console.log(areNumerics(e)); // yanlış

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areNumerics(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Dosya 6 February 2026 at 16:07:56 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>