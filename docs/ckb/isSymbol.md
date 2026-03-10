# isSymbol

## وەسف

`isSymbol` دیاری دەکات کە ئایا بەهایەکی دیاریکراو لە جۆری `symbol` ـە، بۆ symbol ـەکان `true` دەگەڕێنێتەوە و بۆ ئەوانەی
تر `false`.

### دۆخی بەکارهێنان

دڵنیابوون لەوەی بەهایەکی `unknown`، `symbol` ـە پێش بەکارهێنانی وەک ناسێنەرێکی یەکتا، کلیلێکی registry، یان کلیلێکی
computed property لە ئۆبجێکت و map ـەکاندا.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isSymbol` بەکاربهێنە بۆ سنووردارکردنی `unknown` بۆ `symbol` پێش بانگکردنی فەنکشنە پەیوەندیدارەکانی symbol یان
> بەکارهێنانی وەک کلیلێکی computed property.

### سوودەکان

- پشکنینیەکی سادە و متمانەپێکراوی کاتی جێبەجێکردن دابین دەکات بۆ جۆری بنەڕەتی `symbol` لە JavaScript.
- یارمەتیدەدات بە سنووردارکردنی بەهاکانی `unknown` پێش بەکارهێنانی API ـە تایبەت بە symbol یان هەڵگرتنیان وەک کلیل.
- لە هەڵە-ئەنجامەکان دوور دەکاتەوە بە بەکارهێنانی `typeof`، کە ڕێگای بنەڕەتییە بۆ ناسینەوەی بەهاکانی `symbol`.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isSymbol(value)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی دەبێت پشکنین بکرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  //‎‎ input لێرەدا سیمبۆڵە
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isSymbol(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isSymbol](‎../_analysis/isSymbol.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 14:26:20 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>