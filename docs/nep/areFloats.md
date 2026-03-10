# areFloats

## विवरण

`areFloats` ले दिइएको array भरिएको छ कि छैन र यसको सबै तत्वहरू float हुन् कि होइनन् भनेर जाँच गर्छ।

### प्रयोगको केस

JSON, query parameters, वा बाह्य APIs बाट आएको `unknown[]` प्राप्त हुँदा, संख्यात्मक तर्क (जस्तै औसत निकाल्ने,
interpolation, वा सांख्यिकीय गणना) चलाउनु अघि प्रत्येक item float भएको भरिएको array हो भन्ने सुनिश्चित गर्न `areFloats`
प्रयोग गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `areFloats` प्रयोग गरेर `unknown[]` लाई केवल float हरू भएको `number[]` जस्तो व्यवहार गर्नु अघि guard गर्नुहोस्; खाली
> array र कुनै पनि non-float तत्वका लागि यसले `false` फर्काउँछ।

### फाइदाहरू

- इनपुट गैर-खाली array हो र प्रत्येक तत्व float हो भने मात्र `true` फर्काउँछ।
- छिटो असफल हुन्छ: कुनै non-float तत्व भेटिने बित्तिकै `false` फर्काउँछ।
- float-विशेष गणनाहरू गर्नु अघि अज्ञात इनपुटलाई मान्यकरण गर्न मद्दत गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areFloats(array)`

प्यारामिटरहरू:

- `array`: float तत्वहरू छन् कि छैनन् भनेर जाँच गर्ने array।

### स्थानीय फङ्सन आयात

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // सत्य
console.log(areFloats(b)); // असत्य
console.log(areFloats(c)); // असत्य

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areFloats(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>यो फाइल 30 January 2026 at 15:58:38 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>