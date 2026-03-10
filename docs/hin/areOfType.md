# areOfType

## विवरण

जाँचता है कि दिए गए `array` के सभी तत्व निर्दिष्ट `type` के हैं या नहीं।

### उपयोग का मामला

किसी ऐरे के हर तत्व पर टाइप-विशिष्ट ऑपरेशन्स करने से पहले अज्ञात इनपुट (जैसे, parsed JSON, API payloads, user input) को
वैलिडेट करने के लिए `areOfType` का उपयोग करें।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> क्योंकि `areOfType` एक टाइप गार्ड है, TypeScript `if (areOfType(...)) {}` ब्लॉक के अंदर ऐरे को `Array<DataTypeOf<T>>`
> तक संकुचित कर देता है।

### फायदे

- एक TypeScript टाइप गार्ड प्रदान करता है: जब यह `true` लौटाता है, तो इनपुट `Array<DataTypeOf<T>>` तक संकुचित हो जाता
  है।
- हर तत्व को अनुरोधित रनटाइम टाइप के विरुद्ध वैलिडेट करता है, जिससे मिश्रित-टाइप ऐरे पास होने से रुकते हैं।
- तेज़ी से विफल होता है: जैसे ही कोई न मिलने वाला तत्व मिलता है, `false` लौटा देता है।
- डिज़ाइन के अनुसार non-arrays और खाली arrays को अस्वीकार करता है (यह `isFilledArray` पर निर्भर करता है)।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areOfType(array, type)`

पैरामीटर:

- `array`: जाँचने के लिए ऐरे।
- `type`: ऐरे के प्रत्येक तत्व के विरुद्ध जाँचने के लिए टाइप।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values अब number[] है
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areOfType(array, type)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 5:09:42 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>