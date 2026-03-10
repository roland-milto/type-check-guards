# isOneOfType

## Açıklama

`isOneOfType`, verilen bir `value` değerinin sağlanan tür dizgelerinden en az biriyle eşleşip eşleşmediğini belirler;
herhangi bir eşleşme bulunursa `true`, aksi halde `false` döndürür.

### Kullanım durumu

Daha ileri mantığa geçmeden önce birden fazla kabul edilebilir çalışma zamanı türüne (ör. `number` veya `string`) izin
vererek gevşek tipli veya harici verileri (örn. ayrıştırılmış JSON, sorgu parametreleri) doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> Bir değerin çalışma zamanında birkaç izin verilen türden herhangi biriyle eşleştiğini kontrol etmek istediğinizde
`isOneOfType` kullanın; en az bir tür eşleşirse `true`, aksi halde `false` döndürür.

### Avantajlar

- Tek bir çağrıda bir değeri birden fazla izin verilen türe karşı kontrol eder ve ilk eşleşmede `true` döndürür.
- `unknown` girdilerle çalışır; bu da onu çalışma zamanı sınırlarında (örn. harici veriler, kullanıcı girdisi)
  kullanışlı kılar.
- Koşullu mantık ve erken dönüşlerle iyi bir şekilde birleştirilebilen basit bir boolean sonuç (`true`/`false`) sağlar.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isOneOfType(value, types)`

Parametreler:

- `value`: Belirtilen türlere karşı kontrol edilecek değer.
- `types`: Değerin olası türlerini temsil eden tür dizgelerinden oluşan bir dizi.

### Yerel fonksiyon içe aktarma

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input çalışma zamanında bir nesnedir
}

console.log(isOneOfType(3, ["number", "string"])); // doğru
console.log(isOneOfType("hello", ["number", "boolean"])); // yanlış

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isOneOfType(value, types)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Dosya 6 February 2026 at 13:54:46 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>