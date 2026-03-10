# isBuffer

## Açıklama

Bir değerin Node.js `Buffer` olup olmadığını kontrol eder ve `true` veya `false` döndürür.

### Kullanım durumu

Bir değeri işlemeden önce `Buffer` olduğundan emin olmak için çalışma zamanında girdileri (ör. API yükleri, dosya
verileri veya mesaj arabellekleri) doğrulayın ve `Buffer`'ın mevcut olmayabileceği Node.js dışındaki ortamlarda
çalışırken güvenilir biçimde `false` elde edin.

> **TypeScript kullanıcıları için not:**
>
> `Buffer`'a özgü yöntemleri çağırmadan önce `unknown` değerleri `Buffer`'a daraltmak için `isBuffer` kullanın.

### Avantajlar

- `Buffer.isBuffer` kullanarak Node.js `Buffer` örneklerini güvenli bir şekilde tespit eder.
- `Buffer`'ın kullanılamadığı ortamlarda `false` döndürerek çalışma zamanı hatalarını önler.
- `unknown` girdisiyle çalışır; bu da onu çalışma zamanı doğrulaması ve tür daraltma için uygun kılar.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isBuffer(value)`

Parametreler:

- `value`: Test edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // doğru
console.log(isBuffer(b)); // yanlış

if (isBuffer(a)) {
  // a burada bir Buffer'dır
  console.log(a.toString("utf8"));
}
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isBuffer(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Dosya 31 January 2026 at 16:33:42 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>