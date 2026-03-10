# isBuffer

## विवरण

कुनै मान Node.js `Buffer` हो कि होइन जाँच्छ र `true` वा `false` फर्काउँछ।

### प्रयोगको केस

रनटाइममा इनपुटहरू (जस्तै, API payloads, file data, वा message buffers) भ्यालिडेट गर्नुहोस् ताकि प्रोसेस गर्नु अघि कुनै
मान `Buffer` हो भन्ने सुनिश्चित गर्न सकियोस्, र Node.js बाहिर चलाउँदा जहाँ `Buffer` नहुन सक्छ त्यहाँ विश्वसनीय रूपमा
`false` प्राप्त गर्न सकियोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `Buffer`-विशेष मेथडहरू कल गर्नु अघि `unknown` मानहरूलाई `Buffer` मा न्यारो गर्न `isBuffer` प्रयोग गर्नुहोस्।

### फाइदाहरू

- `Buffer.isBuffer` प्रयोग गरेर Node.js `Buffer` इन्स्ट्यान्सहरू सुरक्षित रूपमा पत्ता लगाउँछ।
- `Buffer` उपलब्ध नभएका वातावरणहरूमा `false` फर्काउँछ, जसले रनटाइम त्रुटिहरूबाट बचाउँछ।
- `unknown` इनपुटसँग काम गर्छ, जसले यसलाई रनटाइम भ्यालिडेसन र टाइप न्यारोइङका लागि उपयुक्त बनाउँछ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isBuffer(value)`

प्यारामिटरहरू:

- `value`: परीक्षण गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // सत्य
console.log(isBuffer(b)); // असत्य

if (isBuffer(a)) {
  // यहाँ a एउटा Buffer हो
  console.log(a.toString("utf8"));
}
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isBuffer(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>यो फाइल 31 January 2026 at 16:32:32 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>