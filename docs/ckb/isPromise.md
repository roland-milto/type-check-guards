# isPromise

## وەسف

دیاری دەکات ئایا بەهایەکی دیاریکراو `Promise` ـە.

### دۆخی بەکارهێنان

لە `isPromise` بەکاربهێنە بۆ پشتڕاستکردنەوەی هاتووچۆی نەناسراو پێش ئەوەی وەک `Promise` مامەڵەی لەگەڵ بکەیت، وەک کاتێک
بەهاکان لە plugin ـەکان، dynamic import ـەکان، یان API ـە شل-جۆرەکان دەگەڕێنرێنەوە.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isPromise` بە `instanceof Promise` پشکنین دەکات، بۆیە تەنها بۆ نموونە ڕاستەقینەکانی `Promise` `true` دەگەڕێنێتەوە (
> نەک thenable ـە گشتییەکان).

### سوودەکان

- پشکنینێکی سادەی کاتی جێبەجێکردن دابین دەکات بۆ ئەوەی بزانرێت ئایا بەهایەک `Promise` ـە.
- یارمەتی دەدات بۆ پاراستنی ڕێڕەوی کۆدەکان کە پێویستیان بە نموونەیەکی ڕاستەقینەی `Promise` هەیە، و بە شێوەیەکی
  پێشبینی‌کراو `true` یان `false` دەگەڕێنێتەوە.
- لە هەڵە-ئەنجامەکان لە شتە “thenable” ـەکان (وەک `{ then() {} }`) دوور دەکاتەوە بەوەی پێویستی بە نموونەیەکی ڕاستەقینەی
  `Promise` دەکات.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isPromise(value)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی دەبێت پشکنرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); //‎ ڕاست
console.log(isPromise(b)); //‎ هەڵە
console.log(isPromise(123)); //‎ هەڵە
console.log(isPromise(null)); //‎ هەڵە

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isPromise(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isPromise](‎../_analysis/isPromise.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 23:52:28 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>