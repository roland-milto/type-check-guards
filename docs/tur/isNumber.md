# isNumber

## Açıklama

`isNumber`, bir değerin sonlu ve `NaN` olmayan bir sayı olup olmadığını kontrol eder.

### Kullanım durumu

Hesaplama, depolama veya aralık kontrollerinden önce güvenilmeyen kaynaklardan (formlar, sorgu parametreleri, JSON
yükleri) gelen sayısal girdiyi doğrulayın; yalnızca sonlu sayıların (`true`) geçmesini sağlayın ve diğer her şeyin
`false` döndürmesini sağlayın.

> **TypeScript kullanıcıları için not:**
>
> Aritmetik yapmadan önce `unknown` değerleri doğrulamak için `isNumber` kullanın; `NaN`, `Infinity` ve `-Infinity`
> değerlerini reddeder.

### Avantajlar

- Yalnızca gerçek JavaScript sayıları için `true` döndürür (tür kontrolü + `NaN` ve sonsuzluk reddi).
- `NaN`, `Infinity` veya `-Infinity` değerlerinin yanlışlıkla sayı olarak geçmesine neden olan yaygın doğrulama
  hatalarını önler.
- Bilinmeyen girdiler (örn. JSON, kullanıcı girdisi, harici API'ler) için çalışma zamanında bir koruma (guard) olarak
  iyi çalışır.
- Basit, hızlı ve yan etkisizdir.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isNumber(value)`

Parametreler:

- `value`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input geçerli bir sonlu sayıdır
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isNumber(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Dosya 30 January 2026 at 13:11:31 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>