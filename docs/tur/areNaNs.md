# areNaNs

## Açıklama

`areNaNs`, bir dizideki tüm öğelerin `NaN` olup olmadığını kontrol eder ve yalnızca her öğe `NaN` ise `true` döndürür.

### Kullanım durumu

`NaN`'ın bir sentinel değer olarak kullanıldığı gelen verileri doğrulayın ve tüm dizinin yalnızca `NaN`'dan oluştuğundan
emin olun (örn. tamamen eksik bir sayısal seriyi tespit etme).

> **TypeScript kullanıcıları için not:**
>
> Bir dizinin yalnızca sayısal `NaN` değerini içerdiğini doğrulamanız gerektiğinde (dizeyi sayıya zorlama olmadan)
`areNaNs` kullanın.

### Avantajlar

- Yalnızca her öğe `NaN` olduğunda `true` döndürür (katı tüm-öğeler denetimi).
- Dizeleri sayılara zorla dönüştürmez; "NaN" gibi değerler `NaN` olmayan olarak kalır ve sonucu `false` yapar.
- Doldurulmamış diziler için `false` döndürerek boş girdide yanlışlıkla `true` olmasını engeller.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areNaNs(array)`

Parametreler:

- `array`: `NaN` değerleri açısından kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // doğru
const b = areNaNs([NaN, 1, NaN]); // yanlış
const c = areNaNs([NaN, "NaN", NaN]); // yanlış
const d = areNaNs([NaN, null, NaN]); // yanlış
const e = areNaNs([] as unknown[]); // yanlış
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areNaNs(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Dosya 30 January 2026 at 15:53:53 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>