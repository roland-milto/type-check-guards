# areDecimals

## Açıklama

Bir dizideki tüm öğelerin ondalık sayı olup olmadığını ve dizinin dolu olup olmadığını kontrol eder; `true` veya `false`
döndürür.

### Kullanım durumu

Ayrıştırma veya hesaplamalardan önce dizinin boş olmadığından ve her girdinin ondalık bir değer olduğundan emin olmak
için kullanıcı tarafından sağlanan listeleri (örn. CSV sütunları veya form girdileri) doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> `unknown[]` dizisinin boş olmadığını ve her öğenin ondalık gösterim olduğunu hızlıca boolean olarak kontrol etmeniz
> gerektiğinde `areDecimals` kullanın.

### Avantajlar

- Öğeleri doğrulamadan önce girdinin dolu bir dizi olduğunu garanti eder; böylece boş listelerin yanlışlıkla kabul
  edilmesini önler.
- Her bir öğeyi `isDecimal` ile doğrular; bu nedenle karışık veya geçersiz değerler anında `false` sonucuna yol açar.
- Koruyucular ve erken-dönüş doğrulama akışları için uygun, basit bir boolean sonuç (`true`/`false`) sağlar.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areDecimals(array)`

Parametreler:

- `array`: Kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // doğru
console.log(areDecimals(b)); // yanlış
console.log(areDecimals(c)); // yanlış
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areDecimals(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Dosya 31 January 2026 at 15:59:30 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>