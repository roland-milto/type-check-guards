# areStrings

## विवरण

`areStrings` ले कुनै एरे गैर-खाली छ र त्यसका सबै तत्वहरू स्ट्रिङ हुन् कि होइनन् भनेर जाँच गर्छ, र त्यो अवस्थामा मात्र
`true` फर्काउँछ।

### प्रयोगको केस

बाह्य वा प्रयोगकर्ताद्वारा प्रदान गरिएको डेटा (जस्तै, query params, JSON payloads, CSV fields) लाई मान्य गरेर प्रशोधन
गर्नु अघि तपाईंसँग स्ट्रिङहरूको गैर-खाली सूची छ भन्ने सुनिश्चित गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> स्ट्रिङ- मात्र लजिक लागू गर्नु अघि अज्ञात एरेहरूलाई मान्य गर्न `areStrings` प्रयोग गर्नुहोस्; यसले खाली एरेहरूका लागि
`false` फर्काउँछ।

### फाइदाहरू

- हरेक तत्व स्ट्रिङ हो भन्ने सुनिश्चित गर्छ र `false` फर्काएर मिश्रित-प्रकारका एरेहरू अस्वीकार गर्छ।
- खाली एरेहरू अस्वीकार गर्छ, त्यसैले `true` ले केवल स्ट्रिङहरूको गैर-खाली सूचीलाई मात्र जनाउँछ।
- स्ट्रिङ- मात्र अपरेसनहरू (जस्तै, `trim`, `toLowerCase`) गर्ने अघि छिटो runtime guard का रूपमा उपयोगी।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areStrings(value)`

प्यारामिटरहरू:

- `value`: Expected type `string[]`.

### स्थानीय फङ्सन आयात

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input रनटाइममा खाली नभएको string[] हो
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areStrings(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>यो फाइल 30 January 2026 at 13:19:31 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>