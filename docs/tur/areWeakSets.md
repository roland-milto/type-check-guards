# areWeakSets

## Açıklama

Bir girdinin, her öğesi `WeakSet` olan boş olmayan bir dizi olup olmadığını kontrol eder; yalnızca bu durumda `true`
döndürür.

### Kullanım durumu

Çalışma zamanı girdisini (örn. API'lerden, yapılandırmadan veya kullanıcı tarafından sağlanan verilerden) doğrulayarak,
`WeakSet` davranışına bağlı mantığa geçmeden önce elinizde `WeakSet` örneklerinden oluşan boş olmayan bir liste
olduğundan emin olun.

> **TypeScript kullanıcıları için not:**
>
> `areWeakSets` fonksiyonunu, bilinmeyen girdiyi `WeakSet[]` olarak ele almadan önce doğrulamak için kullanın. Boş
> diziler ve dizi olmayan değerler için `false` döndürür.

### Avantajlar

- Girdi dizisindeki her öğenin bir `WeakSet` olmasını sağlar.
- Boş diziler için `false` döndürerek, eksik verilerde yanlışlıkla “hepsi geçerli” sonucu alınmasını önler.
- Girdi dolu bir dizi değilse (`null` dahil) `false` döndürerek güvenli şekilde başarısız olur.
- `WeakSet` örnekleri gerektiren işlemleri gerçekleştirmeden önce bir koruma (guard) olarak kullanışlıdır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areWeakSets(array)`

Parametreler:

- `array`: `WeakSet` nesneleri açısından kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a, WeakSet örneklerinden oluşan boş olmayan bir dizidir
}

console.log(areWeakSets(a)); // doğru
console.log(areWeakSets(b)); // yanlış
console.log(areWeakSets(c)); // yanlış
console.log(areWeakSets(null as unknown)); // yanlış
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areWeakSets(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Dosya 30 January 2026 at 14:11:20 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>