# areStreams

## چۈشەندۈرۈش

`areStreams` بىر قىممەتنىڭ ھەر بىر ئېلېمېنتى `Stream` بولغان تولدۇرۇلغان تىزىملىك ئىكەن-ئەمەسلىكىنى بەلگىلەيدۇ.

### ئىشلىتىش ھالىتى

ئىشلەتكۈچى تەمىنلىگەن ياكى ھەرىكەتچان قۇرۇلغان توپلاملارنى (مەسىلەن، كۆپ ھۆججەت ئوقۇش ئېقىملىرى) بىر گۇرۇپپا سۈپىتىدە
pipe قىلىش، resume قىلىش ياكى باشقا مەشغۇلاتلارنى قىلىشتىن بۇرۇن دەلىللەش.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `areStreams` نى نامەلۇم كىرگۈزۈشنى `Stream[]` دەپ قاراشتىن بۇرۇن دەلىللەش ئۈچۈن ئىشلىتىڭ؛ ئۇ قىممەت بوش بولمىغان
> تىزىملىك بولۇپ، ھەر بىر ئېلېمېنتى `Stream` بولغاندا لا `true` قايتۇرىدۇ.

### ئەۋزەللىكلەر

- كىرگۈزۈشنىڭ ھەر بىر ئېلېمېنتى `Stream` بولغان تولدۇرۇلغان (بوش ئەمەس) بىر تىزىملىك ئىكەنلىكىنى كاپالەتلەندۈرىدۇ.
- ئىشلەشتىن بۇرۇن ئېقىم توپلىمىنى دەلىللەش ئۈچۈن ئاددىي `true`/`false` قوغدىغۇچ بىلەن تەمىنلەيدۇ.
- تېز مەغلۇپ بولىدۇ: `Stream` بولمىغان ئېلېمېنت بايقالغان ھامان `false` قايتۇرىدۇ.
- كود بارلىق تۈرلەرنى `Stream` نۇسخىسى دەپ پەرەز قىلغاندا يۈز بېرىدىغان ئىجرا ۋاقتى خاتالىقلىرىنىڭ ئالدىنى ئېلىشقا
  ياردەم بېرىدۇ.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `areStreams(array)`

پارامېتىرلار:

- `array`: Stream ئوبيېكتلىرى ئۈچۈن تەكشۈرۈلىدىغان تىزىملىك.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  //‎‎ input بولسا Stream ئوبيېكتلىرىدىن تەركىب تاپقان تولدۇرۇلغان بىر تىزىملىك
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.areStreams(array)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [areStreams](‎../_analysis/areStreams.md‎)

<br>

---

<small>بۇ ھۆججەت 30 January 2026 at 23:36:08 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>