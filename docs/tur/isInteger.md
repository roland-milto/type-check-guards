# isInteger

## Açıklama

Verilen bir `value` değerinin güvenli bir tamsayı sayı olup olmadığını belirler.

### Kullanım durumu

Güvenilmeyen girdiyi (örn. sorgu parametreleri, JSON yükleri, ortam değişkenleri) dizi indeksleri, sayfalama, sayaçlar
veya veritabanı kimlikleri için bir tamsayı olarak kullanmadan önce doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> Bilinmeyen girdiyi sayısal bir tamsayı olarak ele almadan önce doğrulamak için `isInteger` kullanın; yalnızca
`typeof value === "number"` ve `Number.isSafeInteger(value)` koşullarını sağlayan değerler için `true` döndürür.

### Avantajlar

- Hem tür hem de sayısal güvenliği kontrol eder: yalnızca girdi bir sayı ve güvenli bir tamsayı olduğunda `true`
  döndürür.
- Sayısal zorlamayla (coercion) ilgili yaygın tuzakları önler: "5" gibi dizgeler doğru şekilde `false` döndürür.
- Tamsayı olmayanları ve güvenli olmayan tamsayıları reddeder; bu da onu kimlikler (ID), sayaçlar ve dizi indeksleme
  için uygun kılar.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isInteger(value)`

Parametreler:

- `value`: Tamsayı durumunu kontrol etmek için değer.

### Yerel fonksiyon içe aktarma

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // doğru
const b = isInteger(-100);   // doğru
const c = isInteger("5");    // yanlış
const d = isInteger(5.5);    // yanlış
const e = isInteger(null);   // yanlış

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isInteger(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Dosya 31 January 2026 at 00:51:44 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>