# areNullOrUndefined

## وەسف

پشکنین دەکات کە ئایا هەموو ئەندامەکان لە ئارایەی دراوەدا `null` یان `undefined` ن.

### دۆخی بەکارهێنان

دڵنیابوون لەوەی لیستێک لە خانەی هەڵبژاردەیی هیچ بەهای ڕاستەقینەی تێدا نییە (تەنها `null`/`undefined`) پێش ئەوەی بڕیار
بدەیت پرۆسەکردن پشتگوێ بخەیت یان دۆخی «هیچ بەهایەک پێشکەش نەکراوە» پیشان بدەیت.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> کاتێک پێویستت بەوەیە دڵنیابیت کە ئارایەکە تەنها بەها ونەکان (`null`/`undefined`) لەخۆدەگرێت، `areNullOrUndefined`
> بەکاربهێنە. تێبینی بکە کە بۆ ئارایەی بەتاڵ `false` دەگەڕێنێتەوە.

### سوودەکان

- تەنها ئەو کاتە `true` دەگەڕێنێتەوە کە هەموو ئەندامەکان `null` یان `undefined` بن.
- بۆ ئارایە بەتاڵەکان `false` دەگەڕێنێتەوە، یارمەتیدەدات جیاوازی نێوان «هیچ داتا نییە» و «هەموو بەهاکان ونن» دەربکەیت.
- لەگەڵ `unknown[]` کاردەکات، بۆیە پێش تەنککردنەوەی جۆرەکان بە سەلامەتی دەتوانرێت بەکاربهێنرێت.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `areNullOrUndefined(array)`

پارامەتەرەکان:

- `array`: ئەو ئارایەیە کە دەبێت پشکنینی بکرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
//‎‎ allMissing === ڕاست

const containsValue = areNullOrUndefined([null, "value", undefined]);
//‎‎ containsValue === هەڵە

const empty = areNullOrUndefined([]);
//‎‎ empty === هەڵە
```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.areNullOrUndefined(array)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [areNullOrUndefined](‎../_analysis/areNullOrUndefined.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 31 January 2026 at 00:29:23 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>