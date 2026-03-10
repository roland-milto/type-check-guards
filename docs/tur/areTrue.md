# areTrue

## Açıklama

Boş olmayan bir dizinin yalnızca boolean `true` değerlerini içerip içermediğini kontrol eder.

### Kullanım durumu

Devam etmeden önce bir dizi önkoşulun veya özellik bayrağının (tüm değerler `true`) tamamen etkin olduğunu doğrulamak
için `areTrue` kullanın; boş veya hatalı girdileri karşılanmamış (`false`) olarak değerlendirir.

> **TypeScript kullanıcıları için not:**
>
> `areTrue`, boş bir dizi için ve kesin olarak `true` olmayan herhangi bir değer içeren diziler için `false` döndürür.

### Avantajlar

- Yalnızca her öğe kesin olarak `true` olduğunda ve dizi boş olmadığında `true` döndürür.
- Hızlı başarısız olur: `true` olmayan bir değer bulunur bulunmaz `false` döndürür.
- Geçersiz girdileri (dizi olmayanlar veya boş diziler) `false` döndürerek reddeder.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areTrue(array)`

Parametreler:

- `array`: Tüm `true` değerlerini içerip içermediği kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areTrue(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Dosya 30 January 2026 at 13:53:05 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>