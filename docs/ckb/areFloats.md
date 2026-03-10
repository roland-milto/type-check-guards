# areFloats

## وەسف

`areFloats` پشکنین دەکات کە ئارایەکی دیاریکراو پڕە و هەموو ئەندامەکانیشی فڵۆتن.

### دۆخی بەکارهێنان

کاتێک `unknown[]` وەردەگریت (وەک لە JSON، پارامەتەرەکانی پرسیار، یان API ـی دەرەکی) و پێویستتە دڵنیابیت کە ئارایەکە پڕە
و هەر دانەیەک فڵۆتە پێش ئەوەی لۆجیکی ژمارەیی جێبەجێ بکەیت وەک ناوەندکردن، ئینتەرپۆلەیشن، یان حسابکردنە ئامارییەکان.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `areFloats` بەکاربهێنە وەک گارد بۆ `unknown[]` پێش ئەوەی وەک `number[]` بەکاربهێنیت کە تەنها فڵۆتەکان تێدایە؛ بۆ
> ئارایە بەتاڵەکان و هەر ئەندامێکی نافڵۆت `false` دەگەڕێنێتەوە.

### سوودەکان

- تەنها ئەو کاتە `true` دەگەڕێنێتەوە کە هاتووچۆکە ئارایەکی بەتاڵ نەبێت و هەموو ئەندامەکانیشی فڵۆت بن.
- زۆر زوو دەوەستێت: هەر کاتێک ئەندامێکی نافڵۆت بدۆزرێتەوە دەستبەجێ `false` دەگەڕێنێتەوە.
- یارمەتیدەدات بۆ پشتڕاستکردنەوەی هاتووچۆی نەناسراو پێش ئەنجامدانی حسابکردنە تایبەت بە فڵۆت.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `areFloats(array)`

پارامەتەرەکان:

- `array`: ئەو ئارایەیەی دەستپێدەکات بۆ پشکنینی ئەندامە فڵۆتەکان.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); //‎ ڕاست
console.log(areFloats(b)); //‎ هەڵە
console.log(areFloats(c)); //‎ هەڵە

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); //‎ 1.75
console.log(sumFloats([1, 2])); //‎ null

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.areFloats(array)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [areFloats](‎../_analysis/areFloats.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 15:56:48 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>