# isObject

## Açıklama

Verilen bir `value` değerinin `object` olup olmadığını (`null` hariç) belirler.

### Kullanım durumu

Özelliklere erişmeden önce bilinmeyen girdileri (örn. ayrıştırılmış JSON, API yanıtları, olay yükleri) doğrulamak için
`isObject` kullanın; böylece değerin bir nesne olduğundan ve `null` olmadığından emin olursunuz.

> **TypeScript kullanıcıları için not:**
>
> `isObject`, boolean döndüren bir çalışma zamanı korumasıdır; belirli bir nesne şekline daraltma yapmaz. Daha güçlü
> türleme gerektiğinde ek kontrollerle (örn. özellik varlığı) birlikte kullanın.

### Avantajlar

- `typeof` değeri `"object"` olan `null` olmayan değerler için yalnızca `true` döndürür.
- `null` değerinin aksi halde bir nesne olarak ele alınacağı yaygın JavaScript tuzağını önler.
- Düz nesneler ve yerleşik nesne örnekleri (örn. `Date`, `RegExp`) için çalışır.
- Savunmacı programlama ve girdi doğrulaması için uygun, basit ve hızlı bir çalışma zamanı kontrolüdür.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isObject(value)`

Parametreler:

- `value`: `object` olup olmadığının kontrol edileceği değer.

### Yerel fonksiyon içe aktarma

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input çalışma zamanında null olmayan bir nesnedir
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isObject(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isObject](../_analysis/isObject.md)

<br>

---

<small>Dosya 31 January 2026 at 00:26:07 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>