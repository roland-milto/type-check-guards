# areOctals

## Açıklama

`areOctals`, sağlanan değerin geçerli sekizlik dizelerden oluşan boş olmayan bir dizi olup olmadığını belirler.

### Kullanım durumu

`areOctals` işlevini; kullanıcı girdisini, yapılandırma değerlerini veya sekizlik sabitler (örn. `0o755` gibi dosya izin
modları) içermesi gereken API yüklerini doğrularken ve boş dizileri ya da geçersiz herhangi bir girdiyi `false`
döndürerek reddetmek istediğinizde kullanın.

> **TypeScript kullanıcıları için not:**
>
> `areOctals` kullanarak, dönüştürmeden önce (örn. `Number(...)` veya özel ayrıştırma ile) her girdisi geçerli bir
> sekizlik dize olan boş olmayan bir `unknown[]` elde ettiğinizden emin olun.

### Avantajlar

- Bir değerin, her elemanı sekizlik (octal) bir dize olan boş olmayan bir dizi olduğunu doğrular; yalnızca tüm öğeler
  geçtiğinde `true` döndürür.
- Hızlı başarısız olur: sekizlik olmayan bir öğe bulunur bulunmaz `false` döndürür.
- Çalışma zamanı hatalarını ve tutarsız girdi işlemeyi önlemek için sekizlik dizeleri ayrıştırmadan veya dönüştürmeden
  önce bir koruma (guard) olarak kullanışlıdır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areOctals(array)`

Parametreler:

- `array`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value, sekizlik dizgelerden oluşan boş olmayan bir dizidir
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areOctals(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Dosya 30 January 2026 at 14:58:45 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>