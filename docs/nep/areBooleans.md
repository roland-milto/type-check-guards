# areBooleans

## विवरण

`areBooleans` ले दिइएको गैर-खाली array मा केवल boolean मानहरू मात्र छन् कि छैनन् भनेर जाँच गर्छ; भएमा `true` र नभएमा
`false` फर्काउँछ।

### प्रयोगको केस

प्रयोगकर्ताले दिएको वा बाह्य डेटा (जस्तै, JSON payloads, query params, config arrays) लाई मान्यकरण गरेर गैर-खाली सूचीमा
केवल booleans मात्र छन् भन्ने सुनिश्चित गर्नुहोस्, त्यसपछि boolean logic लागू गर्नुहोस् वा `boolean[]` अपेक्षा गर्ने
APIs मा पास गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `unknown[]` लाई `boolean[]` को रूपमा प्रयोग गर्नु अघि `areBooleans` प्रयोग गरेर मान्यकरण गर्नुहोस्; यसले खाली array का
> लागि `false` फर्काउँछ, त्यसैले खाली सूचीलाई अनुमति दिनुपर्ने भए त्यो केसलाई स्पष्ट रूपमा ह्यान्डल गर्नुहोस्।

### फाइदाहरू

- हरेक तत्व boolean हो र इनपुट गैर-खाली array हो भने मात्र `true` फर्काउँछ।
- खाली array लाई अस्वीकार गरेर ( `false` फर्काएर) गलत सकारात्मक परिणामहरू रोक्छ।
- boolean- मात्र अपरेसनहरू (जस्तै, `every`, `some`, logical reductions) अघि runtime guard का रूपमा राम्रोसँग काम गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areBooleans(array)`

प्यारामिटरहरू:

- `array`: boolean तत्वहरू छन् कि छैनन् भनेर जाँच गर्नुपर्ने array।

### स्थानीय फङ्सन आयात

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areBooleans(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>यो फाइल 30 January 2026 at 14:41:22 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>