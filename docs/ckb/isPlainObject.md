# isPlainObject

## وەسف

دەزانێت ئایا `value` ـێکی دیاریکراو ئۆبجێکتێکی سادەیە و ئەگەر وابوو `true` دەگەڕێنێتەوە، ئەگەرنا `false`.

### دۆخی بەکارهێنان

دڵنیابوون لەوەی `unknown` ـێکی هاتوو (وەک JSON ـی پارسکراو، داتای دەرەکی، یان ئارگیومێنتەکانی فەنکشن) ئۆبجێکتێکی سادەیە
پێش خوێندنەوەی کلیلەکان یان گۆڕینی بۆ ئۆبجێکتێکی ڕێکخراوی پێناسەکراو (typed configuration object).

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isPlainObject` بەسوودە بۆ تەنککردنەوەی `unknown` پێش ئەوەی وەک ئۆبجێکتێکی وەک تۆمار (record-like) مامەڵەی لەگەڵ
> بکرێت؛ تەنها بۆ ئەو بەهانە `true` دەگەڕێنێتەوە کە تاگی ناوخۆییان `[object Object]` ـە.

### سوودەکان

- پشکنینێکی سادە و متمانەپێکراو دابین دەکات بۆ ئەوەی بزانرێت ئایا بەهایەک ئۆبجێکتێکی سادەیە (واتە `Object` / `{}`)، و
  `true` یان `false` دەگەڕێنێتەوە.
- یارمەتی دەدات ئۆبجێکتە سادەکان لە ئارەیەکان، فەنکشنەکان، `null`، و جۆرەکانی دیکەی نا-ئۆبجێکتی سادە جیا بکرێنەوە.
- وەک پارێزەری جۆر (type guard) لە TypeScript بەسوودە بۆ تەنککردنەوەی بەهاکانی `unknown` پێش دەستگەیشتن بە
  تایبەتمەندییەکانی ئۆبجێکت.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isPlainObject(value)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی دەستپێدەکات بۆ تاقیکردنەوەی ئەوەی ئایا ئۆبجێکتێکی سادەیە.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  //‎‎ input لێرەدا ئۆبجێکتێکی سادەیە
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); //‎ ڕاست
console.log(isPlainObject([])); //‎ هەڵە
console.log(isPlainObject(null)); //‎ هەڵە
```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isPlainObject(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isPlainObject](‎../_analysis/isPlainObject.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 6 February 2026 at 12:17:00 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>