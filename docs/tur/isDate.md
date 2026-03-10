# isDate

## Açıklama

`isDate`, sağlanan bir değerin `Date` olup olmadığını belirler; `Date` örnekleri için `true`, aksi halde `false`
döndürür.

### Kullanım durumu

Biçimlendirme, karşılaştırmalar veya `toISOString()` çağırma gibi `Date` işlemlerini gerçekleştirmeden önce bilinmeyen
değerleri (ör. istek verileri, yapılandırma değerleri veya ayrıştırılmış JSON) doğrulayın ve daraltın.

> **TypeScript kullanıcıları için not:**
>
> `unknown` değerini çalışma zamanında `Date` olarak daraltmak için `isDate` kullanın; yalnızca gerçek `Date` örnekleri
> için `true` döndürür (tarih dizgeleri için değil).

### Avantajlar

- Bir değerin `Date` olup olmadığını doğrulamak için basit bir çalışma zamanı koruması sağlar.
- Yalnızca `Date` örneklerinin doğrulamadan geçmesini sağlayarak tür hatalarını önlemeye yardımcı olur.
- Tarihe özgü yöntemleri kullanmadan önce bilinmeyen girdileri (ör. API yükleri) doğrulamak için kullanışlıdır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isDate(value)`

Parametreler:

- `value`: `Date` türü açısından kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input burada bir Date'tir
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isDate(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isDate](../_analysis/isDate.md)

<br>

---

<small>Dosya 31 January 2026 at 15:48:09 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>