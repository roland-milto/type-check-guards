# isPromise

## چۈشەندۈرۈش

بېرىلگەن قىممەتنىڭ `Promise` ئىكەنلىكىنى بەلگىلەيدۇ.

### ئىشلىتىش ھالىتى

پلاگىنلاردىن، دىنامىك import لاردىن ياكى تىپى بوش API لاردىن قايتقان قىممەتلەرنى بىر تەرەپ قىلغاندا، نامەلۇم
كىرگۈزۈشلەرنى `Promise` دەپ قاراشتىن بۇرۇن دەلىللەش ئۈچۈن `isPromise` نى ئىشلىتىڭ.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `isPromise` `instanceof Promise` ئارقىلىق تەكشۈرىدۇ، شۇڭا پەقەت ھەقىقىي `Promise` نۇسخىلىرى ئۈچۈنلا `true` قايتۇرىدۇ (
> ئومۇمىي thenable لار ئۈچۈن ئەمەس).

### ئەۋزەللىكلەر

- بىر قىممەتنىڭ `Promise` ئىكەنلىكىنى ئاددىي رەۋىشتە ئىجرا ۋاقتىدا تەكشۈرۈپ بېرىدۇ.
- ھەقىقىي `Promise` نۇسخىسىنى تەلەپ قىلىدىغان كود يوللىرىنى قوغداشقا ياردەم بېرىدۇ، ئالدىن پەرەز قىلغىلى بولىدىغان ھالدا
  `true` ياكى `false` قايتۇرىدۇ.
- ھەقىقىي `Promise` نۇسخىسىنى تەلەپ قىلىش ئارقىلىق “thenable” ئوبيېكتلاردىن (مەسىلەن، `{ then() {} }`) كېلىدىغان خاتا
  مۇسبەت نەتىجىلەرنى ئالدىنى ئالىدۇ.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `isPromise(value)`

پارامېتىرلار:

- `value`: تەكشۈرۈلىدىغان قىممەت.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); //‎ true
console.log(isPromise(b)); //‎ false
console.log(isPromise(123)); //‎ false
console.log(isPromise(null)); //‎ false

```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.isPromise(value)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [isPromise](‎../_analysis/isPromise.md‎)

<br>

---

<small>بۇ ھۆججەت 30 January 2026 at 23:54:42 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>