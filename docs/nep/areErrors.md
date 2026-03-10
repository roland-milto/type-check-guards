# areErrors

## विवरण

एरे खाली नभएको र केवल `Error` वस्तुहरू मात्र समावेश गरेको छ कि छैन जाँच्छ, र `true` वा `false` फर्काउँछ।

### प्रयोगको केस

रनटाइमबाट प्रदान गरिएको `unknown[]` (जस्तै, समेकित असफलताहरू, भ्यालिडेसन परिणामहरू, वा डीसिरियलाइज गरिएको डेटा) लाई
इटरेट, लग, वा पुनः थ्रो गर्नु अघि यो `Error` वस्तुहरूको खाली नभएको सूची हो भन्ने कुरा प्रमाणित गर्नु।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `areErrors` ले हरेक आइटम `Error` भएको भरिएको एरेका लागि मात्र `true` फर्काउँछ; खाली एरेका लागि वा कुनै तत्व `Error`
> नभएमा `false` फर्काउँछ।

### फाइदाहरू

- हरेक तत्व `Error` इन्स्ट्यान्स हो भन्ने सुनिश्चित गर्छ, जसले सुरक्षित त्रुटि ह्यान्डलिङ र लगिङ सक्षम बनाउँछ।
- खाली एरेहरू अस्वीकार गर्छ, जसले गल्तीले “त्रुटि छैन” अवस्थालाई वैध त्रुटि सूचीका रूपमा व्यवहार हुनबाट रोक्छ।
- `unknown[]` इनपुटहरू (जस्तै, API वा `catch` ब्लकहरूबाट) सँग काम गर्दा रनटाइम गार्डका रूपमा राम्रोसँग काम गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areErrors(array)`

प्यारामिटरहरू:

- `array`: `Error` वस्तुहरूका लागि जाँच गर्ने एरे।

### स्थानीय फङ्सन आयात

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value Error वस्तुहरूको खाली नभएको एरे हो
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areErrors(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>यो फाइल 6 February 2026 at 12:34:41 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>