# isBoolean

## وەسف

دیاری دەکات کە ئایا بەهایەکی دراو `boolean` ـە یان نا.

### دۆخی بەکارهێنان

دڵنیابوون لە داتای دەرەکی یان بێ-جۆر (وەک environment variables، JSON payloads، query parameters) بۆ ئەوەی دڵنیابیت
بەهایەکە `boolean` ـە پێش بەکارهێنانی لە منطقێکی مەرجی.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isBoolean` بەکاربهێنە بۆ ئەوەی `unknown` باریک بکەیتەوە بۆ `boolean` پێش ئەوەی کارەکانی boolean جێبەجێ بکەیت.

### سوودەکان

- پشکنینی کاتی کارکردنی سادە و خێرا بە بەکارهێنانی `typeof`.
- یارمەتی دەدات بۆ پشتڕاستکردنەوەی هاتووچۆی نەزانراو پێش منطقێکی تایبەت بە boolean.
- ئەنجامێکی پێشبینی‌کراو دەگەڕێنێتەوە بە شێوەی `boolean` (`true`/`false`).

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isBoolean(value)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی کە دەبێت پشکنرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  //‎‎ input لێرە بوولینە
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isBoolean(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isBoolean](‎../_analysis/isBoolean.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 14:36:00 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>