# getTypeOf

## Açıklama

`getTypeOf`, verilen bir değer için; rafine sayısal türler ve belirli nesne türleri dahil olmak üzere ayrıntılı, insan
tarafından okunabilir bir tür etiketi döndürür.

### Kullanım durumu

Girdi doğrulaması ve tanılama süreçlerinde tür tespitini standartlaştırmak için `getTypeOf` kullanın—örneğin `nan`
değerini reddetmek, yalnızca `integer` kimlikleri kabul etmek, `decimal` gibi sayısal dizeleri düz `string`
değerlerinden farklı ele almak veya `date` ve `regexp` gibi kesin nesne türlerini günlüğe kaydetmek için.

> **TypeScript kullanıcıları için not:**
>
> Dönüş türü `DataTypeAsString | string` şeklindedir. Bunu açıklayıcı bir etiket olarak değerlendirin; dallanma yaparken
`integer`, `float`, `nan`, `array`, `null` ve `undefined` gibi bilinen literal değerlerle karşılaştırın.

### Avantajlar

- JavaScript’in `typeof` operatöründen daha ayrıntılı bir tür dizesi döndürür; `integer`, `float` ve `nan` gibi sayısal
  alt türleri de içerir.
- `null` ve `undefined` değerlerini açıkça `null` ve `undefined` olarak ayırt eder.
- Yaygın sayısal dize biçimlerini algılar ve bunları düz `string` yerine `binary`, `octal`, `decimal` veya `hexadecimal`
  olarak raporlar.
- Dizileri `array` olarak da tanımlar ve belirli nesne tür adlarını sağlamak için `Object.prototype.toString` kullanır (
  örn. `date`, `regexp`, `map`, `set`).
- Tutarlı, insan tarafından okunabilir tür etiketlerinin gerektiği doğrulama, günlükleme ve hata ayıklama işlemleri için
  çok kullanışlıdır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `getTypeOf(value)`

Parametreler:

- `value`: Veri türünün belirleneceği değer.

### Yerel fonksiyon içe aktarma

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Örnek kontroller
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.getTypeOf(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Dosya 6 February 2026 at 13:15:18 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>