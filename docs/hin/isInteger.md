# isInteger

## विवरण

निर्धारित करता है कि दिया गया `value` एक सुरक्षित पूर्णांक संख्या है या नहीं।

### उपयोग का मामला

अविश्वसनीय इनपुट (जैसे, query params, JSON payloads, environment variables) को ऐरे इंडेक्स, pagination, काउंटरों, या
डेटाबेस IDs के लिए पूर्णांक के रूप में उपयोग करने से पहले वैलिडेट करें।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> अज्ञात इनपुट को संख्यात्मक पूर्णांक मानने से पहले उसे वैलिडेट करने के लिए `isInteger` का उपयोग करें; यह केवल उन मानों
> के लिए `true` लौटाता है जहाँ `typeof value === "number"` और `Number.isSafeInteger(value)`।

### फायदे

- टाइप और संख्यात्मक सुरक्षा दोनों की जाँच करता है: `true` केवल तब लौटाता है जब इनपुट एक संख्या हो और एक सुरक्षित
  पूर्णांक हो।
- संख्यात्मक coercion से जुड़ी सामान्य समस्याओं से बचाता है: "5" जैसी स्ट्रिंग्स सही रूप से `false` लौटाती हैं।
- गैर-पूर्णांकों और असुरक्षित पूर्णांकों को अस्वीकार करता है, जिससे यह IDs, काउंटरों और ऐरे इंडेक्सिंग के लिए उपयुक्त
  बनता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isInteger(value)`

पैरामीटर:

- `value`: पूर्णांक स्थिति के लिए जाँचने वाला मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // सही
const b = isInteger(-100);   // सही
const c = isInteger("5");    // गलत
const d = isInteger(5.5);    // गलत
const e = isInteger(null);   // गलत

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isInteger(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 12:50:01 am बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>