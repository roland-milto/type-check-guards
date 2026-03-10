# isTrue

## Açıklama

`isTrue`, verilen bir değerin `true` ile katı biçimde eşit olup olmadığını belirler.

### Kullanım durumu

Yalnızca literal `true` değerinin kabul edilmesi ve diğer her şeyin `false` olarak ele alınması gereken bayrakları,
özellik anahtarlarını (feature toggle) veya yapılandırma değerlerini doğrulamak için `isTrue` kullanın.

> **TypeScript kullanıcıları için not:**
>
> Yalnızca boolean literal `true` değerini kabul etmeniz gerektiğinde, sadece truthy değerleri değil, `isTrue` kullanın.

### Avantajlar

- Boolean literal `true` için katı bir kontrol sağlar (tür dönüştürme yok).
- `true` değerini `1`, `"true"` veya `{}` gibi truthy değerlerden ayırt etmeye yardımcı olur.
- Guard'lar ve doğrulama ardışık düzenleri için uygun, basit ve öngörülebilir davranış.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isTrue(value)`

Parametreler:

- `value`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // doğru
const b = isTrue(1);         // yanlış
const c = isTrue("true");   // yanlış

if (isTrue(a)) {
  // a burada doğrudur
}
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isTrue(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Dosya 30 January 2026 at 13:46:33 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>