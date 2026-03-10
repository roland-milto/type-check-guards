# isNullOrUndefined

## وەسف

پشکنین دەکات کە ئایا بەهایەکی دیاریکراو `null` یان `undefined` ـە.

### دۆخی بەکارهێنان

`isNullOrUndefined` بەکاربهێنە کاتێک پێویستت هەیە هەردوو `null` و `undefined` وەک “بێ بەها” مامەڵەیان لەگەڵ بکرێت، وەک
پشتڕاستکردنەوەی تێخستە هەڵبژاردەکان، یەکسانکردنەوەی payload ـی API، یان پاراستنی ڕێڕەوی کۆد پێش dereference کردنی
بەهایەکی لەوانەیە نەماوە.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isNullOrUndefined` بەکاربهێنە بۆ پاراستن لە بەها نەماوەکان پێش دەستگەیشتن بە تایبەتمەندییەکان یان بانگکردنی
> مێتۆدەکان؛ تەنها بۆ `null` و `undefined` `true` دەگەڕێنێتەوە.

### سوودەکان

- پارێزەرێکی ڕوون و دووبارەبەکارهێنراو دابین دەکات بۆ دۆزینەوەی `null` و `undefined` لە یەک شوێن.
- بوولیانی سادە (`true`/`false`) دەگەڕێنێتەوە کە ئاسانە لە مەرجەکان و پشتڕاستکردنەوەکاندا پێکەوە بکرێت.
- یارمەتی دەدات هەڵە باوەکانی کاتی جێبەجێبوون دووربخرێنەوە بە پشکنینی ئەوەی بەها نەماوە پێش دەستگەیشتن بە
  تایبەتمەندییەکان یان بانگکردنی مێتۆدەکان.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isNullOrUndefined(value)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی دەبێت بپشکنرێت بۆ `null` یان `undefined`.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  //‎‎ بەڕێوەبردنی بەهای نەبوون
}

console.log(isNullOrUndefined(b)); //‎ ڕاست
console.log(isNullOrUndefined(c)); //‎ هەڵە

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isNullOrUndefined(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isNullOrUndefined](‎../_analysis/isNullOrUndefined.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 31 January 2026 at 00:33:25 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>