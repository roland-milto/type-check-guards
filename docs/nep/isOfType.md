# isOfType

## विवरण

`typeof` प्रयोग गरेर प्रिमिटिभहरू र जटिल टाइपहरूका लागि फलब्याक प्रयोग गर्दै, दिइएको `value` निर्दिष्ट टाइप स्ट्रिङसँग
मेल खान्छ कि छैन निर्धारण गर्छ।

### प्रयोगको केस

टाइप-विशिष्ट अपरेसनहरू गर्नु अघि कुनै मान अपेक्षित टाइप स्ट्रिङको हो कि होइन जाँच गरेर `unknown` इनपुटहरू (जस्तै, API
प्रतिक्रियाहरू, प्रयोगकर्ता इनपुट, पार्स गरिएको JSON) लाई मान्यकरण र संकुचन गर्नु।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `unknown` मानहरूसँग काम गर्दा रनटाइम टाइपका आधारमा ब्रान्च गर्न `isOfType` प्रयोग गर्नुहोस्; यसले `true`/`false`
> फर्काउँछ र `null` तथा `undefined` लाई स्पष्ट रूपमा व्यवहार गर्छ।

### फाइदाहरू

- गति र स्पष्टताका लागि प्रत्यक्ष `typeof` प्रयोग गरेर प्रिमिटिभहरू जाँच्छ।
- `typeof` मात्रले अपेक्षित रूपमा छुट्याउन नसक्ने `null` र `undefined` लाई सही रूपमा ह्यान्डल गर्छ।
- `getTypeOf` प्रयोग गर्ने फलब्याक तुलना मार्फत जटिल वा कस्टम टाइप स्ट्रिङहरूलाई समर्थन गर्छ।
- गार्ड र ब्रान्चिङका लागि उपयुक्त सरल बूलियन नतिजा (`true`/`false`) फर्काउँछ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isOfType(value, type)`

प्यारामिटरहरू:

- `value`: `type` विरुद्ध परीक्षण गर्नुपर्ने मान।
- `type`: जाँच गर्नुपर्ने टाइपको स्ट्रिङ प्रतिनिधित्व।

### स्थानीय फङ्सन आयात

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // यहाँ input एउटा संख्या हो
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // यहाँ input एउटा स्ट्रिङ हो
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isOfType(value, type)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>यो फाइल 30 January 2026 at 17:05:23 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>