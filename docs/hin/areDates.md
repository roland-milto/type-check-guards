# areDates

## विवरण

`areDates` यह निर्धारित करता है कि दिया गया ऐरे भरा हुआ है और उसमें केवल `Date` ऑब्जेक्ट्स हैं, और `true` केवल तब लौटाता
है जब सभी तत्व वैध तारीखें हों।

### उपयोग का मामला

अज्ञात इनपुट (जैसे पार्स किया हुआ JSON, फॉर्म डेटा, API पेलोड) को तारीख-विशिष्ट लॉजिक—जैसे समय के अनुसार सॉर्ट करना,
फ़ॉर्मैट करना, या रेंज की गणना—चलाने से पहले वैलिडेट करने के लिए `areDates` का उपयोग करें।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `true` केवल उन गैर-खाली ऐरे के लिए लौटाता है जिनमें हर तत्व `Date` हो; खाली ऐरे के लिए `false` मिलता है।

### फायदे

- किसी ऐरे की सामग्री को वैलिडेट करने से पहले यह सुनिश्चित करता है कि वह खाली न हो, जिससे खाली इनपुट के लिए `true` लौटने
  से बचाव होता है।
- हर तत्व के `Date` इंस्टेंस होने की पुष्टि करता है, और पहली असंगति मिलते ही तुरंत `false` लौटाता है।
- ऐरे आइटम्स पर तारीख-विशिष्ट ऑपरेशन्स करने से पहले गार्ड-स्टाइल जाँच के रूप में उपयोगी।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areDates(array)`

पैरामीटर:

- `array`: `Date` ऑब्जेक्ट्स के लिए जाँचा जाने वाला ऐरे।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // सही
console.log(areDates(b)); // गलत
console.log(areDates(c)); // गलत

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areDates(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areDates](../_analysis/areDates.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 3:30:34 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>