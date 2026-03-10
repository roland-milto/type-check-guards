# areWeakMaps

## Danasîn

`areWeakMaps` دەپشکنێت کە ئایا بەهایەک ئارایەیەکی نەنەوە (non-empty) ـە کە هەر ئەندامێکی `WeakMap` ـە، تەنها لەو
حاڵەتەدا `true` دەگەڕێنێتەوە و لە حاڵەتەکانی تر `false`.

### Bikaranîn

داتای کاتی ڕەنەوە پشتڕاست بکەوە (وەک JSON ـی پارسکراو، تێچووی پلاگین، یان ڕێکخستنی شل-جۆر) بۆ دڵنیابوون لەوەی ئارایەیەکی
نەنەوەی نموونەکانی `WeakMap` ـە پێش ئەوەی بگەڕێیتەوە بەسەریدا و مێتۆدەکانی `WeakMap` بانگ بکەیت؛ کاتێک هەر ئەندامێک
`WeakMap` نەبێت یان ئارایەکە بەتاڵ بێت `false` دەگەڕێنێتەوە.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areWeakMaps` بەکاربهێنە بۆ پشتڕاستکردنەوەی تێچووی نەناسراو پێش ئەوەی وەک `WeakMap[]` ـێکی نەنەوە مامەڵەی لەگەڵ بکەیت؛
> بۆ ئارایە بەتاڵەکان `false` دەگەڕێنێتەوە.

### Avantaj

- دڵنیایی دەکات کە هەر ئەندامێک لە ئارایەی پێشکەشکراو نموونەیەکی `WeakMap` ـە.
- بۆ ئارایە بەتاڵەکان `false` دەگەڕێنێتەوە، وەک ڕێگری لە وەرگرتنی هەڵەیی “هیچ داتا نییە” وەک تێچووی دروست.
- وەک پاسەوانێک بەسوودە پێش ئەنجامدانی کارە تایبەتەکانی `WeakMap` لەسەر هەموو بڕگەکان.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areWeakMaps(array)`

Parametreyên:

- `array`: ئەو ئارایەیەی دەپشکنرێت بۆ بوونی نموونەکانی `WeakMap`.

### Importa fonksiyona herêmî

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  //‎ list rêzeyekî ne vala ye ji nimûneyên WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  //‎ ne rêzeyekî ne vala ya WeakMap[]
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areWeakMaps(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areWeakMaps](‎../_analysis/areWeakMaps.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 13:38:13 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>