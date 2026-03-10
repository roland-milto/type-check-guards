# areStreams

## وەسف

`areStreams` دیاری دەکات ئایا بەهایەک ئارایەکی پڕە کە هەر ئەندامێکی `Stream` ـە یان نا.

### دۆخی بەکارهێنان

پشتڕاستکردنەوەی کۆمەڵەکان کە لەلایەن بەکارهێنەرەوە دابین دەکرێن یان بە شێوەی دینامیکی دروست دەکرێن (وەک چەند ستریمی
خوێندنەوەی فایل) پێش ئەوەی پەیپ بکەیت، resume بکەیت، یان بە شێوەیەکی گرووپی کار لەسەریان بکەیت.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `areStreams` بەکاربهێنە بۆ پشتڕاستکردنەوەی هاتنەژوورێکی نەناسراو پێش ئەوەی وەک `Stream[]` مامەڵەی لەگەڵ بکەیت؛ تەنها
> ئەو کاتە `true` دەگەڕێنێتەوە کە بەهاکە ئارایەکی نا-بەتاڵ بێت و هەر ئەندامێکی `Stream` بێت.

### سوودەکان

- دڵنیایی دەکاتەوە کە هاتنەژوورەکە ئارایەکی پڕە کە هەر ئەندامێکی `Stream` ـە.
- پارێزەرێکی سادەی `true`/`false` دابین دەکات بۆ پشتڕاستکردنەوەی کۆمەڵە ستریمەکان پێش پرۆسەکردن.
- زوو دەوەستێت: هەر کاتێک ئەندامێکی نا-`Stream` بدۆزرێتەوە، دەگەڕێتەوە `false`.
- یارمەتیدەدات هەڵەکانی کاتی جێبەجێکردن کەم بکرێنەوە کاتێک کۆدەکە وا دادەنێت هەموو ئایتمەکان نموونەی `Stream` ـن.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `areStreams(array)`

پارامەتەرەکان:

- `array`: ئەو ئارایەیە کە دەبێت بپشکنرێت بۆ ئەوەی بزانرێت ئۆبجێکتەکانی Stream ـن.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  //‎‎ input ئەڕایەکەی پڕە لە ئۆبجێکتی Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.areStreams(array)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [areStreams](‎../_analysis/areStreams.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 23:33:22 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>