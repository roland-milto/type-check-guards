# isUndefined

## وەسف

پشکنین دەکات کە ئایا نرخێکی دیاریکراو `undefined` ـە.

### دۆخی بەکارهێنان

`isUndefined` بەکاربهێنە بۆ پاراستنی هاتووچۆی هەڵبژاردەیی (optional inputs)، دۆزینەوەی تایبەتمەندییە ونبووەکان، یان
جیاکردنەوەی نێوان “پێشکەش نەکراوە” (`undefined`) و “بە ئاشکرایی بەتاڵە” (`null`).

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isUndefined` بەکاربهێنە کاتێک بە تایبەتی پێویستت بە دۆزینەوەی `undefined` هەیە (نەک `null`). ئەمە سەلامەتە چونکە پشت
> بە `typeof value === "undefined"` دەبەستێت.

### سوودەکان

- پشکنینێکی ڕوون و ئاشکرا بۆ `undefined` بە بەکارهێنانی `typeof` دابین دەکات، وەکەوە لە کێشەکانی لاوەکی لەگەڵ گۆڕاوە
  نەناسراوەکان دوور دەکاتەوە.
- ئەنجامێکی سادەی بولی (`true`/`false`) دەگەڕێنێتەوە کە گونجاوە بۆ پارێزەرەکان (guards)، دابەشکردن (branching)، و لۆژیکی
  پشتڕاستکردنەوە (validation).
- یارمەتی دەدات `undefined` لە نرخی “بەتاڵ”ی تر جیا بکەیتەوە وەک `null`، `0`، `""`، یان `NaN`.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isUndefined(value)`

پارامەتەرەکان:

- `value`: ئەو نرخەی کە دەبێت پشکنرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  //‎‎ x لێرە نەناسراوە
} else {
  //‎‎ x لێرە نەناسراوە نییە
}

const a = isUndefined(undefined); //‎ ڕاست
const b = isUndefined(null);      //‎ هەڵە

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isUndefined(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isUndefined](‎../_analysis/isUndefined.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 14:02:22 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>