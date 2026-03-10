# getTypeOf

## وەسف

`getTypeOf` ناونیشانێکی جۆری ورد و خوێنراوەی مرۆیی بۆ بەهایەک دەگەڕێنێتەوە، بە تێکەڵبوونی ژێرجۆرە ژمارەییە
پەڕەسەندووەکان و جۆرە تایبەتەکانی شتەکان.

### دۆخی بەکارهێنان

`getTypeOf` بەکاربهێنە بۆ یەکسانکردنی ناسینەوەی جۆر لە پشتڕاستکردنەوەی هاتووچۆی داتا و ڕاپۆرت/دیاغنۆستیک—بۆ نموونە،
ڕەتکردنەوەی `nan`، پەسەندکردنی تەنها ID ـی `integer`، جیاکردنەوەی ڕستە ژمارەییەکان وەک `decimal` لە `string` ـی ئاسایی،
یان تۆمارکردنی جۆری وردی شتەکان وەک `date` و `regexp`.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> جۆری بەهای گەڕاندنەوە `DataTypeAsString | string` ـە. وەک ناونیشانێکی وەسفی مامەڵەی لەگەڵ بکە؛ لە کاتی branching ـدا
> بەرامبەر literal ـە ناسراوەکان وەک `integer`، `float`، `nan`، `array`، `null`، و `undefined` بەراوردی بکە.

### سوودەکان

- ڕیزەنووسێکی جۆر (type) بە وردەکاری زیاتر دەگەڕێنێتەوە وەک JavaScript ـی `typeof`، بە هەمان کات ژێرجۆرە ژمارەییەکانیش
  وەک `integer`، `float`، و `nan` تێدایە.
- `null` و `undefined` بە ڕوونی جیا دەکاتەوە و وەک `null` و `undefined` ڕاپۆرتیان دەکات.
- شێوەی باوەکانی ژمارە لە ناو ڕستەنووس (string) دەناسێتەوە و وەک `binary`، `octal`، `decimal`، یان `hexadecimal`
  ڕاپۆرتیان دەکات لە جیاتی `string` ـی سادە.
- ئارەیەکان وەک `array` دەناسێتەوە و `Object.prototype.toString` بەکاردەهێنێت بۆ دابینکردنی ناوی جۆری شتەکان بە وردی (
  وەک `date`، `regexp`، `map`، `set`).
- بەسوودە بۆ پشتڕاستکردنەوە (validation)، تۆمارکردن (logging)، و هەڵەدۆزی (debugging) کاتێک پێویست بە ناونیشانی جۆری
  یەکسان و خوێنراوەی مرۆیی هەیە.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `getTypeOf(value)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی کە دەبێت جۆری داتاکەی دیاری بکرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

//‎‎ پشکنینی نموونە
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.getTypeOf(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [getTypeOf](‎../_analysis/getTypeOf.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 6 February 2026 at 13:05:48 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>