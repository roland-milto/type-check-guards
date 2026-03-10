# isPromise

## विवरण

निर्धारित करता है कि दिया गया मान `Promise` है या नहीं।

### उपयोग का मामला

अज्ञात इनपुट्स को `Promise` की तरह ट्रीट करने से पहले उन्हें वैलिडेट करने के लिए `isPromise` का उपयोग करें, जैसे कि
प्लगइन्स, डायनेमिक इम्पोर्ट्स, या ढीले-टाइप्ड APIs से लौटे मानों को संभालते समय।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `isPromise` `instanceof Promise` के जरिए जांच करता है, इसलिए यह केवल वास्तविक `Promise` इंस्टेंस के लिए `true` लौटाता
> है (सामान्य thenables के लिए नहीं)।

### फायदे

- यह जांचने के लिए एक सरल रनटाइम चेक प्रदान करता है कि कोई मान `Promise` है या नहीं।
- उन कोड पाथ्स की सुरक्षा में मदद करता है जिन्हें वास्तविक `Promise` इंस्टेंस की आवश्यकता होती है, और पूर्वानुमेय रूप से
  `true` या `false` लौटाता है।
- वास्तविक `Promise` इंस्टेंस की आवश्यकता रखकर “thenable” ऑब्जेक्ट्स (जैसे, `{ then() {} }`) से होने वाले गलत पॉज़िटिव्स
  से बचाता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isPromise(value)`

पैरामीटर:

- `value`: जांच किया जाने वाला मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // सही
console.log(isPromise(b)); // गलत
console.log(isPromise(123)); // गलत
console.log(isPromise(null)); // गलत

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isPromise(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 11:52:58 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>