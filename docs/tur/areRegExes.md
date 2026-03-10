# areRegExes

## Açıklama

`areRegExes`, bir değerin yalnızca `RegExp` nesneleri içeren dolu bir dizi olup olmadığını kontrol eder.

### Kullanım durumu

Bir yapılandırma seçeneğinin (örn. izin/verme veya engelleme desenleri listesi) eşleştirme için kullanmadan önce düzenli
ifadelerden oluşan boş olmayan bir dizi olduğunu doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> Yineleme yapmadan veya desenleri birleştirmeden önce `unknown` türünü `RegExp[]` olarak daraltmak için `areRegExes`
> kullanın.

### Avantajlar

- Bir değerin, her öğesi bir `RegExp` örneği olan boş olmayan bir dizi olmasını sağlar.
- Kullanıcı girdisini veya yapılandırmayı doğrulamak için basit bir boolean koruması (`true`/`false`) sağlar.
- Sonraki kodun tüm öğelerin düzenli ifade işlemlerini desteklediğini varsaydığı durumlarda çalışma zamanı hatalarını
  önlemeye yardımcı olur.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areRegExes(array)`

Parametreler:

- `array`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns burada bir RegExp dizisidir
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areRegExes(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Dosya 30 January 2026 at 23:22:20 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>