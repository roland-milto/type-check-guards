# isPlainObject

## چۈشەندۈرۈش

بېرىلگەن `value` نىڭ ئاددىي ئوبيېكت ئىكەنلىكىنى تەكشۈرىدۇ؛ ئەگەر شۇنداق بولسا `true`، بولمىسا `false` قايتۇرىدۇ.

### ئىشلىتىش ھالىتى

`unknown` كىرگۈزۈش (مەسىلەن، پارس قىلىنغان JSON، سىرتقى سانلىق مەلۇمات ياكى فۇنكسىيە پارامېتىرلىرى) نىڭ ئاددىي ئوبيېكت
ئىكەنلىكىنى ئاچقۇچلارنى ئوقۇش ياكى ئۇنى تۈرلەنگەن سەپلىمە ئوبيېكتىغا خەرىتىلەشتىن بۇرۇن دەلىللەش.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `isPlainObject` نى `unknown` نى record-غا ئوخشاش ئوبيېكت دەپ قاراشتىن بۇرۇن تارايىتىشقا ئىشلىتىش پايدىلىق؛ ئۇ پەقەت
> ئىچكى بەلگىسى `[object Object]` بولغان قىممەتلەر ئۈچۈنلا `true` قايتۇرىدۇ.

### ئەۋزەللىكلەر

- بىر قىممەتنىڭ ئاددىي ئوبيېكت (يەنى `Object` / `{}`) ئىكەنلىكىنى ئاددىي ۋە ئىشەنچلىك تەكشۈرۈشنى تەمىنلەيدۇ، نەتىجىدە
  `true` ياكى `false` قايتۇرىدۇ.
- ئاددىي ئوبيېكتلارنى ئاراي، فۇنكسىيە، `null` ۋە باشقا ئاددىي ئوبيېكت بولمىغان تۈرلەردىن پەرقلىشىشكە ياردەم بېرىدۇ.
- TypeScript تا تۈر قوغدىغۇچى (type guard) سۈپىتىدە پايدىلىق بولۇپ، ئوبيېكت خاسلىقىغا كىرىشتىن بۇرۇن `unknown`
  قىممەتلەرنى تارايىتىشقا ياردەم بېرىدۇ.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `isPlainObject(value)`

پارامېتىرلار:

- `value`: ئاددىي ئوبيېكت ھالىتىنى تەكشۈرىدىغان قىممەت.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  //‎‎ بۇ يەردە input ئاددىي ئوبيېكت
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); //‎ راست
console.log(isPlainObject([])); //‎ يالغان
console.log(isPlainObject(null)); //‎ يالغان
```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.isPlainObject(value)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [isPlainObject](‎../_analysis/isPlainObject.md‎)

<br>

---

<small>بۇ ھۆججەت 6 February 2026 at 12:20:31 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>