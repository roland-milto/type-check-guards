# isWeakSet

## विवरण

निर्धारित करता है कि दिया गया `value` ऑब्जेक्ट्स का `WeakSet` है या नहीं।

### उपयोग का मामला

जब आप बिना टाइप किए इनपुट (जैसे बाहरी APIs, डायनेमिक कॉन्फ़िगरेशन, या `unknown` मान) स्वीकार कर रहे हों और `WeakSet`
-विशिष्ट ऑपरेशन्स का उपयोग करने से पहले यह सत्यापित करना हो कि वह `WeakSet` है, तब `isWeakSet` का उपयोग करें।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> रनटाइम पर किसी `unknown` मान को `WeakSet<object>` तक संकीर्ण करने के लिए `isWeakSet` का उपयोग करें; ध्यान दें कि
`WeakSet` केवल ऑब्जेक्ट रेफरेंसेज़ ही रख सकता है।

### फायदे

- यह जांचने के लिए एक सरल रनटाइम चेक प्रदान करता है कि कोई मान `WeakSet` है या नहीं।
- यह सुनिश्चित करके टाइप त्रुटियों को रोकने में मदद करता है कि केवल `WeakSet` इंस्टेंस को ही वैसा माना जाए।
- किसी भी `unknown` इनपुट के साथ काम करता है और एक स्पष्ट बूलियन परिणाम (`true`/`false`) लौटाता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isWeakSet(value)`

पैरामीटर:

- `value`: जांच किया जाने वाला मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // सही
console.log(isWeakSet(b)); // गलत

if (isWeakSet(a)) {
  // a रनटाइम पर एक WeakSet है
}
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isWeakSet(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 2:14:58 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>