# isFloat

## विवरण

`isFloat` ले दिइएको `value` सीमित फ्लोटिङ-पोइन्ट संख्या (पूर्णांक नभएको `number`) हो कि होइन भनेर निर्धारण गर्छ।

### प्रयोगको केस

अंशात्मक मान आवश्यक पर्ने (जस्तै, मूल्य, मापन, दर) प्रयोगकर्ताले दिएको संख्यात्मक इनपुट प्रमाणीकरण गर्नु र पूर्णांक,
`NaN`, तथा अनन्त (infinity) मानहरू अस्वीकार गर्नु।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> सीमित, गैर-पूर्णांक संख्यात्मक इनपुट मात्र स्वीकार गर्नुपर्ने बेला `isFloat` प्रयोग गर्नुहोस्; यसले पूर्णांक र
> गैर-सीमित संख्याहरू अस्वीकार गर्छ।

### फाइदाहरू

- सीमित (finite) र गैर-पूर्णांक संख्याहरूका लागि मात्र `true` फर्काउँछ (पूर्णांक, `NaN`, `Infinity`, र `-Infinity` लाई
  बाहिर राख्छ)।
- कुनै पनि इनपुट प्रकार (`unknown`) सँग काम गर्छ र `typeof value === "number"` जाँच गरेर सुरक्षित रूपमा टाइप साँघुरो (
  narrow) गर्छ।
- पूर्वानुमेय व्यवहारका लागि बिल्ट-इन संख्यात्मक गार्डहरू (`Number.isInteger`, `Number.isFinite`) प्रयोग गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isFloat(value)`

प्यारामिटरहरू:

- `value`: यो मान फ्लोटिङ-पोइन्ट संख्या हो कि होइन भनेर जाँचिने मान।

### स्थानीय फङ्सन आयात

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // मान रनटाइममा संख्या हो; यो सीमित छ र पूर्णांक होइन
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isFloat(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>यो फाइल 30 January 2026 at 16:08:56 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>