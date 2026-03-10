# areRegExes

## Danasîn

`areRegExes` پشکنین دەکات کە ئایا بەهایەک ئارایەیەکی پڕە کە تەنها `RegExp` ـەکان لەخۆ دەگرێت.

### Bikaranîn

پشتڕاستکردنەوەی ئەوە کە هەڵبژاردەیەکی ڕێکخستن (بۆ نموونە، لیستێک لە پاتێرنەکانی ڕێگەپێدان/قەدەغەکردن) ئارایەیەکی بەتاڵ
نەبێت لە ڕێژە-دەربڕینەکان پێش ئەوەی بۆ هاوتاکردن بەکاربهێنرێت.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areRegExes` بەکاربهێنە بۆ ئەوەی `unknown` باریک بکەیتەوە بۆ `RegExp[]` پێش ئەوەی بگەڕێیتەوە لەسەر یان پاتێرنەکان
> پێکبهێنیت.

### Avantaj

- دڵنیایی دەکات کە بەهایەک ئارایەیەکی بەتاڵ نەبێت و هەموو ئەندامەکانی نموونەیەکی `RegExp` بن.
- پارێزگارییەکی سادەی بوولەیی (`true`/`false`) دابین دەکات بۆ پشتڕاستکردنەوەی تێخستەی بەکارهێنەر یان ڕێکخستن.
- یارمەتی دەدات هەڵەکانی کاتی جێبەجێبوون ڕێگری بکرێت کاتێک کۆدی دواتر وادەزانێت هەموو دانەکان پشتگیریی کارەکانی
  ڕێژە-دەربڕین دەکەن.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areRegExes(array)`

Parametreyên:

- `array`: ئەو بەهایەی کە دەبێت پشکنرێت.

### Importa fonksiyona herêmî

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  //‎ patterns li vir rêzekê ya RegExp e li vir
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areRegExes(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areRegExes](‎../_analysis/areRegExes.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 23:19:40 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>