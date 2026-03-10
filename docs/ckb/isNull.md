# isNull

## وەسف

دیاری دەکات ئایا `value` ی پێشکەشکراو `null` ـە.

### دۆخی بەکارهێنان

`isNull` بەکاربهێنە بۆ پشتڕاستکردنەوەی هاتووکارەکان یان خانەکانی payload ـی API کاتێک `null` نیشانەیەکی مانادارە و دەبێت
بە شێوەیەکی جیاواز لە `undefined` یان نرخەکانی تر مامەڵەی لەگەڵ بکرێت.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isNull` بەکاربهێنە کاتێک پێویستت بە جیاکردنەوەی `null` لە `undefined` و ئەو نرخانەی ترە کە فالسین هەیە؛ تەنها بۆ
`null` `true` دەگەڕێنێتەوە.

### سوودەکان

- پشکنینێکی ورد بۆ `null` دابین دەکات بەبێ ئەوەی لەگەڵ `undefined` تێکەڵی بکات.
- بە متمانەوە بۆ هەر جۆرێکی هاتووکار کار دەکات چونکە `unknown` وەردەگرێت.
- سادە، خێرا، و بێ کاریگەریی لاوەکییە؛ تەنها `true` یان `false` دەگەڕێنێتەوە.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isNull(value)`

پارامەتەرەکان:

- `value`: ئەو نرخەی بۆ پشکنین بۆ `null`.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); //‎ ڕاست
console.log(isNull(b)); //‎ هەڵە

if (isNull(a)) {
  //‎‎ a لێرە null ـە
}
```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isNull(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isNull](‎../_analysis/isNull.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 31 January 2026 at 15:38:58 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>