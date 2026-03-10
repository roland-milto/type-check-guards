# areOneOfType

## विवरण

`areOneOfType` जाँचता है कि किसी non-empty array के सभी तत्व निर्दिष्ट runtime types में से किसी एक के हैं या नहीं।

### उपयोग का मामला

आने वाले डेटा (जैसे, parsed JSON) को वैलिडेट करें जहाँ किसी field को एक non-empty array होना चाहिए जिसके items ज्ञात
primitive types के एक सेट तक सीमित हों; जब array खाली हो या उसमें कोई भी disallowed type हो तो `false` लौटाएँ।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> यह फ़ंक्शन boolean लौटाता है और compile time पर array element types को narrow नहीं करता; आगे की प्रोसेसिंग से पहले इसे
> runtime validation step के रूप में उपयोग करें।

### फायदे

- यह सुनिश्चित करता है कि किसी array का हर तत्व कम-से-कम एक अनुमत runtime type से मेल खाए, और केवल तब `true` लौटाता है
  जब पूरी array पास हो जाए।
- अमान्य इनपुट को जल्दी अस्वीकार करता है: जब `array` या `types` खाली हो या भरी हुई array न हो, तो `false` लौटाता है।
- मिश्रित-प्रकार संग्रहों (जैसे, numbers और strings) को `areOneOfType` की एक ही कॉल से वैलिडेट करने में उपयोगी।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areOneOfType(array, types)`

पैरामीटर:

- `array`: प्रदान किए गए types के विरुद्ध सत्यापित करने के लिए तत्वों की एक array।
- `types`: जाँच के लिए data types का प्रतिनिधित्व करने वाली strings की एक array।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areOneOfType(array, types)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 11:37:03 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>