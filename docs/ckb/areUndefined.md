# areUndefined

## وەسف

`areUndefined` پشکنین دەکات کە ئایا هەموو ئەندامەکانی ئارەیەکی پێشکەشکراو `undefined` ـن.

### دۆخی بەکارهێنان

پشتڕاستکردنەوەی ئەوەی لیستێک لە ئەنجامە هەڵبژاردەکان هیچ بەهای ڕاستەقینەی تێدا نییە (تەنها `undefined`)، بۆ نموونە دوای
mapping ـی lookup ـەکان کە تێیدا ئەو دانە نەدۆزرایەوانە بە `undefined` نیشان دەدرێن، و دەتەوێت دڵنیابیت کە هەموو lookup
ـەکان سەرکەوتوو نەبوون.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `areUndefined` بەکاربهێنە کاتێک پێویستت بەوەیە پشتڕاست بکەیتەوە کە `unknown[]` تەنها بەهاکانی `undefined` لەخۆدەگرێت؛
> بۆ ئارەی بەتاڵ و هەروەها بۆ نا-ئارە/هاتووچۆی نادروست `false` دەگەڕێنێتەوە بەهۆی پشکنینی ناوخۆیی `isFilledArray`.

### سوودەکان

- بۆ نا-ئارەیەکان و ئارەی بەتاڵ `false` دەگەڕێنێتەوە، چونکە بەهۆی `isFilledArray` پێویستی بە ئارەی پڕ دەکات.
- دڵنیایی دەدات هەموو ئەندامێک `undefined` بێت، نەک تەنها هەندێک، بەوەش مەبەستەکە ڕوون دەکات.
- وەک predicate-ێکی شێوازی guard سوودمەندە لە کاتی پشتڕاستکردنەوەی کۆمەڵەی داتای نادیار.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `areUndefined(array)`

پارامەتەرەکان:

- `array`: ئەو ئارەیەی بۆ پشکنینی ئەندامە `undefined` ـەکان.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); //‎ ڕاست
const r2 = areUndefined(b); //‎ هەڵە
const r3 = areUndefined(c); //‎ هەڵە

//‎‎ تێبینی: بۆ ئارای بەتاڵ هەڵە دەگەڕێنێتەوە
const r4 = areUndefined([]); //‎ هەڵە
```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.areUndefined(array)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [areUndefined](‎../_analysis/areUndefined.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 13:55:20 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>