# isWeakSet

## Açıklama

Verilen `value` değerinin nesnelerden oluşan bir `WeakSet` olup olmadığını belirler.

### Kullanım durumu

Türü belirtilmemiş girdileri (örn. harici API'lerden, dinamik yapılandırmadan veya `unknown` değerlerden) kabul ederken
ve `WeakSet`-e özgü işlemleri kullanmadan önce bunun bir `WeakSet` olduğunu doğrulamanız gerektiğinde `isWeakSet`
kullanın.

> **TypeScript kullanıcıları için not:**
>
> `isWeakSet` kullanarak bir `unknown` değeri çalışma zamanında `WeakSet<object>` türüne daraltın; `WeakSet` yalnızca
> nesne referansları içerebilir.

### Avantajlar

- Bir değerin `WeakSet` olup olmadığını kontrol etmek için basit bir çalışma zamanı denetimi sağlar.
- Yalnızca `WeakSet` örneklerinin bu şekilde ele alınmasını sağlayarak tür hatalarını önlemeye yardımcı olur.
- Herhangi bir `unknown` girdiyle çalışır ve net bir boolean sonuç (`true`/`false`) döndürür.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isWeakSet(value)`

Parametreler:

- `value`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a çalışma zamanında bir WeakSet'tir
}
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isWeakSet(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Dosya 30 January 2026 at 14:19:38 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>