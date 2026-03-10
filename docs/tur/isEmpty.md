# isEmpty

## Açıklama

Verilen bir değerin boş olup olmadığını belirler; `null`, `undefined`, boş/yalnızca boşluk içeren dizeler, boş diziler,
boş `Map`/`Set` veya kendi enumerable özelliği olmayan nesneler için `true` döndürür.

### Kullanım durumu

`isEmpty` fonksiyonunu, birden çok veri türü boyunca girdileri doğrulamak ve eksik/boş değerleri tespit etmek için
kullanın (örn. form alanları, API payload'ları, yapılandırma nesneleri); burada `null`, `undefined`, yalnızca boşluk
içeren dizeler, boş koleksiyonlar ve özelliksiz nesneler boş kabul edilmelidir.

> **TypeScript kullanıcıları için not:**
>
> `isEmpty`, boolean döndüren bir yardımcıdır (TypeScript tür predikatı değildir); bu nedenle türleri tek başına
> daraltmaz. Derleme zamanı daraltma yerine doğrulama/dallanma için kullanın.

### Avantajlar

- Boşluk kontrolü için `null` ve `undefined` değerlerini `true` (boş) olarak değerlendirir.
- Uzunluğu kontrol etmeden önce kırparak yalnızca boşluk içeren dizeleri boş kabul eder.
- Yaygın kapsayıcı türlerini (diziler, `Map`, `Set`) ve kendi enumerable özelliği olmayan düz nesneleri destekler.
- `hasOwnProperty` kontrollerini kullanarak kalıtılan özelliklerin sayılmasını önler.
- Guard'lar ve doğrulama için uygun, basit bir boolean sonuç (`true`/`false`) döndürür.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isEmpty(value)`

Parametreler:

- `value`: Boş olup olmadığını kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isEmpty(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Dosya 6 February 2026 at 16:21:16 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>