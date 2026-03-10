# areRegExes

## وەسف

`areRegExes` پشکنین دەکات کە ئایا بەهایەک ئارەیەکی پڕە کە تەنها `RegExp` ـەکان لەخۆ دەگرێت.

### دۆخی بەکارهێنان

پشتڕاستکردنەوەی ئەوە کە هەڵبژاردەیەکی ڕێکخستن (بۆ نموونە، لیستێک لە پاتێرنی ڕێگەپێدان/قەدەغەکردن) ئارەیەکی بەتاڵ نەبێت
لە ڕێژە-دەربڕینەکان پێش ئەوەی بۆ هاوتاکردن بەکاری بهێنرێت.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `areRegExes` بەکاربهێنە بۆ ئەوەی `unknown` باریک بکەیتەوە بۆ `RegExp[]` پێش ئەوەی لەسەری بگەڕێیتەوە یان پاتێرنەکان
> پێکەوە بکەیت.

### سوودەکان

- دڵنیایی دەکات کە بەهایەک ئارەیەکی بەتاڵ نەبێت و هەموو ئەندامەکانی نمونەیەکی `RegExp` بن.
- پارێزەرێکی سادەی بوولیان (`true`/`false`) دابین دەکات بۆ پشتڕاستکردنەوەی تێخستەی بەکارهێنەر یان ڕێکخستن.
- یارمەتیدەدات لە ڕێگری لە هەڵەکانی کاتی جێبەجێبوون بکات کاتێک کۆدی دواتر وادەزانێت هەموو دانەکان پشتگیری لە کارەکانی
  ڕێژە-دەربڕین دەکەن.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `areRegExes(array)`

پارامەتەرەکان:

- `array`: ئەو بەهایەی دەبێت پشکنرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  //‎‎ patterns لێرە ئارایەکەی RegExp ـە
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.areRegExes(array)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [areRegExes](‎../_analysis/areRegExes.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 23:17:21 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>