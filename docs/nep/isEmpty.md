# isEmpty

## विवरण

दिइएको मान खाली छ कि छैन निर्धारण गर्छ, र `null`, `undefined`, खाली/whitespace स्ट्रिङहरू, खाली arrays, खाली `Map`/
`Set`, वा आफ्नै enumerable गुणहरू नभएका objects का लागि `true` फर्काउँछ।

### प्रयोगको केस

धेरै डेटा प्रकारहरूमा (जस्तै, form fields, API payloads, configuration objects) `null`, `undefined`, whitespace
स्ट्रिङहरू, खाली collections, र गुण नभएका objects लाई खाली मानिनुपर्ने अवस्थामा inputs validate गर्न र हराएका/खाली
मानहरू पत्ता लगाउन `isEmpty` प्रयोग गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `isEmpty` boolean फर्काउने utility हो (TypeScript type predicate होइन), त्यसैले यसले आफैंले types narrow गर्दैन;
> compile-time narrowing भन्दा validation/branching का लागि प्रयोग गर्नुहोस्।

### फाइदाहरू

- खालीपन जाँचका लागि `null` र `undefined` लाई `true` को रूपमा व्यवहार गर्छ।
- लम्बाइ जाँच्नु अघि ट्रिम गरेर केवल whitespace भएका स्ट्रिङहरूलाई खाली मान्छ।
- सामान्य कन्टेनर प्रकारहरू (arrays, `Map`, `Set`) र आफ्नै enumerable गुणहरू नभएका plain objects लाई समर्थन गर्छ।
- `hasOwnProperty` जाँच प्रयोग गरेर inherited गुणहरू गणना हुनबाट जोगाउँछ।
- guards र validation का लागि उपयुक्त सरल boolean परिणाम (`true`/`false`) फर्काउँछ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isEmpty(value)`

प्यारामिटरहरू:

- `value`: खाली छ कि छैन भनेर जाँच गर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isEmpty(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>यो फाइल 6 February 2026 at 16:19:46 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>