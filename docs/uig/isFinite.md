# isFinite

## چۈشەندۈرۈش

بېرىلگەن `value` نىڭ چەكلىك `number` ئىكەنلىكىنى بەلگىلەيدۇ.

### ئىشلىتىش ھالىتى

سانلىق ھېسابلاشلارنى قىلىشتىن بۇرۇن نامەلۇم كىرگۈزۈشنى (مەسىلەن JSON، فورمىلار ياكى API لاردىن) دەلىللەش ئۈچۈن
`isFinite` نى ئىشلىتىپ، قىممەتنىڭ ھەقىقىي، چەكلىك سان ئىكەنلىكىگە كاپالەتلىك قىلىڭ.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `isFinite` پەقەت چەكلىك سانلار ئۈچۈنلا `true` قايتۇرىدۇ؛ `NaN`, `Infinity` ۋە ھەر قانداق سان بولمىغان قىممەت ئۈچۈن
`false` قايتۇرىدۇ.

### ئەۋزەللىكلەر

- ئىچىگە قۇرۇلغان `Number.isFinite` نى ئىشلىتىپ، ئىشەنچلىك چەكلىكلىك تەكشۈرۈشىنى قىلىدۇ.
- پەقەت چەكلىك سانلار ئۈچۈنلا `true` قايتۇرىدۇ؛ `NaN`, `Infinity` ۋە سان بولمىغان كىرگۈزۈشلەر ئۈچۈن `false` قايتۇرىدۇ.
- دەلىللەش ۋە قوغداش لوگىكىسىغا ماس كېلىدىغان، ئاددىي ۋە يان تەسىرسىز predicate.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `isFinite(value)`

پارامېتىرلار:

- `value`: چەكلىكلىكىنى تەكشۈرىدىغان قىممەت.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
//‎‎ finiteNumbers بولسا: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  //‎‎ بۇ يەردە value چەكلىك سان
  const doubled = value * 2;
  console.log(doubled);
}
```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.isFinite(value)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [isFinite](‎../_analysis/isFinite.md‎)

<br>

---

<small>بۇ ھۆججەت 30 January 2026 at 16:32:08 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>