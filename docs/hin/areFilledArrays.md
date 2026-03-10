# areFilledArrays

## विवरण

`areFilledArrays` जाँचता है कि कोई दो-आयामी ऐरे खाली नहीं है और उसके सभी उप-ऐरे खाली नहीं हैं।

### उपयोग का मामला

`areFilledArrays` का उपयोग टैब्युलर या मैट्रिक्स-जैसे इनपुट (जैसे CSV पंक्तियाँ, ग्रिड डेटा, समूहित परिणाम) को वैलिडेट
करने के लिए करें ताकि आप सुरक्षित रूप से मान सकें कि कम से कम एक उप-ऐरे मौजूद है और कोई भी उप-ऐरे खाली नहीं है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `areFilledArrays` का उपयोग तब करें जब आपको यह सुनिश्चित करना हो कि किसी 2D ऐरे में कम से कम एक पंक्ति हो और उस पर
> इटरेट करने या उसमें इंडेक्स करने से पहले हर पंक्ति में कम से कम एक तत्व हो।

### फायदे

- यह सत्यापित करता है कि बाहरी ऐरे खाली नहीं है और हर आंतरिक ऐरे भी खाली नहीं है, और केवल तब `true` लौटाता है जब दोनों
  शर्तें पूरी हों।
- उप-ऐरे के अंदर किसी भी प्रकार के तत्वों (जैसे संख्याएँ, स्ट्रिंग्स, ऑब्जेक्ट्स, नेस्टेड ऐरे) के साथ काम करता है
  क्योंकि यह केवल ऐरे के “भरे होने” की स्थिति जाँचता है, तत्वों की सामग्री नहीं।
- दो-आयामी डेटा को प्रोसेस करने से पहले गार्ड के रूप में उपयुक्त एक सरल बूलियन परिणाम (`true`/`false`) प्रदान करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areFilledArrays(array)`

पैरामीटर:

- `array`: जाँचने के लिए दो-आयामी ऐरे।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // सही
console.log(areFilledArrays(b)); // सही
console.log(areFilledArrays(c)); // सही
console.log(areFilledArrays(d)); // गलत
console.log(areFilledArrays(e)); // गलत
console.log(areFilledArrays(f)); // गलत

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areFilledArrays(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>फ़ाइल 6 फ़रवरी 2026 को 11:56:55 am बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>