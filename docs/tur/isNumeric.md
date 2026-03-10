# isNumeric

## Açıklama

`isNumeric`, çözümlenen türünü `NUMERIC_TYPES` ile karşılaştırarak verilen bir `value` değerinin sayısal kabul edilip
edilmediğini belirler.

### Kullanım durumu

Sayısal işlemler yapmadan önce girdileri (örn. API payload'ları, form değerleri, yapılandırma) doğrulamak ve
`NUMERIC_TYPES` uyarınca `BigInt` gibi sayısal benzeri türleri tutarlı biçimde kabul etmek için `isNumeric` kullanın.

> **TypeScript kullanıcıları için not:**
>
> `isNumeric`, boolean döndüren bir predikattır; bir değerin kütüphane tarafından tanımlanan sayısal tür kümesine ait
> olup olmadığını belirlemek için bunu çalışma zamanı kontrolü olarak ele alın.

### Avantajlar

- Sayısal tespit mantığını merkezileştirmek ve bir kod tabanı genelinde kontrolleri tutarlı tutmak için `getTypeOf` ile
  `NUMERIC_TYPES` kullanır.
- Kolay dallanma ve guard tarzı kullanım için basit bir boolean (`true`/`false`) döndürür.
- `NUMERIC_TYPES` tarafından tanımlandığı üzere birden fazla sayısal gösterimi (örn. `number`, `BigInt`) destekler.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isNumeric(value)`

Parametreler:

- `value`: Sayısal tür olup olmadığını kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v, kütüphanenin tür kurallarına göre sayısal kabul edilir
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isNumeric(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Dosya 6 February 2026 at 15:55:02 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>