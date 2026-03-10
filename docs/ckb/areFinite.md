# areFinite

## وەسف

`areFinite` پشکنین دەکات کە ئایا بەهایەک ئارایەکی بەتاڵ نەبێت و ئەندامەکانی هەموویان ژمارەی سنووردارن، ئەگەر وا بێت
`true` دەگەڕێنێتەوە و ئەگەر نا `false`.

### دۆخی بەکارهێنان

پشتڕاستکردنەوەی ئارایەکانی هاتووچۆی ژمارەیی (وەک زنجیرەی چارت، لیستی کۆئۆردینات، نموونەکانی پێوانە) پێش ئەنجامدانی
حسابکردن، بە دڵنیاییەوە کە ئەنجام `true` تەنها کاتێک دەبێت کە هەموو بەهاکان ژمارەی سنووردارن.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> کاتێک `areFinite` بەکاربهێنە کە پێویستتە دڵنیابیت ئارایەک بەتاڵ نییە و تەنها ژمارەی سنووردار تێدایە؛ بۆ ئارایە
> بەتاڵەکان و بۆ ئارایەکانی کە `NaN` یان بێکۆتایی تێدایە `false` دەگەڕێنێتەوە.

### سوودەکان

- تەنها کاتێک `true` دەگەڕێنێتەوە کە هاتووچۆکە ئارایەکی بەتاڵ نەبێت و هەموو ئەندامەکان ژمارەیەکی سنووردار بن.
- `Infinity`، `-Infinity`، و `NaN` ڕەت دەکاتەوە بە پشتبەستن بە پشکنینی `isFinite` بۆ هەر ئەندامێک.
- ئەنجامێکی بولیانی سادە (`true`/`false`) دابین دەکات کە گونجاوە بۆ گاردەکان و ڕێڕەوی پشتڕاستکردنەوە.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `areFinite(array)`

پارامەتەرەکان:

- `array`: ئەو ئارایەیە کە دەبێت پشکنین بکرێت بۆ سنوورداری هەموو ئەندامەکانی.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); //‎ ڕاست
console.log(areFinite(b)); //‎ هەڵە
console.log(areFinite(c)); //‎ هەڵە

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); //‎ 60
console.log(sumIfFinite([10, NaN, 30])); //‎ null
```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.areFinite(array)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [areFinite](‎../_analysis/areFinite.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 30 January 2026 at 16:34:10 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>