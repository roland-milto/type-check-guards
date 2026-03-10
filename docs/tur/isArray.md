# isArray

## Açıklama

`isArray`, verilen bir değerin dizi olup olmadığını kontrol eder ve öyleyse `true`, değilse `false` döndürür.

### Kullanım durumu

Bilinmeyen verileri (ör. ayrıştırılmış JSON veya API yanıtları) doğrulayarak, yineleme, indeksleme veya `.length`
erişiminden önce bir değerin dizi olduğundan emin olun.

> **TypeScript kullanıcıları için not:**
>
> Diziler için çalışma zamanı kontrolüne ihtiyaç duyduğunuzda `isArray` kullanın; boolean döndürür ve `unknown`
> değerlerle çağırmak güvenlidir.

### Avantajlar

- Farklı bağlamlar (ör. iframe'ler) arasında güvenilir dizi tespiti için yerleşik `Array.isArray` kullanır.
- Koruyucular ve dallanma mantığı için uygun, basit bir boolean sonuç (`true`/`false`) döndürür.
- Parametre `unknown` olduğu için her türlü girdi türüyle çalışır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isArray(value)`

Parametreler:

- `value`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input çalışma zamanında bir dizidir
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isArray(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isArray](../_analysis/isArray.md)

<br>

---

<small>Dosya 6 February 2026 at 11:32:25 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>