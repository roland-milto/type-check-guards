# isStream

## विवरण

`isStream` जाँचेला कि दिहल गइल मान stream ऑब्जेक्ट बा कि ना (Node.js stream-जइसन, `ReadableStream`, भा
`WritableStream`)।

### उपयोग

इनपुट के वैलिडेट करीं जे सादा ऑब्जेक्ट भा stream दुनो में से कुछो हो सकेला (जइसे, file uploads, HTTP bodies, भा
processing pipelines) आ मान stream बा कि ना, एह आधार पर लॉजिक के ब्रांच करीं।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `unknown` के narrow करे खातिर stream मेथड कॉल करे से पहिले `isStream` के इस्तेमाल करीं; ई Node.js stream-जइसन
> ऑब्जेक्ट (`pipe`/`on` के जरिए) आ Web Streams (`ReadableStream`/`WritableStream`) के पहचानेला, जब ऊ global मौजूद होखे।

### फायदे

- `pipe` आ `on` फंक्शन के जाँच के जरिए आम Node.js stream-जइसन ऑब्जेक्ट के सुरक्षित तरीका से पहचानेला।
- जहाँ उपलब्ध होखे, उहाँ `ReadableStream` आ `WritableStream` के पहचान के Web Streams के भी सपोर्ट करेला।
- गार्ड आ ब्रांचिंग लॉजिक खातिर उपयुक्त, एगो सादा boolean नतीजा (`true`/`false`) लौटावेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isStream(value)`

पैरामीटर:

- `value`: जवन मान के जाँचल जाई।

### लोकल फंक्शन इम्पोर्ट

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream stream-जइसन बा; रउआ सुरक्षित रूप से आम stream API इस्तेमाल कर सकेनी
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isStream(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isStream](../_analysis/isStream.md)

<br>

---

<small>ई फाइल 30 January 2026 at 23:38:58 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>