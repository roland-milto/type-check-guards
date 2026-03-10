# isIndexFound

## Açıklama

`isIndexFound`, verilen bir değerin negatif olmayan bir tamsayı olup olmadığını belirler; bu da bir indeksin bulunduğunu
gösterir.

### Kullanım durumu

Bir arama sonucunun kullanılabilir bir indeksi (tamsayı `>= 0`) temsil ettiğini, bir diziye veya dizeye indeksleme
yapmadan önce doğrulayarak `-1` veya sayısal olmayan değerlerin yanlışlıkla kullanılmasını önleyin.

> **TypeScript kullanıcıları için not:**
>
> `indexOf`, `findIndex` veya `-1` (ya da diğer geçersiz değerler) değerinin “bulunamadı” anlamına gelebileceği özel
> aramalar gibi işlemlerden sonra `isIndexFound` kullanın. `true` döndürdüğünde, değer bir sayıdır ve dizi/dize indeksi
> olarak kullanmak güvenlidir.

### Avantajlar

- Negatif olmayan bir tamsayıyı kontrol ederek bir indeksin bulunup bulunmadığını tespit etmek için basit bir tür
  koruyucu sağlar.
- Yalnızca geçerli indeks benzeri değerler (tamsayılar `>= 0`) için `true` döndürür; negatifleri, tamsayı olmayanları ve
  sayı olmayanları reddeder.
- `-1` değerini “bulunamadı” için döndüren API'lerle çalışırken birer kayma (off-by-one) ve sentinel-değer hatalarından
  kaçınmaya yardımcı olur.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isIndexFound(value)`

Parametreler:

- `value`: Negatif olmayan bir tamsayı olup olmadığını kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx burada bir sayıdır ve >= 0'dır
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// indexOf ile tipik kullanım
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isIndexFound(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Dosya 31 January 2026 at 00:48:17 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>