# isMap

## Açıklama

Verilen `value` değerinin bir `Map` olup olmadığını kontrol eder; öyleyse `true`, değilse `false` döndürür.

### Kullanım durumu

JSON ayrıştırma, harici API'ler veya kullanıcı girdisi gibi kaynaklardan `unknown` bir değer aldığınızda ve `Map`
işlemlerini gerçekleştirmeden önce bunun bir `Map` olduğundan emin olmanız gerektiğinde `isMap` kullanın.

> **TypeScript kullanıcıları için not:**
>
> `isMap`, değer bir `Map` olduğunda `true`, aksi halde `false` döndüren bir çalışma zamanı koruyucusudur; `Map`
> API'lerini çağırmadan önce `unknown` değerini daraltmak için kullanın.

### Avantajlar

- Bir değerin `Map` olup olmadığını hızlıca çalışma zamanında kontrol etmeyi sağlar.
- `get`, `set` ve `has` gibi `Map` yöntemlerini gerektiren kod yollarını koruyarak tür hatalarını önlemeye yardımcı
  olur.
- `unknown` girdileri işlerken hafif bir doğrulama adımı olarak iyi çalışır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isMap(value)`

Parametreler:

- `value`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isMap(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isMap](../_analysis/isMap.md)

<br>

---

<small>Dosya 31 January 2026 at 16:42:27 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>