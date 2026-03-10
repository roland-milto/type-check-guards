# isFilledArray

## विवरण

`value` कम्तीमा एउटा तत्व भएको एरे हो कि होइन भनेर जाँच गर्छ, र `true` वा `false` फर्काउँछ।

### प्रयोगको केस

इटरेट गर्नु अघि, पहिलो तत्व पहुँच गर्नु अघि, वा कम्तीमा एउटा आइटम आवश्यक पर्ने तर्क लागू गर्नु अघि आउने डेटा (जस्तै, API
payloads, form values, configuration) मान्य गर्न `isFilledArray` प्रयोग गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `isFilledArray` एउटा रनटाइम गार्ड हो जसले बूलियन फर्काउँछ; यसले एरे खाली नभएको पुष्टि गर्नु बाहेक तत्वका प्रकारहरूलाई
> थप रूपमा साँघुरो (narrow) गर्दैन।

### फाइदाहरू

- `Array.isArray` र लम्बाइ जाँच प्रयोग गरेर खाली नभएको एरेको सरल र छिटो जाँच।
- कोडले एरेमा कम्तीमा एउटा तत्व छ भनेर मान्दा हुने रनटाइम त्रुटिहरूबाट बच्न मद्दत गर्छ।
- स्पष्ट बूलियन नतिजा: खाली नभएका एरेका लागि `true` र अन्यथा `false` फर्काउँछ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isFilledArray(value)`

प्यारामिटरहरू:

- `value`: यो मान खाली नभएको एरे हो कि होइन भनेर जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input रनटाइममा खाली नभएको एरे हो
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isFilledArray(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>यो फाइल 6 February 2026 at 11:48:06 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>