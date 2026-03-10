# areRegExes

## विवरण

`areRegExes` ले कुनै मान `RegExp` वस्तुहरू मात्र समावेश भएको भरिएको एरे हो कि होइन भनेर जाँच गर्छ।

### प्रयोगको केस

कन्फिगरेसन विकल्प (जस्तै, allow/deny patterns को सूची) लाई matching का लागि प्रयोग गर्नु अघि यो regular expressions को
गैर-खाली एरे हो भन्ने प्रमाणीकरण गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> iterate वा patterns compose गर्नु अघि `unknown` लाई `RegExp[]` मा narrow गर्न `areRegExes` प्रयोग गर्नुहोस्।

### फाइदाहरू

- मान गैर-खाली एरे हो र प्रत्येक तत्व `RegExp` को instance हो भन्ने सुनिश्चित गर्छ।
- प्रयोगकर्ता इनपुट वा कन्फिगरेसन प्रमाणीकरणका लागि सरल boolean guard (`true`/`false`) प्रदान गर्छ।
- पछिल्लो कोडले सबै आइटमहरूले regular-expression अपरेसनहरू समर्थन गर्छन् भनेर मान्दा हुन सक्ने runtime त्रुटिहरू रोक्न
  मद्दत गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areRegExes(array)`

प्यारामिटरहरू:

- `array`: जाँच गरिनुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // यहाँ patterns RegExp को एरे हो
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areRegExes(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>यो फाइल 30 January 2026 at 23:20:09 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>