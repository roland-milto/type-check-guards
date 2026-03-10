# areValidDates

## وەسف

دیاری دەکات کە ئایا ڕیزەیەک نابەتاڵە و تەواوی پێکهاتەکانی تەنها `Date` ـی دروستن.

### دۆخی بەکارهێنان

`areValidDates` بەکاربهێنە بۆ پشتڕاستکردنەوەی ڕیزەکانی بەروار کە لەلایەن بەکارهێنەر یان API دابین دەکرێن پێش ئەنجامدانی
کارەکانی پەیوەست بە بەروار (ڕیزکردن، پشکنینی مەودا، فۆرماتکردن)، بۆ دڵنیابوون لەوەی هەموو تێکەڵەکان `Date` ـی ڕاست و
دروستن و لیستەکەش بەتاڵ نییە.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `areValidDates` بۆ ڕیزەی بەتاڵ `false` دەگەڕێنێتەوە؛ دڵنیابە کە ڕیزەکە مەبەستە نابەتاڵ بێت پێش ئەوەی وەک هەنگاوێکی
> پشتڕاستکردنەوە پشتی پێ ببەستیت.

### سوودەکان

- تەنها ئەو کاتە `true` دەگەڕێنێتەوە کە هەموو ئەندامەکان نموونەیەکی دروستی `Date` بن (بێ بەرواری نادروست وەک
  `new Date('invalid')`).
- ڕیزەی بەتاڵ ڕەت دەکاتەوە بە گەڕاندنەوەی `false`، بەم شێوەیە دڵنیادەکات تەنها لیستی بەرواری واتادار و نابەتاڵ
  وەردەگریت.
- پشکنینێکی سادەی boolean بە شێوازی guard دابین دەکات کە ئاسانە لەگەڵ پشتڕاستکردنەوەکانی تر پێکەوە بکەیت.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `areValidDates(array)`

پارامەتەرەکان:

- `array`: ئەو ڕیزەیەی دەبێت پشکنرێت، کە دەکرێت `Date` ـەکان لەخۆ بگرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); //‎ ڕاست
console.log(areValidDates(b)); //‎ هەڵە
console.log(areValidDates(c)); //‎ هەڵە
console.log(areValidDates(d)); //‎ هەڵە

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.areValidDates(array)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [areValidDates](‎../_analysis/areValidDates.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 14:31:16 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>