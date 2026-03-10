# isOneOfType

## विवरण

`isOneOfType` यह निर्धारित करता है कि दिया गया `value` प्रदान की गई type strings में से कम-से-कम एक से मेल खाता है या
नहीं; यदि कोई भी मेल मिलता है तो `true` लौटाता है, अन्यथा `false`।

### उपयोग का मामला

ढीले-टाइप वाले या बाहरी डेटा (जैसे, parsed JSON, query parameters) को मान्य करें, जहाँ आगे की लॉजिक से पहले कई स्वीकार्य
रनटाइम प्रकारों (जैसे `number` या `string`) की अनुमति दी जाती है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> जब आप रनटाइम पर यह जाँचना चाहते हैं कि कोई मान कई अनुमत प्रकारों में से किसी एक से मेल खाता है, तब `isOneOfType` का
> उपयोग करें; यह कम-से-कम एक प्रकार के मेल खाने पर `true` लौटाता है, अन्यथा `false`।

### फायदे

- एक ही कॉल में किसी मान को कई अनुमत प्रकारों के विरुद्ध जाँचता है, और पहली मेल पर `true` लौटाता है।
- `unknown` इनपुट के साथ काम करता है, जिससे यह रनटाइम सीमाओं पर उपयोगी होता है (जैसे, बाहरी डेटा, उपयोगकर्ता इनपुट)।
- सरल बूलियन परिणाम (`true`/`false`) जो शर्तीय लॉजिक और early returns के साथ अच्छी तरह संयोजित होता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isOneOfType(value, types)`

पैरामीटर:

- `value`: निर्दिष्ट प्रकारों के विरुद्ध जाँचा जाने वाला मान।
- `types`: मान के संभावित प्रकारों का प्रतिनिधित्व करने वाली type strings की एक array।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input रनटाइम पर एक ऑब्जेक्ट है
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isOneOfType(value, types)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 11:43:28 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>