# areBigInts

## विवरण

`areBigInts` यह निर्धारित करता है कि कोई मान केवल `bigint` मानों वाली non-empty array है या नहीं।

### उपयोग का मामला

अज्ञात input (जैसे parsed JSON-like data, API payloads, या `unknown` के रूप में typed function parameters) को प्रोसेस
करने से पहले यह सुनिश्चित करने के लिए validate करें कि वह `bigint` मानों की non-empty array है; `true` केवल तब लौटाता है
जब सभी तत्व `bigint` हों, अन्यथा `false`।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> अज्ञात input पर `bigint`-only operations (जैसे arithmetic, comparisons) करने से पहले runtime guard के रूप में
`areBigInts` का उपयोग करें।

### फायदे

- यह सुनिश्चित करता है कि हर तत्व `bigint` हो, और `true` केवल तब लौटाता है जब पूरी array मेल खाती है।
- डिज़ाइन के अनुसार non-array और खाली arrays को अस्वीकार करता है (`isFilledArray` के माध्यम से), जिससे अमान्य inputs को
  गलती से स्वीकार होने से रोका जाता है।
- तेज़ विफलता: जैसे ही कोई non-`bigint` तत्व मिलता है, `false` लौटा देता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areBigInts(array)`

पैरामीटर:

- `array`: जाँचने के लिए मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // सही
console.log(areBigInts(b)); // गलत
console.log(areBigInts(c)); // गलत
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areBigInts(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 11:26:02 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>