# isString

## چۈشەندۈرۈش

`isString` بېرىلگەن قىممەتنىڭ تېكىست (string) ئىكەنلىكىنى بەلگىلەيدۇ.

### ئىشلىتىش ھالىتى

ئىشلەتكۈچى كىرگۈزۈشى، API payload مەيدانى ياكى سەپلىمە قىممەتلىرىنى runtime دا دەلىللەپ، تېكىست مەشغۇلاتلىرىنى (مەسىلەن،
trimming، splitting، case conversion) قوللىنىشتىن بۇرۇن قىممەتنىڭ تېكىست (string) ئىكەنلىكىگە كاپالەتلىك قىلىش.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `isString` نى `unknown` ياكى بوش تىپلانغان قىممەتلەرنى تېكىست ئۇسۇللىرىنى چاقىرىشتىن بۇرۇن دەلىللەش ئۈچۈن ئىشلىتىڭ؛ ئۇ
> پەقەت `typeof value === "string"` بولغاندا `true` قايتۇرىدۇ.

### ئەۋزەللىكلەر

- `typeof` ئارقىلىق ئاددىي ۋە تېز تەكشۈرۈش.
- ئالدىن پەرەز قىلغىلى بولىدىغان boolean نەتىجە قايتۇرىدۇ: تېكىست (string) بولسا `true`, بولمىسا `false`.
- بوش ۋە بوش بولمىغان تېكىستلەرنىڭ ھەممىسىگە ئىشلىتىلىدۇ.
- تېكىستكە خاس مەشغۇلاتلارنى قىلىشتىن بۇرۇن يېنىك runtime guard سۈپىتىدە پايدىلىق.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `isString(value)`

پارامېتىرلار:

- `value`: تېكىست تىپى ئىكەنلىكى سىناق قىلىنىدىغان قىممەت.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  //‎‎ input بۇ يەردە بىر string
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.isString(value)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [isString](‎../_analysis/isString.md‎)

<br>

---

<small>بۇ ھۆججەت 30 January 2026 at 13:16:08 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>