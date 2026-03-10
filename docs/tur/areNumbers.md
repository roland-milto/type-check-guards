# areNumbers

## Açıklama

`areNumbers`, bir değerin tüm öğeleri sayı olan boş olmayan bir dizi olup olmadığını kontrol eder.

### Kullanım durumu

Toplamları, ortalamaları veya diğer sayısal toplulaştırmaları hesaplamadan önce, kullanıcı tarafından sağlanan veya API
tarafından sağlanan verilerin boş olmayan bir sayı dizisi olduğundan emin olmak için doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> `areNumbers` fonksiyonunu, sayısal hesaplamalar yapmadan önce bilinmeyen dizileri doğrulamak için kullanın; boş
> diziler için ve sayı olmayan herhangi bir değer içeren diziler için `false` döndürür.

### Avantajlar

- Yalnızca girdi boş olmayan bir dizi olduğunda ve her öğe bir sayı olduğunda `true` döndürür.
- Boş dizileri ve dizi olmayan girdileri reddederek yanlış pozitifleri önler.
- Çalışma zamanı hatalarını önlemek için sayısal işlemlerden (örn. toplama, ortalama alma) önce bir koruma olarak
  kullanışlıdır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areNumbers(array)`

Parametreler:

- `array`: Sayı öğeleri açısından kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areNumbers(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Dosya 30 January 2026 at 13:06:15 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>