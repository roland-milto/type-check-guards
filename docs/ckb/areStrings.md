# areStrings

## وەسف

`areStrings` پشکنین دەکات کە ئایا ئارایەکە نەنەوەیە و هەموو توخمەکانی سترینگن، و تەنها لەو حاڵەتەدا `true` دەگەڕێنێتەوە.

### دۆخی بەکارهێنان

دڵنیابوون لە داتای دەرەکی یان لەلایەن بەکارهێنەرەوە دابینکراو (وەک query params، JSON payloads، خانەکانی CSV) بۆ ئەوەی
دڵنیابیت لیستێکی نەنەوەی سترینگت هەیە پێش پڕۆسەکردن.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `areStrings` بەکاربهێنە بۆ دڵنیابوون لە ئارایە نادیارەکان پێش ئەوەی لۆجیکی تەنها-سترینگ جێبەجێ بکەیت؛ بۆ ئارایە
> بەتاڵەکان `false` دەگەڕێنێتەوە.

### سوودەکان

- دڵنیایی دەکات کە هەر توخمێک سترینگە و ئارایەی تێکەڵ-جۆر ڕەت دەکاتەوە بە گەڕاندنەوەی `false`.
- ئارایە بەتاڵەکان ڕەت دەکاتەوە، بۆیە `true` تەنها ئاماژەیە بۆ لیستێکی نەنەوەی سترینگ.
- وەک پارێزەری خێرای کاتی-جێبەجێکردن بەسوودە پێش ئەنجامدانی کارەکانی تەنها-سترینگ (وەک `trim`، `toLowerCase`).

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `areStrings(value)`

پارامەتەرەکان:

- `value`: Expected type `string[]`.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  //‎‎ input لە کاتی جێبەجێکردندا string[] ـێکی بەتاڵ‌نەبووە
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.areStrings(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [areStrings](‎../_analysis/areStrings.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 13:17:40 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>