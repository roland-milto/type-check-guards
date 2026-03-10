# arePlainObjects

## Açıklama

Bir dizinin tüm öğelerinin düz nesne olup olmadığını kontrol eder; yalnızca her öğe bu koşulu sağlıyorsa `true`
döndürür.

### Kullanım durumu

Dış veya türü belirtilmemiş verileri (örn. ayrıştırılmış JSON, API yükleri, form gönderimleri) doğrulayarak, yineleme
yapıp özellikleri okumadan önce her girdinin düz bir nesne olduğu boş olmayan bir dizi aldığınızdan emin olun.

> **TypeScript kullanıcıları için not:**
>
> TypeScript'te bilinmeyen girdiyi `Record<string, unknown>[]` (veya daha sıkı bir nesne şekli) olarak ele almadan önce
> doğrulamak için `arePlainObjects` kullanın.

### Avantajlar

- Girdi dizisindeki her öğenin düz bir nesne olmasını sağlar; yalnızca tüm öğeler eşleştiğinde `true` döndürür.
- Geçersiz girdileri (dizi olmayanlar veya boş diziler) `false` döndürerek erken aşamada reddeder.
- Hem nesne değişmezi (object literal) nesnelerini hem de `Object.create(null)` ile oluşturulan nesneleri geçerli düz
  nesneler olarak kabul eder.

## Kullanım

### Sözdizimi

Fonksiyon:

- `arePlainObjects(array)`

Parametreler:

- `array`: Düz nesne öğeleri açısından kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // doğru
const b = arePlainObjects([{}, Object.create(null)]); // doğru
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // yanlış
const d = arePlainObjects([] as unknown[]); // yanlış
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.arePlainObjects(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Dosya 30 January 2026 at 16:56:13 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>