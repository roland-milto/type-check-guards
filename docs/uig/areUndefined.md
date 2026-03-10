# areUndefined

## چۈشەندۈرۈش

`areUndefined` بېرىلگەن سانلار قاتارىدىكى ھەر بىر ئېلېمېنتنىڭ `undefined` ئىكەن-ئەمەسلىكىنى تەكشۈرىدۇ.

### ئىشلىتىش ھالىتى

ئىختىيارىي نەتىجىلەر تىزىملىكىدە ھەقىقىي قىممەت يوقلۇقىنى (پەقەت `undefined`) دەلىللەش؛ مەسىلەن، ئىزدەش نەتىجىلىرىنى map
قىلغاندىن كېيىن يوقاپ كەتكەن كىرگۈزۈشلەر `undefined` بىلەن ئىپادىلەنگەندە، بارلىق ئىزدەشلەر مەغلۇپ بولغانلىقىنى
جەزملەشتۈرۈش ئۈچۈن.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `areUndefined` نى `unknown[]` نىڭ پەقەت `undefined` قىممەتلىرىنىلا ئۆز ئىچىگە ئالغانلىقىنى جەزملەشتۈرۈش كېرەك بولغاندا
> ئىشلىتىڭ؛ ئىچكى `isFilledArray` تەكشۈرۈشى سەۋەبىدىن بوش سانلار قاتارلىرى ۋە سانلار قاتارى بولمىغان/ئىناۋەتسىز
> كىرگۈزۈشلەر ئۈچۈن `false` قايتۇرىدۇ.

### ئەۋزەللىكلەر

- `isFilledArray` ئارقىلىق تولدۇرۇلغان سانلار قاتارىنى تەلەپ قىلىدىغانلىقى ئۈچۈن، سانلار قاتارى بولمىغان قىممەتلەر ۋە
  بوش سانلار قاتارلىرى ئۈچۈن `false` قايتۇرىدۇ.
- پەقەت بەزىلىرىلا ئەمەس، ھەر بىر ئېلېمېنتنىڭ `undefined` ئىكەنلىكىنى كاپالەتلەندۈرۈپ، نىيەتنى ئاشكارا قىلىدۇ.
- نامەلۇم كىرگۈزۈش توپلاملىرىنى دەلىللەشتە قوغدىغۇچ-ئۇسلۇبىدىكى predicate سۈپىتىدە پايدىلىق.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `areUndefined(array)`

پارامېتىرلار:

- `array`: `undefined` ئېلېمېنتلىرى بار-يوقلۇقىنى تەكشۈرىدىغان سانلار قاتارى.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

//‎‎ ئەسكەرتىش: بوش سانلار تىزىمى ئۈچۈن false قايتۇرىدۇ
const r4 = areUndefined([]); // false
```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.areUndefined(array)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [areUndefined](‎../_analysis/areUndefined.md‎)

<br>

---

<small>بۇ ھۆججەت 30 January 2026 at 13:58:34 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>