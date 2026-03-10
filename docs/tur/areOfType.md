# areOfType

## Açıklama

Verilen `array` içindeki tüm öğelerin belirtilen `type` türünde olup olmadığını kontrol eder.

### Kullanım durumu

Bir dizinin her bir öğesi üzerinde türe özgü işlemler yapmadan önce bilinmeyen girdiyi (örn. ayrıştırılmış JSON, API
yükleri, kullanıcı girdisi) doğrulamak için `areOfType` kullanın.

> **TypeScript kullanıcıları için not:**
>
> `areOfType` bir tür koruması olduğundan, TypeScript `if (areOfType(...)) {}` bloğu içinde diziyi
`Array<DataTypeOf<T>>` olarak daraltır.

### Avantajlar

- Bir TypeScript tür koruması sağlar: `true` döndürdüğünde, girdi `Array<DataTypeOf<T>>` olarak daraltılır.
- Her bir öğeyi istenen çalışma zamanı türüne göre doğrular; karışık türde dizilerin geçmesini engeller.
- Hızlı başarısız olur: eşleşmeyen bir öğe bulunur bulunmaz `false` döndürür.
- Tasarım gereği dizi olmayanları ve boş dizileri reddeder (`isFilledArray`'e bağlıdır).

## Kullanım

### Sözdizimi

Fonksiyon:

- `areOfType(array, type)`

Parametreler:

- `array`: Kontrol edilecek dizi.
- `type`: Dizideki her bir öğeye karşı kontrol edilecek tür.

### Yerel fonksiyon içe aktarma

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values artık number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areOfType(array, type)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Dosya 30 January 2026 at 17:11:50 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>