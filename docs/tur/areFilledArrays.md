# areFilledArrays

## Açıklama

`areFilledArrays`, iki boyutlu bir dizinin boş olmadığını ve tüm alt dizilerinin boş olmadığını kontrol eder.

### Kullanım durumu

`areFilledArrays` ile tablo veya matris benzeri girdileri (örn. CSV satırları, ızgara verisi, gruplanmış sonuçlar)
doğrulayarak en az bir alt dizi olduğunu ve alt dizilerin hiçbirinin boş olmadığını güvenle varsayabilirsiniz.

> **TypeScript kullanıcıları için not:**
>
> Bir 2B diziyi dolaşmadan (iterate) veya içinde indeksleme yapmadan önce en az bir satırı olduğundan ve her satırda en
> az bir öğe bulunduğundan emin olmanız gerektiğinde `areFilledArrays` kullanın.

### Avantajlar

- Dış dizinin boş olmadığını ve her iç dizinin de boş olmadığını doğrular; yalnızca her iki koşul da sağlandığında
  `true` döndürür.
- Alt dizilerin içindeki herhangi bir öğe türüyle (örn. sayılar, dizgeler, nesneler, iç içe diziler) çalışır; çünkü öğe
  içeriğini değil, yalnızca dizinin “dolu” olma durumunu kontrol eder.
- İki boyutlu veriyi işlemeden önce koruyucu (guard) olarak kullanılmaya uygun, basit bir boolean sonuç (`true`/`false`)
  sağlar.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areFilledArrays(array)`

Parametreler:

- `array`: Kontrol edilecek iki boyutlu dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // doğru
console.log(areFilledArrays(b)); // doğru
console.log(areFilledArrays(c)); // doğru
console.log(areFilledArrays(d)); // yanlış
console.log(areFilledArrays(e)); // yanlış
console.log(areFilledArrays(f)); // yanlış

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areFilledArrays(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Dosya 6 February 2026 at 11:59:30 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>