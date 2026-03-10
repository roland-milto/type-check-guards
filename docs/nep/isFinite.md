# isFinite

## विवरण

दिइएको `value` सीमित `number` हो कि होइन निर्धारण गर्छ।

### प्रयोगको केस

संख्यात्मक गणना गर्नु अघि अज्ञात इनपुट (जस्तै JSON, फारम, वा API बाट) मान्यकरण गर्न `isFinite` प्रयोग गर्नुहोस्, ताकि
मान वास्तविक, सीमित संख्या हो भन्ने सुनिश्चित होस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `isFinite` सीमित संख्याहरूका लागि मात्र `true` फर्काउँछ; `NaN`, `Infinity`, र कुनै पनि गैर-संख्या मानका लागि `false`
> फर्काउँछ।

### फाइदाहरू

- विश्वसनीय सीमितता जाँचका लागि बिल्ट-इन `Number.isFinite` प्रयोग गर्छ।
- सीमित संख्याहरूका लागि मात्र `true` फर्काउँछ; `NaN`, `Infinity`, र गैर-संख्या इनपुटहरूका लागि `false` फर्काउँछ।
- मान्यकरण र गार्डिङ तर्कका लागि उपयुक्त, सरल र साइड-इफेक्ट-रहित प्रेडिकेट।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isFinite(value)`

प्यारामिटरहरू:

- `value`: सीमितता जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers यस्तो छ: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // यहाँ value एक सीमित संख्या हो
  const doubled = value * 2;
  console.log(doubled);
}
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isFinite(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>यो फाइल 30 January 2026 at 16:30:55 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>