# areWeakMaps

## Açıklama

`areWeakMaps`, bir değerin her öğesi `WeakMap` olan boş olmayan bir dizi olup olmadığını kontrol eder; yalnızca bu
durumda `true`, aksi halde `false` döndürür.

### Kullanım durumu

Çalışma zamanı verilerini (örn. ayrıştırılmış JSON, eklenti girdileri veya gevşek tipli yapılandırma) doğrulayarak,
yineleme yapıp `WeakMap` metotlarını çağırmadan önce bunun `WeakMap` örneklerinden oluşan boş olmayan bir dizi
olduğundan emin olun; herhangi bir öğe `WeakMap` değilse veya dizi boşsa `false` döndürür.

> **TypeScript kullanıcıları için not:**
>
> Bilinmeyen girdiyi boş olmayan bir `WeakMap[]` olarak ele almadan önce doğrulamak için `areWeakMaps` kullanın; boş
> diziler için `false` döndürür.

### Avantajlar

- Sağlanan dizideki her öğenin bir `WeakMap` örneği olmasını sağlar.
- Boş diziler için `false` döndürerek “veri yok” durumunun yanlışlıkla geçerli girdi olarak kabul edilmesini önler.
- Tüm öğeler üzerinde `WeakMap`-e özgü işlemler yapmadan önce bir koruma (guard) olarak kullanışlıdır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areWeakMaps(array)`

Parametreler:

- `array`: `WeakMap` örnekleri açısından kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list, WeakMap örneklerinden oluşan boş olmayan bir dizidir
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // boş olmayan bir WeakMap[] değil
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areWeakMaps(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Dosya 30 January 2026 at 13:40:02 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>