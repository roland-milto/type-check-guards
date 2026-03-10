# areSets

## Açıklama

Verilen boş olmayan bir dizinin yalnızca `Set` örnekleri içerip içermediğini kontrol eder; içeriyorsa `true`, aksi halde
`false` döndürür.

### Kullanım durumu

Her bir seti işlemeden önce bir değerin (örn. kullanıcı girdisinden, JSON ayrıştırmadan veya harici API'lerden) boş
olmayan bir `Set` nesneleri dizisi olduğunu doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> `areSets`i, her öğe üzerinde `Set` API'lerini (örn. `.size`, `.has`, `.add`) yinelemeden ve çağırmadan önce bilinmeyen
> girdiyi doğrulamak için kullanın.

### Avantajlar

- Yalnızca girdi boş olmayan bir dizi olduğunda ve her öğe bir `Set` örneği olduğunda `true` döndürür.
- Dizide hiç öğe olmadığında `false` döndürerek boş diziler için yanlış pozitifleri önler.
- Her öğe üzerinde `Set`e özgü işlemler gerçekleştirmeden önce çalışma zamanında bir koruma (guard) olarak
  kullanışlıdır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areSets(array)`

Parametreler:

- `array`: `Set` örnekleri açısından kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a, çalışma zamanında Set örneklerinden oluşan bir dizidir
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // false
console.log(areSets(c)); // false
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areSets(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areSets](../_analysis/areSets.md)

<br>

---

<small>Dosya 30 January 2026 at 23:15:45 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>