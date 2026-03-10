# areArrays

## Açıklama

`areArrays`, bir değerin öğelerinin tamamı dizi olan dolu bir iki boyutlu dizi olup olmadığını belirler.

### Kullanım durumu

Satır/sütun işlemleri yapmadan önce tablo veya matris benzeri girdileri (ör. CSV satırları, ızgara verisi veya
gruplandırılmış listeler) doğrulamak için `areArrays` kullanın; girdi bir dizi değilse, boşsa veya dizi olmayan herhangi
bir öğe içeriyorsa `false` döndürür.

> **TypeScript kullanıcıları için not:**
>
> İç içe diziler üzerinde yineleme yapmadan veya indekslemeden önce bir değerin boş olmayan 2B dizi olduğunu ve her
> satırın bir dizi olduğunu garanti etmeniz gerektiğinde `areArrays` kullanın.

### Avantajlar

- Girdinin, her öğesi bir dizi olan boş olmayan iki boyutlu bir dizi olduğunu doğrular.
- Koruyucular ve erken çıkışlar için uygun, basit bir boolean sonuç (`true`/`false`) döndürür.
- Sonraki kod iç içe dizi işlemlerini (ör. satırları map etmek) varsaydığında çalışma zamanı hatalarını önlemeye
  yardımcı olur.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areArrays(array)`

Parametreler:

- `array`: Kontrol edilecek girdi.

### Yerel fonksiyon içe aktarma

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value, elemanları dizi olan 2B bir dizidir
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areArrays(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Dosya 6 February 2026 at 13:41:54 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>