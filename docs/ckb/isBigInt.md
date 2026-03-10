# isBigInt

## وەسف

`isBigInt` پشکنین دەکات کە ئایا بەهایەکی دیاریکراو لە جۆری `bigint` ـە، بۆ BigInt ـی بنەڕەتی `true` دەگەڕێنێتەوە و بۆ
ئەوانەی تر `false`.

### دۆخی بەکارهێنان

ڕاستکردنەوە و سنووردارکردنی بەهاکان کە لە سەرچاوە بێ-جۆر دێن (وەک JSON parsing، تێخستنی بەکارهێنەر، API ـی دەرەکی) پێش
ئەنجامدانی هەژماری تایبەت بە BigInt یان هەڵگرتنیان لە خانەکانی تەنها-بۆ BigInt.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `isBigInt` بەکاربهێنە بۆ سنووردارکردنی `unknown` بۆ `bigint` پێش ئەوەی ژمێریاری BigInt بکەیت (وەک `+`, `*`) کە پێویستی
> بە operand ـی BigInt هەیە.

### سوودەکان

- پشکنینیەکی سادە و متمانەپێکراوی کاتی جێبەجێبوون دابین دەکات بۆ جۆری بنەڕەتی `bigint`.
- یارمەتیدەدات بە سنووردارکردنی بەهاکانی `unknown` پێش ئەنجامدانی کارەکانی تەنها-بۆ BigInt.
- لە هەڵە-ئەنجامەکان دوور دەکاتەوە: ژمارە ئاساییەکان، ڕیزبەندەکان، و جۆرەکانی تر `false` دەگەڕێننەوە.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `isBigInt(value)`

پارامەتەرەکان:

- `value`: ئەو بەهایەی دەبێت پشکنرێت.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); //‎ ڕاستە
console.log(isBigInt(10));  //‎ هەڵە
console.log(isBigInt("10")); //‎ هەڵە
```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.isBigInt(value)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [isBigInt](‎../_analysis/isBigInt.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 31 January 2026 at 23:31:27 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>