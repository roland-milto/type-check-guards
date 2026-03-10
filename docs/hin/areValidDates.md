# areValidDates

## विवरण

निर्धारित करता है कि कोई ऐरे गैर-खाली है और पूरी तरह से वैध `Date` ऑब्जेक्ट्स से बना है।

### उपयोग का मामला

तिथि-आधारित ऑपरेशन्स (सॉर्टिंग, रेंज जाँच, फ़ॉर्मैटिंग) करने से पहले उपयोगकर्ता-प्रदत्त या API-प्रदत्त ऐरेज़ को वैलिडेट
करने के लिए `areValidDates` का उपयोग करें, ताकि यह सुनिश्चित हो सके कि सभी प्रविष्टियाँ वास्तविक, वैध `Date` ऑब्जेक्ट्स
हैं और सूची खाली नहीं है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `areValidDates` खाली ऐरे के लिए `false` लौटाता है; इसे वैलिडेशन चरण के रूप में उपयोग करने से पहले सुनिश्चित करें कि
> ऐरे का गैर-खाली होना अभिप्रेत है।

### फायदे

- `true` केवल तब लौटाता है जब हर तत्व एक वैध `Date` इंस्टेंस हो (जैसे `new Date('invalid')` जैसी अमान्य तिथियाँ नहीं)।
- खाली इनपुट को `false` लौटाकर अस्वीकार करता है, जिससे आप केवल अर्थपूर्ण, गैर-खाली तिथि सूचियाँ ही स्वीकार करते हैं।
- एक सरल बूलियन गार्ड-स्टाइल जाँच प्रदान करता है जिसे अन्य वैलिडेशन के साथ संयोजित करना आसान है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areValidDates(array)`

पैरामीटर:

- `array`: जाँचने के लिए ऐरे, जिसमें संभवतः `Date` ऑब्जेक्ट्स शामिल हो सकते हैं।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // सही
console.log(areValidDates(b)); // गलत
console.log(areValidDates(c)); // गलत
console.log(areValidDates(d)); // गलत

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areValidDates(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 2:31:59 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>