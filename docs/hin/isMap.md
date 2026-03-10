# isMap

## विवरण

यह जाँचता है कि दिया गया `value` एक `Map` है या नहीं; यदि है तो `true` और अन्यथा `false` लौटाता है।

### उपयोग का मामला

`isMap` का उपयोग तब करें जब आपको कोई `unknown` मान (जैसे JSON parsing, external APIs, या user input से) प्राप्त हो और
`Map` ऑपरेशन्स करने से पहले यह सुनिश्चित करना हो कि वह एक `Map` है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `isMap` एक रनटाइम गार्ड है जो मान के `Map` होने पर `true` और अन्यथा `false` लौटाता है; `Map` APIs कॉल करने से पहले
`unknown` को नैरो करने के लिए इसका उपयोग करें।

### फायदे

- यह जल्दी से रनटाइम पर जाँच प्रदान करता है कि कोई मान `Map` है या नहीं।
- यह `get`, `set`, और `has` जैसे `Map` मेथड्स की आवश्यकता वाले कोड पाथ्स को गार्ड करके टाइप त्रुटियों को रोकने में मदद
  करता है।
- `unknown` इनपुट्स को संभालते समय यह एक हल्के वैलिडेशन चरण के रूप में अच्छी तरह काम करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isMap(value)`

पैरामीटर:

- `value`: जाँचने के लिए मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isMap(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isMap](../_analysis/isMap.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 4:04:39 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>