# isPlainObject

## Açıklama

Verilen bir `value` değerinin düz bir nesne olup olmadığını kontrol eder; öyleyse `true`, değilse `false` döndürür.

### Kullanım durumu

Anahtarları okumadan veya onu türlendirilmiş bir yapılandırma nesnesine eşlemeden önce, bir `unknown` girdinin (ör.
ayrıştırılmış JSON, harici veri veya fonksiyon argümanları) düz bir nesne olduğunu doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> `isPlainObject`, `unknown` değerini kayıt-benzeri bir nesne olarak ele almadan önce daraltmak için kullanışlıdır;
> yalnızca iç etiketi `[object Object]` olan değerler için `true` döndürür.

### Avantajlar

- Bir değerin düz bir nesne (yani `Object` / `{}`) olup olmadığını basit ve güvenilir şekilde kontrol eder; `true` veya
  `false` döndürür.
- Düz nesneleri dizilerden, fonksiyonlardan, `null` değerinden ve diğer düz-nesne olmayan türlerden ayırt etmeye
  yardımcı olur.
- Nesne özelliklerine erişmeden önce `unknown` değerlerini daraltmak için TypeScript'te bir tür koruyucu (type guard)
  olarak kullanışlıdır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isPlainObject(value)`

Parametreler:

- `value`: Düz nesne durumunu test etmek için kullanılacak değer.

### Yerel fonksiyon içe aktarma

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input burada düz bir nesnedir
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // doğru
console.log(isPlainObject([])); // yanlış
console.log(isPlainObject(null)); // yanlış
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isPlainObject(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Dosya 6 February 2026 at 12:20:14 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>