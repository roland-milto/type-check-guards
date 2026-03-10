# areStrings

## Açıklama

`areStrings`, bir dizinin boş olmadığını ve tüm öğelerinin string olduğunu kontrol eder; yalnızca bu durumda `true`
döndürür.

### Kullanım durumu

İşlemeden önce boş olmayan bir string listesine sahip olduğunuzdan emin olmak için harici veya kullanıcı tarafından
sağlanan verileri (örn. sorgu parametreleri, JSON payload'ları, CSV alanları) doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> Yalnızca string mantığı uygulamadan önce bilinmeyen dizileri doğrulamak için `areStrings` kullanın; boş diziler için
`false` döndürür.

### Avantajlar

- Her öğenin bir string olmasını sağlar ve `false` döndürerek karışık türde dizileri reddeder.
- Boş dizileri reddeder; bu nedenle `true` yalnızca boş olmayan bir string listesi olduğunu gösterir.
- Yalnızca string işlemleri (örn. `trim`, `toLowerCase`) uygulamadan önce hızlı bir çalışma zamanı koruması olarak
  kullanışlıdır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areStrings(value)`

Parametreler:

- `value`: Expected type `string[]`.

### Yerel fonksiyon içe aktarma

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input çalışma zamanında boş olmayan bir string[]'dir
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areStrings(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Dosya 30 January 2026 at 13:20:46 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>