# isInteger

## विवरण

दिइएको `value` सुरक्षित पूर्णांक संख्या हो कि होइन निर्धारण गर्छ।

### प्रयोगको केस

अविश्वसनीय इनपुट (जस्तै, query params, JSON payloads, environment variables) लाई एरे इन्डेक्स, pagination, काउन्टर, वा
database IDs का लागि पूर्णांकको रूपमा प्रयोग गर्नु अघि मान्यकरण गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> अज्ञात इनपुटलाई संख्यात्मक पूर्णांकको रूपमा व्यवहार गर्नु अघि मान्यकरण गर्न `isInteger` प्रयोग गर्नुहोस्; यो
`typeof value === "number"` र `Number.isSafeInteger(value)` भएका मानहरूका लागि मात्र `true` फर्काउँछ।

### फाइदाहरू

- प्रकार र संख्यात्मक सुरक्षा दुवै जाँच्छ: इनपुट संख्या र सुरक्षित पूर्णांक हुँदा मात्र `true` फर्काउँछ।
- संख्यात्मक coercion का सामान्य समस्याहरू रोक्छ: "5" जस्ता स्ट्रिङहरूले सही रूपमा `false` फर्काउँछन्।
- पूर्णांक नभएका र असुरक्षित पूर्णांकहरू अस्वीकार गर्छ, जसले यसलाई ID, काउन्टर, र एरे इन्डेक्सिङका लागि उपयुक्त बनाउँछ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isInteger(value)`

प्यारामिटरहरू:

- `value`: पूर्णांक स्थिति जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // सत्य
const b = isInteger(-100);   // सत्य
const c = isInteger("5");    // असत्य
const d = isInteger(5.5);    // असत्य
const e = isInteger(null);   // असत्य

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isInteger(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>यो फाइल 31 January 2026 at 00:50:45 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>