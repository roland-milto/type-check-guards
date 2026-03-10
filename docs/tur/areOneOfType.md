# areOneOfType

## Açıklama

`areOneOfType`, boş olmayan bir dizideki tüm öğelerin belirtilen çalışma zamanı türlerinden birine ait olup olmadığını
kontrol eder.

### Kullanım durumu

Gelen verileri (ör. ayrıştırılmış JSON) doğrulayın: bir alanın, öğeleri bilinen bir ilkel tür kümesiyle sınırlandırılmış
boş olmayan bir dizi olması gerekir; dizi boşsa veya izin verilmeyen herhangi bir tür içeriyorsa `false` döndürün.

> **TypeScript kullanıcıları için not:**
>
> Bu işlev bir boolean döndürür ve derleme zamanında dizi öğesi türlerini daraltmaz; daha ileri işlemden önce çalışma
> zamanı doğrulama adımı olarak kullanın.

### Avantajlar

- Bir dizideki her öğenin izin verilen çalışma zamanı türlerinden en az biriyle eşleşmesini sağlar; yalnızca tüm dizi
  doğrulamadan geçtiğinde `true` döndürür.
- Geçersiz girdileri erken reddeder: `array` veya `types` boşsa ya da dolu bir dizi değilse `false` döndürür.
- Tek bir `areOneOfType` çağrısıyla karışık türde koleksiyonları (ör. sayılar ve dizgeler) doğrulamak için
  kullanışlıdır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areOneOfType(array, types)`

Parametreler:

- `array`: Sağlanan türlere göre doğrulanacak öğelerden oluşan bir dizi.
- `types`: Kontrol edilecek veri türlerini temsil eden dizgelerden oluşan bir dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areOneOfType(array, types)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Dosya 31 January 2026 at 23:39:00 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>