# isBinary

## Açıklama

`isBinary`, bir değerin ikili (binary) dize olup olmadığını (isteğe bağlı olarak `0b`/`0B` önekiyle) belirler ve `true`
veya `false` döndürür.

### Kullanım durumu

Daha ileri işlemden önce, kullanıcı tarafından sağlanan dizeleri (örn. form alanları, CLI argümanları, yapılandırma
değerleri) yalnızca ikili basamakları temsil ettiklerinden ve isteğe bağlı olarak `0b`/`0B` öneki içerebildiklerinden
emin olmak için doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> Geçersiz girdiden kaçınmak için bir dizgeyi `BigInt`/`Number` olarak ayrıştırmadan veya dönüştürmeden önce `isBinary`'
> yi bir tür koruyucusu (type guard) olarak kullanın.

### Avantajlar

- `0b`/`0B` öneki olsun ya da olmasın ikili (binary) dizeleri kabul eder.
- Boş dizeleri ve başında/sonunda boşluk karakterleri (ASCII ≤ 32) bulunan dizeleri reddeder.
- Hata fırlatmadan `true`/`false` döndürür; bu da bilinmeyen girdiler için güvenli olmasını sağlar.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isBinary(value)`

Parametreler:

- `value`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // doğru
const b = isBinary("1010");   // doğru
const c = isBinary("0b1020"); // yanlış
const d = isBinary(0b1010);     // yanlış

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isBinary(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Dosya 31 January 2026 at 23:11:39 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>