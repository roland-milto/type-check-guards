# areFilledArrays

## विवरण

`areFilledArrays` ले दुई-आयामिक एरे खाली छैन र यसको सबै उप-एरेहरू खाली छैनन् कि छैनन् भनेर जाँच्छ।

### प्रयोगको केस

तालिकात्मक वा म्याट्रिक्स-जस्तो इनपुट (जस्तै, CSV पङ्क्तिहरू, ग्रिड डाटा, समूहबद्ध नतिजाहरू) प्रमाणीकरण गर्न
`areFilledArrays` प्रयोग गर्नुहोस्, ताकि कम्तीमा एउटा उप-एरे छ र कुनै पनि उप-एरे खाली छैन भन्ने कुरा सुरक्षित रूपमा
मान्न सकियोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> इटरेट गर्न वा इन्डेक्सिङ गर्नु अघि 2D एरेमा कम्तीमा एउटा पङ्क्ति छ र प्रत्येक पङ्क्तिमा कम्तीमा एउटा तत्व छ भन्ने
> सुनिश्चित गर्नुपर्ने बेला `areFilledArrays` प्रयोग गर्नुहोस्।

### फाइदाहरू

- बाहिरी एरे खाली छैन र प्रत्येक भित्री एरे पनि खाली छैन भन्ने कुरा प्रमाणीकरण गर्छ, दुवै सर्त पूरा हुँदा मात्र `true`
  फर्काउँछ।
- उप-एरेहरूभित्रका कुनै पनि तत्व प्रकारहरू (जस्तै, संख्या, स्ट्रिङ, वस्तुहरू, नेस्टेड एरेहरू) सँग काम गर्छ, किनकि यसले
  तत्वको सामग्री होइन, एरे “भरिएको” अवस्थामात्र जाँच्छ।
- दुई-आयामिक डाटा प्रशोधन गर्नु अघि गार्डका रूपमा उपयुक्त सरल बूलियन परिणाम (`true`/`false`) प्रदान गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areFilledArrays(array)`

प्यारामिटरहरू:

- `array`: जाँच गर्नुपर्ने दुई-आयामिक एरे।

### स्थानीय फङ्सन आयात

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // सत्य
console.log(areFilledArrays(b)); // सत्य
console.log(areFilledArrays(c)); // सत्य
console.log(areFilledArrays(d)); // असत्य
console.log(areFilledArrays(e)); // असत्य
console.log(areFilledArrays(f)); // असत्य

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areFilledArrays(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>यो फाइल 6 February 2026 at 11:57:58 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>