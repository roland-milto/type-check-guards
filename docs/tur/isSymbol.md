# isSymbol

## Açıklama

`isSymbol`, verilen bir değerin `symbol` türünde olup olmadığını belirler; semboller için `true`, aksi halde `false`
döndürür.

### Kullanım durumu

Bir `unknown` değeri; benzersiz bir tanımlayıcı, bir kayıt defteri anahtarı veya nesnelerde ve map'lerde hesaplanmış bir
özellik anahtarı olarak kullanmadan önce onun bir `symbol` olduğunu doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> Sembol ile ilgili fonksiyonları çağırmadan veya onu hesaplanmış özellik anahtarı olarak kullanmadan önce `unknown`
> değerini `symbol` türüne daraltmak için `isSymbol` kullanın.

### Avantajlar

- JavaScript `symbol` ilkel türü için basit ve güvenilir bir çalışma zamanı denetimi sağlar.
- Sembol-özel API'leri kullanmadan veya anahtar olarak saklamadan önce `unknown` değerlerini daraltmaya yardımcı olur.
- Sembol değerlerini tespit etmenin kanonik yolu olan `typeof` kullandığı için yanlış pozitifleri önler.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isSymbol(value)`

Parametreler:

- `value`: Denetlenecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input burada bir semboldür
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isSymbol(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Dosya 30 January 2026 at 14:29:07 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>