# isStream

## Açıklama

`isStream`, verilen bir değerin bir akış nesnesi (Node.js akış-benzeri, `ReadableStream` veya `WritableStream`) olup
olmadığını kontrol eder.

### Kullanım durumu

Düz nesneler veya akışlar olabilecek girdileri (ör. dosya yüklemeleri, HTTP gövdeleri ya da işleme hatları) doğrulayın
ve değerin bir akış olup olmamasına göre mantığı dallandırın.

> **TypeScript kullanıcıları için not:**
>
> Akış yöntemlerini çağırmadan önce `unknown` türünü daraltmak için `isStream` kullanın; Node.js akış-benzeri
> nesneleri (`pipe`/`on` üzerinden) ve bu global’ler mevcut olduğunda Web Streams’i (`ReadableStream`/`WritableStream`)
> tanır.

### Avantajlar

- `pipe` ve `on` işlevlerini kontrol ederek yaygın Node.js akış-benzeri nesneleri güvenle tespit eder.
- Mevcut olduğunda `ReadableStream` ve `WritableStream` tanıyarak Web Streams’i de destekler.
- Koruyucular ve dallanma mantığı için uygun, basit bir boolean sonuç (`true`/`false`) döndürür.

## Kullanım

### Sözdizimi

Fonksiyon:

- `isStream(value)`

Parametreler:

- `value`: Kontrol edilecek değer.

### Yerel fonksiyon içe aktarma

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream akış benzeri; yaygın akış API'lerini güvenle kullanabilirsiniz
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Global nesne içe aktarma

Fonksiyonları global nesne metotları olarak içe aktarmak için şunu kullanın:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ardından aşağıdaki metot global olarak kullanılabilir olacaktır:

- `Type.isStream(value)`

## Fonksiyon analizi

Burada, fonksiyonlara farklı parametreler girildiğinde oluşan çıktının tablo halinde analizi
belgelenmiştir: [isStream](../_analysis/isStream.md)

<br>

---

<small>Dosya 30 January 2026 at 23:43:22 (UTC) tarihinde *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** kullanılarak *
*[Roland Milto](https://roland-milto.de/)** tarafından oluşturuldu.</small>