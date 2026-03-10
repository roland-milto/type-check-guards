# isPrimitive

## وەسف

`isPrimitive` دیاری دەکات ئایا بەهایەکی دیاریکراو پرایمیتڤە (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### دۆخی بەکارهێنان

پشتڕاستکردنەوەی هاتووچۆکان لە کاتی ڕەن‌تایم (وەک خانەکانی payload ـی API، بەهاکانی ڕێکخستن، یان داتای پێشکەشکراو لەلایەن
بەکارهێنەر) بۆ ئەوەی دڵنیابیت بەهایەک پرایمیتڤە پێش سێریاڵایزکردن، تۆمارکردن، یان جێبەجێکردنی کارەکان کە تەنها بۆ
پرایمیتڤەکانن.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isPrimitive` بەکاربهێنە وەک گارد بۆ هاتووچۆی `unknown` پێش ئەوەی وەک ئۆبجێکت یان فانکشن مامەڵەی لەگەڵ بکەیت؛ بۆ
> پرایمیتڤەکان `true` دەگەڕێنێتەوە و بۆ ئۆبجێکت و فانکشنەکان `false`.

### سوودەکان

- پشکنینێکی خێرا و بێ-دابەشکردن بۆ ئەوەی بزانرێت ئایا بەهایەک پرایمیتڤی جاڤاسکریپتە.
- `null` بە دروستی وەک پرایمیتڤ دادەنێت (هەرچەندە `typeof null` `"object"` ـە).
- یارمەتی دەدات بە سنووردارکردنی بەهاکانی `unknown` پێش ئەنجامدانی کارەکان کە تەنها بۆ ئۆبجێکتەکانن.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isPrimitive(value)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی بۆ پشکنین بۆ جۆری پرایمیتڤ.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isPrimitive(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isPrimitive](‎../_analysis/isPrimitive.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 23:55:51 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>