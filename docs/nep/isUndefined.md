# isUndefined

## विवरण

दिइएको मान `undefined` हो कि होइन भनेर जाँच गर्छ।

### प्रयोगको केस

वैकल्पिक इनपुटहरूलाई गार्ड गर्न, हराइरहेका प्रोपर्टीहरू पत्ता लगाउन, वा “प्रदान नगरिएको” (`undefined`) र “स्पष्ट रूपमा
खाली” (`null`) बीच फरक छुट्याउन `isUndefined` प्रयोग गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `undefined` ( `null` होइन) लाई विशेष रूपमा पत्ता लगाउनुपर्ने बेला `isUndefined` प्रयोग गर्नुहोस्। यो सुरक्षित छ किनकि
> यो `typeof value === "undefined"` मा आधारित छ।

### फाइदाहरू

- `typeof` प्रयोग गरेर `undefined` को स्पष्ट, प्रत्यक्ष जाँच प्रदान गर्छ, घोषणा नगरिएका भेरिएबलहरूसँग हुने किनाराका
  केसहरूबाट बचाउँछ।
- गार्ड, शाखाकरण, र मान्यकरण तर्कका लागि उपयुक्त सरल बूलियन नतिजा (`true`/`false`) फर्काउँछ।
- `undefined` लाई `null`, `0`, `""`, वा `NaN` जस्ता अन्य “खाली” मानहरूबाट छुट्याउन मद्दत गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isUndefined(value)`

प्यारामिटरहरू:

- `value`: जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // यहाँ x अपरिभाषित छ
} else {
  // यहाँ x अपरिभाषित छैन
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isUndefined(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>यो फाइल 30 January 2026 at 14:03:43 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>