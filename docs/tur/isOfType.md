# isOfType

## Açıklama

İlkel türler için `typeof` ve karmaşık türler için bir yedek mekanizma kullanarak, verilen bir `value` değerinin
belirtilen bir tür dizesiyle eşleşip eşleşmediğini belirler.

### Kullanım durumu

Tür-özel işlemler yapmadan önce bir değerin beklenen bir tür dizesinde olup olmadığını kontrol ederek `unknown`
girdileri (örn. API yanıtları, kullanıcı girdisi, ayrıştırılmış JSON) doğrulayın ve daraltın.

> **TypeScript kullanıcıları için not:**
>
> `unknown` değerlerle çalışırken çalışma zamanı türlerine göre dallanmak için `isOfType` kullanın; `true`/`false`
> döndürür ve `null` ile `undefined` değerlerini açıkça ele alır.

### Avantajlar

- Hız ve açıklık için ilkel türleri doğrudan `typeof` ile kontrol eder.
- `typeof` tek başına amaçlandığı şekilde ayırt edemediği `null` ve `undefined` değerlerini doğru şekilde ele alır.
- `getTypeOf` kullanarak yapılan yedek bir karşılaştırma sayesinde karmaşık veya özel tür dizelerini destekler.
- Koruyucular ve dallanma için uygun, basit bir boolean sonuç (`true`/`false`) döndürür.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isOfType(value, type)`

Parametreler:

- `value`: `type` ile karşılaştırmak üzere test edilecek değer.
- `type`: Karşılaştırılacak türün dize gösterimi.

### Yerel fonksiyon içe aktarma

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input burada bir sayıdır
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input burada bir dizedir
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isOfType(value, type)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Dosya 30 January 2026 at 17:07:04 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>