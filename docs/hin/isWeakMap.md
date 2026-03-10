# isWeakMap

## विवरण

निर्धारित करता है कि दिया गया `value` एक `WeakMap` इंस्टेंस है या नहीं।

### उपयोग का मामला

`isWeakMap` का उपयोग तब करें जब आप कोई `unknown` मान स्वीकार करते हैं (जैसे किसी सार्वजनिक API, प्लगइन सिस्टम, या
डायनेमिक कॉन्फ़िगरेशन से) और `WeakMap`-विशिष्ट व्यवहार का उपयोग करने से पहले यह सत्यापित करना आवश्यक हो कि वह `WeakMap`
है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `isWeakMap` एक `instanceof WeakMap` जांच करता है; यह एक रनटाइम गार्ड है जो केवल वास्तविक `WeakMap` इंस्टेंस के लिए
`true` लौटाता है।

### फायदे

- यह जांचने के लिए सरल रनटाइम चेक कि कोई मान `WeakMap` है या नहीं।
- `WeakMap` की आवश्यकता वाले API के गलत उपयोग को रोकने में मदद करता है, क्योंकि यह throw करने के बजाय `true`/`false`
  लौटाता है।
- `unknown` इनपुट के साथ काम करता है, जिससे यह मॉड्यूल सीमाओं पर (जैसे parsing, बाहरी डेटा, या untyped कोड) सुविधाजनक
  बनता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isWeakMap(value)`

पैरामीटर:

- `value`: जांचने के लिए मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a रनटाइम पर WeakMap है
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isWeakMap(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 1:25:13 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>