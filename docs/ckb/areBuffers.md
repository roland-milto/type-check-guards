# areBuffers

## وەسف

`areBuffers` دەپشکنێت ئایا بەهای پێشکەشکراو ئارایەیەکی نەنەخاڵی و پڕە کە هەر توخمێکی `Buffer` ـە، ئەگەر وابێت `true`
دەگەڕێنێتەوە و ئەگەر نا `false`.

### دۆخی بەکارهێنان

پشتڕاستکردنەوەی ئارایەکانی chunk ـی هاتوو (وەک لە stream ـەکان، بارکردنی فایل، یان پاکێتەکانی تۆڕ) بۆ دڵنیایی لەوەی
هەموو بەشەکان نموونەی `Buffer` ـن پێش یەکخستن، دیکۆدکردن، یان ناردنیان بۆ فەنکشەنەکانی کریپتۆگرافی یان پرۆسەکردنی
باینەری.

> **تێبینی بۆ بەکارهێنەرانی TypeScript:**
>
> `areBuffers` بەکاربهێنە بۆ پشتڕاستکردنەوەی `unknown[]` پێش بانگکردنی API ـە تایبەتەکانی Buffer وەک `Buffer.concat`، بۆ
> دڵنیایی لەوەی فەنکشەنەکە تەنها کاتێک `true` دەگەڕێنێتەوە کە هەر توخمێک `Buffer` بێت.

### سوودەکان

- دڵنیایی دەکات کە هەر توخمێک لە دەرچوویەکەدا نموونەیەکی Node.js `Buffer` ـە، و تەنها کاتێک `true` دەگەڕێنێتەوە کە
  تەواوی ئارایەکە هاوشێوە بێت.
- دەرچووە نادروستەکان زوو ڕەت دەکاتەوە بە پێویستکردنی ئارایەکی پڕ و نەنەخاڵی؛ بۆ ئارایە بەتاڵ یان نە-ئارایەکان `false`
  دەگەڕێنێتەوە.
- وەک پاسەوانێک بەسوودە پێش ئەنجامدانی کردارە تایبەت بە buffer ـەکان (وەک یەکخستن، هاشکردن، پرۆتۆکۆڵە باینەرییەکان).

## بەکارهێنان

### ڕستەسازی

فەنکشەن:

- `areBuffers(array)`

پارامەتەرەکان:

- `array`: ئارایەکە کە دەبێت بپشکنرێت بۆ بوونی نموونەکانی buffer.

### هاوردەکردنی فەنکشەن بە شێوەی ناوخۆیی

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### هاوردەکردنی ئۆبجێکت بە شێوەی گشتی

بۆ هاوردەکردنی فەنکشەنەکان وەک مێتۆدی ئۆبجێکتی گشتی, ئەمە بەکاربهێنە:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پاشان ئەم مێتۆدە بە شێوەی گشتی بەردەست دەبێت:

- `Type.areBuffers(array)`

## شیکردنەوەی فەنکشەن

لێرە شیکردنەوەیەکی خشتەیی تۆمار کراوە کە دەری دەخات کە لە کاتی دانانی پارامەتەرە جۆراوجۆرەکان بۆ فەنکشەنەکان, چی
دەرئەنجامێک دروست دەبێت: [areBuffers](‎../_analysis/areBuffers.md‎)

<br>

---

<small>ئەم پەڕگەیە لە 31 January 2026 at 16:24:46 (UTC) بە بەکارهێنانی *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** لەلایەن *
*[Roland Milto](https://roland-milto.de/)** دروست کرا.</small>