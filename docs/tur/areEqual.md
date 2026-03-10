# areEqual

## Açıklama

`areEqual`, bir dizideki tüm öğelerin verilen beklenen değere eşit olup olmadığını kontrol eder; yalnızca her öğenin
eşleştiği boş olmayan diziler için `true` döndürür.

### Kullanım durumu

Boş girdiyi geçersiz (`false`) kabul ederken bir listenin yalnızca tek bir izin verilen değeri içerdiğini doğrulayın (
örn. tüm durum bayrakları `true`, tüm roller `"admin"` ya da tüm sayısal girdiler gerekli bir sabite eşit).

> **TypeScript kullanıcıları için not:**
>
> Sıkı bir tüm-öğeler kontrolüne ihtiyaç duyduğunuzda `areEqual` kullanın; boş diziler için ve dizi olmayan ya da dolu
> olmayan herhangi bir girdi için `false` döndürür.

### Avantajlar

- Yalnızca her öğe beklenen değerle eşleştiğinde `true` döndürür; aksi halde `false` döndürür.
- Hızlı başarısız olur: eşleşmeyen bir öğe bulunur bulunmaz kontrol etmeyi durdurur.
- Girdi dolu bir dizi olmadığında `false` döndürerek geçersiz girdiye karşı koruma sağlar.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areEqual(value, expected)`

Parametreler:

- `value`: Kontrol edilecek dizi.
- `expected`: Dizideki her öğeyle karşılaştırılacak öğe.

### Yerel fonksiyon içe aktarma

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areEqual(value, expected)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Dosya 31 January 2026 at 23:52:33 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>