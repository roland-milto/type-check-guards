# isBoolean

## Açıklama

Verilen bir değerin `boolean` olup olmadığını belirler.

### Kullanım durumu

Koşullu mantıkta kullanmadan önce bir değerin `boolean` olduğundan emin olmak için harici veya türü belirtilmemiş
verileri (örn. ortam değişkenleri, JSON yükleri, sorgu parametreleri) doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> Boolean işlemlerini uygulamadan önce `unknown` türünü `boolean`a daraltmak için `isBoolean` kullanın.

### Avantajlar

- `typeof` kullanarak basit ve hızlı çalışma zamanı kontrolü.
- Boolean'a özgü mantık uygulanmadan önce bilinmeyen girdiyi doğrulamaya yardımcı olur.
- Öngörülebilir bir `boolean` sonucu (`true`/`false`) döndürür.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isBoolean(value)`

Parametreler:

- `value`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input burada boolean
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isBoolean(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Dosya 30 January 2026 at 14:38:13 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>