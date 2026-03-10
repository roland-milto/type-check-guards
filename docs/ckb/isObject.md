# isObject

## وەسف

دیاری دەکات ئایا `value` ـێکی دیاریکراو `object` ـە (بەدەر لە `null`).

### دۆخی بەکارهێنان

`isObject` بەکاربهێنە بۆ پشتڕاستکردنەوەی هاتووچۆی نەزانراو (وەک JSON ـی پارسکراو، وەڵامەکانی API، payload ـی ڕووداو) پێش
ئەوەی دەست بە تایبەتمەندییەکان بکەیت، بۆ دڵنیابوون لەوەی بەهاکە object ـە و `null` نییە.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isObject` پارێزەری کاتی جێبەجێکردنەوەیە کە boolean دەگەڕێنێتەوە؛ بۆ شێوەیەکی دیاریکراوی object باریک ناکات. کاتێک
> تایپینگێکی بەهێزترت پێویستە، لەگەڵ پشکنینە زیادەکان (وەک بوونی تایبەتمەندی) پێکەوە بەکاری بهێنە.

### سوودەکان

- تەنها بۆ ئەو بەهایانە `true` دەگەڕێنێتەوە کە `null` نین و `typeof` ـیان `"object"` ـە.
- ڕێگری دەکات لە هەڵەی باوەڕپێکراوی JavaScript کە لەوەدا `null` دەکرێت وەک object هەژمار بکرێت.
- بۆ object ـە سادەکان و نموونەکانی object ـی ناوخۆیی کار دەکات (وەک `Date`، `RegExp`).
- پشکنینێکی سادە و خێرا لە کاتی جێبەجێکردنەوە کە گونجاوە بۆ بەرنامەنووسی پارێزگاری (defensive programming) و
  پشتڕاستکردنەوەی هاتووچۆ (input validation).

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isObject(value)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی دەبێت پشکنرێت بۆ ئەوەی `object` بێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  //‎‎ input لە کاتی جێبەجێکردندا ئۆبجێکتێکی نا-نەڵە
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isObject(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isObject](‎../_analysis/isObject.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 31 January 2026 at 00:18:03 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>