# isBoolean

## विवरण

दिइएको मान `boolean` हो कि होइन भनेर निर्धारण गर्छ।

### प्रयोगको केस

बाह्य वा टाइप नगरिएको डेटा (जस्तै, environment variables, JSON payloads, query parameters) लाई मान्य गरेर सर्तीय तर्कमा
प्रयोग गर्नु अघि मान `boolean` हो भन्ने सुनिश्चित गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> बुलियन अपरेसनहरू लागू गर्नु अघि `unknown` लाई `boolean` मा साँघुरो बनाउन `isBoolean` प्रयोग गर्नुहोस्।

### फाइदाहरू

- `typeof` प्रयोग गरेर सरल र छिटो रनटाइम जाँच।
- बुलियन-विशिष्ट तर्क लागू गर्नु अघि अज्ञात इनपुटलाई मान्य गर्न मद्दत गर्छ।
- पूर्वानुमेय `boolean` परिणाम (`true`/`false`) फर्काउँछ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isBoolean(value)`

प्यारामिटरहरू:

- `value`: जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // यहाँ input boolean हो
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isBoolean(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>यो फाइल 30 January 2026 at 14:37:11 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>