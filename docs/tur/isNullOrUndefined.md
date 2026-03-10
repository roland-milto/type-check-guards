# isNullOrUndefined

## Açıklama

Verilen bir değerin `null` veya `undefined` olup olmadığını kontrol eder.

### Kullanım durumu

`null` ve `undefined` değerlerinin her ikisini de “değer yok” olarak ele almanız gerektiğinde `isNullOrUndefined`
kullanın; örneğin isteğe bağlı girdileri doğrularken, API payload'larını normalize ederken veya potansiyel olarak eksik
bir değeri dereference etmeden önce kod yollarını korurken.

> **TypeScript kullanıcıları için not:**
>
> `isNullOrUndefined` fonksiyonunu, özelliklere erişmeden veya metot çağırmadan önce eksik değerlere karşı koruma
> sağlamak için kullanın; yalnızca `null` ve `undefined` için `true` döndürür.

### Avantajlar

- `null` ve `undefined` değerlerini tek bir yerde tespit etmek için açık ve yeniden kullanılabilir bir koruma sağlar.
- Koşullarda ve doğrulamalarda kolayca birleştirilebilen basit bir boolean (`true`/`false`) döndürür.
- Özelliklere erişmeden veya metot çağırmadan önce eksik değerleri kontrol ederek yaygın çalışma zamanı hatalarından
  kaçınmaya yardımcı olur.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isNullOrUndefined(value)`

Parametreler:

- `value`: `null` veya `undefined` olup olmadığı kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // eksik değeri işle
}

console.log(isNullOrUndefined(b)); // doğru
console.log(isNullOrUndefined(c)); // yanlış

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isNullOrUndefined(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Dosya 31 January 2026 at 00:35:36 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>