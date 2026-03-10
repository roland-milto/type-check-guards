# areFilledArrays

## Danasîn

`areFilledArrays` دەپشکنێت کە ئایا ئارایەکی دوو-ڕەهەندی بەتاڵ نییە و هەموو ئارای ناوەوەکانیش بەتاڵ نین.

### Bikaranîn

بەکارهێنانی `areFilledArrays` بۆ دڵنیابوون لە دروستیی داتای خشتەیی یان ماتریس-وەک (وەک ڕیزەکانی CSV، داتای گرید، ئەنجامە
گرووپکراوەکان) بۆ ئەوەی بە ئاسانی دڵنیابیت کە لانی کەم یەک ئارای ناوەوە هەیە و هیچ یەکێک لە ئارای ناوەوەکان بەتاڵ نییە.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> کاتێک `areFilledArrays` بەکاربهێنە کە پێویستت بە دڵنیاییە کە ئارایەکی 2D لانی کەم یەک ڕیز هەیە و هەر ڕیزێک لانی کەم
> یەک ئەندام هەیە پێش ئەوەی لەسەری بگەڕێیتەوە یان ئیندێکس بکەیت.

### Avantaj

- دڵنیایی دەکاتەوە کە ئارای دەرەوە بەتاڵ نییە و هەموو ئارای ناوەوەکانیش بەتاڵ نین، تەنها کاتێک `true` دەگەڕێنێتەوە کە
  هەردوو مەرجەکە پێکەوە جێبەجێ بن.
- لەگەڵ هەر جۆرێک لە جۆری ئەندامەکان لە ناو ئارای بچووکەکاندا کار دەکات (وەک ژمارەکان، دەقەکان، شتەکان، ئارای ناوەندراو)
  چونکە تەنها دۆخی “پڕبوون”ی ئارایەکە دەپشکنێت، نە ناوەڕۆکی ئەندامەکان.
- ئەنجامێکی سادەی بوولیان (`true`/`false`) پێشکەش دەکات کە گونجاوە بۆ گارد/پارێزەر پێش پرۆسەکردنی داتای دوو-ڕەهەندی.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areFilledArrays(array)`

Parametreyên:

- `array`: ئارای دوو-ڕەهەندییەکە بۆ پشکنین.

### Importa fonksiyona herêmî

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // rast
console.log(areFilledArrays(b)); // rast
console.log(areFilledArrays(c)); // rast
console.log(areFilledArrays(d)); // çewt
console.log(areFilledArrays(e)); // çewt
console.log(areFilledArrays(f)); // çewt

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areFilledArrays(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areFilledArrays](‎../_analysis/areFilledArrays.md‎)

<br>

---

<small>Ev pel di 6 February 2026 at 11:57:39 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>