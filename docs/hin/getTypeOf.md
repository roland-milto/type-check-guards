# getTypeOf

## विवरण

`getTypeOf` किसी दिए गए मान के लिए एक विस्तृत, मानव-पठनीय टाइप लेबल लौटाता है, जिसमें परिष्कृत संख्यात्मक प्रकार और
विशिष्ट ऑब्जेक्ट प्रकार शामिल होते हैं।

### उपयोग का मामला

इनपुट वैलिडेशन और डायग्नॉस्टिक्स में टाइप डिटेक्शन को सामान्यीकृत करने के लिए `getTypeOf` का उपयोग करें—उदाहरण के लिए,
`nan` को अस्वीकार करने के लिए, केवल `integer` IDs स्वीकार करने के लिए, `decimal` जैसी संख्यात्मक स्ट्रिंग्स को साधारण
`string` से अलग तरीके से ट्रीट करने के लिए, या `date` और `regexp` जैसे सटीक ऑब्जेक्ट प्रकारों को लॉग करने के लिए।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> रिटर्न टाइप `DataTypeAsString | string` है। इसे एक वर्णनात्मक लेबल की तरह मानें; ब्रांचिंग करते समय `integer`,
`float`, `nan`, `array`, `null`, और `undefined` जैसे ज्ञात लिटरल्स के विरुद्ध तुलना करें।

### फायदे

- JavaScript के `typeof` की तुलना में अधिक सूक्ष्म (granular) टाइप स्ट्रिंग लौटाता है, जिसमें `integer`, `float`, और
  `nan` जैसे संख्यात्मक उप-प्रकार शामिल हैं।
- `null` और `undefined` को स्पष्ट रूप से `null` और `undefined` के रूप में अलग करता है।
- सामान्य संख्यात्मक स्ट्रिंग फ़ॉर्मैट्स का पता लगाता है और उन्हें साधारण `string` की बजाय `binary`, `octal`, `decimal`,
  या `hexadecimal` के रूप में रिपोर्ट करता है।
- ऐरे को `array` के रूप में पहचानता है और विशिष्ट ऑब्जेक्ट टाइप नाम (जैसे, `date`, `regexp`, `map`, `set`) प्रदान करने
  के लिए `Object.prototype.toString` का उपयोग करता है।
- वैलिडेशन, लॉगिंग, और डिबगिंग के लिए उपयोगी, जहाँ सुसंगत, मानव-पठनीय टाइप लेबल्स की आवश्यकता होती है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `getTypeOf(value)`

पैरामीटर:

- `value`: वह मान जिसके लिए डेटा टाइप निर्धारित करना है।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// उदाहरण जाँचें
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.getTypeOf(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>फ़ाइल 6 फ़रवरी 2026 को 1:06:45 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>