# areStrings

## विवरण

`areStrings` जांचता है कि कोई array गैर-खाली है और उसके सभी तत्व strings हैं या नहीं; केवल उसी स्थिति में `true` लौटाता
है।

### उपयोग का मामला

बाहरी या उपयोगकर्ता-प्रदान किए गए डेटा (जैसे query params, JSON payloads, CSV fields) को वैलिडेट करें ताकि प्रोसेसिंग से
पहले यह सुनिश्चित हो सके कि आपके पास strings की एक गैर-खाली सूची है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> केवल-string लॉजिक लागू करने से पहले अज्ञात arrays को वैलिडेट करने के लिए `areStrings` का उपयोग करें; यह खाली arrays के
> लिए `false` लौटाता है।

### फायदे

- यह सुनिश्चित करता है कि हर तत्व एक string है और मिश्रित-प्रकार (mixed-type) वाली arrays को `false` लौटाकर अस्वीकार
  करता है।
- यह खाली arrays को अस्वीकार करता है, इसलिए `true` केवल strings की गैर-खाली सूची को दर्शाता है।
- केवल-string ऑपरेशन्स (जैसे `trim`, `toLowerCase`) करने से पहले एक त्वरित runtime guard के रूप में उपयोगी है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areStrings(value)`

पैरामीटर:

- `value`: Expected type `string[]`.

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // इनपुट रनटाइम पर एक गैर-खाली string[] है
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areStrings(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 1:18:27 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>