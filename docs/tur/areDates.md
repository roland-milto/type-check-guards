# areDates

## Açıklama

`areDates`, verilen bir dizinin dolu olup olmadığını ve yalnızca `Date` nesneleri içerip içermediğini belirler; yalnızca
tüm öğeler geçerli tarihler olduğunda `true` döndürür.

### Kullanım durumu

Zamana göre sıralama, biçimlendirme veya aralık hesaplama gibi tarihe özgü mantığı çalıştırmadan önce bilinmeyen
girdileri (örn. ayrıştırılmış JSON, form verileri, API yükleri) doğrulamak için `areDates` kullanın.

> **TypeScript kullanıcıları için not:**
>
> Yalnızca her öğesi `Date` olan boş olmayan diziler için `true` döndürür; boş diziler `false` verir.

### Avantajlar

- İçeriğini doğrulamadan önce bir dizinin boş olmadığını garanti eder; böylece boş girdiler için `true` dönmesini
  engeller.
- Her öğenin bir `Date` örneği olduğunu doğrular; ilk uyuşmazlıkta hemen `false` döndürür.
- Dizi öğeleri üzerinde tarihe özgü işlemler yapmadan önce koruyucu (guard) tarzı bir kontrol olarak kullanışlıdır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areDates(array)`

Parametreler:

- `array`: `Date` nesneleri açısından kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // doğru
console.log(areDates(b)); // yanlış
console.log(areDates(c)); // yanlış

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areDates(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areDates](../_analysis/areDates.md)

<br>

---

<small>Dosya 31 January 2026 at 15:32:41 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>