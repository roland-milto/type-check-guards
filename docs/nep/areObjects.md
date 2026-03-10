# areObjects

## विवरण

`areObjects` ले प्रदान गरिएको भरिएको एरेमा केवल वस्तुहरू मात्र छन् कि छैनन् भनेर जाँच गर्छ।

### प्रयोगको केस

JSON parsing वा बाह्य API हरूबाट जस्तै अज्ञात एरे प्राप्त हुँदा, iteration गरेर वस्तुका गुणहरू (properties) पहुँच गर्नु
अघि यो खाली नभएको र प्रत्येक तत्व एउटा वस्तु हो भन्ने सुनिश्चित गर्न `areObjects` प्रयोग गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `unknown[]` लाई वस्तुहरूका रूपमा व्यवहार गर्नु अघि मान्यकरण गर्न `areObjects` प्रयोग गर्नुहोस्; खाली एरेका लागि यसले
`false` फर्काउँछ।

### फाइदाहरू

- इनपुट भरिएको एरे भएको र प्रत्येक तत्व एउटा वस्तु (object) भएको अवस्थामा मात्र `true` फर्काउँछ।
- कुनै गैर-वस्तु तत्व भेटिने बित्तिकै छिट्टै रोक्छ र `false` फर्काउँछ।
- वस्तु-विशेष अपरेसनहरू गर्नु अघि अज्ञात इनपुटलाई मान्यकरण गर्न मद्दत गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areObjects(array)`

प्यारामिटरहरू:

- `array`: वस्तु तत्वहरू छन् कि छैनन् भनेर जाँच गर्नुपर्ने एरे।

### स्थानीय फङ्सन आयात

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value वस्तुहरूको भरिएको एरे हो
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areObjects(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>यो फाइल 31 January 2026 at 00:09:46 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>