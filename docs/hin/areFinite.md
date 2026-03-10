# areFinite

## विवरण

`areFinite` जाँचता है कि कोई मान एक गैर-खाली ऐरे है या नहीं, जिसके तत्व सभी सीमित संख्याएँ हैं; ऐसा होने पर `true` और
अन्यथा `false` लौटाता है।

### उपयोग का मामला

गणनाएँ करने से पहले संख्यात्मक इनपुट ऐरे (जैसे, चार्ट सीरीज़, निर्देशांक सूचियाँ, मापन नमूने) को वैलिडेट करें, ताकि
परिणाम `true` केवल तब हो जब सभी मान सीमित संख्याएँ हों।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> जब आपको यह सुनिश्चित करना हो कि कोई ऐरे गैर-खाली है और उसमें केवल सीमित संख्याएँ हैं, तब `areFinite` का उपयोग करें; यह
> खाली ऐरे के लिए और `NaN` या अनंत मानों वाले ऐरे के लिए `false` लौटाता है।

### फायदे

- `true` केवल तब लौटाता है जब इनपुट एक गैर-खाली ऐरे हो और हर तत्व एक सीमित संख्या हो।
- हर तत्व के लिए `isFinite` जाँच पर निर्भर करके `Infinity`, `-Infinity`, और `NaN` को अस्वीकार करता है।
- गार्ड्स और वैलिडेशन फ्लोज़ के लिए उपयुक्त एक सरल बूलियन परिणाम (`true`/`false`) प्रदान करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areFinite(array)`

पैरामीटर:

- `array`: ऐरे, जिसकी जाँच यह सुनिश्चित करने के लिए की जानी है कि उसके सभी तत्व सीमित हैं।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // सही
console.log(areFinite(b)); // गलत
console.log(areFinite(c)); // गलत

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areFinite(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 4:34:55 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>