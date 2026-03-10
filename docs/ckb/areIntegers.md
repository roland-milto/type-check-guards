# areIntegers

## وەسف

`areIntegers` دیاری دەکات ئایا هەموو ئەندامەکانی ئارەیەکی دیاریکراو ژمارەی تەواون، `true` دەگەڕێنێتەوە ئەگەر وابن و
`false` ئەگەر نا.

### دۆخی بەکارهێنان

`areIntegers` بەکاربهێنە بۆ پشتڕاستکردنەوەی داتای پێشکەشکراو لەلایەن بەکارهێنەر یان داتای دەرەکی (وەک: پارامەتەرەکانی
query، payloadی JSON، ڕیزەکانی CSV) کاتێک منطقەکەت پێویستی بە لیستێکی پڕ لە ژمارەی تەواو هەیە وەک ID، ژمێرەر، offsetی
پەڕەکردن (pagination)، یان ئیندێکسەکانی ئارە.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `areIntegers` بەکاربهێنە وەک پارێزەری کاتی-ڕاست (runtime guard) بۆ هاتووچۆی `unknown[]` پێش ئەوەی وەک `number[]`
> مامەڵەی لەگەڵ بکەیت کە تەنها ژمارەی تەواوی تێدایە. ئەگەر `false` بگەڕێنێتەوە، هاتووچۆکە یان ئارەیەکی پڕ نییە یان لانی
> کەم یەک نرخی نەتەواوی تێدایە.

### سوودەکان

- `true` دەگەڕێنێتەوە تەنها کاتێک هەموو ئەندامەکان ژمارەی تەواو بن؛ ئەگەر نا، `false` دەگەڕێنێتەوە.
- یارمەتیدەدات بۆ پشتڕاستکردنەوەی هاتووچۆی نەزانراو پێش ئەنجامدانی کارەکان کە تەنها بە ژمارەی تەواو دەکرێن (وەک:
  ئیندێکسکردن، ژماردن، ID).
- زوو دەشکێت: وەستێ دەکات لە پشکنینەوە هەر کاتێک یەک ئەندامی نەتەواو بدۆزێتەوە.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `areIntegers(array)`

پارامەتەرەکان:

- `array`: ئەو ئارەیەی دەپشکنرێت بۆ ئەندامە ژمارەی تەواوەکان.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); //‎ ڕاست
console.log(areIntegers(b)); //‎ ڕاست
console.log(areIntegers(c)); //‎ هەڵە

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.areIntegers(array)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [areIntegers](‎../_analysis/areIntegers.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 31 January 2026 at 00:57:59 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>