# isNull

## Açıklama

Sağlanan `value` değerinin `null` olup olmadığını belirler.

### Kullanım durumu

`null` değerinin anlamlı bir sentinel değer olduğu ve `undefined` veya diğer değerlerden farklı şekilde ele alınması
gereken girdileri ya da API payload alanlarını doğrulamak için `isNull` kullanın.

> **TypeScript kullanıcıları için not:**
>
> `null` değerini `undefined` ve diğer falsy değerlerden ayırt etmeniz gerektiğinde `isNull` kullanın; yalnızca `null`
> için `true` döndürür.

### Avantajlar

- `null` için, onu `undefined` ile karıştırmadan kesin bir kontrol sağlar.
- `unknown` kabul ettiği için her türlü girdi türünde güvenilir şekilde çalışır.
- Basit, hızlı ve yan etkisizdir; yalnızca `true` veya `false` döndürür.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isNull(value)`

Parametreler:

- `value`: `null` olup olmadığını kontrol etmek için değer.

### Yerel fonksiyon içe aktarma

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // doğru
console.log(isNull(b)); // yanlış

if (isNull(a)) {
  // a burada null
}
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isNull(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isNull](../_analysis/isNull.md)

<br>

---

<small>Dosya 31 January 2026 at 15:41:08 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>