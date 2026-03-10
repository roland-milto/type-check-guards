# areFalse

## Danasîn

`areFalse` پشکنین دەکات کە ئایا هەموو توخمەکان لە ئارەیەکی پێشکەشکراو بە توندی بولیانی `false` ـن.

### Bikaranîn

پشتڕاستکردنەوەی ئەوەی لیستێک لە feature flags، پشکنینەکان، یان ئەنجامەکانی guard هەموویان `false` ـن پێش ئەوەی بەردەوام
بیت (بۆ نموونە، دڵنیابوون لەوەی هیچ بارودۆخی قەدەغەکەرێک ئامادە نییە).

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> کاتێک پێویستت بە دڵنیایییەکی توند هەیە کە ئارەکە بەتاڵ نەبێت و تەنها بەها بولیانی `false` تێدایە، `areFalse`
> بەکاربهێنە.

### Avantaj

- دڵنیایی دەکات کە هەر توخمێک بە توندی `false` ـە (بێ گۆڕینی truthy/falsey).
- بۆ نا-ئارەیەکان یان ئارەی بەتاڵ `false` دەگەڕێنێتەوە، چونکە بە `isFilledArray` پێویستی بە ئارەی پڕ دەکات.
- بۆ کارامەیی، لە یەکەم توخمی نا-`false` وەست دەکات.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areFalse(array)`

Parametreyên:

- `array`: ئارەیەک بۆ پشکنین، کە توخمەکانی لە هەر جۆرێک دەتوانن بن.

### Importa fonksiyona herêmî

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // rast
const b = areFalse([false, true, false]);  // çewt
const c = areFalse([false, "false", false]); // çewt
const d = areFalse([]); // çewt
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areFalse(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areFalse](‎../_analysis/areFalse.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 16:17:41 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>