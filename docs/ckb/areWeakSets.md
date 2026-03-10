# areWeakSets

## وەسف

دەپشکنێت کە ئایا هاتووەکە ئارایەیەکی نەنەبەتاڵە کە هەر توخمێکی `WeakSet` ـە، و تەنها لەو حاڵەتەدا `true` دەگەڕێنێتەوە.

### دۆخی بەکارهێنان

پشتڕاستکردنەوەی هاتووی کاتی ڕەنەوە (وەک لە API ـەکان، ڕێکخستن، یان داتای پێشکەشکراوی بەکارهێنەر) بۆ دڵنیابوون لەوەی
لیستێکی نەنەبەتاڵ لە نموونەکانی `WeakSet` هەیە پێش ئەوەی بەردەوام بیت بە لۆجیکی کە پەیوەستە بە هەڵسوکەوتی `WeakSet`.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `areWeakSets` بەکاربهێنە بۆ پشتڕاستکردنەوەی هاتووی نەناسراو پێش ئەوەی وەک `WeakSet[]` مامەڵەی لەگەڵ بکەیت. بۆ ئارایە
> بەتاڵەکان و نا-ئارایەکان `false` دەگەڕێنێتەوە.

### سوودەکان

- دڵنیایی دەکات کە هەر توخمێک لە ئارایەی هاتوو `WeakSet` ـە.
- بۆ ئارایە بەتاڵەکان `false` دەگەڕێنێتەوە، وەک پاراستن لە دەرئەنجامی هەڵەی «هەمووی دروستە» لە کاتی نەبوونی داتا.
- بە سەلامەتی شکستی دەهێنێت بە گەڕاندنەوەی `false` کاتێک هاتووەکە ئارایەی پڕ نەبێت (لەوانەش `null`).
- وەک گاردێک سوودمەندە پێش ئەنجامدانی کارەکان کە پێویستیان بە نموونەکانی `WeakSet` هەیە.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `areWeakSets(array)`

پارامەتەرەکان:

- `array`: ئەو ئارایەیە کە دەپشکنرێت بۆ بوونی ئۆبجێکتەکانی `WeakSet`.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  //‎‎ a بریتییە لە ئارایەکەی نا بەتاڵ لە نموونەکانی WeakSet
}

console.log(areWeakSets(a)); //‎ ڕاست
console.log(areWeakSets(b)); //‎ هەڵە
console.log(areWeakSets(c)); //‎ هەڵە
console.log(areWeakSets(null as unknown)); //‎ هەڵە
```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.areWeakSets(array)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [areWeakSets](‎../_analysis/areWeakSets.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 14:08:09 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>