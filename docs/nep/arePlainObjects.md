# arePlainObjects

## विवरण

एरेका सबै तत्वहरू साधारण (plain) वस्तु हुन् कि होइनन् भनेर जाँच गर्छ, प्रत्येक तत्व योग्य भएमा मात्र `true` फर्काउँछ।

### प्रयोगको केस

बाह्य वा टाइप नगरिएको डेटा (जस्तै, parsed JSON, API payloads, form submissions) लाई मान्य गर्नुहोस् ताकि iteration गरेर
properties पढ्नु अघि तपाईंले प्रत्येक प्रविष्टि साधारण (plain) वस्तु भएको गैर-खाली एरे प्राप्त गर्नुभएको छ भन्ने
सुनिश्चित होस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> TypeScript मा अज्ञात इनपुटलाई `Record<string, unknown>[]` (वा अझ कडा object shape) को रूपमा व्यवहार गर्नु अघि त्यसलाई
> मान्य गर्न `arePlainObjects` प्रयोग गर्नुहोस्।

### फाइदाहरू

- इनपुट एरेका प्रत्येक तत्व साधारण (plain) वस्तु हो भन्ने सुनिश्चित गर्छ, सबै वस्तुहरू मिल्दा मात्र `true` फर्काउँछ।
- अवैध इनपुटहरू (एरे नभएको वा खाली एरे) लाई `false` फर्काएर सुरुमै अस्वीकार गर्छ।
- `Object.create(null)` बाट बनेका वस्तुहरू र object-literal वस्तुहरू दुवैलाई मान्य साधारण (plain) वस्तुका रूपमा व्यवहार
  गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `arePlainObjects(array)`

प्यारामिटरहरू:

- `array`: साधारण (plain) वस्तु तत्वहरू छन् कि छैनन् भनेर जाँच गर्नुपर्ने एरे।

### स्थानीय फङ्सन आयात

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // सत्य
const b = arePlainObjects([{}, Object.create(null)]); // सत्य
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // असत्य
const d = arePlainObjects([] as unknown[]); // असत्य
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.arePlainObjects(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>यो फाइल 30 January 2026 at 16:55:04 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>