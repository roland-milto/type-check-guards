# isBuffer

## وەسف

پشکنین دەکات کە ئایا نرخێک Node.js `Buffer` ـە و `true` یان `false` دەگەڕێنێتەوە.

### دۆخی بەکارهێنان

دەرچوونەکان لە کاتی جێبەجێکردندا پشتڕاست بکەوە (وەک payload ـی API، داتای فایل، یان بافەرەکانی پەیام) بۆ ئەوەی دڵنیابیت
نرخەکە `Buffer` ـە پێش پرۆسەکردنی، و بە دڵنیایی `false` وەربگرە کاتێک لە دەرەوەی Node.js کار دەکەیت کە `Buffer` لەوانەیە
بوونی نەبێت.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isBuffer` بەکاربهێنە بۆ ئەوەی نرخەکانی `unknown` بۆ `Buffer` توند بکەیتەوە پێش ئەوەی مێتۆدە تایبەتەکانی Buffer بانگ
> بکەیت.

### سوودەکان

- بە شێوەیەکی پارێزراو نموونەکانی Node.js `Buffer` دەدۆزێتەوە بە بەکارهێنانی `Buffer.isBuffer`.
- لە ژینگەکاندا کە `Buffer` بەردەست نییە `false` دەگەڕێنێتەوە، وەک ئەوەی هەڵەی کاتی جێبەجێکردن ڕوونەدات.
- لەگەڵ دەرچووی `unknown` کار دەکات، بۆیە گونجاوە بۆ پشتڕاستکردنەوەی کاتی جێبەجێکردن و توندکردنەوەی جۆر.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isBuffer(value)`

پارامەتەرەکان:

- `value`: ئەو نرخەی کە دەبێت تاقی بکرێتەوە.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); //‎ ڕاست
console.log(isBuffer(b)); //‎ هەڵە

if (isBuffer(a)) {
  //‎‎ لێرەدا a بوفەرە
  console.log(a.toString("utf8"));
}
```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isBuffer(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isBuffer](‎../_analysis/isBuffer.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 31 January 2026 at 16:31:13 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>