# isString

## विवरण

`isString` निर्धारित करता है कि दिया गया मान एक string है या नहीं।

### उपयोग का मामला

runtime पर user input, API payload fields, या configuration values को validate करें ताकि यह सुनिश्चित हो सके कि कोई मान
string है, इससे पहले कि string operations (जैसे trimming, splitting, case conversion) लागू किए जाएँ।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> string methods कॉल करने से पहले `unknown` या loosely typed values को validate करने के लिए `isString` का उपयोग करें; यह
> केवल तब `true` लौटाता है जब `typeof value === "string"`।

### फायदे

- `typeof` का उपयोग करके सरल और तेज़ जाँच।
- एक पूर्वानुमेय boolean परिणाम लौटाता है: strings के लिए `true`, अन्यथा `false`।
- खाली और गैर-खाली दोनों strings के लिए काम करता है।
- string-विशिष्ट ऑपरेशन्स करने से पहले एक हल्के runtime guard के रूप में उपयोगी।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isString(value)`

पैरामीटर:

- `value`: string प्रकार के लिए जाँचा जाने वाला मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input यहाँ एक स्ट्रिंग है
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isString(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isString](../_analysis/isString.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 1:14:10 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>