# areNumerics

## وەسف

`areNumerics` پشکنین دەکات کە ئایا بەهایەک ئەڕەیەکی بەتاڵ نەبێت کە هەموو توخمەکانی ژمارەیی بن.

### دۆخی بەکارهێنان

`areNumerics` بەکاربهێنە بۆ پشتڕاستکردنەوەی داتای دەرەکی یان بێ-جۆر (وەک payloadی JSON، پارامەتەرەکانی query، هاتووچۆی
فۆرم) پێش ژماردنەوەی کۆ، ناوەند، یان هەر کارێکی ترە ژمارەیی، بۆ دڵنیابوون لەوەی هاتووچۆکە ئەڕەیەکی ژمارەیی و بەتاڵ
نەبێت، و ئەگەر وا نەبوو `false` دەگەڕێنێتەوە.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `areNumerics` بەکاربهێنە وەک گارد بۆ هاتووچۆی `unknown` پێش ئەوەی وەک ئەڕەیەکی ژمارەیی مامەڵەی لەگەڵ بکەیت؛ بۆ
> نا-ئەڕەکان و ئەڕە بەتاڵەکان `false` دەگەڕێنێتەوە.

### سوودەکان

- `true` دەگەڕێنێتەوە تەنها کاتێک هاتووچۆکە ئەڕەیەکی بەتاڵ نەبێت و هەموو توخمەکان ژمارەیی بن.
- بەخێرایی دەوەستێت: هەر کاتێک توخمێکی نژمارەیی بدۆزێتەوە، وەستان دەکات و `false` دەگەڕێنێتەوە.
- یارمەتیدەدات داتای نەناسراو بە شێوەیەکی سەلامەت پشتڕاست بکرێتەوە پێش ئەنجامدانی کارە ژمارەییەکان.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `areNumerics(array)`

پارامەتەرەکان:

- `array`: ئەو ئەڕەیەی دەسەلمێنرێت کە توخمەکانی ژمارەیی بن.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); //‎ ڕاست
console.log(areNumerics(b)); //‎ ڕاست
console.log(areNumerics(c)); //‎ هەڵە
console.log(areNumerics(d)); //‎ هەڵە
console.log(areNumerics(e)); //‎ هەڵە

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); //‎ ٦٠
console.log(sumUnknown([10, "20", 30])); //‎ هیچ

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.areNumerics(array)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [areNumerics](‎../_analysis/areNumerics.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 6 February 2026 at 16:04:31 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>