# areJson

## Açıklama

Bir dizinin tüm öğelerinin JSON dizeleri olup olmadığını kontrol eder; dizi doluysa ve her öğe geçerli JSON ise yalnızca
`true` döndürür, aksi halde `false` döndürür.

### Kullanım durumu

JSON ile kodlanmış dizelerden oluşan bir dizi beklediğiniz ve boş dizileri ya da JSON olmayan herhangi bir girdiyi
reddetmek istediğiniz gelen verileri (ör. sorgu parametrelerinden, ortam değişkenlerinden veya harici API'lerden)
doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> `unknown[]` içeriğinin ayrıştırmadan (ör. `JSON.parse` ile) önce yalnızca JSON dizelerinden oluştuğunu doğrulamanız
> gerektiğinde `areJson` kullanın.

### Avantajlar

- Yalnızca her öğe geçerli bir JSON dizesi olduğunda `true` döndürür; aksi halde `false` döndürür.
- Hızlı başarısız olur: JSON olmayan bir öğe bulunur bulunmaz kontrol etmeyi durdurur.
- Tasarım gereği boş dizileri reddeder; doldurulmamış girdi için `false` döndürür.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areJson(array)`

Parametreler:

- `array`: JSON dizesi öğeleri açısından kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // doğru
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // yanlış
const empty = areJson([]); // yanlış

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areJson(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areJson](../_analysis/areJson.md)

<br>

---

<small>Dosya 30 January 2026 at 16:17:55 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>