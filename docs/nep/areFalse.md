# areFalse

## विवरण

`areFalse` ले प्रदान गरिएको array का सबै तत्वहरू कडाइका साथ boolean `false` हुन् कि होइनन् भनेर जाँच गर्छ।

### प्रयोगको केस

अगाडि बढ्नु अघि feature flags, checks, वा guard results को सूची सबै `false` छन् भन्ने प्रमाणीकरण गर्नुहोस् (उदाहरणका
लागि, कुनै blocking condition छैन भन्ने पुष्टि गर्न)।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> array खाली नभएको र केवल boolean मान `false` मात्र समावेश भएको कडाइका साथ प्रमाणीकरण चाहिँदा `areFalse` प्रयोग
> गर्नुहोस्।

### फाइदाहरू

- हरेक तत्व कडाइका साथ `false` नै छ भन्ने सुनिश्चित गर्छ (truthy/falsey coercion बिना)।
- `isFilledArray` मार्फत भरिएको array आवश्यक पारेर non-array वा खाली array का लागि `false` फर्काउँछ।
- दक्षताका लागि पहिलो non-`false` तत्वमै छिट्टै रोक्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areFalse(array)`

प्यारामिटरहरू:

- `array`: जाँच गर्नुपर्ने array, जसमा कुनै पनि प्रकारका तत्वहरू हुन सक्छन्।

### स्थानीय फङ्सन आयात

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // सत्य
const b = areFalse([false, true, false]);  // असत्य
const c = areFalse([false, "false", false]); // असत्य
const d = areFalse([]); // असत्य

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areFalse(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>यो फाइल 31 January 2026 at 16:17:59 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>