# isFalse

## विवरण

`isFalse` ले दिइएको मान boolean literal `false` सँग कडाइका साथ बराबर छ कि छैन भनेर जाँच गर्छ।

### प्रयोगको केस

अज्ञात डेटा (जस्तै JSON, query params, वा user input बाट) प्रमाणीकरण गर्नु, जहाँ केवल स्पष्ट boolean मान `false` लाई
मात्र वैध flag का रूपमा मानिनुपर्छ, र बाँकी सबै अस्वीकार गरिनुपर्छ।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> जब तपाईंले केवल literal `false` मात्र स्वीकार गर्न र अन्य सबै falsy मानहरू अस्वीकार गर्न आवश्यक हुन्छ, तब `isFalse`
> प्रयोग गर्नुहोस्; यसले `value === false` का लागि मात्र `true` फर्काउँछ।

### फाइदाहरू

- कुनै पनि coercion बिना boolean literal `false` का लागि कडा जाँच प्रदान गर्छ।
- `false` लाई `0`, `""`, `null`, र `undefined` जस्ता अन्य falsy मानहरूबाट छुट्याउन मद्दत गर्छ।
- अज्ञात इनपुट प्रमाणीकरण गर्दा उद्देश्य स्पष्ट बनाइदिएर पठनीयता सुधार गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isFalse(value)`

प्यारामिटरहरू:

- `value`: जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // यहाँ input ठ्याक्कै false हो
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isFalse(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>यो फाइल 31 January 2026 at 16:43:51 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>