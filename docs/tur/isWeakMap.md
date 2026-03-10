# isWeakMap

## Açıklama

Verilen bir `value` değerinin bir `WeakMap` örneği olup olmadığını belirler.

### Kullanım durumu

Bir `unknown` değeri (örn. herkese açık bir API'den, eklenti sisteminden veya dinamik yapılandırmadan) kabul ettiğinizde
ve `WeakMap`e özgü davranışı kullanmadan önce bunun bir `WeakMap` olduğunu doğrulamanız gerektiğinde `isWeakMap`
kullanın.

> **TypeScript kullanıcıları için not:**
>
> `isWeakMap`, `instanceof WeakMap` kontrolü yapar; yalnızca gerçek `WeakMap` örnekleri için `true` döndüren bir çalışma
> zamanı korumasıdır.

### Avantajlar

- Bir değerin `WeakMap` olup olmadığını anlamak için basit bir çalışma zamanı kontrolü sağlar.
- `WeakMap` gerektiren API'lerin yanlış kullanılmasını, hata fırlatmak yerine `true`/`false` döndürerek önlemeye
  yardımcı olur.
- `unknown` girdilerle çalışır; bu da modül sınırlarında (örn. ayrıştırma, harici veriler veya türsüz kod) kullanışlı
  olmasını sağlar.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isWeakMap(value)`

Parametreler:

- `value`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a çalışma zamanında bir WeakMap'tir
}

console.log(isWeakMap(a)); // doğru
console.log(isWeakMap(b)); // yanlış
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isWeakMap(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Dosya 30 January 2026 at 13:27:22 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>