# isEmpty

## وەسف

دیاری دەکات کە ئایا بەهایەکی دیاریکراو بەتاڵە، و `true` دەگەڕێنێتەوە بۆ `null`، `undefined`، ڕیزبەندی بەتاڵ/تەنها
بۆشایی، array بەتاڵ، `Map`/`Set` بەتاڵ، یان ئۆبجێکتێک کە هیچ تایبەتمەندییەکی خۆیی (own) و enumerableی نییە.

### دۆخی بەکارهێنان

`isEmpty` بەکاربهێنە بۆ پشتڕاستکردنەوەی هاتووچۆکان و دۆزینەوەی بەها نەبوون/بەتاڵی لەسەر چەندین جۆری داتا (وەک خانەکانی
فۆرم، payloadی API، ئۆبجێکتەکانی ڕێکخستن) کە `null`، `undefined`، ڕیزبەندی تەنها بۆشایی، کۆمەڵە بەتاڵەکان، و ئۆبجێکتە
بێ-تایبەتمەندییەکان دەبێت وەک بەتاڵ مامەڵەیان لەگەڵ بکرێت.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isEmpty` ئامرازێکە کە boolean دەگەڕێنێتەوە (نەک TypeScript type predicate)، بۆیە بە خۆی جۆرەکان نا تەنک دەکات؛ بۆ
> validation/branching بەکاری بهێنە نەک بۆ narrowing لە کاتی compile.

### سوودەکان

- `null` و `undefined` وەک `true` دادەنێت بۆ پشکنینی بەتاڵی.
- ڕیزبەندەکان کە تەنها بۆشاییان تێدایە بەتاڵ دادەنێت بەوەی پێش پشکنینی درێژی، trim دەکات.
- جۆرەکانی کۆنتەینەری باو پشتیوانی دەکات (arrays، `Map`، `Set`) و ئۆبجێکتە سادەکان کە هیچ تایبەتمەندییەکی خۆیی (own) و
  enumerableیان نییە.
- لە ژماردنی تایبەتمەندییە مێراتییەکان دوور دەکەوێتەوە بە بەکارهێنانی پشکنینی `hasOwnProperty`.
- ئەنجامێکی سادەی boolean دەگەڕێنێتەوە (`true`/`false`) کە گونجاوە بۆ guards و validation.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isEmpty(value)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی کە دەبێت بۆ بەتاڵی پشکنرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isEmpty(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isEmpty](‎../_analysis/isEmpty.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 6 February 2026 at 16:17:52 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>