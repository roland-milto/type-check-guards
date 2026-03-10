# areSets

## विवरण

दिइएको गैर-खाली एरेमा केवल `Set` इन्स्टेन्सहरू मात्र छन् कि छैनन् भनेर जाँच गर्छ, भए `true` र नभए `false` फर्काउँछ।

### प्रयोगको केस

प्रत्येक set प्रोसेस गर्नु अघि कुनै मान (जस्तै, user input, JSON parsing, वा external APIs बाट आएको) गैर-खाली `Set`
वस्तुहरूको एरे हो भन्ने कुरा मान्य गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> प्रत्येक तत्वमा `Set` API हरू (जस्तै, `.size`, `.has`, `.add`) iterate गरेर कल गर्नु अघि अज्ञात इनपुटलाई मान्य गर्न
`areSets` प्रयोग गर्नुहोस्।

### फाइदाहरू

- इनपुट गैर-खाली एरे भएको र प्रत्येक तत्व `Set` इन्स्टेन्स भएको अवस्थामा मात्र `true` फर्काउँछ।
- एरेमा कुनै तत्व नभएको बेला `false` फर्काएर खाली एरेका लागि गलत सकारात्मक नतिजा हुनबाट रोक्छ।
- प्रत्येक तत्वमा `Set`-विशेष अपरेसनहरू गर्नु अघि runtime guard का रूपमा उपयोगी हुन्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areSets(array)`

प्यारामिटरहरू:

- `array`: `Set` इन्स्टेन्सहरू छन् कि छैनन् भनेर जाँच गर्नुपर्ने एरे।

### स्थानीय फङ्सन आयात

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a रनटाइममा Set इन्स्टेन्सहरूको एरे हो
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // false
console.log(areSets(c)); // false
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areSets(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areSets](../_analysis/areSets.md)

<br>

---

<small>यो फाइल 30 January 2026 at 23:14:32 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>