# areNullOrUndefined

## چۈشەندۈرۈش

بېرىلگەن ماسسىۋدىكى بارلىق ئېلېمېنتلارنىڭ `null` ياكى `undefined` ئىكەنلىكىنى تەكشۈرىدۇ.

### ئىشلىتىش ھالىتى

ئىختىيارىي مەيدانلار تىزىملىكىدە ھەقىقىي قىممەت يوقلىقىنى (پەقەت `null`/`undefined`) دەلىللەپ، بىر تەرەپ قىلىشنى ئاتلاپ
كېتىش ياكى «قىممەت تەمىنلەنمىگەن» ھالىتىنى كۆرسىتىشنى قارار قىلىشتىن بۇرۇن تەكشۈرۈش.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `areNullOrUndefined` نى ماسسىۋ پەقەت يوقاپ كەتكەن قىممەتلەرنى (`null`/`undefined`)لا ئۆز ئىچىگە ئالغانلىقىنى دەلىللەش
> كېرەك بولغاندا ئىشلىتىڭ. دىققەت قىلىڭ، ئۇ بوش ماسسىۋ ئۈچۈن `false` قايتۇرىدۇ.

### ئەۋزەللىكلەر

- پەقەت ھەر بىر ئېلېمېنت `null` ياكى `undefined` بولغاندا `true` قايتۇرىدۇ.
- بوش ماسسىۋلار ئۈچۈن `false` قايتۇرىدۇ، بۇ «سانلىق مەلۇمات يوق» بىلەن «ھەممىسى يوقاپ كەتكەن قىممەتلەر» نى پەرق قىلىشقا
  ياردەم بېرىدۇ.
- `unknown[]` بىلەن ئىشلەيدۇ، شۇڭا تىپلارنى تارايتمىدىن بۇرۇن ئىشلىتىشكە بىخەتەر.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `areNullOrUndefined(array)`

پارامېتىرلار:

- `array`: تەكشۈرۈلىدىغان ماسسىۋ.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
//‎‎ allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
//‎‎ containsValue === false

const empty = areNullOrUndefined([]);
//‎‎ empty === false

```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.areNullOrUndefined(array)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [areNullOrUndefined](‎../_analysis/areNullOrUndefined.md‎)

<br>

---

<small>بۇ ھۆججەت 31 January 2026 at 00:31:49 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>