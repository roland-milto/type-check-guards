# areOfType

## وەسف

پشکنین دەکات کە ئایا هەموو ئەندامەکانی `array` ـی دراو لە جۆری دیاریکراوی `type` ـن.

### دۆخی بەکارهێنان

لە `areOfType` بەکاربهێنە بۆ پشتڕاستکردنەوەی هاتووچۆی نەزانراو (وەک JSON ـی پارسکراو، payload ـی API، هاتووچۆی
بەکارهێنەر) پێش ئەنجامدانی کردارە تایبەتمەند بە جۆر لەسەر هەموو ئەندامەکانی ئارەیەک.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> لەبەر ئەوەی `areOfType` type guard ـە، TypeScript ئارەکە لەناو بلۆکی `if (areOfType(...)) {}` ـدا دەکەمێنێتەوە بۆ
`Array<DataTypeOf<T>>`.

### سوودەکان

- پێشکەشکردنی TypeScript type guard: کاتێک `true` دەگەڕێنێتەوە، هاتووچۆکە دەکرێتەوە بۆ `Array<DataTypeOf<T>>`.
- هەموو ئەندامێک پشتڕاست دەکاتەوە بەرامبەر جۆری runtime داواکراو، و ڕێگە نادات ئارەیەکی تێکەڵ-جۆر تێپەڕبێت.
- زوو دەشکێت: هەر کاتێک ئەندامێکی ناگونجاو بدۆزرێتەوە، دەستبەجێ `false` دەگەڕێنێتەوە.
- بە شێوەی بنەڕەتی نا-ئارە و ئارەی بەتاڵ ڕەت دەکاتەوە (پەیوەستە بە `isFilledArray`).

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `areOfType(array, type)`

پارامەتەرەکان:

- `array`: ئەو ئارەیەی دەبێت پشکنرێت.
- `type`: ئەو جۆرەی دەبێت بەرامبەر هەر ئەندامێک لە ئارەکەدا پشکنرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  //‎‎ values ئێستا number[] ـە
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); //‎ false

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.areOfType(array, type)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [areOfType](‎../_analysis/areOfType.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 17:09:03 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>