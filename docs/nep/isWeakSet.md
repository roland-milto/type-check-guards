# isWeakSet

## विवरण

दिइएको `value` वस्तुहरूको `WeakSet` हो कि होइन भन्ने निर्धारण गर्छ।

### प्रयोगको केस

टाइप नलागेको इनपुट (जस्तै बाह्य API हरू, डायनामिक कन्फिगरेसन, वा `unknown` मानहरू) स्वीकार गर्दा `isWeakSet` प्रयोग
गर्नुहोस्, र `WeakSet`-विशिष्ट अपरेसनहरू प्रयोग गर्नु अघि यो `WeakSet` हो भन्ने कुरा प्रमाणित गर्न आवश्यक हुँदा।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> रनटाइममा `unknown` मानलाई `WeakSet<object>` मा न्यारो गर्न `isWeakSet` प्रयोग गर्नुहोस्; ध्यान दिनुहोस् कि `WeakSet`
> ले वस्तु रेफरेन्सहरू मात्र समावेश गर्न सक्छ।

### फाइदाहरू

- कुनै मान `WeakSet` हो कि होइन भन्ने कुरा जाँच्नका लागि सरल रनटाइम जाँच प्रदान गर्छ।
- `WeakSet` का इन्स्टेन्सहरूलाई मात्र त्यस्तै रूपमा व्यवहार गरिन्छ भन्ने सुनिश्चित गरेर टाइप त्रुटिहरू रोक्न मद्दत गर्छ।
- कुनै पनि `unknown` इनपुटसँग काम गर्छ र स्पष्ट बूलियन नतिजा (`true`/`false`) फर्काउँछ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isWeakSet(value)`

प्यारामिटरहरू:

- `value`: जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a रनटाइममा WeakSet हो
}
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isWeakSet(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>यो फाइल 30 January 2026 at 14:18:27 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>