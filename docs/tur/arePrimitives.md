# arePrimitives

## Açıklama

`arePrimitives`, sağlanan boş olmayan bir dizideki tüm öğelerin ilkel türler olup olmadığını değerlendirir.

### Kullanım durumu

Gelen verilerin (örn. sorgu parametreleri, CSV satır değerleri veya bir ID/etiket listesi) serileştirmeden,
hash’lemeden, loglamadan ya da nesne almaması gereken API’lere iletmeden önce yalnızca ilkel değerler içerdiğini
doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> Daha ileri işlemden önce bir `unknown[]` dizisinin yalnızca ilkel değerler (string, number, bigint, boolean, symbol,
> undefined veya null) içerdiğinden emin olmanız gerektiğinde `arePrimitives` kullanın.

### Avantajlar

- Yalnızca her öğe ilkel bir değer olduğunda `true` döndürür; bu da onu “nesne/fonksiyon yok” dizileri için katı bir
  koruma yapar.
- Hızlı başarısız olur: ilkel olmayan bir öğe bulunur bulunmaz `false` döndürür.
- Dizi olmayanlar ve boş diziler için de `false` döndürür (dolu-dizi kontrolü üzerinden); böylece geçersiz girdinin
  yanlışlıkla kabul edilmesini önler.

## Kullanım

### Sözdizimi

Fonksiyon:

- `arePrimitives(array)`

Parametreler:

- `array`: İlkel türde öğeler içerip içermediği kontrol edilecek dizi.

### Yerel fonksiyon içe aktarma

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // doğru
const r2 = arePrimitives(b); // doğru
const r3 = arePrimitives(c); // yanlış
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.arePrimitives(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Dosya 31 January 2026 at 00:06:56 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>