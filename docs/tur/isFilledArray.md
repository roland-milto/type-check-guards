# isFilledArray

## Açıklama

`value` değerinin en az bir öğe içeren bir dizi olup olmadığını kontrol eder ve `true` veya `false` döndürür.

### Kullanım durumu

Yineleme yapmadan, ilk öğeye erişmeden veya en az bir öğe gerektiren mantığı uygulamadan önce gelen verileri (örn. API
payload'ları, form değerleri, yapılandırma) doğrulamak için `isFilledArray` kullanın.

> **TypeScript kullanıcıları için not:**
>
> `isFilledArray` boolean döndüren bir çalışma zamanı guard'ıdır; dizinin boş olmadığını doğrulamanın ötesinde öğe
> türlerini daraltmaz.

### Avantajlar

- `Array.isArray` ve uzunluk kontrolü kullanarak boş olmayan bir diziyi basit ve hızlı şekilde kontrol eder.
- Kodun bir dizide en az bir öğe olduğunu varsaydığı durumlarda çalışma zamanı hatalarını önlemeye yardımcı olur.
- Net boolean sonuç: boş olmayan diziler için `true`, aksi halde `false` döndürür.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isFilledArray(value)`

Parametreler:

- `value`: Boş olmayan bir dizi olup olmadığını kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input çalışma zamanında boş olmayan bir dizidir
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isFilledArray(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Dosya 6 February 2026 at 11:49:10 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>