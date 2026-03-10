# areNumerics

## विवरण

`areNumerics` जाँचता है कि कोई मान एक गैर-खाली ऐरे है या नहीं, जिसमें सभी तत्व संख्यात्मक हों।

### उपयोग का मामला

योग, औसत, या अन्य संख्यात्मक ऑपरेशन की गणना करने से पहले बाहरी या अनटाइप्ड डेटा (जैसे JSON payloads, query parameters,
form input) को वैलिडेट करने के लिए `areNumerics` का उपयोग करें, यह सुनिश्चित करते हुए कि इनपुट एक गैर-खाली संख्यात्मक
ऐरे है और अन्यथा `false` लौटाता है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `unknown` इनपुट को संख्यात्मक ऐरे मानने से पहले उसे गार्ड करने के लिए `areNumerics` का उपयोग करें; यह गैर-ऐरे और खाली
> ऐरे के लिए `false` लौटाता है।

### फायदे

- `true` केवल तब लौटाता है जब इनपुट एक गैर-खाली ऐरे हो और हर तत्व संख्यात्मक हो।
- तेज़ी से विफल होता है: जैसे ही कोई गैर-संख्यात्मक तत्व मिलता है, जाँच रोक देता है और `false` लौटाता है।
- संख्यात्मक ऑपरेशन करने से पहले अज्ञात इनपुट को सुरक्षित रूप से वैलिडेट करने में मदद करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areNumerics(array)`

पैरामीटर:

- `array`: संख्यात्मक तत्वों के लिए जाँचने वाला ऐरे।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // सही
console.log(areNumerics(b)); // सही
console.log(areNumerics(c)); // गलत
console.log(areNumerics(d)); // गलत
console.log(areNumerics(e)); // गलत

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areNumerics(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>फ़ाइल 6 फ़रवरी 2026 को 4:05:22 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>