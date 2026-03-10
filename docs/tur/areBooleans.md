# areBooleans

## Açıklama

`areBooleans`, verilen boş olmayan bir dizinin yalnızca boolean değerler içerip içermediğini kontrol eder; içeriyorsa
`true`, aksi halde `false` döndürür.

### Kullanım durumu

Kullanıcı tarafından sağlanan veya harici verileri (örn. JSON yükleri, sorgu parametreleri, yapılandırma dizileri)
doğrulayarak, boş olmayan bir listenin yalnızca boolean değerler içerdiğinden emin olun; ardından boolean mantığı
uygulayın veya `boolean[]` bekleyen API'lere iletin.

> **TypeScript kullanıcıları için not:**
>
> `unknown[]` değerini `boolean[]` olarak ele almadan önce doğrulamak için `areBooleans` kullanın; boş diziler için
`false` döndürür, bu nedenle boş bir listenin izin verilmesi gerekiyorsa bu durumu açıkça ele alın.

### Avantajlar

- Yalnızca her öğe bir boolean olduğunda ve girdi boş olmayan bir dizi olduğunda `true` döndürür.
- Boş dizileri reddederek ( `false` döndürür) yanlış pozitifleri önler.
- Yalnızca boolean işlemlerinden önce çalışma zamanında bir koruma (guard) olarak iyi çalışır (örn. `every`, `some`,
  mantıksal indirgemeler).

## Kullanım

### Sözdizimi

Fonksiyon:

- `areBooleans(array)`

Parametreler:

- `array`: Boolean öğeler açısından kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areBooleans(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Dosya 30 January 2026 at 14:42:52 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>