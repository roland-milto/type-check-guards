# isWeakSet

## وەسف

دیاری دەکات ئایا `value` ـی دراو `WeakSet` ـێکی شتەکانە.

### دۆخی بەکارهێنان

کاتێک `isWeakSet` بەکاربهێنە کە هاتوویەکی بێ-جۆر وەردەگریت (وەک لە API ـە دەرەکییەکانەوە، ڕێکخستنی دینامیکی، یان
بەهاکانی `unknown`) و پێویستت بەوەیە دڵنیابیت کە `WeakSet` ـە پێش ئەوەی کارە تایبەتییەکانی `WeakSet` بەکاربهێنیت.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> لە `isWeakSet` بەکاربهێنە بۆ سنووردارکردنی بەهایەکی `unknown` بۆ `WeakSet<object>` لە کاتی جێبەجێبوون؛ تێبینی بکە کە
`WeakSet` تەنها دەتوانێت ئاماژەی شت (object references) لەخۆ بگرێت.

### سوودەکان

- پشکنینێکی سادەی کاتی جێبەجێبوون دابین دەکات بۆ ئەوەی بزانرێت ئایا بەهایەک `WeakSet` ـە.
- یارمەتی دەدات هەڵەکانی جۆر (type errors) ڕێگری لێبکرێت بە دڵنیابوون لەوەی تەنها نموونەکانی `WeakSet` وەک ئەوان
  مامەڵەیان لەگەڵ دەکرێت.
- لەگەڵ هەر هاتوویەکی `unknown` کار دەکات و ئەنجامێکی ڕوونی boolean دەگەڕێنێتەوە (`true`/`false`).

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isWeakSet(value)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی دەبێت پشکنرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); //‎ true
console.log(isWeakSet(b)); //‎ false

if (isWeakSet(a)) {
  //‎‎ a لە کاتی ڕەنکردنەوەدا WeakSet ـە
}
```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isWeakSet(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isWeakSet](‎../_analysis/isWeakSet.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 14:14:29 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>