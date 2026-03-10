# areBinaries

## Açıklama

Sağlanan değerin geçerli ikili dizelerden oluşan boş olmayan bir dizi olup olmadığını kontrol eder ve yalnızca tüm
öğeler doğrulamadan geçerse `true` döndürür.

### Kullanım durumu

Bilinmeyen bir liste (ör. JSON, formlar veya API'lerden) aldığınızda ve ayrıştırmadan ya da işlemeden önce bunun ikili
dizelerden oluşan boş olmayan bir dizi olduğundan emin olmanız gerektiğinde `areBinaries` kullanın.

> **TypeScript kullanıcıları için not:**
>
> İkili dizeleri sayılara/BigInt'lere dönüştürmeden önce bilinmeyen girdiyi doğrulamak için `areBinaries` kullanın;
> dizinin boş olmadığını ve her öğenin geçerli bir ikili dize olduğunu garanti eder.

### Avantajlar

- Bir değerin, her öğesi geçerli bir ikili (binary) dize olan boş olmayan bir dizi olduğunu doğrular.
- Koruyucular, erken dönüşler ve girdi doğrulaması için uygun basit bir boolean sonuç (`true`/`false`) döndürür.
- İkili olmayan herhangi bir giriş içeren dizileri reddederek sonraki ayrıştırma hatalarını önler.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areBinaries(array)`

Parametreler:

- `array`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // doğru
console.log(areBinaries(b)); // yanlış
console.log(areBinaries([])); // yanlış
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areBinaries(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Dosya 31 January 2026 at 23:16:15 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>