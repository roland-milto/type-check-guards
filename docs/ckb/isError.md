# isError

## وەسف

پشکنین دەکات ئایا `value` ـێکی دیاریکراو نموونەیەکی `Error` ـە.

### دۆخی بەکارهێنان

`isError` بەکاربهێنە کاتێک بەهایەکی `unknown` وەردەگریت (وەک لە بلۆکی `catch`، callback ـێک، یان کتێبخانەیەکی دەرەکی) و
پێویستتە بە شێوەیەکی سەلامەت دیاری بکەیت ئایا `Error` ـە پێش ئەوەی `message`، `name`، یان `stack` بخوێنیتەوە.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isError` بەکاربهێنە وەک پارێزەر بۆ بەها `unknown` ـەکان (بۆ نموونە، لە `catch` ـەوە) پێش ئەوەی وەک `Error` مامەڵەیان
> لەگەڵ بکەیت.

### سوودەکان

- پشکنینێکی سادەی کاتی جێبەجێکردن دابین دەکات بۆ ئەوەی بزانرێت ئایا بەهایەک نموونەیەکی `Error` ـە.
- یارمەتی دەدات بۆ سنووردارکردنی هاتووچۆی نەناسراو پێش دەستگەیشتن بە تایبەتمەندییەکانی `Error` وەک `message` یان
  `stack`.
- مەترسیی هەڵەکانی کاتی جێبەجێکردن کەم دەکات لە کاتی مامەڵەکردن لەگەڵ بەهاکان لە `catch`، API ـە دەرەکییەکان، یان
  سەرچاوە بێ-جۆر.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isError(value)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی دەبێت پشکنرێت بەرامبەر جۆری `Error`.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isError(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isError](‎../_analysis/isError.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 6 February 2026 at 12:45:03 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>