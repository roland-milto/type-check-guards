# areHexadecimals

## विवरण

एरेका सबै तत्वहरू हेक्साडेसिमल स्ट्रिङ हुन् कि होइनन् भनेर जाँच गर्छ, र प्रत्येक वस्तु मान्य भएको गैर-खाली एरेका लागि
मात्र `true` फर्काउँछ।

### प्रयोगको केस

हेक्साडेसिमल पार्सिङ वा थप प्रशोधन गर्नु अघि प्रयोगकर्ता इनपुट वा बाह्य डेटा (जस्तै, IDs, checksums, अगाडि '#' नभएका
color codes) प्रमाणीकरण गर्न `areHexadecimals` प्रयोग गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `areHexadecimals` प्रयोग गरेर पार्स वा मान रूपान्तरण गर्नु अघि अज्ञात इनपुट प्रमाणीकरण गर्नुहोस् (उदाहरणका लागि,
`parseInt(value, 16)` वा BigInt रूपान्तरणहरू अघि)।

### फाइदाहरू

- प्रत्येक तत्व हेक्साडेसिमल स्ट्रिङ हो कि होइन भनेर प्रमाणीकरण गर्छ र सबै वस्तुहरू मिल्दा मात्र `true` फर्काउँछ।
- डिजाइनअनुसार खाली एरेहरू अस्वीकार गर्छ, इनपुट डेटा नभएमा `false` फर्काउँछ।
- गार्डहरू र छिटो-फर्काउने प्रमाणीकरणका लागि उपयुक्त सरल बूलियन नतिजा (`true`/`false`) प्रदान गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areHexadecimals(array)`

प्यारामिटरहरू:

- `array`: हेक्साडेसिमल स्ट्रिङ तत्वहरूका लागि जाँच गर्नुपर्ने एरे।

### स्थानीय फङ्सन आयात

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areHexadecimals(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>यो फाइल 31 January 2026 at 23:07:09 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>