# arePromises

## وەسف

`arePromises` دیاری دەکات ئایا هەموو توخمەکانی ناو ئارایەکە `Promise` ـن.

### دۆخی بەکارهێنان

پشتڕاستکردنەوەی ئەوە کە لیستێکی بە شێوەی دینامیکی دروستکراو یان لە دەرەوە پێشکەشکراو تەنها promise ـەکان لەخۆدەگرێت پێش
ئەوەی کۆیان بکەیتەوە (بۆ نموونە بە `Promise.all`).

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `arePromises` بەکاربهێنە بۆ پشتڕاستکردنەوەی `unknown[]` پێش بانگکردنی `Promise.all` یان هەر کارێکی تەنها-پڕۆمێس؛ بۆ
> ئارایە بەتاڵەکان `false` دەگەڕێنێتەوە.

### سوودەکان

- دڵنیایی دەکات کە هەر توخمێک `Promise` ـە پێش ئەوەی بەردەوام بیت بە لۆجیکی تایبەت بە promise.
- `false` دەگەڕێنێتەوە بۆ ئارایە نە پڕەکان، وەک ڕێگری لە ئەنجامی ناڕوون بۆ هاتووچۆی بەتاڵ.
- وەک پارێزەری کاتی-جێبەجێکردن بەسوودە کاتێک لەگەڵ `unknown[]` کار دەکەیت کە لە سەرچاوە دەرەکییەکانەوە دێت.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `arePromises(array)`

پارامەتەرەکان:

- `array`: ئەو ئارایەیە کە دەسەلمێنرێت بۆ بوونی نموونەکانی Promise.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  //‎‎ values لە کاتی ڕەن‌تایمدا ئارایەیەکە لە نموونەکانی Promise
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.arePromises(array)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [arePromises](‎../_analysis/arePromises.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 23:47:55 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>