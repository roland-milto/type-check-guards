# areStreams

## वर्णन

`areStreams` ठरवते की एखादे मूल्य ही भरलेली अॅरे आहे का ज्यामध्ये प्रत्येक घटक `Stream` आहे.

### वापर प्रकरण

पाइपिंग, रिझ्युमिंग, किंवा गट म्हणून त्यांवर इतर ऑपरेशन्स करण्यापूर्वी वापरकर्त्याने दिलेले किंवा डायनॅमिकरीत्या तयार
केलेले संग्रह (उदा., अनेक फाइल रीड स्ट्रीम्स) वैध आहेत का ते तपासा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `areStreams` वापरून `Stream[]` म्हणून हाताळण्यापूर्वी अज्ञात इनपुटचे प्रमाणीकरण करा; ते `true` फक्त तेव्हाच परत करते
> जेव्हा मूल्य ही नॉन-एम्प्टी अॅरे असते आणि प्रत्येक घटक `Stream` असतो.

### फायदे

- इनपुट ही भरलेली अॅरे आहे आणि त्यातील प्रत्येक घटक `Stream` आहे याची खात्री करते.
- प्रक्रिया करण्यापूर्वी स्ट्रीम संग्रहांचे प्रमाणीकरण करण्यासाठी साधा `true`/`false` गार्ड प्रदान करते.
- लवकर अपयशी ठरते: `Stream` नसलेला घटक सापडताच लगेच `false` परत करते.
- कोड सर्व आयटम `Stream` इन्स्टन्स आहेत असे गृहित धरतो तेव्हा रनटाइम त्रुटी टाळण्यास मदत करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `areStreams(array)`

पॅरामीटर्स:

- `array`: Stream ऑब्जेक्ट्ससाठी तपासायची अॅरे.

### लोकल फंक्शन इम्पोर्ट

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input हा Stream ऑब्जेक्ट्सचा भरलेला अॅरे आहे
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areStreams(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>ही फाइल 30 January 2026 at 23:34:42 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>