# areDates

## विवरण

`areDates` ले दिइएको एरे भरिएको छ र केवल `Date` वस्तुहरू मात्र समावेश गर्छ कि गर्दैन भनेर निर्धारण गर्छ, र सबै तत्वहरू
मान्य मितिहरू हुँदा मात्र `true` फर्काउँछ।

### प्रयोगको केस

समयअनुसार क्रमबद्ध गर्ने, फर्म्याट गर्ने, वा दायरा गणना गर्ने जस्ता मिति-विशेष तर्क चलाउनु अघि अज्ञात इनपुट (जस्तै,
parsed JSON, form data, API payloads) प्रमाणीकरण गर्न `areDates` प्रयोग गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> हरेक तत्व `Date` भएको गैर-खाली एरेका लागि मात्र `true` फर्काउँछ; खाली एरेले `false` दिन्छ।

### फाइदाहरू

- एरेको सामग्री प्रमाणीकरण गर्नु अघि एरे खाली छैन भन्ने सुनिश्चित गर्छ, जसले खाली इनपुटका लागि `true` फर्किनबाट रोक्छ।
- हरेक तत्व `Date` को instance हो कि होइन भनेर जाँच्छ, र पहिलो नमिलेको अवस्थामा तुरुन्तै `false` फर्काउँछ।
- एरेका आइटमहरूमा मिति-विशेष अपरेसनहरू गर्नु अघि guard-शैलीको जाँचका रूपमा उपयोगी।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areDates(array)`

प्यारामिटरहरू:

- `array`: `Date` वस्तुहरूका लागि जाँचिने एरे।

### स्थानीय फङ्सन आयात

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // सत्य
console.log(areDates(b)); // असत्य
console.log(areDates(c)); // असत्य

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areDates(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areDates](../_analysis/areDates.md)

<br>

---

<small>यो फाइल 31 January 2026 at 15:31:29 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>