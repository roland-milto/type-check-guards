# isValidDate

## विवरण

`isValidDate` ले दिइएको मान मान्य `Date` object हो कि होइन जाँच्छ र वास्तविक, अवैध नभएका मितिहरूका लागि मात्र `true`
फर्काउँछ।

### प्रयोगको केस

प्रयोगकर्ता input वा API data मा मितिहरू हुन सक्ने अवस्थामा मान वास्तविक `Date` instance हो र अवैध मिति होइन भन्ने
सुनिश्चित गर्दै, मिति गणना, formatting, वा तुलना गर्नु अघि मान्यकरण गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `unknown` टाइप भएका मानहरूमा `Date` methods (जस्तै, `toISOString`, `getTime`) कल गर्नु अघि तिनीहरू मान्य `Date`
> objects हुन् भन्ने सुनिश्चित गर्न `isValidDate` प्रयोग गर्नुहोस्।

### फाइदाहरू

- कुनै मान `Date` को instance हो भन्ने सुनिश्चित गर्छ, केवल मिति-जस्तो string वा number मात्र होइन।
- `NaN` समय मानहरू जाँच गरेर अवैध मितिहरू (जस्तै, `new Date("invalid")`) अस्वीकार गर्छ।
- conditionals र validation pipelines मा प्रयोग गर्न सजिलो साधारण boolean guard।
- पहिले input प्रमाणित गरेर date methods कल गर्दा हुने runtime errors रोक्न मद्दत गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isValidDate(value)`

प्यारामिटरहरू:

- `value`: जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input एउटा मान्य Date इन्स्टेन्स हो
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isValidDate(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>यो फाइल 30 January 2026 at 16:52:01 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>