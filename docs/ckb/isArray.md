# isArray

## وەسف

`isArray` پشکنین دەکات کە ئایا بەهایەکی دیاریکراو ئارایە یان نا و ئەگەر ئارای بوو `true` دەگەڕێنێتەوە، ئەگەر نا `false`.

### دۆخی بەکارهێنان

دڵنیابوون لە داتای نەزانراو (وەک JSON ـی پارسکراو یان وەڵامەکانی API) بۆ ئەوەی دڵنیابیت بەهایەکە ئارایە پێش ئەوەی لێی
بگەڕێیتەوە، index بکەیت، یان `.length` ـی بخوێنیتەوە.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isArray` بەکاربهێنە کاتێک پێویستت بە پشکنینی runtime بۆ ئارایەکان هەیە؛ boolean دەگەڕێنێتەوە و پارێزراوە بۆ بانگکردن
> لەگەڵ بەهاکانی `unknown`.

### سوودەکان

- لە `Array.isArray` ـی ناوخۆیی بەکاردەهێنێت بۆ دۆزینەوەی ئارای بە شێوەیەکی متمانەپێکراو لە نێوان realm ـەکاندا (وەک
  iframes).
- ئەنجامێکی سادەی boolean دەگەڕێنێتەوە (`true`/`false`) کە گونجاوە بۆ guards و لۆجیکی branching.
- لەگەڵ هەر جۆرێکی هاتووکار کاردەکات چونکە پارامەتەرەکە `unknown` ـە.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isArray(value)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی دەبێت پشکنرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  //‎‎ input لە کاتی جێبەجێکردندا ئەڕەیەکە
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isArray(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isArray](‎../_analysis/isArray.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 6 February 2026 at 11:30:03 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>