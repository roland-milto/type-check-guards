# areUndefined

## विवरण

`areUndefined` ले प्रदान गरिएको एरेका प्रत्येक तत्व `undefined` छ कि छैन भनेर जाँच गर्छ।

### प्रयोगको केस

वैकल्पिक परिणामहरूको सूचीमा कुनै वास्तविक मान छैन (केवल `undefined` मात्र) भनेर मान्यकरण गर्नुहोस्; उदाहरणका लागि,
lookup हरू mapping गरेपछि हराएका प्रविष्टिहरू `undefined` रूपमा प्रतिनिधित्व गरिएका हुन्छन्, र तपाईं सबै lookup असफल
भएका छन् भनेर पुष्टि गर्न चाहनुहुन्छ।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `unknown[]` मा केवल `undefined` मानहरू मात्र छन् भनेर दाबी गर्न आवश्यक हुँदा `areUndefined` प्रयोग गर्नुहोस्; आन्तरिक
`isFilledArray` जाँचका कारण यसले खाली एरे र गैर-एरे/अवैध इनपुटहरूका लागि `false` फर्काउँछ।

### फाइदाहरू

- `isFilledArray` मार्फत भरिएको एरे आवश्यक पारेर गैर-एरे र खाली एरेका लागि `false` फर्काउँछ।
- केही मात्र होइन, प्रत्येक तत्व `undefined` नै छ भन्ने सुनिश्चित गर्छ, जसले उद्देश्यलाई स्पष्ट बनाउँछ।
- अज्ञात इनपुट सङ्ग्रहहरू मान्यकरण गर्दा guard-शैलीको predicate रूपमा उपयोगी हुन्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areUndefined(array)`

प्यारामिटरहरू:

- `array`: `undefined` तत्वहरू छन् कि छैनन् भनेर जाँच गर्ने एरे।

### स्थानीय फङ्सन आयात

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// नोट: खाली एरेहरूका लागि false फर्काउँछ
const r4 = areUndefined([]); // false

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areUndefined(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>यो फाइल 30 January 2026 at 13:57:01 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>