# areIndexesFound

## विवरण

`areIndexesFound` ले कुनै मान खाली नभएको एरे हो कि होइन र त्यसका सबै तत्वहरू मान्य इन्डेक्स हुन् कि होइनन् भनेर जाँच
गर्छ; भए `true` र नभए `false` फर्काउँछ।

### प्रयोगको केस

प्रयोगकर्ताले दिएको वा बाह्य डेटा (जस्तै, parsed JSON) जुन इन्डेक्सहरूको सूची हुने अपेक्षा गरिएको छ, त्यसलाई एरेहरूमा
पहुँच गर्न वा स्लाइस गर्न प्रयोग गर्नु अघि मान्यकरण गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> अज्ञात इनपुटलाई एरे इन्डेक्सको रूपमा व्यवहार गर्नु अघि यसको तत्वहरू मान्य छन् कि छैनन् भनेर प्रमाणित गर्न
`areIndexesFound` प्रयोग गर्नुहोस्; खाली एरेहरूका लागि र गैर-इन्डेक्स मानहरू भएको एरेका लागि यसले `false` फर्काउँछ।

### फाइदाहरू

- इनपुट भरिएको एरे हो र प्रत्येक तत्व मान्य इन्डेक्स हो भने मात्र `true` फर्काउँछ।
- छिटो असफल हुन्छ: गैर-इन्डेक्स तत्व भेटिने बित्तिकै `false` फर्काउँछ।
- मानहरूलाई एरेको स्थान वा अफसेटको रूपमा प्रयोग गर्नु अघि गार्डको रूपमा उपयोगी।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areIndexesFound(array)`

प्यारामिटरहरू:

- `array`: इन्डेक्स अनुरूपता (index compliance) का लागि जाँच गर्नुपर्ने एरे।

### स्थानीय फङ्सन आयात

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // यहाँ, `a` लाई सूचकाङ्कहरूले भरिएको एरे भएको पुष्टि गरिएको छ।
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areIndexesFound(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>यो फाइल 31 January 2026 at 00:42:53 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>