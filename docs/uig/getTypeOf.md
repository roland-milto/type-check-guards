# getTypeOf

## چۈشەندۈرۈش

`getTypeOf` بېرىلگەن قىممەت ئۈچۈن تەپسىلىي، ئادەم ئوقۇيالايدىغان تۈر بەلگىسىنى قايتۇرىدۇ؛ بۇنىڭ ئىچىدە ئىنچىكلەشتۈرۈلگەن
سانلىق تۈرلەر ۋە كونكرېت ئوبيېكت تۈرلىرىمۇ بار.

### ئىشلىتىش ھالىتى

كىرىش مەلۇماتىنى دەلىللەش ۋە دىئاگنوستىكا (diagnostics) دا تۈرنى بايقاشنى نورماللاشتۇرۇش ئۈچۈن `getTypeOf` نى
ئىشلىتىڭ—مەسىلەن، `nan` نى رەت قىلىش، پەقەت `integer` بولغان ID لارنى قوبۇل قىلىش، `decimal` غا ئوخشاش سانلىق
تېكىستلەرنى ئاددىي `string` دىن پەرقلىق بىر تەرەپ قىلىش، ياكى `date` ۋە `regexp` قاتارلىق ئېنىق ئوبيېكت تۈرلىرىنى
خاتىرىلەش.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> قايتىدىغان تۈر `DataTypeAsString | string`. ئۇنى تەسۋىرلەش خاراكتېرىدىكى بەلگە دەپ قاراپ، شاخلىنىش (branching)
> قىلغاندا `integer`, `float`, `nan`, `array`, `null`, ۋە `undefined` قاتارلىق تونۇش literal لار بىلەن سېلىشتۇرۇڭ.

### ئەۋزەللىكلەر

- JavaScriptنىڭ `typeof` ىدىنمۇ تېخىمۇ ئىنچىكە تۈر (type) تېكىستىنى قايتۇرىدۇ؛ `integer`, `float`, ۋە `nan` قاتارلىق
  سانلىق تارماق تۈرلەرنىمۇ ئۆز ئىچىگە ئالىدۇ.
- `null` ۋە `undefined` نى ئايرىم-ئايرىم ھالدا ئېنىق `null` ۋە `undefined` دەپ پەرقلەندۈرىدۇ.
- كۆپ ئۇچرايدىغان سانلىق تېكىست (string) فورماتلىرىنى بايقاپ، ئاددىي `string` دېمەستىن `binary`, `octal`, `decimal`,
  ياكى `hexadecimal` دەپ دوكلات قىلىدۇ.
- سانلار تىزىملىكىنىمۇ `array` دەپ تونۇپ، `Object.prototype.toString` نى ئىشلىتىپ تېخىمۇ كونكرېت ئوبيېكت تۈر ناملىرىنى (
  مەسىلەن، `date`, `regexp`, `map`, `set`) تەمىنلەيدۇ.
- بىردەك، ئادەم ئوقۇيالايدىغان تۈر بەلگىلىرى لازىم بولغان دەلىللەش (validation)، خاتىرە (logging)، ۋە خاتالىق ئىزدەش (
  debugging) ئۈچۈن ناھايىتى پايدىلىق.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `getTypeOf(value)`

پارامېتىرلار:

- `value`: سانلىق مەلۇمات تۈرىنى بەلگىلەش كېرەك بولغان قىممەت.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

//‎‎ مىسال تەكشۈرۈشلەر
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.getTypeOf(value)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [getTypeOf](‎../_analysis/getTypeOf.md‎)

<br>

---

<small>بۇ ھۆججەت 6 February 2026 at 13:15:29 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>