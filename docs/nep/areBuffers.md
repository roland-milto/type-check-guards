# areBuffers

## विवरण

`areBuffers` ले प्रदान गरिएको मान खाली नभएको, भरिएको एरे हो कि होइन र त्यसका प्रत्येक तत्व `Buffer` हो कि होइन भनेर जाँच
गर्छ; त्यस्तो भए `true` र नभए `false` फर्काउँछ।

### प्रयोगको केस

आउँदै गरेका chunk एरेहरू (जस्तै, streams, file uploads, वा network packets बाट) लाई मान्य गरेर सबै भागहरू `Buffer`
इन्स्टेन्स हुन् भन्ने सुनिश्चित गर्नुहोस्, त्यसपछि मात्र तिनीहरूलाई concatenate, decode, वा cryptographic वा
binary-processing फङ्सनहरूमा पास गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `Buffer.concat` जस्ता Buffer-विशेष API हरू कल गर्नु अघि `unknown[]` लाई मान्य गर्न `areBuffers` प्रयोग गर्नुहोस्, जसले
> प्रत्येक तत्व `Buffer` हुँदा मात्र `true` फर्काउने सुनिश्चित गर्छ।

### फाइदाहरू

- इनपुटका प्रत्येक तत्व Node.js `Buffer` इन्स्टेन्स हो भन्ने सुनिश्चित गर्छ, र सम्पूर्ण एरे मिल्दा मात्र `true`
  फर्काउँछ।
- खाली नभएको र भरिएको एरे आवश्यक पारेर अमान्य इनपुटलाई सुरुमा नै अस्वीकार गर्छ; खाली एरे वा एरे नभएका मानहरूका लागि
  `false` फर्काउँछ।
- बफर- मात्र अपरेसनहरू (जस्तै, concatenation, hashing, binary protocols) गर्नु अघि गार्डको रूपमा उपयोगी।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areBuffers(array)`

प्यारामिटरहरू:

- `array`: बफर इन्स्टेन्सहरू छन् कि छैनन् भनेर जाँच गर्नुपर्ने एरे।

### स्थानीय फङ्सन आयात

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areBuffers(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>यो फाइल 31 January 2026 at 16:26:28 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>