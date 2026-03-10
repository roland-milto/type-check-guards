# isRegEx

## Açıklama

Sağlanan bir değerin `RegExp` örneği olup olmadığını belirler.

### Kullanım durumu

Kullanıcı tarafından sağlanan veya dinamik değerleri (ör. yapılandırma, API payload'ları, eklenti girdileri) bir düzenli
ifade olarak ele almadan önce doğrulayın.

> **TypeScript kullanıcıları için not:**
>
> `unknown` (veya union) değerlerini RegExp'e özgü özellikleri ya da yöntemleri kullanmadan önce daraltmak için
`isRegEx` kullanın; yalnızca `RegExp` örneği olan değerler için `true` döndürür.

### Avantajlar

- Bir değerin `RegExp` olup olmadığını kontrol etmek için basit bir çalışma zamanı tür koruması sağlar.
- Kod bir düzenli ifade beklediğinde hataları önlemeye yardımcı olur (ör. `test`, `exec` çağırmadan veya `source`
  okumadan önce).
- `/regex/` değişmezleriyle ve `new RegExp(...)` ile oluşturulan örneklerle çalışır.
- Regex olmayan girdiler için hata fırlatmadan net bir boolean sonuç (`true`/`false`) döndürür.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isRegEx(value)`

Parametreler:

- `value`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input burada bir RegExp'tir
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isRegEx(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Dosya 30 January 2026 at 23:31:23 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>