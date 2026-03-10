# isNumeric

## विवरण

`isNumeric` ले दिइएको `value` को resolved type लाई `NUMERIC_TYPES` सँग तुलना गरेर त्यो मानलाई सांख्यिक मानिन्छ कि
मानिँदैन भनेर निर्धारण गर्छ।

### प्रयोगको केस

सांख्यिक अपरेसनहरू गर्नु अघि इनपुटहरू (जस्तै API payloads, form values, configuration) मान्यकरण गर्न, र `NUMERIC_TYPES`
अनुसार `BigInt` जस्ता numeric-जस्ता प्रकारहरूलाई एकरूप रूपमा स्वीकार गर्न `isNumeric` प्रयोग गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `isNumeric` boolean फर्काउने predicate हो; कुनै मान library-ले परिभाषित गरेको numeric type set भित्र पर्छ कि पर्दैन
> भन्ने runtime जाँचका रूपमा यसलाई व्यवहार गर्नुहोस्।

### फाइदाहरू

- सांख्यिक पहिचानको तर्कलाई केन्द्रीकृत गर्न र कोडबेसभरि जाँचहरू एकरूप राख्न `getTypeOf` र `NUMERIC_TYPES` प्रयोग गर्छ।
- सजिलो branching र guard-शैली प्रयोगका लागि सरल boolean (`true`/`false`) फर्काउँछ।
- `NUMERIC_TYPES` ले परिभाषित गरेअनुसार धेरैवटा सांख्यिक प्रतिनिधित्वहरू (जस्तै `number`, `BigInt`) समर्थन गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isNumeric(value)`

प्यारामिटरहरू:

- `value`: सांख्यिक प्रकार हो कि होइन भनेर जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v लाई लाइब्रेरीका प्रकार नियमहरू अनुसार संख्यात्मक मानिन्छ
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isNumeric(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>यो फाइल 6 February 2026 at 15:53:41 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>