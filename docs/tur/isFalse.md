# isFalse

## Açıklama

`isFalse`, verilen bir değerin boolean literal `false` ile katı biçimde eşit olup olmadığını kontrol eder.

### Kullanım durumu

Yalnızca açık boolean değeri `false` geçerli bir bayrak olarak kabul edilmeli ve diğer her şey reddedilmeliyken,
bilinmeyen verileri (örn. JSON'dan, sorgu parametrelerinden veya kullanıcı girdisinden) doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> Yalnızca literal `false` değerini kabul etmeniz ve diğer tüm falsy değerleri reddetmeniz gerektiğinde `isFalse`
> kullanın; yalnızca `value === false` için `true` döndürür.

### Avantajlar

- Zorlama (coercion) olmadan boolean literal `false` için katı bir kontrol sağlar.
- `false` değerini `0`, `""`, `null` ve `undefined` gibi diğer falsy değerlerden ayırt etmeye yardımcı olur.
- Bilinmeyen girdiyi doğrularken niyeti açıkça belirterek okunabilirliği artırır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isFalse(value)`

Parametreler:

- `value`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input burada tam olarak false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isFalse(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Dosya 31 January 2026 at 16:44:52 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>