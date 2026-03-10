# areErrors

## Açıklama

Bir dizinin boş olmadığını ve yalnızca `Error` nesneleri içerdiğini kontrol eder; `true` veya `false` döndürür.

### Kullanım durumu

Çalışma zamanında sağlanan bir `unknown[]`'un (ör. birleştirilmiş hatalar, doğrulama sonuçları veya serileştirilmiş
veriler) üzerinde yineleme yapmadan, günlüklemeden veya yeniden fırlatmadan önce bunun `Error` nesnelerinden oluşan boş
olmayan bir liste olduğunu doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> `areErrors`, yalnızca her öğesi bir `Error` olan dolu bir dizi için `true` döndürür; boş bir dizi için veya herhangi
> bir öğe `Error` değilse `false` döndürür.

### Avantajlar

- Her öğenin bir `Error` örneği olmasını sağlar; güvenli hata işleme ve günlükleme yapılmasına olanak tanır.
- Boş dizileri reddeder; yanlışlıkla “hata yok” durumlarının geçerli hata listeleri olarak ele alınmasını önler.
- `unknown[]` girdileriyle (ör. API'lerden veya `catch` bloklarından) çalışırken çalışma zamanı koruması olarak iyi
  çalışır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areErrors(array)`

Parametreler:

- `array`: `Error` nesneleri için kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value, Error nesnelerinden oluşan boş olmayan bir dizidir
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areErrors(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Dosya 6 February 2026 at 12:35:58 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>