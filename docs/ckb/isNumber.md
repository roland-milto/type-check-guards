# isNumber

## وەسف

`isNumber` پشکنین دەکات کە ئایا بەهایەک ژمارەیەکی سنووردارە و `NaN` نییە.

### دۆخی بەکارهێنان

پشتڕاستکردنەوەی هاتنەژوورەوەی ژمارەیی لە سەرچاوە ناپێوەندیدارەکان (فۆرمەکان، query params، payload ـەکانی JSON) پێش
ژمێریاری، هەڵگرتن، یان پشکنینی مەودا، بۆ دڵنیابوون لەوەی تەنها ژمارە سنووردارەکان تێپەڕ دەبن (`true`) و هەموو شتێکی تر
`false` دەگەڕێنێتەوە.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isNumber` بەکاربهێنە بۆ پشتڕاستکردنەوەی بەهاکانی `unknown` پێش ئەوەی ژمێریاری بکەیت؛ `NaN`، `Infinity`، و `-Infinity`
> ڕەت دەکاتەوە.

### سوودەکان

- تەنها بۆ ژمارە ڕاستەقینەکانی JavaScript `true` دەگەڕێنێتەوە (پشکنینی جۆر لەگەڵ ڕەتکردنەوەی `NaN` و بێکۆتایی).
- ڕێگری دەکات لە هەڵە باوەکانی پشتڕاستکردنەوە کە `NaN`، `Infinity`، یان `-Infinity` بە هەڵە وەک ژمارە تێپەڕ دەبن.
- وەک پارێزەری کاتی-جێبەجێکردن باش کار دەکات بۆ هاتنەژوورەوەی نەزانراو (وەک JSON، هاتنەژوورەوەی بەکارهێنەر، API ـە
  دەرەکییەکان).
- سادە، خێرا، و بێ کاریگەری لاوەکییە.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isNumber(value)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی دەبێت پشکنینی بکرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  //‎‎ input ژمارەیەکی دروست و کۆتایی‌پێهاتووە
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isNumber(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isNumber](‎../_analysis/isNumber.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 13:08:35 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>