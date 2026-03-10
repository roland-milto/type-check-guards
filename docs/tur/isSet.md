# isSet

## Açıklama

Verilen bir değerin `Set` olup olmadığını belirler.

### Kullanım durumu

`Set` işlemlerini gerçekleştirmeden önce bir değerin `Set` olduğundan emin olmak için harici kaynaklardan gelen
girdileri (örn. JSON ayrıştırma, kullanıcı girdisi veya üçüncü taraf API'leri) doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> `.add`, `.has` veya `.size` gibi `Set`-e özgü API'leri çağırmadan önce `unknown` değerleri daraltmak için `isSet`
> kullanın.

### Avantajlar

- Bir değerin `Set` olup olmadığını doğrulamak için basit bir çalışma zamanı kontrolü sağlar.
- Bir değer `Set` değilse erken dallanma yapmaya olanak tanıyarak tür hatalarını önlemeye yardımcı olur.
- Her türlü `Set` içeriğiyle (boş veya dolu) çalışır ve tutarlı biçimde `true`/`false` döndürür.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isSet(value)`

Parametreler:

- `value`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a çalışma zamanında bir Set'tir
  console.log(a.size);
}

console.log(isSet(b)); // yanlış
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isSet(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isSet](../_analysis/isSet.md)

<br>

---

<small>Dosya 30 January 2026 at 23:11:33 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>