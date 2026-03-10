# areDates

## Danasîn

`areDates` دیاری دەکات کە ئایا ئارایەکی دیاریکراو پڕە و تەنها `Date` ـی تێدایە، و تەنها ئەو کاتە `true` دەگەڕێنێتەوە کە
هەموو ئەندامەکان بەرواری دروستن.

### Bikaranîn

`areDates` بەکاربهێنە بۆ پشتڕاستکردنەوەی دەرچووی نەناسراو (وەک JSON ـی پارسکراو، داتای فۆرم، payload ـی API) پێش ئەوەی
لۆجیکی تایبەت بە بەروار جێبەجێ بکەیت وەک ڕیزکردن بە پێی کات، فۆرماتکردن، یان هەژمارکردنی مەودا.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> تەنها بۆ ئارایە نابەتاڵەکان `true` دەگەڕێنێتەوە کە هەموو ئەندامەکانیان `Date` بن؛ ئارایە بەتاڵەکان `false` دەدەنەوە.

### Avantaj

- پێش لەوەی ناوەڕۆکی ئارایەکە پشتڕاست بکرێتەوە، دڵنیایی دەکات کە ئارایەکە بەتاڵ نییە، وەک ئەوەی بۆ دەرچووی بەتاڵ `true`
  نەگەڕێنێتەوە.
- هەموو ئەندامێک پشتڕاست دەکاتەوە کە نموونەیەکی `Date` ـە، و لە یەکەم ناهاوشێوەدا دەستبەجێ `false` دەگەڕێنێتەوە.
- وەک پشکنینێکی شێوازی guard سوودمەندە پێش ئەنجامدانی کارە تایبەت بە بەروار لەسەر ئەندامەکانی ئارایەکە.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areDates(array)`

Parametreyên:

- `array`: ئارایەکە کە دەبێت بپشکنرێت بۆ `Date` ـەکان.

### Importa fonksiyona herêmî

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // rast
console.log(areDates(b)); // nerast
console.log(areDates(c)); // nerast

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areDates(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areDates](‎../_analysis/areDates.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 15:31:10 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>