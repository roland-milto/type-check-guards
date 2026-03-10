# areIntegers

## Açıklama

`areIntegers`, verilen bir dizideki tüm öğelerin tamsayı olup olmadığını belirler; öyleyse `true`, değilse `false`
döndürür.

### Kullanım durumu

`areIntegers` fonksiyonunu, mantığınızın kimlikler, sayaçlar, sayfalama ofsetleri veya dizi indeksleri gibi tamsayı
değerlerden oluşan dolu bir liste gerektirdiği durumlarda kullanıcı tarafından sağlanan veya harici verileri (örn. sorgu
parametreleri, JSON yükleri, CSV satırları) doğrulamak için kullanın.

> **TypeScript kullanıcıları için not:**
>
> `areIntegers` fonksiyonunu, yalnızca tamsayılar içeren `number[]` olarak ele almadan önce `unknown[]` girdileri için
> çalışma zamanı koruyucusu olarak kullanın. `false` döndürürse, girdi ya dolu bir dizi değildir ya da en az bir tamsayı
> olmayan değer içerir.

### Avantajlar

- Yalnızca her öğe bir tamsayı olduğunda `true` döndürür; aksi halde `false` döndürür.
- Yalnızca tamsayılarla yapılan işlemleri (örn. indeksleme, sayımlar, kimlikler) gerçekleştirmeden önce bilinmeyen
  girdiyi doğrulamaya yardımcı olur.
- Hızlı başarısız olur: tamsayı olmayan bir öğe bulunur bulunmaz kontrol etmeyi durdurur.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areIntegers(array)`

Parametreler:

- `array`: Tamsayı öğeler içerip içermediği kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // doğru
console.log(areIntegers(b)); // doğru
console.log(areIntegers(c)); // yanlış

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areIntegers(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Dosya 31 January 2026 at 01:00:58 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>