# isFinite

## وەسف

دیاری دەکات کە ئایا `value`ی دراو ژمارەیەکی سنووردارە یان نا.

### دۆخی بەکارهێنان

`isFinite` بەکاربهێنە بۆ پشتڕاستکردنەوەی هاتنێکی نەناسراو (وەک لە JSON، فۆرمەکان، یان API ـەکان) پێش ئەنجامدانی هەژماری
ژمارەیی، بۆ دڵنیابوون لەوەی بەهاکە ژمارەیەکی ڕاست و سنووردارە.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isFinite` تەنها بۆ ژمارە سنووردارەکان `true` دەگەڕێنێتەوە؛ بۆ `NaN`، `Infinity`، و هەر بەهایەکی ناژمارە `false`
> دەگەڕێنێتەوە.

### سوودەکان

- `Number.isFinite`ی ناوخۆیی بەکاردەهێنێت بۆ پشکنینێکی متمانەپێکراوی سنوورداربوون.
- `true` تەنها بۆ ژمارە سنووردارەکان دەگەڕێنێتەوە؛ `false` بۆ `NaN`، `Infinity`، و هەر هاتنێکی ناژمارە دەگەڕێنێتەوە.
- پێشبینەرێکی سادە و بێ-کاریگەری-لاوەکیە کە گونجاوە بۆ پشتڕاستکردنەوە و لۆجیکی پاراستن.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isFinite(value)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی کە دەبێت بۆ سنوورداربوون پشکنرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
//‎‎ finiteNumbers بریتییە لە: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  //‎‎ لێرەدا value ژمارەیەکی کۆتاییە
  const doubled = value * 2;
  console.log(doubled);
}
```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isFinite(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isFinite](‎../_analysis/isFinite.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 16:29:21 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>