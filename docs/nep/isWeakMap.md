# isWeakMap

## विवरण

दिइएको `value` `WeakMap` को instance हो कि होइन भनेर निर्धारण गर्छ।

### प्रयोगको केस

तपाईंले `unknown` मान (जस्तै, सार्वजनिक API, plugin system, वा dynamic configuration बाट) स्वीकार गर्दा र `WeakMap`
-विशिष्ट व्यवहार प्रयोग गर्नु अघि त्यो `WeakMap` हो भनेर प्रमाणित गर्नुपर्ने बेला `isWeakMap` प्रयोग गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `isWeakMap` ले `instanceof WeakMap` जाँच गर्छ; यो एउटा रनटाइम guard हो जसले वास्तविक `WeakMap` instance हरूका लागि
> मात्र `true` फर्काउँछ।

### फाइदाहरू

- कुनै मान `WeakMap` हो कि होइन भन्ने कुरा जाँच्नका लागि सरल रनटाइम जाँच।
- `WeakMap` आवश्यक पर्ने API हरूको गलत प्रयोग रोक्न मद्दत गर्छ, किनकि यसले exception फ्याँक्नुको सट्टा `true`/`false`
  फर्काउँछ।
- `unknown` इनपुटहरूसँग काम गर्छ, जसले मोड्युल सीमाहरूमा (जस्तै, parsing, बाह्य डेटा, वा untyped code) यसलाई सुविधाजनक
  बनाउँछ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isWeakMap(value)`

प्यारामिटरहरू:

- `value`: जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a रनटाइममा WeakMap हो
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isWeakMap(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>यो फाइल 30 January 2026 at 13:26:05 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>