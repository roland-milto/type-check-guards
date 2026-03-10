# isStream

## विवरण

`isStream` जाँचता है कि दिया गया मान एक stream object है या नहीं (Node.js stream-जैसा, `ReadableStream`, या
`WritableStream`)।

### उपयोग का मामला

ऐसे inputs को validate करें जो या तो plain objects या streams हो सकते हैं (जैसे, file uploads, HTTP bodies, या
processing pipelines) और मान के stream होने के आधार पर logic को branch करें।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> stream methods कॉल करने से पहले `unknown` को narrow करने के लिए `isStream` का उपयोग करें; यह Node.js stream-जैसी
> objects ( `pipe`/`on` के माध्यम से) और Web Streams (`ReadableStream`/`WritableStream`) को पहचानता है जब वे globals मौजूद
> हों।

### फायदे

- `pipe` और `on` फ़ंक्शनों की जाँच करके सामान्य Node.js stream-जैसी objects का सुरक्षित रूप से पता लगाता है।
- उपलब्ध होने पर `ReadableStream` और `WritableStream` को पहचानकर Web Streams का भी समर्थन करता है।
- guards और branching logic के लिए उपयुक्त एक सरल boolean परिणाम (`true`/`false`) लौटाता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isStream(value)`

पैरामीटर:

- `value`: जिस मान की जाँच की जानी है।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream स्ट्रीम-जैसा है; आप सामान्य स्ट्रीम API का सुरक्षित रूप से उपयोग कर सकते हैं
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isStream(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isStream](../_analysis/isStream.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 11:41:46 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>