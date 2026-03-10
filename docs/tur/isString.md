# isString

## Açıklama

`isString`, verilen bir değerin string olup olmadığını belirler.

### Kullanım durumu

String işlemlerini (örn. kırpma, bölme, büyük/küçük harf dönüştürme) uygulamadan önce bir değerin string olduğundan emin
olmak için kullanıcı girdisini, API payload alanlarını veya yapılandırma değerlerini çalışma zamanında doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> String metotlarını çağırmadan önce `unknown` veya gevşek tiplenmiş değerleri doğrulamak için `isString` kullanın;
> yalnızca `typeof value === "string"` olduğunda `true` döndürür.

### Avantajlar

- `typeof` kullanarak basit ve hızlı kontrol.
- Öngörülebilir bir boolean sonuç döndürür: stringler için `true`, aksi halde `false`.
- Hem boş hem de boş olmayan stringler için çalışır.
- Stringe özgü işlemleri gerçekleştirmeden önce hafif bir çalışma zamanı koruması olarak kullanışlıdır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isString(value)`

Parametreler:

- `value`: String türü için test edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input burada bir stringtir
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isString(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isString](../_analysis/isString.md)

<br>

---

<small>Dosya 30 January 2026 at 13:16:03 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>