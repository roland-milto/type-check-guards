# areNumerics

## چۈشەندۈرۈش

`areNumerics` بىر قىممەتنىڭ بوش بولمىغان تىزىملىك بولۇپ، ئۇنىڭدىكى بارلىق ئېلېمېنتلارنىڭ سان ئىكەنلىكىنى تەكشۈرىدۇ.

### ئىشلىتىش ھالىتى

`areNumerics` نى سىرتقى ياكى تىپسىز سانلىق مەلۇماتلارنى (مەسىلەن، JSON payloads، query parameters، form input) يىغىندى،
ئوتتۇرىچە ياكى باشقا سانلىق ئەمەلىيەتلەرنى ھېسابلاشتىن بۇرۇن دەلىللەش ئۈچۈن ئىشلىتىڭ؛ كىرگۈزۈشنىڭ بوش بولمىغان سانلار
تىزىملىكى ئىكەنلىكىنى كاپالەتلەندۈرۈپ، بولمىسا `false` قايتۇرىدۇ.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `areNumerics` نى ئىشلىتىپ `unknown` كىرگۈزۈشنى سانلار تىزىملىكى دەپ قاراشتىن بۇرۇن قوغداڭ؛ ئۇ تىزىملىك بولمىغان ۋە بوش
> تىزىملىكلەر ئۈچۈن `false` قايتۇرىدۇ.

### ئەۋزەللىكلەر

- پەقەت كىرگۈزۈش قىممىتى بوش بولمىغان سانلار تىزىملىكى بولۇپ، ھەر بىر ئېلېمېنتى سان بولغاندا `true` قايتۇرىدۇ.
- تېز مەغلۇپ بولىدۇ: سان بولمىغان ئېلېمېنت بايقالغان ھامان تەكشۈرۈشنى توختىتىپ، `false` قايتۇرىدۇ.
- سانلىق ئەمەلىيەتلەرنى ئىجرا قىلىشتىن بۇرۇن نامەلۇم كىرگۈزۈشنى بىخەتەر دەلىللەشكە ياردەم بېرىدۇ.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `areNumerics(array)`

پارامېتىرلار:

- `array`: سانلىق ئېلېمېنتلار بار-يوقلۇقىنى تەكشۈرىدىغان تىزىملىك.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); //‎ راست
console.log(areNumerics(b)); //‎ راست
console.log(areNumerics(c)); //‎ يالغان
console.log(areNumerics(d)); //‎ يالغان
console.log(areNumerics(e)); //‎ يالغان

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); //‎ 60
console.log(sumUnknown([10, "20", 30])); //‎ null
```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.areNumerics(array)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [areNumerics](‎../_analysis/areNumerics.md‎)

<br>

---

<small>بۇ ھۆججەت 6 February 2026 at 16:08:07 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>