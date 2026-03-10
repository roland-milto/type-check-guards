# areValidDates

## Açıklama

Bir dizinin boş olmadığını ve tamamen geçerli `Date` nesnelerinden oluştuğunu belirler.

### Kullanım durumu

Tarih tabanlı işlemler (sıralama, aralık kontrolleri, biçimlendirme) yapmadan önce kullanıcı tarafından sağlanan veya
API tarafından sağlanan dizileri doğrulamak için `areValidDates` kullanın; böylece tüm girdilerin gerçek, geçerli `Date`
nesneleri olduğundan ve listenin boş olmadığından emin olursunuz.

> **TypeScript kullanıcıları için not:**
>
> `areValidDates` boş bir dizi için `false` döndürür; bunu bir doğrulama adımı olarak kullanmadan önce dizinin boş
> olmamasının amaçlandığından emin olun.

### Avantajlar

- Yalnızca her öğe geçerli bir `Date` örneği olduğunda `true` döndürür (`new Date('invalid')` gibi geçersiz tarihler
  yoktur).
- Boş girdiyi `false` döndürerek reddeder; böylece yalnızca anlamlı, boş olmayan tarih listelerini kabul ettiğinizden
  emin olursunuz.
- Diğer doğrulamalarla kolayca birleştirilebilen, basit bir boolean guard tarzı kontrol sağlar.

## Kullanım

### Sözdizimi

Fonksiyon:

- `areValidDates(array)`

Parametreler:

- `array`: Kontrol edilecek dizi; potansiyel olarak `Date` nesneleri içerebilir.

### Yerel fonksiyon içe aktarma

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // doğru
console.log(areValidDates(b)); // yanlış
console.log(areValidDates(c)); // yanlış
console.log(areValidDates(d)); // yanlış

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.areValidDates(array)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Dosya 30 January 2026 at 14:34:19 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>