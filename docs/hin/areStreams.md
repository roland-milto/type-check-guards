# areStreams

## विवरण

`areStreams` यह निर्धारित करता है कि कोई मान एक भरा हुआ ऐरे है या नहीं, जिसमें हर तत्व एक `Stream` है।

### उपयोग का मामला

पाइप करने, रेज़्यूम करने, या अन्यथा उन्हें एक समूह के रूप में ऑपरेट करने से पहले उपयोगकर्ता-प्रदत्त या डायनेमिक रूप से
बनाए गए कलेक्शन्स (जैसे, कई फ़ाइल रीड स्ट्रीम्स) को वैलिडेट करें।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `areStreams` का उपयोग अज्ञात इनपुट को `Stream[]` के रूप में मानने से पहले वैलिडेट करने के लिए करें; यह `true` केवल तब
> लौटाता है जब मान एक गैर-खाली ऐरे हो और हर तत्व एक `Stream` हो।

### फायदे

- यह सुनिश्चित करता है कि इनपुट एक भरा हुआ ऐरे है जिसमें हर तत्व एक `Stream` है।
- प्रोसेसिंग से पहले स्ट्रीम कलेक्शन्स को वैलिडेट करने के लिए एक सरल `true`/`false` गार्ड प्रदान करता है।
- तेज़ी से विफल होता है: जैसे ही कोई गैर-`Stream` तत्व मिलता है, `false` लौटा देता है।
- जब कोड यह मानता है कि सभी आइटम `Stream` इंस्टेंस हैं, तब रनटाइम त्रुटियों को रोकने में मदद करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areStreams(array)`

पैरामीटर:

- `array`: Stream ऑब्जेक्ट्स के लिए जाँचा जाने वाला ऐरे।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input Stream ऑब्जेक्ट्स की भरी हुई ऐरे है
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areStreams(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 11:33:58 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>