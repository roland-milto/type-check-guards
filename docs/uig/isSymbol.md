# isSymbol

## چۈشەندۈرۈش

`isSymbol` بېرىلگەن قىممەتنىڭ `symbol` تىپىدا ياكى ئەمەسلىكىنى بەلگىلەيدۇ؛ symbol بولسا `true` قايتۇرىدۇ، بولمىسا
`false` قايتۇرىدۇ.

### ئىشلىتىش ھالىتى

بىر `unknown` قىممەتنى ئۆزگىچە كىملىك، تىزىملاش ئاچقۇچى (registry key) ياكى ئوبيېكت ۋە map لاردىكى ھېسابلىنىدىغان خاسلىق
ئاچقۇچى سۈپىتىدە ئىشلىتىشتىن بۇرۇن ئۇنىڭ `symbol` ئىكەنلىكىنى دەلىللەڭ.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> symbol-غا مۇناسىۋەتلىك فۇنكسىيەلەرنى چاقىرىشتىن ياكى ئۇنى ھېسابلىنىدىغان خاسلىق ئاچقۇچى سۈپىتىدە ئىشلىتىشتىن بۇرۇن
`unknown` نى `symbol` غا تارايتىش ئۈچۈن `isSymbol` نى ئىشلىتىڭ.

### ئەۋزەللىكلەر

- JavaScript نىڭ `symbol` ئەسلىي تىپى ئۈچۈن ئاددىي ۋە ئىشەنچلىك runtime تەكشۈرۈشنى تەمىنلەيدۇ.
- symbol-غا خاس API لارنى ئىشلىتىشتىن ياكى ئۇنى ئاچقۇچ سۈپىتىدە ساقلاشتىن بۇرۇن `unknown` قىممەتلەرنى تارايتىشقا ياردەم
  بېرىدۇ.
- `typeof` نى ئىشلىتىش ئارقىلىق يالغان مۇسبەت نەتىجىلەرنىڭ ئالدىنى ئالىدۇ؛ بۇ `symbol` قىممەتلىرىنى بايقاشنىڭ كانونېك
  ئۇسۇلى.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `isSymbol(value)`

پارامېتىرلار:

- `value`: تەكشۈرۈلىدىغان قىممەت.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  //‎‎ بۇ يەردە input بىر سىمۋول
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.isSymbol(value)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [isSymbol](‎../_analysis/isSymbol.md‎)

<br>

---

<small>بۇ ھۆججەت 30 January 2026 at 14:29:12 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>