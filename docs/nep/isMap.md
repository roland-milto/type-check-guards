# isMap

## विवरण

दिइएको `value` `Map` हो कि होइन भनेर जाँच गर्छ; यदि हो भने `true` र नभए `false` फर्काउँछ।

### प्रयोगको केस

तपाईंले `unknown` मान (जस्तै JSON parsing, external APIs, वा user input बाट) प्राप्त गर्दा, `Map` अपरेसनहरू गर्नु अघि
त्यो `Map` नै हो भनेर सुनिश्चित गर्न `isMap` प्रयोग गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `isMap` एउटा रनटाइम गार्ड हो जसले मान `Map` हुँदा `true` र अन्यथा `false` फर्काउँछ; `Map` API हरू कल गर्नु अघि
`unknown` लाई न्यारो गर्न यसलाई प्रयोग गर्नुहोस्।

### फाइदाहरू

- कुनै मान `Map` हो कि होइन भन्ने कुरा छिटो रनटाइममा जाँच प्रदान गर्छ।
- `get`, `set`, र `has` जस्ता `Map` मेथडहरू आवश्यक पर्ने कोड पथहरूलाई गार्ड गरेर टाइप त्रुटिहरू रोक्न मद्दत गर्छ।
- `unknown` इनपुटहरू ह्यान्डल गर्दा हल्का भ्यालिडेसन चरणको रूपमा राम्रोसँग काम गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isMap(value)`

प्यारामिटरहरू:

- `value`: जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isMap(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isMap](../_analysis/isMap.md)

<br>

---

<small>यो फाइल 31 January 2026 at 16:29:03 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>