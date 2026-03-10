# areFalse

## Açıklama

`areFalse`, sağlanan bir dizideki tüm öğelerin kesin olarak boolean `false` olup olmadığını kontrol eder.

### Kullanım durumu

Devam etmeden önce özellik bayrakları, kontroller veya guard sonuçları listesinin tamamının `false` olduğunu
doğrulayın (ör. engelleyici koşulların bulunmadığını teyit edin).

> **TypeScript kullanıcıları için not:**
>
> Bir dizinin boş olmadığını ve yalnızca boolean `false` değerini içerdiğini kesin olarak doğrulamanız gerektiğinde
`areFalse` kullanın.

### Avantajlar

- Her öğenin kesin olarak `false` olmasını sağlar (truthy/falsey dönüştürmesi yoktur).
- `isFilledArray` ile dolu bir dizi gerektirerek dizi olmayanlar veya boş diziler için `false` döndürür.
- Verimlilik için ilk `false` olmayan öğede erken durur.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areFalse(array)`

Parametreler:

- `array`: Kontrol edilecek dizi; herhangi bir türde öğeler içerebilir.

### Yerel fonksiyon içe aktarma

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // doğru
const b = areFalse([false, true, false]);  // yanlış
const c = areFalse([false, "false", false]); // yanlış
const d = areFalse([]); // yanlış
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areFalse(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Dosya 31 January 2026 at 16:18:52 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>