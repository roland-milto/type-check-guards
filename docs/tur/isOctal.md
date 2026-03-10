# isOctal

## Açıklama

Bir değerin geçerli bir sekizlik (octal) literal dizesi olup olmadığını belirler (örn. `0o755`).

### Kullanım durumu

Ayrıştırmadan veya dönüştürmeden önce, sekizlik (octal) literal dizesi olarak ifade edilmesi gereken kullanıcı girdisini
ya da yapılandırma değerlerini (örneğin `0o644` gibi dosya izin modları) doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> `isOctal` bir tür korumasıdır (`value is string`). `true` sonucundan sonra TypeScript, kontrol edilen değişkeni
`string` türüne daraltır.

### Avantajlar

- Sıkı bir tür koruması sağlar: yalnızca girdi sekizlik (octal) literal biçimiyle eşleşen bir dize olduğunda `true`
  döndürür.
- Boş dizeleri ve başında/sonunda boşluk (ASCII kontrol/boşluk) bulunan dizeleri reddeder; böylece yanlışlıkla
  eşleşmeleri azaltır.
- İsteğe bağlı işareti destekler ve `0o`/`0O` öneki için büyük/küçük harfe duyarsızdır.
- Dize olmayan girdilerde hata fırlatmak yerine `false` döndürerek esnek davranır.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isOctal(value)`

Parametreler:

- `value`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // doğru
console.log(isOctal(b)); // doğru
console.log(isOctal(c)); // yanlış
console.log(isOctal(d)); // yanlış

if (isOctal(a)) {
  // a burada string
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isOctal(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Dosya 30 January 2026 at 15:43:49 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>