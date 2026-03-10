# areStreams

## विवरण

`areStreams` ले कुनै मान भरिएको एरे हो कि होइन, र त्यसमा भएका प्रत्येक तत्व `Stream` हो कि होइन भन्ने निर्धारण गर्छ।

### प्रयोगको केस

प्रयोगकर्ताले दिएको वा गतिशील रूपमा बनाइएको सङ्ग्रहहरू (जस्तै, धेरै फाइल read stream हरू) लाई समूहको रूपमा पाइप गर्ने,
resume गर्ने, वा अन्य रूपमा सञ्चालन गर्नु अघि प्रमाणीकरण गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `areStreams` प्रयोग गरेर अज्ञात इनपुटलाई `Stream[]` को रूपमा व्यवहार गर्नु अघि प्रमाणीकरण गर्नुहोस्; यसले मान गैर-खाली
> एरे भएको र प्रत्येक तत्व `Stream` भएको अवस्थामा मात्र `true` फर्काउँछ।

### फाइदाहरू

- इनपुट भरिएको एरे हो र प्रत्येक तत्व `Stream` हो भन्ने सुनिश्चित गर्छ।
- प्रोसेसिङ अघि स्ट्रिम सङ्ग्रहहरू प्रमाणीकरण गर्न सरल `true`/`false` गार्ड प्रदान गर्छ।
- छिट्टै असफल हुन्छ: गैर-`Stream` तत्व भेटिने बित्तिकै `false` फर्काउँछ।
- कोडले सबै वस्तुहरू `Stream` इन्स्टेन्स हुन् भनेर मान्दा हुने रनटाइम त्रुटिहरू रोक्न मद्दत गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areStreams(array)`

प्यारामिटरहरू:

- `array`: Stream वस्तुहरूका लागि जाँच गर्नुपर्ने एरे।

### स्थानीय फङ्सन आयात

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input Stream वस्तुहरूको भरिएको एरे हो
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areStreams(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>यो फाइल 30 January 2026 at 23:34:51 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>