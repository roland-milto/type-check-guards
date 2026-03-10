# isUndefined

## विवरण

जाँचता है कि दिया गया मान `undefined` है या नहीं।

### उपयोग का मामला

वैकल्पिक इनपुट्स को गार्ड करने, गायब प्रॉपर्टीज़ का पता लगाने, या “प्रदान नहीं किया गया” (`undefined`) और “स्पष्ट रूप से
खाली” (`null`) के बीच अंतर करने के लिए `isUndefined` का उपयोग करें।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `isUndefined` का उपयोग तब करें जब आपको विशेष रूप से `undefined` (न कि `null`) का पता लगाना हो। यह सुरक्षित है क्योंकि
> यह `typeof value === "undefined"` पर निर्भर करता है।

### फायदे

- `typeof` का उपयोग करके `undefined` के लिए एक स्पष्ट, प्रत्यक्ष जाँच प्रदान करता है, जिससे घोषित न किए गए वेरिएबल्स के
  साथ होने वाले एज केस से बचा जा सके।
- एक सरल बूलियन परिणाम (`true`/`false`) लौटाता है, जो गार्ड्स, ब्रांचिंग, और वैलिडेशन लॉजिक के लिए उपयुक्त है।
- `undefined` को अन्य “खाली” मानों जैसे `null`, `0`, `""`, या `NaN` से अलग पहचानने में मदद करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isUndefined(value)`

पैरामीटर:

- `value`: जिस मान की जाँच की जानी है।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x यहाँ undefined है
} else {
  // x यहाँ undefined नहीं है
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isUndefined(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 2:02:54 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>