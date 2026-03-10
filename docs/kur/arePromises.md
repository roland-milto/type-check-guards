# arePromises

## Danasîn

`arePromises` دیاری دەکات ئایا هەموو توخمەکانی ناو ئارایەک `Promise` ـن.

### Bikaranîn

پشتڕاستکردنەوە کە لیستێکی بە شێوەی دینامیکی دروستکراو یان لە دەرەوە دابینکراو تەنها promise ـەکان لەخۆ دەگرێت پێش ئەوەی
کۆیان بکەیتەوە (بۆ نموونە بە `Promise.all`).

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `arePromises` بەکاربهێنە بۆ پشتڕاستکردنەوەی `unknown[]` پێش بانگکردنی `Promise.all` یان هەر کارێکی تەنها-بۆ-promise؛
> بۆ ئارایە بەتاڵەکان `false` دەگەڕێنێتەوە.

### Avantaj

- دڵنیایی دەکات کە هەر توخمێک `Promise` ـە پێش ئەوەی بەردەوام بیت بە لۆجیکی تایبەت بە promise.
- `false` دەگەڕێنێتەوە بۆ ئارایە نەپرکراوەکان، وەک دژ بە ئەنجامە ناڕوونەکان بۆ هاتووچۆی بەتاڵ.
- وەک پارێزەری کاتی-جێبەجێکردن بەسوودە کاتێک لەگەڵ `unknown[]` کار دەکەیت کە لە سەرچاوە دەرەکییەکانەوە دێت.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `arePromises(array)`

Parametreyên:

- `array`: ئەو ئارایەیە کە دەپشکنرێت بۆ بوونی نموونەکانی Promise.

### Importa fonksiyona herêmî

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  //‎ values di dema runtime de rêza Promise-yan e
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.arePromises(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [arePromises](‎../_analysis/arePromises.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 23:48:58 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>