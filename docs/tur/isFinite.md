# isFinite

## Açıklama

Verilen bir `value` değerinin sonlu bir `number` olup olmadığını belirler.

### Kullanım durumu

Sayısal hesaplamalar yapmadan önce bilinmeyen girdiyi (ör. JSON, formlar veya API'lerden) doğrulamak için `isFinite`
kullanın; böylece değerin gerçek, sonlu bir sayı olduğundan emin olursunuz.

> **TypeScript kullanıcıları için not:**
>
> `isFinite` yalnızca sonlu sayılar için `true` döndürür; `NaN`, `Infinity` ve sayı olmayan herhangi bir değer için
`false` döndürür.

### Avantajlar

- Güvenilir bir sonluluk kontrolü için yerleşik `Number.isFinite` kullanır.
- Yalnızca sonlu sayılar için `true` döndürür; `NaN`, `Infinity` ve sayı olmayan girdiler için `false` döndürür.
- Doğrulama ve koruyucu mantık için uygun, basit ve yan etkisiz bir yüklem.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isFinite(value)`

Parametreler:

- `value`: Sonluluk açısından kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers şudur: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value burada sonlu bir sayıdır
  const doubled = value * 2;
  console.log(doubled);
}
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isFinite(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Dosya 30 January 2026 at 16:32:04 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>