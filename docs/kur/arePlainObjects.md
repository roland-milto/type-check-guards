# arePlainObjects

## Danasîn

پشکنین دەکات کە ئایا هەموو توخمەکانی ئارایەکە ئۆبجێکتی سادەن، و تەنها ئەگەر هەر توخمێک شایستە بێت `true` دەگەڕێنێتەوە.

### Bikaranîn

داتا دەرەکی یان بێ-جۆر (وەک JSONی پارسکراو، payloadی API، ناردنەوەی فۆرم) پشتڕاست بکەوە بۆ دڵنیابوون لەوەی کە ئارایەیەکی
نەبەتاڵت وەرگرتووە کە هەر تێچوونێکی تێیدا ئۆبجێکتی سادەیە پێش ئەوەی بگەڕێیتەوە و تایبەتمەندییەکان بخوێنیتەوە.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `arePlainObjects` بەکاربهێنە بۆ دڵنیابوون لە هاتووچۆی نەناسراو پێش ئەوەی وەک `Record<string, unknown>[]` (یان شێوەی
> ئۆبجێکتی توندتر) لە TypeScriptدا مامەڵەی لەگەڵ بکەیت.

### Avantaj

- دڵنیایی دەکات کە هەر توخمێک لە ئارایەی هاتوو تەنها ئۆبجێکتێکی سادەیە، و تەنها ئەو کاتە `true` دەگەڕێنێتەوە کە هەموو
  دانەکان هاوشێوە بن.
- هاتووچۆی نادروست زوو ڕەت دەکاتەوە (نە-ئارایەکان یان ئارایە بەتاڵەکان) بە گەڕاندنەوەی `false`.
- هەردوو ئۆبجێکتی لێتێڕاڵی ئۆبجێکت و ئۆبجێکتەکانی `Object.create(null)` وەک ئۆبجێکتی سادەی دروست هەژمار دەکات.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `arePlainObjects(array)`

Parametreyên:

- `array`: ئەو ئارایەیە کە دەبێت بپشکنرێت بۆ توخمەکانی ئۆبجێکتی سادە.

### Importa fonksiyona herêmî

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // rast
const b = arePlainObjects([{}, Object.create(null)]); // rast
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // nerast
const d = arePlainObjects([] as unknown[]); // nerast
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.arePlainObjects(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [arePlainObjects](‎../_analysis/arePlainObjects.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 16:54:41 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>