# areFinite

## विवरण

`areFinite` ले कुनै मान गैर-खाली एरे हो कि होइन र त्यसका तत्वहरू सबै सीमित (finite) संख्याहरू हुन् कि होइन भनेर जाँच
गर्छ; भए `true` र नभए `false` फर्काउँछ।

### प्रयोगको केस

गणना गर्नु अघि संख्यात्मक इनपुट एरेहरू (जस्तै, चार्ट सिरिज, कोअर्डिनेट सूचीहरू, मापन नमुनाहरू) भ्यालिडेट गर्नुहोस्, ताकि
सबै मानहरू सीमित (finite) संख्याहरू हुँदा मात्र नतिजा `true` होस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> एरे गैर-खाली छ र यसमा केवल सीमित (finite) संख्याहरू मात्र छन् भन्ने सुनिश्चित गर्नुपर्ने बेला `areFinite` प्रयोग
> गर्नुहोस्; खाली एरेका लागि र `NaN` वा अनन्त (infinities) भएका एरेका लागि यसले `false` फर्काउँछ।

### फाइदाहरू

- इनपुट गैर-खाली एरे हुँदा र प्रत्येक तत्व सीमित (finite) संख्या हुँदा मात्र `true` फर्काउँछ।
- प्रत्येक तत्वका लागि `isFinite` जाँचमा निर्भर गरेर `Infinity`, `-Infinity`, र `NaN` लाई अस्वीकार गर्छ।
- गार्ड र भ्यालिडेसन फ्लोका लागि उपयुक्त सरल बूलियन नतिजा (`true`/`false`) प्रदान गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areFinite(array)`

प्यारामिटरहरू:

- `array`: यसका सबै तत्वहरू सीमित (finite) छन् कि छैनन् भनेर जाँच गर्नुपर्ने एरे।

### स्थानीय फङ्सन आयात

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // सत्य
console.log(areFinite(b)); // असत्य
console.log(areFinite(c)); // असत्य

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // ६०
console.log(sumIfFinite([10, NaN, 30])); // null
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areFinite(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>यो फाइल 30 January 2026 at 16:36:08 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>