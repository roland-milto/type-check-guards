# isStream

## چۈشەندۈرۈش

`isStream` بېرىلگەن قىممەتنىڭ ئېقىم ئوبيېكتى (Node.js ئېقىمغا ئوخشاش، `ReadableStream` ياكى `WritableStream`)
ئىكەنلىكىنى تەكشۈرىدۇ.

### ئىشلىتىش ھالىتى

كىرگۈزۈشلەرنىڭ ئاددىي ئوبيېكت ياكى ئېقىم بولۇشى مۇمكىن بولغان ئەھۋاللاردا (مەسىلەن، ھۆججەت يۈكلەش، HTTP body لىرى ياكى
بىر تەرەپ قىلىش تۇرۇبا لىنىيەلىرى) دەلىللەش قىلىپ، قىممەتنىڭ ئېقىم ئىكەن-ئەمەسلىكىگە ئاساسەن لوگىكىنى شاخلاڭ.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `isStream` نى ئىشلىتىپ ئېقىم مېتودلىرىنى چاقىرىشتىن بۇرۇن `unknown` نى تارايىتسىڭىز بولىدۇ؛ ئۇ Node.js ئېقىمغا ئوخشاش
> ئوبيېكتلارنى (`pipe`/`on` ئارقىلىق) ۋە بۇ global لار مەۋجۇت بولغاندا Web Streams (`ReadableStream`/`WritableStream`)
> نىمۇ تونۇيدۇ.

### ئەۋزەللىكلەر

- `pipe` ۋە `on` فۇنكسىيىلىرىنى تەكشۈرۈش ئارقىلىق كۆپ ئۇچرايدىغان Node.js ئېقىمغا ئوخشاش ئوبيېكتلارنى بىخەتەر بايقايدۇ.
- مۇمكىن بولغاندا `ReadableStream` ۋە `WritableStream` نى تونۇش ئارقىلىق Web Streams نىمۇ قوللايدۇ.
- قوغداش (guards) ۋە شاخلىنىش لوگىكىسىغا ماس كېلىدىغان ئاددىي boolean نەتىجە (`true`/`false`) قايتۇرىدۇ.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `isStream(value)`

پارامېتىرلار:

- `value`: تەكشۈرۈلىدىغان قىممەت.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  //‎‎ nodeStream ئېقىمغا ئوخشاش؛ سىز ئادەتتىكى ئېقىم API لىرىنى بىخەتەر ئىشلىتەلەيسىز
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.isStream(value)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [isStream](‎../_analysis/isStream.md‎)

<br>

---

<small>بۇ ھۆججەت 30 January 2026 at 23:43:28 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>