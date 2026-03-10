# isWeakMap

## وەسف

دیاری دەکات ئایا `value` ـێکی دیاریکراو نمونەیەکی `WeakMap` ـە.

### دۆخی بەکارهێنان

کاتێک `unknown` وەردەگریت (وەک لە API ـێکی گشتی، سیستەمی پلەگین، یان ڕێکخستنی داینامیک) و پێویستە پشتڕاستی بکەیتەوە کە
`WeakMap` ـە پێش ئەوەی ڕەفتاری تایبەتی `WeakMap` بەکاربهێنیت، `isWeakMap` بەکاربهێنە.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isWeakMap` پشکنینی `instanceof WeakMap` ئەنجام دەدات؛ ئەمە پارێزەری کاتی جێبەجێکردنە کە تەنها بۆ نمونە ڕاستەقینەکانی
`WeakMap` `true` دەگەڕێنێتەوە.

### سوودەکان

- پشکنینی سادەی کاتی جێبەجێکردن بۆ ئەوەی بزانرێت ئایا بەهایەک `WeakMap` ـە.
- یارمەتی دەدات بە ڕێگری لە بەکارهێنانی هەڵەی API ـەکان کە `WeakMap` داوایان دەکات بەوەی `true`/`false` دەگەڕێنێتەوە لە
  جیاتی ئەوەی هەڵە فڕێبدات.
- لەگەڵ هاتووچۆی `unknown` کار دەکات، کە ئەمە لە سنووری مۆدیوڵەکاندا ئاسانکاری دەکات (وەک parsing، داتای دەرەکی، یان
  کۆدی بێ-جۆر).

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isWeakMap(value)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی دەبێت پشکنین بکرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  //‎‎ a لە کاتی جێبەجێکردندا WeakMap ـە
}

console.log(isWeakMap(a)); //‎ ڕاست
console.log(isWeakMap(b)); //‎ هەڵە
```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isWeakMap(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isWeakMap](‎../_analysis/isWeakMap.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 13:24:38 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>