# isBuffer

## چۈشەندۈرۈش

بىر قىممەتنىڭ Node.js `Buffer` ئىكەنلىكىنى تەكشۈرۈپ `true` ياكى `false` قايتۇرىدۇ.

### ئىشلىتىش ھالىتى

كىرگۈزۈشلەرنى ئىجرا ۋاقتىدا دەلىللەش (مەسىلەن، API payloads، ھۆججەت سانلىق مەلۇماتى ياكى ئۇچۇر bufferلىرى) ئارقىلىق بىر
قىممەتنى بىر تەرەپ قىلىشتىن بۇرۇن ئۇنىڭ `Buffer` ئىكەنلىكىگە كاپالەتلىك قىلىڭ، ھەمدە Node.js سىرتىدا `Buffer` مەۋجۇت
بولماسلىقى مۇمكىن بولغاندا ئىشەنچلىك ھالدا `false` قا ئېرىشىڭ.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `isBuffer` نى ئىشلىتىپ `unknown` قىممەتلەرنى `Buffer` غا تارايىتىپ، ئاندىن Buffer غا خاس مېتودلارنى چاقىرىڭ.

### ئەۋزەللىكلەر

- `Buffer.isBuffer` نى ئىشلىتىپ Node.js `Buffer` ئەمەلىي نۇسخىلىرىنى بىخەتەر بايقايدۇ.
- `Buffer` مەۋجۇت بولمىغان مۇھىتتا `false` قايتۇرىدۇ، شۇ ئارقىلىق ئىجرا ۋاقتىدىكى خاتالىقلاردىن ساقلىنىدۇ.
- `unknown` كىرگۈزۈش بىلەن ئىشلەيدۇ، بۇ ئۇنى ئىجرا ۋاقتىدىكى دەلىللەش ۋە تىپنى تارايىتىشقا ماس قىلىدۇ.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `isBuffer(value)`

پارامېتىرلار:

- `value`: سىناق قىلىنىدىغان قىممەت.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // ‎true
console.log(isBuffer(b)); // ‎false

if (isBuffer(a)) {
  //‎ ‎a بۇ يەردە Buffer
  console.log(a.toString("utf8"));
}
```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.isBuffer(value)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [isBuffer](‎../_analysis/isBuffer.md‎)

<br>

---

<small>بۇ ھۆججەت 31 January 2026 at 16:33:46 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>