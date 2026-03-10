# areNullOrUndefined

## Açıklama

Verilen dizideki tüm öğelerin `null` veya `undefined` olup olmadığını kontrol eder.

### Kullanım durumu

İşlemeyi atlamaya veya “değer sağlanmadı” durumunu göstermeye karar vermeden önce, isteğe bağlı alanlardan oluşan bir
listenin gerçek değer içermediğini (yalnızca `null`/`undefined`) doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> Bir dizinin yalnızca eksik değerler (`null`/`undefined`) içerdiğini doğrulamanız gerektiğinde `areNullOrUndefined`
> kullanın. Boş bir dizi için `false` döndürdüğünü unutmayın.

### Avantajlar

- Yalnızca her öğe `null` veya `undefined` olduğunda `true` döndürür.
- Boş diziler için `false` döndürür; böylece “veri yok” ile “tüm değerler eksik” durumlarını ayırt etmeye yardımcı olur.
- `unknown[]` ile çalışır; bu da türleri daraltmadan önce kullanmayı güvenli kılar.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areNullOrUndefined(array)`

Parametreler:

- `array`: Kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areNullOrUndefined(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Dosya 31 January 2026 at 00:31:44 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>