# isSymbol

## विवरण

`isSymbol` ले दिइएको मान `symbol` प्रकारको हो कि होइन भनेर निर्धारण गर्छ; symbol भए `true` र अन्यथा `false` फर्काउँछ।

### प्रयोगको केस

कुनै `unknown` मानलाई अद्वितीय पहिचानकर्ता, registry key, वा objects र maps मा computed property key का रूपमा प्रयोग
गर्नु अघि त्यो `symbol` हो भनेर प्रमाणीकरण गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> symbol-सम्बन्धित फङ्सनहरू कल गर्नु अघि वा यसलाई computed property key का रूपमा प्रयोग गर्नु अघि `unknown` लाई `symbol`
> मा narrow गर्न `isSymbol` प्रयोग गर्नुहोस्।

### फाइदाहरू

- JavaScript `symbol` प्रिमिटिभ प्रकारका लागि सरल र भरपर्दो रनटाइम जाँच प्रदान गर्छ।
- symbol-विशिष्ट API प्रयोग गर्नु अघि वा यसलाई key का रूपमा भण्डारण गर्नु अघि `unknown` मानहरूलाई संकुचित (narrow) गर्न
  मद्दत गर्छ।
- `typeof` प्रयोग गरेर गलत सकारात्मक नतिजाबाट बचाउँछ, किनकि `symbol` मानहरू पत्ता लगाउने मानक तरिका यही हो।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isSymbol(value)`

प्यारामिटरहरू:

- `value`: जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // यहाँ input एउटा symbol हो
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isSymbol(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>यो फाइल 30 January 2026 at 14:27:52 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>