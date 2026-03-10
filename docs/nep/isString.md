# isString

## विवरण

`isString` ले दिइएको मान string हो कि होइन भनेर निर्धारण गर्छ।

### प्रयोगको केस

runtime मा user input, API payload fields, वा configuration values प्रमाणीकरण गरेर string अपरेसनहरू (जस्तै trimming,
splitting, case conversion) लागू गर्नु अघि मान string हो भन्ने सुनिश्चित गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `unknown` वा loosely typed मानहरूमा string methods कल गर्नु अघि प्रमाणीकरण गर्न `isString` प्रयोग गर्नुहोस्; यसले
`typeof value === "string"` हुँदा मात्र `true` फर्काउँछ।

### फाइदाहरू

- `typeof` प्रयोग गरेर सरल र छिटो जाँच।
- पूर्वानुमानयोग्य boolean नतिजा फर्काउँछ: string का लागि `true`, अन्यथा `false`।
- खाली र गैर-खाली दुवै string का लागि काम गर्छ।
- string-विशेष अपरेसनहरू गर्नु अघि हल्का runtime guard का रूपमा उपयोगी।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isString(value)`

प्यारामिटरहरू:

- `value`: string प्रकारका लागि परीक्षण गरिने मान।

### स्थानीय फङ्सन आयात

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // यहाँ input एउटा स्ट्रिङ हो
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isString(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isString](../_analysis/isString.md)

<br>

---

<small>यो फाइल 30 January 2026 at 13:14:56 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>