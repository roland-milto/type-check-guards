# areRegExes

## विवरण

`areRegExes` जाँचता है कि कोई मान एक भरा हुआ ऐरे है जिसमें केवल `RegExp` ऑब्जेक्ट्स शामिल हैं।

### उपयोग का मामला

किसी कॉन्फ़िगरेशन विकल्प (जैसे, allow/deny पैटर्न्स की सूची) को मैचिंग के लिए उपयोग करने से पहले यह सत्यापित करें कि वह
नियमित अभिव्यक्तियों का एक गैर-खाली ऐरे है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> इटरेट करने या पैटर्न्स को संयोजित करने से पहले `unknown` को `RegExp[]` तक संकीर्ण (narrow) करने के लिए `areRegExes` का
> उपयोग करें।

### फायदे

- यह सुनिश्चित करता है कि कोई मान एक गैर-खाली ऐरे है, जिसमें हर तत्व `RegExp` का एक इंस्टेंस है।
- उपयोगकर्ता इनपुट या कॉन्फ़िगरेशन को सत्यापित करने के लिए एक सरल बूलियन गार्ड (`true`/`false`) प्रदान करता है।
- जब बाद का कोड यह मानकर चलता है कि सभी आइटम नियमित-अभिव्यक्ति (regular-expression) ऑपरेशन्स का समर्थन करते हैं, तब
  रनटाइम त्रुटियों को रोकने में मदद करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areRegExes(array)`

पैरामीटर:

- `array`: जाँचा जाने वाला मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // यहाँ patterns, RegExp का एक array है
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areRegExes(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 11:18:37 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>