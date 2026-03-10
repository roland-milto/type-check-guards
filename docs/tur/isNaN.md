# isNaN

## Açıklama

Dizgeleri dönüştürmeden, sağlanan `value` değerinin `number` türünde bir `NaN` olup olmadığını belirler.

### Kullanım durumu

Güvenilmeyen veya gevşek tipli girdiyi (örn. API payload'ları, form değerleri, ayrıştırılmış JSON) doğrulayarak özel
`NaN` değerini tespit etmek ve onu açıkça ele almak; sayı olmayan girdileri `NaN` değilmiş gibi değerlendirmek.

> **TypeScript kullanıcıları için not:**
>
> Girdinin gerçekten bir `number` olduğundan emin olurken (dizeden sayıya dönüşüm olmadan) özel sayısal değer `NaN`'yi
> tespit etmeniz gerektiğinde `isNaN` kullanın.

### Avantajlar

- Sayı olmayan değerleri (örn. dizgeler) sayıya zorlamadan bir değerin `NaN` olup olmadığını kontrol eder.
- Yalnızca hem `number` türünde hem de `NaN` olan değerler için `true` döndürür.
- `unknown` girdiler için güvenlidir ve örtük dönüşümlerden kaynaklanan yanlış pozitifleri önler.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isNaN(value)`

Parametreler:

- `value`: `number` türünde bir `NaN` olup olmadığını kontrol etmek için incelenecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // doğru
console.log(isNaN(b)); // yanlış
console.log(isNaN(c)); // yanlış

if (isNaN(a)) {
  // a bir sayıdır ve özellikle NaN'dir
}
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isNaN(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Dosya 30 January 2026 at 15:48:26 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>