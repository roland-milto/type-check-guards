# isValidDate

## Açıklama

`isValidDate`, verilen bir değerin geçerli bir `Date` nesnesi olup olmadığını kontrol eder ve yalnızca gerçek, geçersiz
olmayan tarihler için `true` döndürür.

### Kullanım durumu

Kullanıcı girdisini veya tarih içerebilecek API verilerini doğrulayın; tarih hesaplamaları, biçimlendirme veya
karşılaştırmalar yapmadan önce değerin geçersiz bir tarih değil, gerçek bir `Date` örneği olduğundan emin olun.

> **TypeScript kullanıcıları için not:**
>
> `unknown` olarak tiplenmiş değerlerde `Date` metotlarını (örn. `toISOString`, `getTime`) çağırmadan önce, bunların
> geçerli `Date` nesneleri olduğundan emin olmak için `isValidDate` kullanın.

### Avantajlar

- Bir değerin yalnızca tarih benzeri bir string veya sayı değil, bir `Date` örneği olmasını sağlar.
- `NaN` zaman değerlerini kontrol ederek geçersiz tarihleri (örn. `new Date("invalid")`) reddeder.
- Koşullarda ve doğrulama akışlarında kullanımı kolay, basit bir boolean koruyucudur.
- Önce girdiyi doğrulayarak tarih metotlarını çağırırken çalışma zamanı hatalarını önlemeye yardımcı olur.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isValidDate(value)`

Parametreler:

- `value`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input geçerli bir Date örneğidir
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isValidDate(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Dosya 30 January 2026 at 16:53:20 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>