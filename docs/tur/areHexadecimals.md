# areHexadecimals

## Açıklama

Bir dizideki tüm öğelerin onaltılık dizeler olup olmadığını kontrol eder; yalnızca boş olmayan ve her öğesi geçerli olan
diziler için `true` döndürür.

### Kullanım durumu

Onaltılık ayrıştırma veya daha ileri işleme yapmadan önce kullanıcı girdisini ya da harici veriyi (örn. ID'ler,
checksum'lar, başında '#' olmayan renk kodları) doğrulamak için `areHexadecimals` kullanın.

> **TypeScript kullanıcıları için not:**
>
> Değerleri ayrıştırmadan veya dönüştürmeden önce (örneğin `parseInt(value, 16)` ya da BigInt dönüşümlerinden önce)
> bilinmeyen girdiyi doğrulamak için `areHexadecimals` kullanın.

### Avantajlar

- Her öğenin onaltılık (hexadecimal) bir dize olduğunu doğrular ve yalnızca tüm öğeler eşleştiğinde `true` döndürür.
- Tasarım gereği boş dizileri reddeder; eksik giriş verileri için `false` döndürür.
- Guard'lar ve erken dönüş (early-return) doğrulaması için uygun, basit bir boolean sonuç (`true`/`false`) sağlar.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areHexadecimals(array)`

Parametreler:

- `array`: Onaltılık dize öğeleri açısından kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areHexadecimals(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Dosya 31 January 2026 at 23:08:14 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>