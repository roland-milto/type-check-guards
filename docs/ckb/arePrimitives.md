# arePrimitives

## وەسف

`arePrimitives` هەڵسەنگاندن دەکات کە ئایا هەموو ئەندامەکان لە ئارایەکی پێشکەشکراو و نابەتاڵ، جۆری primitive ـن یان نا.

### دۆخی بەکارهێنان

دڵنیابوون لەوەی داتای هاتوو (وەک query parameters، نرخی ڕیزێکی CSV، یان لیستێک لە ID/tag) تەنها بەها سادەکان لەخۆ دەگرێت
پێش serialize کردن، hashing، logging، یان ناردنی بۆ API ـیەکان کە نابێت ئۆبجێکت وەربگرن.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> کاتێک پێویستتە دڵنیابیت کە `unknown[]` تەنها بەها سادەکان (string, number, bigint, boolean, symbol, undefined, یان
> null) لەخۆ دەگرێت پێش ئەوەی پرۆسەی زیاتر بکەیت، `arePrimitives` بەکاربهێنە.

### سوودەکان

- تەنها ئەو کاتە `true` دەگەڕێنێتەوە کە هەموو ئەندامەکان بەهای سادە (primitive) بن، بۆیە پاسەوانێکی توندە بۆ ئارایەکانی
  “بێ شتێکی شێوەی ئۆبجێکت/فەنکشن”.
- زوو دەوەستێت: هەر کاتێک ئەندامێکی ناسوود (non-primitive) بدۆزرێتەوە، دەستبەجێ `false` دەگەڕێنێتەوە.
- هەروەها بۆ نا-ئارایەکان و ئارایە بەتاڵەکان `false` دەگەڕێنێتەوە (لە ڕێگەی پشکنینی filled-array)، وەک پاراستنێک لە
  قبوڵکردنی هەڵەیی داتای نادروست.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `arePrimitives(array)`

پارامەتەرەکان:

- `array`: ئەو ئارایەیە کە دەبێت بپشکنرێت بۆ ئەندامەکانی لە جۆری بەهای سادە (primitive).

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); //‎ ڕاست
const r2 = arePrimitives(b); //‎ ڕاست
const r3 = arePrimitives(c); //‎ هەڵە
```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.arePrimitives(array)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [arePrimitives](‎../_analysis/arePrimitives.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 31 January 2026 at 00:04:15 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>