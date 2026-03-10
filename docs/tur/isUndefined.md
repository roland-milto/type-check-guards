# isUndefined

## Açıklama

Verilen bir değerin `undefined` olup olmadığını kontrol eder.

### Kullanım durumu

İsteğe bağlı girdileri korumak, eksik özellikleri tespit etmek veya “sağlanmadı” (`undefined`) ile “açıkça boş” (`null`)
arasındaki farkı ayırt etmek için `isUndefined` kullanın.

> **TypeScript kullanıcıları için not:**
>
> `undefined` değerini özellikle tespit etmeniz gerektiğinde (`null` değil) `isUndefined` kullanın.
`typeof value === "undefined"` ifadesine dayandığı için güvenlidir.

### Avantajlar

- `typeof` kullanarak `undefined` için net ve açık bir kontrol sağlar; tanımlanmamış değişkenlerle ilgili uç durumları
  önler.
- Koruyucular, dallanma ve doğrulama mantığı için uygun, basit bir boolean sonuç (`true`/`false`) döndürür.
- `undefined` değerini `null`, `0`, `""` veya `NaN` gibi diğer “boş” değerlerden ayırt etmeye yardımcı olur.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isUndefined(value)`

Parametreler:

- `value`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x burada tanımsızdır
} else {
  // x burada tanımsız değildir
}

const a = isUndefined(undefined); // doğru
const b = isUndefined(null);      // yanlış
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isUndefined(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Dosya 30 January 2026 at 14:04:42 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>