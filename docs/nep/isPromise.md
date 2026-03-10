# isPromise

## विवरण

दिइएको मान `Promise` हो कि होइन निर्धारण गर्छ।

### प्रयोगको केस

प्लगइनहरू, डायनामिक इम्पोर्टहरू, वा ढिलो-टाइप गरिएका API हरूबाट फर्काइएका मानहरू ह्यान्डल गर्दा जस्तै अवस्थामा, अज्ञात
इनपुटहरूलाई `Promise` को रूपमा व्यवहार गर्नु अघि मान्य गर्न `isPromise` प्रयोग गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `isPromise` ले `instanceof Promise` मार्फत जाँच गर्छ, त्यसैले यसले वास्तविक `Promise` इन्स्टेन्सहरूका लागि मात्र
`true` फर्काउँछ (सामान्य thenables का लागि होइन)।

### फाइदाहरू

- कुनै मान `Promise` हो कि होइन भन्ने कुरा जाँच्नका लागि सरल रनटाइम जाँच प्रदान गर्छ।
- वास्तविक `Promise` इन्स्टेन्स आवश्यक पर्ने कोड पथहरूलाई सुरक्षित गर्न मद्दत गर्छ, र पूर्वानुमेय रूपमा `true` वा
  `false` फर्काउँछ।
- वास्तविक `Promise` इन्स्टेन्स आवश्यक पारेर “thenable” वस्तुहरू (जस्तै, `{ then() {} }`) बाट आउने गलत सकारात्मक
  नतिजाहरूबाट बचाउँछ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isPromise(value)`

प्यारामिटरहरू:

- `value`: जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // सत्य
console.log(isPromise(b)); // असत्य
console.log(isPromise(123)); // असत्य
console.log(isPromise(null)); // असत्य

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isPromise(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>यो फाइल 30 January 2026 at 23:53:38 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>