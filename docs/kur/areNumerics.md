# areNumerics

## Danasîn

`areNumerics` پشکنین دەکات کە ئایا بەهایەک ئەڕەیەکی بەتاڵ نەبێت کە هەموو ئەندامەکانی ژمارەیی بن.

### Bikaranîn

`areNumerics` بەکاربهێنە بۆ پشتڕاستکردنەوەی داتای دەرەکی یان بێ-جۆر (وەک payload ـی JSON، پارامەتەرەکانی query، هاتووچۆی
فۆرم) پێش ژماردنی کۆ، ناوەند، یان هەر کارێکی ترە ژمارەیی، بۆ دڵنیابوون لەوەی هاتووچۆکە ئەڕەیەکی ژمارەیی و بەتاڵ نەبێت و
ئەگەر نا، `false` دەگەڕێنێتەوە.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areNumerics` بەکاربهێنە وەک گارد بۆ هاتووچۆی `unknown` پێش ئەوەی وەک ئەڕەیەکی ژمارەیی مامەڵەی لەگەڵ بکەیت؛ بۆ
> نائەڕەکان و ئەڕە بەتاڵەکان `false` دەگەڕێنێتەوە.

### Avantaj

- `true` تەنها ئەو کاتە دەگەڕێنێتەوە کە هاتووچۆکە ئەڕەیەکی بەتاڵ نەبێت و هەموو ئەندامەکان ژمارەیی بن.
- بەخێرایی دەوەستێت: هەر کاتێک ئەندامێکی نژمارەیی بدۆزێتەوە، وەستان دەکات و `false` دەگەڕێنێتەوە.
- یارمەتیدەدات داتای نەزانراو بە پارێزراوی پشتڕاست بکرێتەوە پێش ئەنجامدانی کارە ژمارەییەکان.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areNumerics(array)`

Parametreyên:

- `array`: ئەو ئەڕەیەی بۆ پشکنین کە ئەندامە ژمارەییەکان تێدایە.

### Importa fonksiyona herêmî

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // rast
console.log(areNumerics(b)); // rast
console.log(areNumerics(c)); // çewt
console.log(areNumerics(d)); // çewt
console.log(areNumerics(e)); // çewt

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areNumerics(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areNumerics](‎../_analysis/areNumerics.md‎)

<br>

---

<small>Ev pel di 6 February 2026 at 16:06:06 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>