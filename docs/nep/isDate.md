# isDate

## विवरण

`isDate` ले प्रदान गरिएको मान `Date` हो कि होइन निर्धारण गर्छ; `Date` इन्स्टेन्सहरूका लागि `true` र अन्यथा `false`
फर्काउँछ।

### प्रयोगको केस

`toISOString()` कल गर्ने, फर्म्याटिङ, तुलना जस्ता `Date` अपरेसनहरू गर्नु अघि अज्ञात मानहरू (जस्तै, request data, config
values, वा parsed JSON) लाई प्रमाणीकरण र narrow गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> रनटाइममा `unknown` लाई `Date` मा narrow गर्न `isDate` प्रयोग गर्नुहोस्; यसले वास्तविक `Date` इन्स्टेन्सहरूका लागि
> मात्र `true` फर्काउँछ (date strings का लागि होइन)।

### फाइदाहरू

- यसले कुनै मान `Date` हो कि होइन भनेर प्रमाणित गर्न सरल रनटाइम गार्ड प्रदान गर्छ।
- यसले केवल `Date` इन्स्टेन्सहरू मात्र प्रमाणीकरण पास हुने सुनिश्चित गरेर टाइप त्रुटिहरू रोक्न मद्दत गर्छ।
- मिति-विशिष्ट मेथडहरू प्रयोग गर्नु अघि अज्ञात इनपुटहरू (जस्तै, API payloads) प्रमाणीकरण गर्न यो उपयोगी हुन्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isDate(value)`

प्यारामिटरहरू:

- `value`: `Date` प्रकारका लागि जाँच गरिनुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // यहाँ input एउटा Date हो
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isDate(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isDate](../_analysis/isDate.md)

<br>

---

<small>यो फाइल 31 January 2026 at 15:46:58 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>