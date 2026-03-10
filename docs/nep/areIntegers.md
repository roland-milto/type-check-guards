# areIntegers

## विवरण

`areIntegers` ले दिइएको एरेका सबै तत्वहरू पूर्णांक हुन् कि होइनन् भनेर निर्धारण गर्छ; पूर्णांक भए `true` र नभए `false`
फर्काउँछ।

### प्रयोगको केस

IDs, काउन्टरहरू, pagination offsets, वा एरे इन्डेक्सहरू जस्ता पूर्णांक मानहरूको filled सूची आवश्यक पर्ने तपाईंको logic
का लागि, प्रयोगकर्ताले दिएको वा बाह्य डेटा (जस्तै, query parameters, JSON payloads, CSV rows) लाई मान्यकरण गर्न
`areIntegers` प्रयोग गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `unknown[]` इनपुटलाई केवल पूर्णांकहरू भएको `number[]` का रूपमा व्यवहार गर्नु अघि `areIntegers` लाई runtime guard का
> रूपमा प्रयोग गर्नुहोस्। यसले `false` फर्काएमा, इनपुट या त filled array होइन वा कम्तीमा एउटा गैर-पूर्णांक मान समावेश छ।

### फाइदाहरू

- हरेक तत्व पूर्णांक हुँदा मात्र `true` फर्काउँछ; अन्यथा `false` फर्काउँछ।
- पूर्णांक-मात्र अपरेसनहरू (जस्तै, इन्डेक्सिङ, गणना, IDs) गर्नु अघि अज्ञात इनपुटलाई मान्यकरण गर्न मद्दत गर्छ।
- छिटो असफल हुन्छ: गैर-पूर्णांक तत्व भेटिने बित्तिकै जाँच रोक्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areIntegers(array)`

प्यारामिटरहरू:

- `array`: पूर्णांक तत्वहरू छन् कि छैनन् भनेर जाँच गर्नुपर्ने एरे।

### स्थानीय फङ्सन आयात

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // सत्य
console.log(areIntegers(b)); // सत्य
console.log(areIntegers(c)); // असत्य

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areIntegers(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>यो फाइल 31 January 2026 at 00:59:39 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>