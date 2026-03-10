# areRegExes

## چۈشەندۈرۈش

`areRegExes` بىر قىممەتنىڭ پەقەت `RegExp` ئوبيېكتلىرىنى ئۆز ئىچىگە ئالغان تولدۇرۇلغان تىزىم (array) ئىكەنلىكىنى
تەكشۈرىدۇ.

### ئىشلىتىش ھالىتى

سەپلىمە تاللانمىسى (مەسىلەن، رۇخسەت/چەكلەش pattern لىرى تىزىمى) نىڭ ماسلاشتۇرۇش ئۈچۈن ئىشلىتىشتىن بۇرۇن، دائىملىق
ئىپادىلەرنىڭ بوش بولمىغان تىزىمى ئىكەنلىكىنى دەلىللەڭ.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `areRegExes` نى ئىشلىتىپ، ئايلاندۇرۇش ياكى pattern لارنى بىرلەشتۈرۈشتىن بۇرۇن `unknown` نى `RegExp[]` غا تارايتىڭ.

### ئەۋزەللىكلەر

- قىممەتنىڭ بوش بولمىغان بىر تىزىم (array) ئىكەنلىكىنى ۋە ھەر بىر ئەزاسىنىڭ `RegExp` نۇسخىسى ئىكەنلىكىنى
  كاپالەتلەندۈرىدۇ.
- ئىشلەتكۈچى كىرگۈزۈشى ياكى سەپلىمەنى دەلىللەش ئۈچۈن ئاددىي بولغان boolean قوغدىغۇچ (`true`/`false`) بىلەن تەمىنلەيدۇ.
- كېيىنكى كود بارلىق تۈرلەرنىڭ دائىملىق ئىپادە مەشغۇلاتلىرىنى قوللايدۇ دەپ پەرەز قىلغاندا، ئىجرا ۋاقتىدىكى خاتالىقلارنىڭ
  ئالدىنى ئېلىشقا ياردەم بېرىدۇ.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `areRegExes(array)`

پارامېتىرلار:

- `array`: تەكشۈرۈلىدىغان قىممەت.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  //‎‎ بۇ يەردە patterns بولسا RegExp نىڭ بىر تىزىملىكى
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.areRegExes(array)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [areRegExes](‎../_analysis/areRegExes.md‎)

<br>

---

<small>بۇ ھۆججەت 30 January 2026 at 23:22:22 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>