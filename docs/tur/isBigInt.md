# isBigInt

## Açıklama

`isBigInt`, verilen bir değerin `bigint` türünde olup olmadığını kontrol eder; BigInt ilkel değerleri için `true`, aksi
halde `false` döndürür.

### Kullanım durumu

BigInt’e özgü hesaplamalar yapmadan veya değerleri yalnızca BigInt kabul eden alanlarda saklamadan önce, türü
belirtilmemiş kaynaklardan (örn. JSON ayrıştırma, kullanıcı girdisi, harici API’ler) gelen değerleri doğrulayın ve
daraltın.

> **TypeScript kullanıcıları için not:**
>
> BigInt işlenenleri gerektiren BigInt aritmetiğini (örn. `+`, `*`) yapmadan önce `unknown` değerini `bigint` olarak
> daraltmak için `isBigInt` kullanın.

### Avantajlar

- `bigint` ilkel türü için basit ve güvenilir bir çalışma zamanı kontrolü sağlar.
- Yalnızca BigInt’e özgü işlemleri yapmadan önce `unknown` değerlerini daraltmaya yardımcı olur.
- Yanlış pozitifleri önler: normal sayılar, dizgeler ve diğer türler `false` döndürür.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isBigInt(value)`

Parametreler:

- `value`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // doğru
console.log(isBigInt(10));  // yanlış
console.log(isBigInt("10")); // yanlış
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isBigInt(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Dosya 31 January 2026 at 23:33:38 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>