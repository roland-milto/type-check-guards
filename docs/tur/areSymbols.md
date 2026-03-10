# areSymbols

## Açıklama

Bir girdinin öğeleri tamamen sembollerden oluşan dolu bir dizi olup olmadığını denetler ve `true` veya `false` döndürür.

### Kullanım durumu

Bir yapılandırma alanının (ör. sembollerle temsil edilen benzersiz anahtarların listesi) yalnızca semboller içeren boş
olmayan bir dizi olduğunu, `symbol[]` gerektiren API'lerde kullanmadan önce doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> `areSymbols` fonksiyonunu, bilinmeyen girdiyi `symbol[]` olarak ele almadan önce doğrulamak için kullanın; dizi
> olmayanlar ve boş diziler için `false` döndürür.

### Avantajlar

- Yalnızca girdi boş olmayan bir dizi olduğunda ve her öğe bir sembol olduğunda `true` döndürür.
- Dahili dolu-dizi denetimi aracılığıyla dizi olmayanları ve boş dizileri reddederek yanlış pozitifleri önler.
- Daha ileri işleme geçmeden önce yalnızca sembollerden oluşan listeleri doğrulamak için çalışma zamanında bir tür
  koruyucu (type guard) olarak kullanışlıdır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areSymbols(array)`

Parametreler:

- `array`: Sembol öğeleri açısından kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a çalışma zamanında yalnızca sembollerden oluşan bir dizidir
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areSymbols(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Dosya 30 January 2026 at 14:24:15 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>