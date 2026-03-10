# isNullOrUndefined

## विवरण

दिइएको मान `null` वा `undefined` हो कि होइन जाँच गर्छ।

### प्रयोगको केस

वैकल्पिक इनपुटहरू प्रमाणीकरण गर्ने, API payloads सामान्यीकरण गर्ने, वा सम्भावित रूपमा हराइरहेको मानलाई dereference गर्नु
अघि कोड पथहरू गार्ड गर्ने जस्ता अवस्थामा `null` र `undefined` दुवैलाई “मान छैन” भनेर व्यवहार गर्नुपर्ने हुँदा
`isNullOrUndefined` प्रयोग गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> गुणहरूमा पहुँच गर्नु वा मेथडहरू कल गर्नु अघि हराइरहेका मानहरूबाट जोगिन `isNullOrUndefined` प्रयोग गर्नुहोस्; यसले
`null` र `undefined` का लागि मात्र `true` फर्काउँछ।

### फाइदाहरू

- एकै ठाउँमा `null` र `undefined` पत्ता लगाउन स्पष्ट र पुन: प्रयोगयोग्य गार्ड प्रदान गर्छ।
- सर्तहरू र प्रमाणीकरणहरूमा सजिलै संयोजन गर्न मिल्ने सरल boolean (`true`/`false`) फर्काउँछ।
- गुणहरूमा पहुँच गर्नु वा मेथडहरू कल गर्नु अघि हराइरहेका मानहरू जाँच गरेर सामान्य runtime त्रुटिहरूबाट बच्न मद्दत गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isNullOrUndefined(value)`

प्यारामिटरहरू:

- `value`: `null` वा `undefined` का लागि जाँच गरिने मान।

### स्थानीय फङ्सन आयात

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // हराएको मान ह्यान्डल गर्नुहोस्
}

console.log(isNullOrUndefined(b)); // true
console.log(isNullOrUndefined(c)); // false

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isNullOrUndefined(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>यो फाइल 31 January 2026 at 00:34:37 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>