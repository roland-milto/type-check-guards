# areNull

## وەسف

پشکنین دەکات ئایا هەموو ئەندامەکان لە `array` ـی دراو `null` ـن.

### دۆخی بەکارهێنان

دڵنیابوون لەوەی ستوونی داتاسێتێک، لیستی خانەکانی API، یان ئارایەکی placeholder تەنها بەهاکانی `null` تێدایە پێش ئەوەی
لۆجیکی جێبەجێ بکەیت کە وا دەزانێت هەموو تێچوونەکان بە ئەنقەست بەتاڵن.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `areNull` بەکاربهێنە کاتێک پێویستت بە پشکنینێکی توند هەیە کە هاتووەکە ئارایەکی نەنەوە (non-empty) بێت و هەر ئەندامێک
> بە تەواوی `null` بێت (نە `undefined`، نە بەها فالسێکان).

### سوودەکان

- تەنها ئەو کاتە `true` دەگەڕێنێتەوە کە هەموو ئەندامەکان `null` بن، کە وەک پارێزەری توندی «هەموو یەکسانن» کار دەکات.
- ئارای نەبوون و ئارای بەتاڵ بە گەڕاندنەوەی `false` ڕەت دەکاتەوە، بۆ ئەوەی لەسەر هاتووەکی نادروست ئەنجامی بەهەڵەی truthy
  ڕوونەدات.
- وەک پشکنینی پێشەکی (precondition) باش کار دەکات پێش پرۆسەکردنی داتایەک کە دەبێت بە تەواوی `null` بێت.

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `areNull(array)`

پارامەتەرەکان:

- `array`: ئارایەی هاتوو بۆ پشکنین بۆ ئەندامەکانی `null`.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); //‎ true
const allNullB = areNull(b); //‎ false

const notAnArray = areNull(123 as unknown as unknown[]); //‎ false
const empty = areNull([]); //‎ false

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.areNull(array)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [areNull](‎../_analysis/areNull.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 31 January 2026 at 15:42:51 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>