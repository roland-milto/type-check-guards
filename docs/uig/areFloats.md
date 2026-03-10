# areFloats

## چۈشەندۈرۈش

`areFloats` بېرىلگەن تىزىمنىڭ تولدۇرۇلغانلىقىنى ۋە ئۇنىڭدىكى بارلىق ئېلېمېنتلارنىڭ float ئىكەنلىكىنى تەكشۈرىدۇ.

### ئىشلىتىش ھالىتى

JSON، query پارامېتىرلىرى ياكى سىرتقى API لاردىن كەلگەن `unknown[]` نى قوبۇل قىلغاندا، سانلىق لوگىكا (مەسىلەن ئوتتۇرىچە
قىممەت چىقىرىش، interpolation ياكى ئىستاتىستىكىلىق ھېسابلاشلار) نى ئىجرا قىلىشتىن بۇرۇن ئۇنىڭ بوش بولمىغان تىزىم
ئىكەنلىكىنى ۋە ھەر بىر تۈرنىڭ float ئىكەنلىكىنى كاپالەتلەندۈرۈش ئۈچۈن `areFloats` نى ئىشلىتىڭ.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `areFloats` نى ئىشلىتىپ `unknown[]` نى پەقەت float لارنى ئۆز ئىچىگە ئالغان `number[]` دەپ قاراشتىن بۇرۇن قوغداڭ؛ ئۇ
> بوش تىزىملارغا ۋە float بولمىغان ھەر قانداق ئېلېمېنتقا `false` قايتۇرىدۇ.

### ئەۋزەللىكلەر

- كىرگۈزۈلگەن قىممەت بوش بولمىغان بىر تىزىم (array) بولۇپ، ئۇنىڭدىكى ھەر بىر ئېلېمېنت float بولغاندا ئاندىن `true`
  قايتۇرىدۇ.
- تېز مەغلۇپ بولىدۇ: float بولمىغان ئېلېمېنت تېپىلغان ھامان `false` قايتۇرىدۇ.
- float غا خاس ھېسابلاشلارنى قىلىشتىن بۇرۇن نامەلۇم كىرگۈزۈشنى دەلىللەشكە ياردەم بېرىدۇ.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `areFloats(array)`

پارامېتىرلار:

- `array`: float ئېلېمېنتلىرى بار-يوقلۇقىنى تەكشۈرىدىغان تىزىم (array).

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); //‎ راست
console.log(areFloats(b)); //‎ يالغان
console.log(areFloats(c)); //‎ يالغان

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); //‎ 1.75
console.log(sumFloats([1, 2])); //‎ null
```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.areFloats(array)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [areFloats](‎../_analysis/areFloats.md‎)

<br>

---

<small>بۇ ھۆججەت 30 January 2026 at 16:00:17 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>