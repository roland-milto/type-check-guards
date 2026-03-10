# isStream

## وەسف

`isStream` پشکنین دەکات کە ئایا بەهایەکی دیاریکراو شتێکی ستریمە (هاوشێوەی ستریمی Node.js، `ReadableStream`، یان
`WritableStream`).

### دۆخی بەکارهێنان

دڵنیابوون لە هاتووچۆی داتاکان کە دەکرێت یان شتە ئاسایی بن یان ستریم (وەک بارکردنی فایل، bodyی HTTP، یان پایپڵاینی
پرۆسەکردن) و دابەشکردنی لۆجیک بە پێی ئەوەی بەهاکە ستریمە یان نا.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isStream` بەکاربهێنە بۆ سنووردارکردنی `unknown` پێش بانگکردنی مێتۆدەکانی ستریم؛ شتە هاوشێوەی ستریمی Node.js
> دەناسێتەوە (لە ڕێگەی `pipe`/`on`) و Web Streams (`ReadableStream`/`WritableStream`) کاتێک ئەو گلوباڵانە هەبوون.

### سوودەکان

- بە شێوەیەکی پارێزراو شتە هاوشێوەی ستریمە باوەکانی Node.js دەدۆزێتەوە بە پشکنینی فەنکشنی `pipe` و `on`.
- هەروەها پشتگیری Web Streams دەکات بە ناسینەوەی `ReadableStream` و `WritableStream` کاتێک بەردەست بن.
- ئەنجامێکی سادەی boolean دەگەڕێنێتەوە (`true`/`false`) کە گونجاوە بۆ گارد و لۆجیکی دابەشبوون.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isStream(value)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی دەبێت پشکنرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  //‎‎ nodeStream وەک ستریمە؛ دەتوانیت بە سەلامەتی API ـە باوەکانی ستریم بەکاربهێنیت
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isStream(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isStream](‎../_analysis/isStream.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 23:39:18 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>