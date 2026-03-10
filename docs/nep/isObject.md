# isObject

## विवरण

दिइएको `value` `object` हो कि होइन ( `null` बाहेक) निर्धारण गर्छ।

### प्रयोगको केस

Properties access गर्नु अघि अज्ञात inputs (जस्तै, parsed JSON, API responses, event payloads) लाई validate गर्न
`isObject` प्रयोग गर्नुहोस्, ताकि मान object हो र `null` होइन भन्ने सुनिश्चित होस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `isObject` एउटा runtime guard हो जसले boolean फर्काउँछ; यसले कुनै विशिष्ट object shape मा narrow गर्दैन। अझ बलियो
> typing चाहिँदा यसलाई थप जाँचहरू (जस्तै, property existence) सँग संयोजन गर्नुहोस्।

### फाइदाहरू

- `typeof` `"object"` भएका `null` नभएका मानहरूका लागि मात्र `true` फर्काउँछ।
- JavaScript मा हुने सामान्य गल्तीबाट जोगाउँछ, जहाँ `null` लाई अन्यथा object को रूपमा व्यवहार गरिन्थ्यो।
- साधारण objects र built-in object instances (जस्तै, `Date`, `RegExp`) का लागि काम गर्छ।
- Defensive programming र input validation का लागि उपयुक्त सरल, छिटो runtime जाँच।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isObject(value)`

प्यारामिटरहरू:

- `value`: `object` हो कि होइन भनेर जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input रनटाइममा null नभएको वस्तु हो
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isObject(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isObject](../_analysis/isObject.md)

<br>

---

<small>यो फाइल 31 January 2026 at 00:19:33 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>