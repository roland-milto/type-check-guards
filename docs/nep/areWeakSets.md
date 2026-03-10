# areWeakSets

## विवरण

इनपुट खाली नभएको एरे हो र त्यसका प्रत्येक तत्व `WeakSet` हो कि होइन जाँच्छ, र त्यो अवस्थामा मात्र `true` फर्काउँछ।

### प्रयोगको केस

रनटाइम इनपुट (जस्तै APIs, कन्फिगरेसन, वा प्रयोगकर्ताले दिएको डेटा) मान्य गरेर, `WeakSet` व्यवहारमा निर्भर हुने लजिक अघि
बढाउनु अघि तपाईंसँग `WeakSet` इन्स्ट्यान्सहरूको खाली नभएको सूची छ भन्ने सुनिश्चित गर्नु।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `WeakSet[]` को रूपमा व्यवहार गर्नु अघि अज्ञात इनपुट मान्य गर्न `areWeakSets` प्रयोग गर्नुहोस्। यसले खाली एरे र एरे
> नभएका मानहरूका लागि `false` फर्काउँछ।

### फाइदाहरू

- इनपुट एरेका प्रत्येक तत्व `WeakSet` हो भन्ने सुनिश्चित गर्छ।
- खाली एरेका लागि `false` फर्काउँछ, जसले डेटा नहुँदा गल्तीले “सबै मान्य” नतिजा आउनबाट रोक्छ।
- इनपुट भरिएको एरे नभएमा ( `null` सहित) `false` फर्काएर सुरक्षित रूपमा असफल हुन्छ।
- `WeakSet` इन्स्ट्यान्स आवश्यक पर्ने अपरेसनहरू गर्नु अघि गार्डको रूपमा उपयोगी हुन्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areWeakSets(array)`

प्यारामिटरहरू:

- `array`: `WeakSet` वस्तुहरूका लागि जाँच गर्नुपर्ने एरे।

### स्थानीय फङ्सन आयात

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a WeakSet इन्स्टेन्सहरूको गैर-खाली एरे हो
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areWeakSets(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>यो फाइल 30 January 2026 at 14:09:55 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>