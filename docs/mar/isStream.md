# isStream

## वर्णन

`isStream` दिलेले मूल्य stream ऑब्जेक्ट आहे का (Node.js stream-सदृश, `ReadableStream`, किंवा `WritableStream`) हे
तपासते.

### वापर प्रकरण

इनपुट्सची पडताळणी करा जे साधे ऑब्जेक्ट्स किंवा streams पैकी काहीही असू शकतात (उदा., file uploads, HTTP bodies, किंवा
processing pipelines) आणि मूल्य stream आहे की नाही यावर आधारित logic branch करा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> stream methods कॉल करण्यापूर्वी `unknown` narrow करण्यासाठी `isStream` वापरा; ते Node.js stream-सदृश ऑब्जेक्ट्स (
`pipe`/`on` द्वारे) आणि Web Streams (`ReadableStream`/`WritableStream`) (जेव्हा ते globals अस्तित्वात असतात) ओळखते.

### फायदे

- `pipe` आणि `on` फंक्शन्स तपासून सामान्य Node.js stream-सदृश ऑब्जेक्ट्स सुरक्षितपणे ओळखते.
- उपलब्ध असताना `ReadableStream` आणि `WritableStream` ओळखून Web Streams ला देखील समर्थन देते.
- guards आणि branching logic साठी योग्य असा सोपा boolean निकाल (`true`/`false`) परत करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isStream(value)`

पॅरामीटर्स:

- `value`: तपासायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream हा स्ट्रीमसारखा आहे; तुम्ही सामान्य स्ट्रीम API सुरक्षितपणे वापरू शकता
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isStream(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isStream](../_analysis/isStream.md)

<br>

---

<small>ही फाइल 30 January 2026 at 23:42:03 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>