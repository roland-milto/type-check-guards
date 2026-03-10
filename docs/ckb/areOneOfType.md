# areOneOfType

## وەسف

`areOneOfType` پشکنین دەکات کە ئایا هەموو توخمەکانی ناو array ـێکی نابەتاڵ لە یەکێک لە جۆرە runtime ـی دیاریکراوەکانن.

### دۆخی بەکارهێنان

پشتڕاستکردنەوەی داتای هاتوو (وەک JSON ـی parse کراو) کە تێیدا خانەیەک دەبێت array ـێکی نابەتاڵ بێت و توخمەکانی سنووردار
بن بە کۆمەڵێکی ناسراو لە جۆرە بنەڕەتییەکان؛ `false` بگەڕێنەوە کاتێک array ـەکە بەتاڵە یان هەر جۆرێکی ڕێگەپێنەدراو
تێدایە.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> ئەم فەنکشنە boolean دەگەڕێنێتەوە و لە کاتی compile ـدا جۆری توخمەکانی array باریک ناکاتەوە؛ وەک هەنگاوێکی
> پشتڕاستکردنەوەی runtime بەکاری بهێنە پێش ئەوەی پرۆسەی زیاتر بکەیت.

### سوودەکان

- دڵنیایی دەکات کە هەر توخمێک لە ناو array ـەکەدا لەگەڵ لانیکەم یەک جۆری runtime ـی ڕێگەپێدراو دەگونجێت، و تەنها ئەو
  کاتە `true` دەگەڕێنێتەوە کە تەواوی array ـەکە تێپەڕبوو.
- وەرگرتنی هەڵەکان زوو ڕەت دەکاتەوە: `false` دەگەڕێنێتەوە کاتێک `array` یان `types` بەتاڵە یان filled array نین.
- بەسوودە بۆ پشتڕاستکردنەوەی کۆمەڵە تێکەڵە-جۆر (وەک ژمارە و دەق) بە یەک بانگکردنەوەی `areOneOfType`.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `areOneOfType(array, types)`

پارامەتەرەکان:

- `array`: array ـێک لە توخمەکان بۆ پشتڕاستکردنەوە لەگەڵ جۆرە پێشکەشکراوەکان.
- `types`: array ـێک لە string ـەکان کە جۆرەکانی داتا پیشان دەدەن بۆ ئەوەی پشکنین بکرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.areOneOfType(array, types)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [areOneOfType](‎../_analysis/areOneOfType.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 31 January 2026 at 23:36:29 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>