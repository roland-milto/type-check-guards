# isRegEx

## وەسف

دیاری دەکات ئایا بەهای پێشکەشکراو instance ـێکی `RegExp` ـە.

### دۆخی بەکارهێنان

پشتڕاستکردنەوەی بەها دابینکراوە لەلایەن بەکارهێنەر یان بەها دینامیکییەکان (بۆ نموونە، configuration، API payloads،
plugin inputs) پێش ئەوەی وەک regular expression مامەڵەیان لەگەڵ بکرێت.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isRegEx` بەکاربهێنە بۆ تەنککردنەوەی بەهاکانی `unknown` (یان union) پێش بەکارهێنانی تایبەتمەندی یان مێتۆدە تایبەتەکانی
> RegExp؛ تەنها کاتێک `true` دەگەڕێنێتەوە کە بەهاکان instance ـی `RegExp` بن.

### سوودەکان

- پارێزەری جۆری کاتی جێبەجێکردنێکی سادە دابین دەکات بۆ پشکنینی ئەوەی ئایا بەهایەک `RegExp` ـە.
- یارمەتی دەدات هەڵەکان ڕێگری بکرێن کاتێک کۆد چاوەڕوانی regular expression ـە (بۆ نموونە، پێش بانگکردنی `test`، `exec`،
  یان خوێندنەوەی `source`).
- لەگەڵ هەردوو regex literal ـەکان و ئەو instance ـانەی بە `new RegExp(...)` دروست دەکرێن کار دەکات.
- ئەنجامێکی ڕوون بە شێوەی boolean (`true`/`false`) دەگەڕێنێتەوە بەبێ ئەوەی بۆ input ـە ناریگێکسەکان هەڵە فڕێبدات.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isRegEx(value)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی دەبێت پشکنین بکرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  //‎‎ input لێرە RegExp ـە
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isRegEx(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isRegEx](‎../_analysis/isRegEx.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 23:28:57 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>