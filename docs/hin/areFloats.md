# areFloats

## विवरण

`areFloats` जाँचता है कि दिया गया array भरा हुआ है और उसके सभी elements floats हैं।

### उपयोग का मामला

`areFloats` का उपयोग तब करें जब आपको एक `unknown[]` (जैसे JSON, query parameters, या external APIs से) मिले और आपको
numeric logic (जैसे averaging, interpolation, या statistical calculations) चलाने से पहले यह सुनिश्चित करना हो कि वह एक
भरा हुआ array है जिसमें हर item एक float है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `areFloats` का उपयोग `unknown[]` को guard करने के लिए करें, इससे पहले कि आप उसे केवल floats वाले `number[]` के रूप में
> मानें; यह खाली arrays के लिए और किसी भी non-float element के लिए `false` लौटाता है।

### फायदे

- केवल तब `true` लौटाता है जब इनपुट एक गैर-खाली array हो और उसका हर element एक float हो।
- तेज़ी से विफल होता है: जैसे ही कोई non-float element मिलता है, तुरंत `false` लौटाता है।
- float-विशिष्ट गणनाएँ करने से पहले अज्ञात इनपुट को validate करने में मदद करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areFloats(array)`

पैरामीटर:

- `array`: float elements के लिए जाँचने वाला array।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // सही
console.log(areFloats(b)); // गलत
console.log(areFloats(c)); // गलत

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areFloats(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 3:57:33 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>