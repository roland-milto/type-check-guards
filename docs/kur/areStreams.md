# areStreams

## Danasîn

`areStreams` دیاری دەکات کە ئایا بەهایەک ئەڕەیەکی پڕە کە هەر توخمێکی `Stream` ـە.

### Bikaranîn

پشتڕاستکردنەوەی کۆمەڵەکان کە بەکارهێنەر دایانناوە یان بە شێوەی دینامیکی دروستکراون (وەک چەند ستریمی خوێندنەوەی فایل) پێش
ئەوەی پەیوەندییان پێ بکەیت (piping)، resume بکەیت، یان بە گرووپێک وەک یەکەوە کار لەسەریان بکەیت.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areStreams` بەکاربهێنە بۆ پشتڕاستکردنەوەی هاتووچۆی نەناسراو پێش ئەوەی وەک `Stream[]` مامەڵەی لەگەڵ بکەیت؛ تەنها ئەو
> کاتە `true` دەگەڕێنێتەوە کە بەهاکە ئەڕەیەکی نا-بەتاڵ بێت و هەر توخمێکی `Stream` بێت.

### Avantaj

- دڵنیایی دەکات کە هاتووچۆکە ئەڕەیەکی پڕە کە هەر توخمێکی `Stream` ـە.
- پارێزەرێکی سادەی `true`/`false` دابین دەکات بۆ پشتڕاستکردنەوەی کۆمەڵە ستریمەکان پێش پرۆسەکردن.
- زوو دەوەستێت: هەر کاتێک توخمێکی نا-`Stream` بدۆزرێتەوە، دەگەڕێتەوە `false`.
- یارمەتی دەدات هەڵەکانی کاتی جێبەجێکردن (runtime) کەم بکرێنەوە کاتێک کۆد وا دەزانێت هەموو دانەکان نموونەی `Stream` ـن.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areStreams(array)`

Parametreyên:

- `array`: ئەو ئەڕەیەی دەبێت بپشکنرێت بۆ ئەوەی `Stream` ـەکان تێدایەن.

### Importa fonksiyona herêmî

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  //‎ input Stream nesnelerinden pêk hatîye dagirtin û tije ye
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areStreams(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areStreams](‎../_analysis/areStreams.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 23:34:37 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>