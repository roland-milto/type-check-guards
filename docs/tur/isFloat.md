# isFloat

## Açıklama

`isFloat`, verilen `value` değerinin sonlu bir kayan noktalı sayı (tamsayı olmayan bir `number`) olup olmadığını
belirler.

### Kullanım durumu

Kesirli değerlerin gerekli olduğu (örn. fiyatlar, ölçümler, oranlar) kullanıcı tarafından sağlanan sayısal girdiyi
doğrulayın ve tamsayıları, `NaN` değerini ve sonsuzlukları reddedin.

> **TypeScript kullanıcıları için not:**
>
> Yalnızca sonlu, tamsayı olmayan sayısal girdileri kabul etmeniz gerektiğinde `isFloat` kullanın; tamsayıları ve sonlu
> olmayan sayıları reddeder.

### Avantajlar

- Yalnızca sonlu, tamsayı olmayan sayılar için `true` döndürür (tamsayıları, `NaN`, `Infinity` ve `-Infinity`
  değerlerini hariç tutar).
- Herhangi bir girdi türüyle (`unknown`) çalışır ve `typeof value === "number"` kontrolü yaparak türü güvenli biçimde
  daraltır.
- Öngörülebilir davranış için yerleşik sayısal korumaları (`Number.isInteger`, `Number.isFinite`) kullanır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isFloat(value)`

Parametreler:

- `value`: Kayan noktalı sayı olup olmadığını kontrol etmek için denetlenecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // değer çalışma zamanında bir sayıdır; sonludur ve bir tamsayı değildir
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isFloat(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Dosya 30 January 2026 at 16:10:12 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>