# isStream

## विवरण

`isStream` ले दिइएको मान stream वस्तु (Node.js stream-जस्तो, `ReadableStream`, वा `WritableStream`) हो कि होइन भनेर जाँच
गर्छ।

### प्रयोगको केस

साधारण वस्तु वा stream दुवै हुन सक्ने इनपुटहरू (जस्तै, file uploads, HTTP bodies, वा processing pipelines) मान्यकरण
गर्नुहोस् र मान stream हो कि होइन भन्ने आधारमा तर्कलाई शाखाबद्ध गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> stream मेथडहरू कल गर्नु अघि `unknown` लाई narrow गर्न `isStream` प्रयोग गर्नुहोस्; यसले Node.js stream-जस्ता
> वस्तुहरू (`pipe`/`on` मार्फत) र ती globals अस्तित्वमा हुँदा Web Streams (`ReadableStream`/`WritableStream`) लाई पनि
> चिन्छ।

### फाइदाहरू

- `pipe` र `on` फङ्सनहरू जाँच गरेर सामान्य Node.js stream-जस्ता वस्तुहरू सुरक्षित रूपमा पत्ता लगाउँछ।
- उपलब्ध हुँदा `ReadableStream` र `WritableStream` लाई चिनेर Web Streams लाई पनि समर्थन गर्छ।
- गार्डहरू र शाखाबद्ध (branching) तर्कका लागि उपयुक्त सरल boolean परिणाम (`true`/`false`) फर्काउँछ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isStream(value)`

प्यारामिटरहरू:

- `value`: जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream स्ट्रिम-जस्तो छ; तपाईंले सामान्य स्ट्रिम API हरू सुरक्षित रूपमा प्रयोग गर्न सक्नुहुन्छ
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isStream(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isStream](../_analysis/isStream.md)

<br>

---

<small>यो फाइल 30 January 2026 at 23:42:14 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>