# areBooleans

## وەسف

`areBooleans` دەپشکنێت کە ئایا ئارایەیەکی دیاریکراوی بەتاڵ نەبوو تەنها لە بەهاکانی boolean پێکهاتووە، ئەگەر وابێت `true`
دەگەڕێنێتەوە و ئەگەر نا `false`.

### دۆخی بەکارهێنان

دڵنیابوون لە داتای پێشکەشکراوی بەکارهێنەر یان داتای دەرەکی (وەک payload ـی JSON، query params، ئارایەکانی config) بۆ
ئەوەی دڵنیابیت لیستێکی بەتاڵ نەبوو تەنها boolean ـەکان تێدایە پێش ئەوەی لۆژیکی boolean جێبەجێ بکەیت یان بیگوازیتەوە بۆ
API ـیەکان کە `boolean[]` داوادەکەن.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `areBooleans` بەکاربهێنە بۆ پشتڕاستکردنەوەی `unknown[]` پێش ئەوەی وەک `boolean[]` مامەڵەی لەگەڵ بکەیت؛ بۆ ئارایە
> بەتاڵەکان `false` دەگەڕێنێتەوە، بۆیە ئەگەر لیستی بەتاڵ دەبێت ڕێگەپێدراو بێت، ئەو حاڵەتە بە شێوەیەکی ڕوون چارەسەر بکە.

### سوودەکان

- تەنها ئەو کاتە `true` دەگەڕێنێتەوە کە هەموو ئەندامەکان boolean بن و هاتووچۆکەش ئارایەیەکی بەتاڵ نەبێت.
- ڕێگری لە هەڵە-ئەنجامەکان دەکات بە ڕەتکردنەوەی ئارایە بەتاڵەکان (`false` دەگەڕێنێتەوە).
- وەک پاسەوانی کاتی-جێبەجێکردن باش کار دەکات پێش ئەو کارەکردنەوەی تەنها-boolean (وەک `every`، `some`، کەمکردنەوەی
  لۆژیکی).

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `areBooleans(array)`

پارامەتەرەکان:

- `array`: ئەو ئارایەیەی دەبێت بپشکنرێت بۆ ئەندامە boolean.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.areBooleans(array)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [areBooleans](‎../_analysis/areBooleans.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 14:39:45 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>