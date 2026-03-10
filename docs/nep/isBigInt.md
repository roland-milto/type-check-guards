# isBigInt

## विवरण

`isBigInt` ले दिइएको मान `bigint` प्रकारको हो कि होइन भनेर जाँच गर्छ; BigInt प्रिमिटिभहरूका लागि `true` र अन्यथा `false`
फर्काउँछ।

### प्रयोगको केस

BigInt-विशेष गणनाहरू गर्नु वा BigInt-मा मात्र हुने फिल्डहरूमा भण्डारण गर्नु अघि, टाइप नलागेका स्रोतहरू (जस्तै, JSON
parsing, user input, external APIs) बाट आएका मानहरूलाई प्रमाणीकरण र narrow गर्नु।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> BigInt अंकगणित (जस्तै, `+`, `*`) गर्नुअघि, जसका लागि BigInt अपरेन्ड आवश्यक पर्छ, `unknown` लाई `bigint` मा narrow गर्न
`isBigInt` प्रयोग गर्नुहोस्।

### फाइदाहरू

- `bigint` प्रिमिटिभ प्रकारका लागि सरल र भरपर्दो रनटाइम जाँच प्रदान गर्छ।
- BigInt-मा मात्र लागू हुने अपरेसनहरू गर्नु अघि `unknown` मानहरूलाई साँघुरो (narrow) बनाउन मद्दत गर्छ।
- गलत सकारात्मक नतिजाबाट जोगाउँछ: सामान्य नम्बर, स्ट्रिङ, र अन्य प्रकारहरूले `false` फर्काउँछन्।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isBigInt(value)`

प्यारामिटरहरू:

- `value`: जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // सत्य
console.log(isBigInt(10));  // असत्य
console.log(isBigInt("10")); // असत्य
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isBigInt(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>यो फाइल 31 January 2026 at 23:32:40 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>