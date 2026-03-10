# areSymbols

## विवरण

इनपुट filled array हो र यसको सबै तत्वहरू symbols हुन् कि होइनन् भनेर जाँच गर्छ, र `true` वा `false` फर्काउँछ।

### प्रयोगको केस

कन्फिगरेसन फिल्ड (जस्तै, symbols द्वारा प्रतिनिधित्व गरिएका unique keys को सूची) APIs मा प्रयोग गर्नु अघि, जुन
`symbol[]` आवश्यक पर्छ, यो गैर-खाली र symbols मात्र भएको array हो कि होइन भनेर मान्यकरण गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `areSymbols` प्रयोग गरेर unknown इनपुटलाई `symbol[]` को रूपमा व्यवहार गर्नु अघि मान्यकरण गर्नुहोस्; यसले non-array र
> खाली array का लागि `false` फर्काउँछ।

### फाइदाहरू

- इनपुट गैर-खाली array भएको र प्रत्येक तत्व symbol भएको अवस्थामा मात्र `true` फर्काउँछ।
- आन्तरिक filled-array जाँचमार्फत non-array र खाली array लाई अस्वीकार गरेर false positives रोक्छ।
- थप प्रशोधन अघि symbol मात्र भएको सूचीहरू मान्यकरण गर्न runtime type guard का रूपमा उपयोगी।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areSymbols(array)`

प्यारामिटरहरू:

- `array`: symbol तत्वहरू छन् कि छैनन् भनेर जाँच गर्नुपर्ने array।

### स्थानीय फङ्सन आयात

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a रनटाइममा केवल-सिम्बोल भएको एरे हो
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areSymbols(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>यो फाइल 30 January 2026 at 14:22:57 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>