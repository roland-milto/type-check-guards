# isValidDate

## विवरण

`isValidDate` जाँचता है कि दिया गया मान एक वैध `Date` ऑब्जेक्ट है या नहीं और केवल वास्तविक, गैर-अमान्य तारीखों के लिए
`true` लौटाता है।

### उपयोग का मामला

उपयोगकर्ता इनपुट या API डेटा को वैलिडेट करें जिसमें तारीखें हो सकती हैं, ताकि तारीख की गणनाएँ, फ़ॉर्मैटिंग, या तुलना
करने से पहले यह सुनिश्चित हो सके कि मान एक वास्तविक `Date` इंस्टेंस है और कोई अमान्य तारीख नहीं है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `unknown` के रूप में टाइप किए गए मानों पर `Date` methods (जैसे, `toISOString`, `getTime`) कॉल करने से पहले यह
> सुनिश्चित करने के लिए `isValidDate` का उपयोग करें कि वे वैध `Date` ऑब्जेक्ट हैं।

### फायदे

- यह सुनिश्चित करता है कि कोई मान `Date` का एक इंस्टेंस है और केवल तारीख-जैसी स्ट्रिंग या संख्या नहीं है।
- अमान्य तारीखों (जैसे, `new Date("invalid")`) को `NaN` समय मानों की जाँच करके अस्वीकार करता है।
- सरल बूलियन गार्ड जो कंडीशनल्स और वैलिडेशन पाइपलाइनों में उपयोग करना आसान है।
- इनपुट को पहले सत्यापित करके date methods कॉल करते समय रनटाइम त्रुटियों को रोकने में मदद करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isValidDate(value)`

पैरामीटर:

- `value`: जिस मान की जाँच की जानी है।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input एक वैध Date इंस्टेंस है
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isValidDate(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 4:40:16 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>