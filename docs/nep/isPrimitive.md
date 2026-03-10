# isPrimitive

## विवरण

`isPrimitive` ले दिइएको मान primitive (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`, `symbol`) हो कि
होइन निर्धारण गर्छ।

### प्रयोगको केस

रनटाइममा इनपुटहरू (जस्तै, API payload का fields, configuration मानहरू, वा प्रयोगकर्ताले दिएको डेटा) validate गरेर
serialization, logging, वा primitive-मा मात्र लागू हुने अपरेसनहरू गर्नु अघि मान primitive हो भन्ने सुनिश्चित गर्नु।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> वस्तु वा function जस्तो व्यवहार गर्नु अघि `unknown` इनपुटहरूलाई guard गर्न `isPrimitive` प्रयोग गर्नुहोस्; यसले
> primitives का लागि `true` र objects तथा functions का लागि `false` फर्काउँछ।

### फाइदाहरू

- कुनै मान JavaScript primitive हो कि होइन भन्ने छिटो, allocation-रहित जाँच।
- `null` लाई primitive रूपमा सही रूपमा व्यवहार गर्छ (यद्यपि `typeof null` `"object"` हुन्छ)।
- object-मा मात्र लागू हुने अपरेसनहरू गर्नु अघि `unknown` मानहरूलाई narrow गर्न मद्दत गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isPrimitive(value)`

प्यारामिटरहरू:

- `value`: primitive प्रकार हो कि होइन भनेर जाँच गर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isPrimitive(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>यो फाइल 30 January 2026 at 23:57:03 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>