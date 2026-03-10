# areBuffers

## Danasîn

`areBuffers` دەسەلمێنێت کە ئایا بەهای پێشکەشکراو ئارایەیەکی بەتاڵ نەبوو و پڕە کە هەر توخمێکی `Buffer` ـە، ئەگەر وابێت
`true` دەگەڕێنێتەوە و ئەگەر نا `false`.

### Bikaranîn

پشتڕاستکردنەوەی ئارایەکانی پارچەی هاتوو (وەک لە stream ـەکان، بارکردنی فایل، یان پاکێتەکانی تۆڕ) بۆ دڵنیابوون لەوەی
هەموو بەشەکان `Buffer` ـن پێش یەکخستنەوە، دیکۆدکردن، یان ناردنیان بۆ فانکشنەکانی کریپتۆگرافی یان پڕۆسەکردنی باینەری.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areBuffers` بەکاربهێنە بۆ پشتڕاستکردنەوەی `unknown[]` پێش بانگکردنی API ـە تایبەتەکانی Buffer وەک `Buffer.concat`، بۆ
> ئەوەی دڵنیابیت فانکشنەکە تەنها کاتێک `true` دەگەڕێنێتەوە کە هەر توخمێک `Buffer` بێت.

### Avantaj

- دڵنیایی دەکات کە هەر توخمێک لە ناوەڕۆکی هاتوو `Buffer`-ێکی Node.js ـە، و تەنها کاتێک `true` دەگەڕێنێتەوە کە تەواوی
  ئارایەکە هاوشێوە بێت.
- هاتووچووی نادروست زوو ڕەت دەکاتەوە بە پێویستکردنی ئارایەکی بەتاڵ نەبوو و پڕ؛ بۆ ئارایە بەتاڵ یان نە-ئارایە `false`
  دەگەڕێنێتەوە.
- وەک پاسەوانێک بەسوودە پێش ئەنجامدانی کارە تایبەت بە بافەر (وەک یەکخستنەوە، هاشکردن، پڕۆتۆکۆڵە باینەرییەکان).

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areBuffers(array)`

Parametreyên:

- `array`: ئەو ئارایەیە کە دەبێت بپشکنرێت بۆ بوونی نموونەکانی بافەر.

### Importa fonksiyona herêmî

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

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areBuffers(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areBuffers](‎../_analysis/areBuffers.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 16:26:08 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>