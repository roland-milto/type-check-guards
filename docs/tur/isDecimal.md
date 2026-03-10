# isDecimal

## Açıklama

`isDecimal`, bir değerin başta/sonda boşluk olmadan ve geçerli bir ondalık biçimde bir ondalık dize gösterimi olup
olmadığını kontrol eder.

### Kullanım durumu

Ayrıştırmadan veya depolamadan önce, çevresinde hiçbir boşluk olmadan ondalık dize (isteğe bağlı işaretli) olarak
sağlanması gereken form alanlarını, API payload’larını veya yapılandırma değerlerini doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> Özellikle boşluğun reddedilmesi gerektiğinde, dönüştürmeden önce (örn. `Number(value)` ile) kullanıcı girdisini
> doğrulamak için `isDecimal` kullanın.

### Avantajlar

- Girdinin bir dize olduğunu ve ondalık-literal desenine uyduğunu katı biçimde doğrular.
- Belirsiz ayrıştırmayı önlemek için baştaki ve sondaki boşlukları (kontrol karakterleri dahil) reddeder.
- Regex’i çalıştırmadan önce hızlı ön kontroller (tür kontrolü ve ilk/son karakter) yapar.
- Guard’lar ve girdi doğrulaması için uygun, basit bir boolean sonuç (`true`/`false`) döndürür.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isDecimal(value)`

Parametreler:

- `value`: Ondalık dize biçimi açısından kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v burada bir dizedir (çalışma zamanında doğrulanmış)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isDecimal(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Dosya 31 January 2026 at 15:55:00 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>