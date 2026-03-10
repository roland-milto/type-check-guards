# isFalse

## وەسف

`isFalse` پشکنین دەکات کە ئایا بەهایەکی دیاریکراو بە شێوەی توند یەکسانە بە literal ـی boolean `false`.

### دۆخی بەکارهێنان

دڵنیابوون لە داتای نەزانراو (وەک لە JSON، query params، یان user input) کە تەنها بەهای boolean ـی ڕوونی `false` دەبێت
وەک flag ـێکی دروست وەربگیرێت، و هەر شتێکی تر ڕەت بکرێتەوە.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isFalse` بەکاربهێنە کاتێک پێویستە تەنها literal ـی `false` وەربگریت و هەموو بەها فالسەکانی تر ڕەت بکەیتەوە؛ تەنها بۆ
`value === false` دەگەڕێتەوە `true`.

### سوودەکان

- پشکنینێکی توند دابین دەکات بۆ literal ـی boolean `false` بەبێ coercion.
- یارمەتیدەدات `false` لە نێوان ئەو بەها فالسەکانەی تر جیا بکەیتەوە وەک `0`، `""`، `null`، و `undefined`.
- خوێندنەوە باشتر دەکات بەوەی مەبەست ڕوون دەکاتەوە کاتێک داتای نەزانراو پشتڕاست دەکەیتەوە.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isFalse(value)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی دەبێت پشکنرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  //‎‎ input لێرە بە تەواوی false ـە
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isFalse(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isFalse](‎../_analysis/isFalse.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 31 January 2026 at 16:21:18 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>