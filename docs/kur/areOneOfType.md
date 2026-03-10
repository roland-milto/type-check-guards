# areOneOfType

## Danasîn

`areOneOfType` پشکنین دەکات کە ئایا هەموو توخمەکانی array ـێکی نابەتاڵ لە یەکێک لە جۆرە runtime ـی دیاریکراوەکانن.

### Bikaranîn

پشتڕاستکردنەوەی داتای هاتوو (وەک JSON ـی پارسکراو) کە تێیدا خانەیەک دەبێت array ـێکی نابەتاڵ بێت و توخمەکانی سنووردار بن
بە کۆمەڵێکی ناسراو لە جۆرە بنچینەییەکان؛ `false` بگەڕێنەوە کاتێک array ـەکە بەتاڵە یان هەر جۆرێکی قەدەغەکراوی تێدایە.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> ئەم فەنکشنە boolean دەگەڕێنێتەوە و لە کاتی compile ـدا جۆری توخمەکانی array باریک ناکات؛ وەک هەنگاوێکی پشتڕاستکردنەوەی
> runtime بەکاری بهێنە پێش ئەوەی پرۆسەی زیاتر بکەیت.

### Avantaj

- دڵنیایی دەکات کە هەر توخمێک لە ناو array ـێکدا لەگەڵ لانیکەم یەک جۆری runtime ـی ڕێگەپێدراو دەگونجێت، و تەنها کاتێک
  `true` دەگەڕێنێتەوە کە تەواوی array ـەکە سەرکەوتوو بێت.
- زود هەڵەی تێچوونەکان ڕەت دەکاتەوە: کاتێک `array` یان `types` بەتاڵ بێت یان array ـێکی پڕنەبوو بێت `false`
  دەگەڕێنێتەوە.
- بەسوودە بۆ پشتڕاستکردنەوەی کۆمەڵەی جۆراوجۆر (وەک ژمارە و نووسین) بە یەک بانگکردنەوەی `areOneOfType`.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areOneOfType(array, types)`

Parametreyên:

- `array`: Array ـێک لە توخمەکان بۆ پشتڕاستکردنەوە لەسەر بنەمای جۆرە پێشکەشکراوەکان.
- `types`: Array ـێک لە string ـەکان کە جۆرەکانی داتا پیشان دەدات بۆ ئەوەی پشکنین بکرێت.

### Importa fonksiyona herêmî

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areOneOfType(array, types)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areOneOfType](‎../_analysis/areOneOfType.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 23:37:39 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>