# areStrings

## چۈشەندۈرۈش

`areStrings` بىر سانلار گۇرۇپپىسىنىڭ بوش ئەمەسلىكىنى ۋە ئۇنىڭ بارلىق ئېلېمېنتلىرىنىڭ تىزىم (string) ئىكەنلىكىنى
تەكشۈرىدۇ؛ پەقەت شۇ ھالەتتەلا `true` قايتۇرىدۇ.

### ئىشلىتىش ھالىتى

سىرتقى ياكى ئىشلەتكۈچى تەمىنلىگەن سانلىق مەلۇماتلارنى (مەسىلەن، query params، JSON payloads، CSV fields) دەلىللەپ، بىر
تەرەپ قىلىشتىن بۇرۇن بوش بولمىغان تىزىم (string) تىزىملىكىڭىز بارلىقىنى كاپالەتلەندۈرۈش.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> نامەلۇم سانلار گۇرۇپپىسىغا پەقەت تىزىمغا خاس لوگىكا قوللىنىشتىن بۇرۇن `areStrings` بىلەن دەلىللەڭ؛ ئۇ بوش سانلار
> گۇرۇپپىسى ئۈچۈن `false` قايتۇرىدۇ.

### ئەۋزەللىكلەر

- ھەر بىر ئېلېمېنتنىڭ تىزىم (string) ئىكەنلىكىنى كاپالەتلەندۈرىدۇ ۋە ئارىلاش تىپلىق سانلار گۇرۇپپىسىنى `false` قايتۇرۇش
  ئارقىلىق رەت قىلىدۇ.
- بوش سانلار گۇرۇپپىسىنى رەت قىلىدۇ، شۇڭا `true` پەقەت بوش بولمىغان تىزىم (string) تىزىملىكىنىلا بىلدۈرىدۇ.
- پەقەت تىزىمغا خاس مەشغۇلاتلارنى (مەسىلەن، `trim`, `toLowerCase`) ئىجرا قىلىشتىن بۇرۇن تېز runtime قوغدىغۇچ سۈپىتىدە
  پايدىلىق.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `areStrings(value)`

پارامېتىرلار:

- `value`: Expected type `string[]`.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  //‎‎ input ئىجرا ۋاقتىدا بوش بولمىغان string[] بولىدۇ
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.areStrings(value)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [areStrings](‎../_analysis/areStrings.md‎)

<br>

---

<small>بۇ ھۆججەت 30 January 2026 at 13:20:56 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>