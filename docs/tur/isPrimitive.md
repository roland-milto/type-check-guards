# isPrimitive

## Açıklama

`isPrimitive`, verilen bir değerin ilkel (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`, `symbol`) olup
olmadığını belirler.

### Kullanım durumu

Çalışma zamanında girdileri (örn. API yükü alanları, yapılandırma değerleri veya kullanıcı tarafından sağlanan veriler)
doğrulayarak, bir değerin serileştirmeden, günlüklemeye almadan veya yalnızca ilkel işlemler uygulamadan önce ilkel
olduğundan emin olun.

> **TypeScript kullanıcıları için not:**
>
> `unknown` girdilerini nesne veya fonksiyon gibi ele almadan önce korumak için `isPrimitive` kullanın; ilkel değerler
> için `true`, nesneler ve fonksiyonlar için `false` döndürür.

### Avantajlar

- Bir değerin JavaScript ilkel (primitive) olup olmadığını hızlı ve bellek ayırmadan kontrol eder.
- `null` değerini (her ne kadar `typeof null` `"object"` olsa da) doğru şekilde ilkel olarak ele alır.
- Yalnızca nesnelere özgü işlemler yapmadan önce `unknown` değerlerini daraltmaya yardımcı olur.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isPrimitive(value)`

Parametreler:

- `value`: İlkel tür olup olmadığını kontrol etmek için değer.

### Yerel fonksiyon içe aktarma

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isPrimitive(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Dosya 30 January 2026 at 23:58:13 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>