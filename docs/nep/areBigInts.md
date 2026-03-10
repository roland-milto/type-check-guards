# areBigInts

## विवरण

`areBigInts` ले कुनै मान `bigint` मानहरू मात्र समावेश गर्ने खाली नभएको एरे हो कि होइन भनेर निर्धारण गर्छ।

### प्रयोगको केस

अज्ञात इनपुट (जस्तै, पार्स गरिएको JSON-जस्तो डेटा, API payloads, वा `unknown` भनेर टाइप गरिएका फङ्सन प्यारामिटरहरू) लाई
प्रोसेस गर्नु अघि यो `bigint` मानहरूको खाली नभएको एरे हो भन्ने सुनिश्चित गर्न प्रमाणीकरण गर्नुहोस्; सबै तत्वहरू `bigint`
हुँदा मात्र `true` फर्काउँछ, नभए `false`।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> अज्ञात इनपुटमा `bigint`-मात्र अपरेसनहरू (जस्तै, अंकगणित, तुलना) गर्नु अघि रनटाइम गार्डको रूपमा `areBigInts` प्रयोग
> गर्नुहोस्।

### फाइदाहरू

- हरेक तत्व `bigint` हो भन्ने सुनिश्चित गर्छ, र सम्पूर्ण एरे मिल्दा मात्र `true` फर्काउँछ।
- डिजाइनअनुसार ( `isFilledArray` मार्फत) एरे नभएका मानहरू र खाली एरेहरू अस्वीकार गर्छ, जसले अवैध इनपुटहरू गल्तीले
  स्वीकारिनबाट रोक्छ।
- छिटो असफल: `bigint` नभएको तत्व भेटिने बित्तिकै `false` फर्काउँछ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areBigInts(array)`

प्यारामिटरहरू:

- `array`: जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // सत्य
console.log(areBigInts(b)); // असत्य
console.log(areBigInts(c)); // असत्य
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areBigInts(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>यो फाइल 31 January 2026 at 23:26:46 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>