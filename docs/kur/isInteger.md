# isInteger

## Danasîn

دیاری دەکات کە `value` ـێکی دیاریکراو ژمارەیەکی تەواوی سەلامەتە یان نا.

### Bikaranîn

هاتووچووی بێ متمانە پشتڕاست بکەوە (وەک query params، payload ـەکانی JSON، گۆڕاوەکانی ژینگە) پێش ئەوەی وەک ژمارەی تەواو
بەکاریبهێنیت بۆ ئیندێکسەکانی ئارەی، پەڕەکردن (pagination)، ژمێرەرەکان، یان ID ـەکانی بنکەدراوە.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isInteger` بەکاربهێنە بۆ پشتڕاستکردنەوەی هاتووچووی نەناسراو پێش ئەوەی وەک ژمارەیەکی تەواو بەکاریبهێنیت؛ تەنها ئەو
> کاتە `true` دەگەڕێنێتەوە کە `typeof value === "number"` و `Number.isSafeInteger(value)` ڕاست بن.

### Avantaj

- هەردوو جۆر و سەلامەتی ژمارەیی پشکنین دەکات: تەنها ئەو کاتە `true` دەگەڕێنێتەوە کە هاتووچووەکە ژمارە بێت و ژمارەیەکی
  تەواوی سەلامەت بێت.
- لە هەڵە باوەکان لەگەڵ گۆڕینی ژمارەیی ڕێگری دەکات: ڕیزەنووسەکان وەک "5" بە دروستی `false` دەگەڕێننەوە.
- ژمارە تەواو نەبوون و ژمارە تەواوی ناسەلامەت ڕەت دەکاتەوە، بۆیە گونجاوە بۆ ID، ژمێرەرەکان، و ئیندێکسکردنی ئارەی.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isInteger(value)`

Parametreyên:

- `value`: ئەو بەهایەی کە دەبێت بپشکنرێت بۆ دۆخی ژمارە تەواو.

### Importa fonksiyona herêmî

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // rast
const b = isInteger(-100);   // rast
const c = isInteger("5");    // nerast
const d = isInteger(5.5);    // nerast
const e = isInteger(null);   // nerast

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isInteger(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isInteger](‎../_analysis/isInteger.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 00:50:35 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>