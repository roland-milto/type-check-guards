# isHexadecimal

## Açıklama

`isHexadecimal`, verilen bir değerin zorunlu `0x`/`0X` önekine sahip bir onaltılık string literal olup olmadığını
kontrol eder.

### Kullanım durumu

`isHexadecimal`i, onaltılık string literal olarak sağlanması gereken (örn. kimlikler, maskeler veya adresler) ve
çevresinde boşluk içermemesi gereken yapılandırma değerlerini, API payload alanlarını veya CLI argümanlarını doğrulamak
için kullanın.

> **TypeScript kullanıcıları için not:**
>
> Ayrıştırmadan veya dönüştürmeden önce kullanıcı girdisini ya da serileştirilmiş veriyi katı bir onaltılık literal
> string ( `0x`/`0X` öneki dahil) olarak doğrulamanız gerektiğinde `isHexadecimal` kullanın.

### Avantajlar

- Bir değerin string olduğunu ve katı bir onaltılık (hexadecimal) literal biçimiyle eşleştiğini doğrular (`0x`/`0X`
  öneki zorunludur).
- Başında veya sonunda boşluk bulunan stringleri reddeder; böylece doldurulmuş (padded) girdilerin yanlışlıkla kabul
  edilmesini önlemeye yardımcı olur.
- İsteğe bağlı işareti destekler ve önek ile rakamlar için büyük/küçük harfe duyarsızdır; öngörülebilir şekilde `true`/
  `false` döndürür.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isHexadecimal(value)`

Parametreler:

- `value`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // doğru
isHexadecimal("-0Xff"); // doğru
isHexadecimal("1A2B"); // yanlış (önek eksik)
isHexadecimal(" 0x1A2B"); // yanlış (başta boşluk)
isHexadecimal(0x1a2b); // yanlış (string değil)
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isHexadecimal(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Dosya 31 January 2026 at 23:01:31 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>