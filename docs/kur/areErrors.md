# areErrors

## Danasîn

دەپشکنێت کە ئارایەک نابێت بەتاڵ بێت و تەنها ئۆبجێکتەکانی `Error` تێدایە، و `true` یان `false` دەگەڕێنێتەوە.

### Bikaranîn

دڵنیابوون لەوەی `unknown[]` ـێکی لە کاتی جێبەجێکردنەوە دابینکراو (وەک کۆکراوەی شکسته‌کان، ئەنجامەکانی پشتڕاستکردنەوە،
یان داتای deserialize کراو) لیستێکی نابەتاڵە لە ئۆبجێکتەکانی `Error` پێش ئەوەی دەست بە تێپەڕاندن، تۆمارکردن، یان دووبارە
هەڵدانەوە بکەیت.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areErrors` تەنها ئەو کاتە `true` دەگەڕێنێتەوە کە ئارایەک پڕ بێت و هەر توخمێک `Error` بێت؛ بۆ ئارای بەتاڵ یان ئەگەر
> هەر توخمێک `Error` نەبێت `false` دەگەڕێنێتەوە.

### Avantaj

- دڵنیایی دەکاتەوە کە هەر توخمێک نموونەیەکی `Error` ـە، کە ڕێگە بە مامەڵەکردنی سەلامەت لەگەڵ هەڵە و تۆمارکردن دەدات.
- ئارای بەتاڵ ڕەت دەکاتەوە، ڕێگری دەکات لەوەی دۆخی «هیچ هەڵەیەک نییە» بە هەڵەوە وەک لیستی هەڵەی دروست وەرگیرێت.
- وەک پارێزەری کاتی-جێبەجێکردن باش کار دەکات کاتێک لەگەڵ هاتووچۆی `unknown[]` مامەڵە دەکەیت (وەک لە API ـکان یان بلۆکی
  `catch`).

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areErrors(array)`

Parametreyên:

- `array`: ئەو ئارایەی پێویستە بپشکنرێت بۆ بوونی ئۆبجێکتەکانی `Error`.

### Importa fonksiyona herêmî

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  //‎‎ value rêzekî ne-valayî ya objeyên Error e
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areErrors(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areErrors](‎../_analysis/areErrors.md‎)

<br>

---

<small>Ev pel di 6 February 2026 at 12:34:27 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>