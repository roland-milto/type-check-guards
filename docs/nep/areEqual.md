# areEqual

## विवरण

`areEqual` ले array का सबै तत्वहरू दिइएको अपेक्षित मानसँग बराबर छन् कि छैनन् भनेर जाँच गर्छ, र हरेक आइटम मिल्ने गैर-खाली
array का लागि मात्र `true` फर्काउँछ।

### प्रयोगको केस

सूचीमा केवल एउटै अनुमति प्राप्त मान मात्र छ भनेर प्रमाणीकरण गर्नुहोस् (जस्तै, सबै status flags `true` छन्, सबै roles
`"admin"` छन्, वा सबै संख्यात्मक प्रविष्टिहरू आवश्यक स्थिराङ्कसँग बराबर छन्) र खाली इनपुटलाई अवैध (`false`) मानेर।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> कडा all-items जाँच चाहिँदा `areEqual` प्रयोग गर्नुहोस्; खाली array र कुनै पनि non-array वा non-filled इनपुटका लागि
> यसले `false` फर्काउँछ।

### फाइदाहरू

- हरेक तत्व अपेक्षित मानसँग मिल्दा मात्र `true` फर्काउँछ; नत्र `false` फर्काउँछ।
- छिटो असफल हुन्छ: मिल्दैन भन्ने तत्व भेटिने बित्तिकै जाँच रोक्छ।
- इनपुट भरिएको array नभएमा `false` फर्काएर अवैध इनपुटबाट जोगाउँछ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areEqual(value, expected)`

प्यारामिटरहरू:

- `value`: जाँच गर्नुपर्ने array।
- `expected`: array का प्रत्येक आइटमसँग तुलना गर्नुपर्ने तत्व।

### स्थानीय फङ्सन आयात

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areEqual(value, expected)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>यो फाइल 31 January 2026 at 23:51:27 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>