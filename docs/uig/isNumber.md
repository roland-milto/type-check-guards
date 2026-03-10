# isNumber

## چۈشەندۈرۈش

`isNumber` بىر قىممەتنىڭ چەكلىك، `NaN` بولمىغان سان ئىكەنلىكىنى تەكشۈرىدۇ.

### ئىشلىتىش ھالىتى

ھېسابلاش، ساقلاش ياكى دائىرە تەكشۈرۈشىدىن بۇرۇن ئىشەنچسىز مەنبەلەردىن (فورمىلار، query params، JSON payloads) كەلگەن
سانلىق كىرگۈزۈشنى دەلىللەڭ؛ پەقەت چەكلىك سانلارلا (`true`) ئۆتىدۇ، باشقىلىرىنىڭ ھەممىسى `false` قايتۇرىدۇ.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> ئارتىمېتىكا قىلىشتىن بۇرۇن `unknown` قىممەتلەرنى دەلىللەش ئۈچۈن `isNumber` نى ئىشلىتىڭ؛ ئۇ `NaN`, `Infinity`, ۋە
`-Infinity` نى رەت قىلىدۇ.

### ئەۋزەللىكلەر

- `true` نى پەقەت ھەقىقىي JavaScript سانلىرى ئۈچۈنلا قايتۇرىدۇ (تىپ تەكشۈرۈش قوشۇلۇپ `NaN` ۋە چەكسىزلىك رەت قىلىنىدۇ).
- `NaN`, `Infinity` ياكى `-Infinity` نىڭ خاتالىق بىلەن سان دەپ ئۆتۈپ كېتىشىدىن كېلىپ چىقىدىغان ئادەتتىكى دەلىللەش
  خاتالىقلىرىنىڭ ئالدىنى ئالىدۇ.
- نامەلۇم كىرگۈزۈش (مەسىلەن، JSON، ئىشلەتكۈچى كىرگۈزۈشى، سىرتقى API لار) ئۈچۈن ئىجرا ۋاقتىدىكى قوغدىغۇچ سۈپىتىدە ياخشى
  ئىشلەيدۇ.
- ئاددىي، تېز، ۋە يان تەسىرسىز.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `isNumber(value)`

پارامېتىرلار:

- `value`: تەكشۈرۈلىدىغان قىممەت.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  //‎‎ input ئىناۋەتلىك چەكلىك سان
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.isNumber(value)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [isNumber](‎../_analysis/isNumber.md‎)

<br>

---

<small>بۇ ھۆججەت 30 January 2026 at 13:11:36 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>