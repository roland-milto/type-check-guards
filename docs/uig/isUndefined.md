# isUndefined

## چۈشەندۈرۈش

بېرىلگەن قىممەتنىڭ `undefined` ئىكەنلىكىنى تەكشۈرىدۇ.

### ئىشلىتىش ھالىتى

ئىختىيارىي كىرگۈزۈشلەرنى قوغداش، يوقاپ كەتكەن خاسلىق (property) لارنى بايقاش، ياكى «تەمىنلەنمىگەن» (`undefined`) بىلەن
«ئېنىقلا بوش» (`null`) نى پەرقلەندۈرۈش ئۈچۈن `isUndefined` نى ئىشلىتىڭ.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `undefined` نى ( `null` ئەمەس) ئالاھىدە بايقاشقا توغرا كەلگەندە `isUndefined` نى ئىشلىتىڭ. ئۇ بىخەتەر، چۈنكى ئۇ
`typeof value === "undefined"` غا تايىنىدۇ.

### ئەۋزەللىكلەر

- `typeof` ئارقىلىق `undefined` نى ئېنىق ۋە روشەن تەكشۈرۈشنى تەمىنلەيدۇ، ئېلان قىلىنمىغان ئۆزگەرگۈچىلەر بىلەن بولىدىغان
  چېگرا ھالەتلىرىدىن ساقلىنىدۇ.
- قوغداش (guards)، تارماقلىنىش (branching) ۋە دەلىللەش (validation) لوگىكىسىغا ماس كېلىدىغان ئاددىي بولېن نەتىجە (
  `true`/`false`) قايتۇرىدۇ.
- `undefined` نى `null`, `0`, `""` ياكى `NaN` غا ئوخشاش باشقا «بوش» قىممەتلەردىن پەرقلەندۈرۈشكە ياردەم بېرىدۇ.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `isUndefined(value)`

پارامېتىرلار:

- `value`: تەكشۈرۈلىدىغان قىممەت.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  //‎‎ x بۇ يەردە undefined
} else {
  //‎‎ x بۇ يەردە undefined ئەمەس
}

const a = isUndefined(undefined); //‎ true
const b = isUndefined(null);      //‎ false
```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.isUndefined(value)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [isUndefined](‎../_analysis/isUndefined.md‎)

<br>

---

<small>بۇ ھۆججەت 30 January 2026 at 14:04:50 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>