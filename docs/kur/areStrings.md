# areStrings

## Danasîn

`areStrings` پشکنین دەکات کە ئایا ئارایەکە نەنەوەیە و هەموو توخمەکانی شتڕینگن، و تەنها لەو حاڵەتەدا `true` دەگەڕێنێتەوە.

### Bikaranîn

دڵنیابوون لە داتای دەرەکی یان بەکارهێنەر-پێشکەشکراو (وەک پارامێتەری پرسیار، payloadی JSON، خانەکانی CSV) بۆ ئەوەی
دڵنیابیت کە پێت لیستێکی نەنەوەی شتڕینگەکان هەیە پێش پڕۆسەکردن.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areStrings` بەکاربهێنە بۆ پشتڕاستکردنەوەی ئارایە نادیارەکان پێش جێبەجێکردنی لۆژیکی تەنها-شتڕینگ؛ بۆ ئارایە بەتاڵەکان
`false` دەگەڕێنێتەوە.

### Avantaj

- هەر دڵنیا دەکاتەوە کە هەر توخمێک شتڕینگە و ئارایەی تێکەڵ-جۆر ڕەت دەکاتەوە بە گەڕاندنەوەی `false`.
- ئارایە بەتاڵەکان ڕەت دەکاتەوە، بۆیە `true` تەنها ئەوە دەگەیەنێت کە لیستێکی نەنەوەی شتڕینگەکان هەیە.
- وەک پارێزەری خێرای کاتی-جێبەجێکردن بەسوودە پێش ئەنجامدانی کارەکانی تەنها-شتڕینگ (وەک `trim`، `toLowerCase`).

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areStrings(value)`

Parametreyên:

- `value`: Expected type `string[]`.

### Importa fonksiyona herêmî

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  //‎ input di dema runtime de string[] ya ne-teng e
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areStrings(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areStrings](‎../_analysis/areStrings.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 13:19:16 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>