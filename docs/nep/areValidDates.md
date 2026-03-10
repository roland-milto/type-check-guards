# areValidDates

## विवरण

एउटा array खाली नभएको र पूर्ण रूपमा मान्य `Date` objects बाट बनेको छ कि छैन भनेर निर्धारण गर्छ।

### प्रयोगको केस

मिति-आधारित कार्यहरू (sorting, range checks, formatting) गर्नु अघि प्रयोगकर्ता-प्रदान गरिएको वा API-प्रदान गरिएको array
हरूलाई भ्यालिडेट गर्न `areValidDates` प्रयोग गर्नुहोस्, जसले सबै प्रविष्टिहरू वास्तविक, मान्य `Date` objects हुन् र सूची
खाली छैन भन्ने सुनिश्चित गर्छ।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `areValidDates` ले खाली array का लागि `false` फर्काउँछ; यसलाई भ्यालिडेसन चरणको रूपमा भर पर्नुअघि array खाली नहुने
> उद्देश्यले बनाइएको छ भन्ने सुनिश्चित गर्नुहोस्।

### फाइदाहरू

- हरेक तत्व मान्य `Date` instance हुँदा मात्र `true` फर्काउँछ (जस्तै `new Date('invalid')` जस्ता अमान्य मितिहरू होइन)।
- `false` फर्काएर खाली इनपुट अस्वीकार गर्छ, जसले तपाईंलाई अर्थपूर्ण, खाली नभएका मिति सूचीहरू मात्र स्वीकार गर्न
  सुनिश्चित गर्छ।
- अन्य भ्यालिडेसनहरूसँग सजिलै संयोजन गर्न मिल्ने सरल boolean guard-शैलीको जाँच प्रदान गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areValidDates(array)`

प्यारामिटरहरू:

- `array`: जाँच गर्नुपर्ने array, जसमा सम्भावित रूपमा `Date` objects हुन सक्छन्।

### स्थानीय फङ्सन आयात

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // सत्य
console.log(areValidDates(b)); // असत्य
console.log(areValidDates(c)); // असत्य
console.log(areValidDates(d)); // असत्य

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areValidDates(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>यो फाइल 30 January 2026 at 14:33:02 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>