# isNull

## विवरण

दिइएको `value` `null` हो कि होइन भनेर निर्धारण गर्छ।

### प्रयोगको केस

`null` अर्थपूर्ण sentinel मान हुने र `undefined` वा अन्य मानहरूभन्दा फरक रूपमा ह्यान्डल गर्नुपर्ने इनपुटहरू वा API
payload का फाँटहरू मान्यकरण गर्न `isNull` प्रयोग गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `null` लाई `undefined` र अन्य falsy मानहरूबाट छुट्याउनुपर्ने बेला `isNull` प्रयोग गर्नुहोस्; यसले `null` का लागि मात्र
`true` फर्काउँछ।

### फाइदाहरू

- `undefined` सँग गडबड नगरी `null` को लागि सटीक जाँच प्रदान गर्छ।
- `unknown` स्वीकार्ने भएकाले कुनै पनि इनपुट प्रकारका लागि विश्वसनीय रूपमा काम गर्छ।
- सरल, छिटो, र साइड-इफेक्ट मुक्त; केवल `true` वा `false` मात्र फर्काउँछ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isNull(value)`

प्यारामिटरहरू:

- `value`: `null` छ कि छैन भनेर जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // a यहाँ null छ
}
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isNull(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isNull](../_analysis/isNull.md)

<br>

---

<small>यो फाइल 31 January 2026 at 15:40:06 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>