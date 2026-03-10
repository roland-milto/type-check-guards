# isError

## Açıklama

Verilen bir `value` değerinin `Error` örneği olup olmadığını kontrol eder.

### Kullanım durumu

Bir `unknown` değer aldığınızda (örneğin bir `catch` bloğundan, bir geri çağırımdan veya harici bir kütüphaneden) ve
`message`, `name` veya `stack` okumadan önce bunun güvenli bir şekilde bir `Error` olup olmadığını belirlemeniz
gerektiğinde `isError` kullanın.

> **TypeScript kullanıcıları için not:**
>
> `unknown` değerleri (ör. `catch` içinden gelen) bir `Error` olarak ele almadan önce korumak için `isError` kullanın.

### Avantajlar

- Bir değerin bir `Error` örneği olup olmadığını kontrol etmek için basit bir çalışma zamanı denetimi sağlar.
- `message` veya `stack` gibi `Error` özelliklerine erişmeden önce bilinmeyen girdileri daraltmaya yardımcı olur.
- `catch`, harici API'ler veya türü belirtilmemiş kaynaklardan gelen değerleri işlerken çalışma zamanı istisnaları
  riskini azaltır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isError(value)`

Parametreler:

- `value`: `Error` türüne karşı kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isError(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isError](../_analysis/isError.md)

<br>

---

<small>Dosya 6 February 2026 at 12:47:27 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>