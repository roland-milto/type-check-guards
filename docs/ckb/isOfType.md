# isOfType

## وەسف

دیاری دەکات ئایا `value`ی دیاریکراو لەگەڵ زنجیرەی جۆرێکی دیاریکراو دەگونجێت، بە بەکارهێنانی `typeof` بۆ جۆرە سادەکان و
جێگرەوەیەک بۆ جۆرە ئاڵۆزەکان.

### دۆخی بەکارهێنان

پشتڕاستکردن و تەنککردنەوەی هاتووچۆی `unknown` (وەک وەڵامەکانی API، هاتووچۆی بەکارهێنەر، JSONی پارسکراو) بە پشکنینی ئەوەی
ئایا بەهایەک لە جۆرێکی زنجیرەیی چاوەڕوانکراوە دەگونجێت پێش ئەنجامدانی کارە تایبەت بەو جۆرە.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> لە `isOfType` بەکاربهێنە بۆ branching لەسەر جۆرەکانی runtime کاتێک لەگەڵ بەهاکانی `unknown` کاردەکەیت؛ `true`/`false`
> دەگەڕێنێتەوە و `null` و `undefined` بە شێوەیەکی ڕوون مامەڵە دەکات.

### سوودەکان

- پرۆسەکردنی جۆرە سادەکان بە `typeof`ی ڕاستەوخۆ دەکات بۆ خێرایی و ڕوونی.
- `null` و `undefined` بە دروستی مامەڵە دەکات، کە `typeof` بە تەنها ناتوانێت وەک مەبەست جیا بکاتەوە.
- پشتگیری لە زنجیرەی جۆری ئاڵۆز یان تایبەتی دەکات بە بەراوردێکی جێگرەوە بە بەکارهێنانی `getTypeOf`.
- ئەنجامێکی سادەی boolean دەگەڕێنێتەوە (`true`/`false`) کە گونجاوە بۆ guard و branching.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isOfType(value, type)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی دەستپێدەکات بۆ تاقیکردنەوە دژ بە `type`.
- `type`: نوێنەرایەتی زنجیرەیی جۆرەکە کە دەبێت دژ بەوە پشکنرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  //‎‎ input لێرە ژمارەیەکە
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  //‎‎ input لێرە ڕیزبەندێکە
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isOfType(value, type)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isOfType](‎../_analysis/isOfType.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 16:59:07 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>