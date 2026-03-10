# areWeakMaps

## विवरण

`areWeakMaps` ले कुनै मान non-empty एरे हो र त्यसका प्रत्येक तत्व `WeakMap` हो कि होइन भनेर जाँच गर्छ; त्यस अवस्थामा
मात्र `true` फर्काउँछ र अन्यथा `false`।

### प्रयोगको केस

रनटाइम डाटा (जस्तै, parsed JSON, plugin inputs, वा loosely typed configuration) लाई मान्यकरण गरेर यो `WeakMap` instances
को non-empty एरे हो भन्ने सुनिश्चित गर्नुहोस्, त्यसपछि मात्र iterate गरेर `WeakMap` मेथडहरू कल गर्नुहोस्; कुनै पनि तत्व
`WeakMap` नभएमा वा एरे खाली भएमा `false` फर्काउँछ।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> अज्ञात इनपुटलाई non-empty `WeakMap[]` का रूपमा व्यवहार गर्नु अघि मान्यकरण गर्न `areWeakMaps` प्रयोग गर्नुहोस्; खाली
> एरेका लागि यसले `false` फर्काउँछ।

### फाइदाहरू

- दिइएको एरेका प्रत्येक तत्व `WeakMap` को instance हो भन्ने सुनिश्चित गर्छ।
- खाली एरेका लागि `false` फर्काउँछ, जसले “डाटा छैन” लाई वैध इनपुटका रूपमा गल्तीले स्वीकारिनबाट रोक्छ।
- सबै आइटममा `WeakMap`-विशेष अपरेसनहरू गर्नु अघि guard का रूपमा उपयोगी हुन्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areWeakMaps(array)`

प्यारामिटरहरू:

- `array`: `WeakMap` instances छन् कि छैनन् भनेर जाँच गर्ने एरे।

### स्थानीय फङ्सन आयात

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // सूची WeakMap उदाहरणहरूको गैर-खाली एरे हो
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // गैर-खाली WeakMap[] होइन
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areWeakMaps(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>यो फाइल 30 January 2026 at 13:38:28 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>