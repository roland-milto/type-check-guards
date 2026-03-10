# areOfType

## विवरण

दिइएको `array` का सबै तत्वहरू निर्दिष्ट `type` का हुन् कि होइनन् भनेर जाँच गर्छ।

### प्रयोगको केस

एरेका प्रत्येक तत्वमा प्रकार-विशिष्ट अपरेसनहरू गर्नु अघि अज्ञात इनपुट (जस्तै, पार्स गरिएको JSON, API payloads,
प्रयोगकर्ता इनपुट) प्रमाणीकरण गर्न `areOfType` प्रयोग गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `areOfType` प्रकार गार्ड भएकाले, TypeScript ले `if (areOfType(...)) {}` ब्लकभित्र एरेलाई `Array<DataTypeOf<T>>` मा
> संकुचित गर्छ।

### फाइदाहरू

- TypeScript प्रकार गार्ड प्रदान गर्छ: जब यसले `true` फर्काउँछ, इनपुट `Array<DataTypeOf<T>>` मा संकुचित हुन्छ।
- अनुरोध गरिएको रनटाइम प्रकारसँग प्रत्येक तत्वलाई प्रमाणीकरण गर्छ, मिश्रित-प्रकारका एरेहरू पास हुनबाट रोक्छ।
- छिटो असफल हुन्छ: नमेल्ने तत्व भेटिने बित्तिकै `false` फर्काउँछ।
- डिजाइनअनुसार गैर-एरे र खाली एरेहरू अस्वीकार गर्छ ( `isFilledArray` मा निर्भर गर्छ)।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areOfType(array, type)`

प्यारामिटरहरू:

- `array`: जाँच गर्नुपर्ने एरे।
- `type`: एरेका प्रत्येक तत्वसँग तुलना गरेर जाँच गर्नुपर्ने प्रकार।

### स्थानीय फङ्सन आयात

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values अब number[] हो
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areOfType(array, type)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>यो फाइल 30 January 2026 at 17:10:37 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>