# areOctals

## Danasîn

`areOctals` دیاری دەکات کە ئایا بەهای پێشکەشکراو ئارایەیەکی بەتاڵ نەبووە لە دەقە ئۆکتالە دروستەکانە.

### Bikaranîn

`areOctals` بەکاربهێنە کاتێک داتای بەکارهێنەر، بەهاکانی ڕێکخستن، یان payload ـی API پشتڕاست دەکەیتەوە کە دەبێت ئۆکتال
لێترالەکان تێدایان بێت (بۆ نموونە مۆدی مۆڵەتدانی پەڕگە وەک `0o755`) و دەتەوێت ئارایە بەتاڵەکان یان هەر دانەیەکی نادروست
ڕەتبکەیتەوە بە گەڕاندنەوەی `false`.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areOctals` بەکاربهێنە بۆ دڵنیابوون لەوەی `unknown[]` ـێکی بەتاڵ نەبووت هەیە کە هەر دانەیەکی دەقێکی ئۆکتالی دروستە پێش
> ئەوەی بیگۆڕیت (بۆ نموونە بە `Number(...)` یان پارسکردنی تایبەت).

### Avantaj

- دڵنیایی دەکاتەوە کە بەهایەک ئارایەیەکی بەتاڵ نەبووە کە هەموو ئەندامەکانی دەقێکی ئۆکتالە، و تەنها کاتێک `true`
  دەگەڕێنێتەوە کە هەموو دانەکان تێپەڕبن.
- زوو دەوەستێت: هەر کاتێک یەکەم ئەندامی نا-ئۆکتال بدۆزرێتەوە، دەستبەجێ `false` دەگەڕێنێتەوە.
- وەک پارێزەرێک پێش پارسکردن یان گۆڕینی دەقە ئۆکتالەکان بەکاردهێنرێت بۆ دوورخستنەوەی هەڵەکانی کاتی جێبەجێکردن و چارەسەری
  ناهاوسەنگی لە هەڵسوکەوتی هاتووچۆی داتا.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areOctals(array)`

Parametreyên:

- `array`: ئەو بەهایەی دەبێت پشکنرێت.

### Importa fonksiyona herêmî

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  //‎ value rêzeya nevala ya têkçûyî ya rêzên nivîsî yên oktal e
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areOctals(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areOctals](‎../_analysis/areOctals.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 14:57:10 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>