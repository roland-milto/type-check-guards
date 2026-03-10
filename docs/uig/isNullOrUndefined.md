# isNullOrUndefined

## چۈشەندۈرۈش

بېرىلگەن قىممەتنىڭ `null` ياكى `undefined` ئىكەنلىكىنى تەكشۈرىدۇ.

### ئىشلىتىش ھالىتى

ئىككىلىسىنىمۇ (`null` ۋە `undefined`) «قىممەت يوق» دەپ قاراشقا توغرا كەلگەندە `isNullOrUndefined` نى ئىشلىتىڭ؛ مەسىلەن،
ئىختىيارىي كىرگۈزۈشلەرنى دەلىللەش، API payload لارنى نورماللاشتۇرۇش، ياكى بولۇشى مۇمكىن بولغان يوق قىممەتنى dereference
قىلىشتىن بۇرۇن كود يوللىرىنى قوغداش.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> خاسلىققا كىرىش ياكى مېتود چاقىرىشتىن بۇرۇن يوق قىممەتلەردىن ساقلىنىش ئۈچۈن `isNullOrUndefined` نى قوغدىغۇچ سۈپىتىدە
> ئىشلىتىڭ؛ ئۇ پەقەت `null` ۋە `undefined` ئۈچۈنلا `true` قايتۇرىدۇ.

### ئەۋزەللىكلەر

- `null` ۋە `undefined` نى بىر جايدا بايقاش ئۈچۈن ئېنىق، قايتا ئىشلىتىشكە بولىدىغان قوغدىغۇچ بىلەن تەمىنلەيدۇ.
- شەرت ۋە دەلىللەش (validation) ئىچىدە ئاسان بىرلەشتۈرۈلىدىغان ئاددىي boolean (`true`/`false`) قايتۇرىدۇ.
- خاسلىققا كىرىش ياكى مېتود چاقىرىشتىن بۇرۇن قىممەتنىڭ يوقلۇقىنى تەكشۈرۈش ئارقىلىق كۆپ ئۇچرايدىغان runtime خاتالىرىدىن
  ساقلىنىشقا ياردەم بېرىدۇ.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `isNullOrUndefined(value)`

پارامېتىرلار:

- `value`: `null` ياكى `undefined` ئىكەنلىكى تەكشۈرۈلىدىغان قىممەت.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  //‎‎ يوقاپ قالغان قىممەتنى بىر تەرەپ قىلىش
}

console.log(isNullOrUndefined(b)); //‎ راست
console.log(isNullOrUndefined(c)); //‎ يالغان

```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.isNullOrUndefined(value)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [isNullOrUndefined](‎../_analysis/isNullOrUndefined.md‎)

<br>

---

<small>بۇ ھۆججەت 31 January 2026 at 00:35:43 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>