# isPromise

## Açıklama

Verilen bir değerin `Promise` olup olmadığını belirler.

### Kullanım durumu

Eklentilerden, dinamik import'lardan veya gevşek tipli API'lerden dönen değerleri işlerken olduğu gibi, bilinmeyen
girdileri bir `Promise` olarak ele almadan önce doğrulamak için `isPromise` kullanın.

> **TypeScript kullanıcıları için not:**
>
> `isPromise`, `instanceof Promise` ile kontrol eder; bu nedenle yalnızca gerçek `Promise` örnekleri için `true`
> döndürür (genel thenable'lar için değil).

### Avantajlar

- Bir değerin `Promise` olup olmadığını kontrol etmek için basit bir çalışma zamanı denetimi sağlar.
- Gerçek bir `Promise` örneği gerektiren kod yollarını korumaya yardımcı olur ve öngörülebilir şekilde `true` veya
  `false` döndürür.
- Gerçek bir `Promise` örneği gerektirerek “thenable” nesnelerden (örn. `{ then() {} }`) kaynaklanan yanlış pozitifleri
  önler.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isPromise(value)`

Parametreler:

- `value`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // doğru
console.log(isPromise(b)); // yanlış
console.log(isPromise(123)); // yanlış
console.log(isPromise(null)); // yanlış

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isPromise(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Dosya 30 January 2026 at 23:54:37 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>