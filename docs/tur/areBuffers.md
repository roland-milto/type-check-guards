# areBuffers

## Açıklama

`areBuffers`, sağlanan değerin her öğesi bir `Buffer` olan boş olmayan, doldurulmuş bir dizi olup olmadığını kontrol
eder; öyleyse `true`, değilse `false` döndürür.

### Kullanım durumu

Gelen parça (chunk) dizilerini (örn. stream'lerden, dosya yüklemelerinden veya ağ paketlerinden) doğrulayarak,
birleştirmeden, çözümlemeden veya kriptografik ya da ikili işleme fonksiyonlarına iletmeden önce tüm parçaların `Buffer`
örnekleri olduğundan emin olun.

> **TypeScript kullanıcıları için not:**
>
> `areBuffers` fonksiyonunu, `Buffer.concat` gibi Buffer'a özgü API'leri çağırmadan önce `unknown[]` değerini doğrulamak
> için kullanın; böylece fonksiyon yalnızca her öğe bir `Buffer` olduğunda `true` döndürür.

### Avantajlar

- Girdideki her öğenin bir Node.js `Buffer` örneği olmasını sağlar; yalnızca tüm dizi eşleştiğinde `true` döndürür.
- Boş olmayan, doldurulmuş bir dizi gerektirerek geçersiz girdileri erken aşamada reddeder; boş diziler veya dizi
  olmayan değerler için `false` döndürür.
- Yalnızca buffer ile yapılabilen işlemleri (örn. birleştirme, hash alma, ikili protokoller) gerçekleştirmeden önce bir
  koruma (guard) olarak kullanışlıdır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areBuffers(array)`

Parametreler:

- `array`: Buffer örnekleri açısından kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areBuffers(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Dosya 31 January 2026 at 16:27:43 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>