# isError

## विवरण

दिइएको `value` `Error` को instance हो कि होइन भनेर जाँच गर्छ।

### प्रयोगको केस

तपाईंले `unknown` मान (जस्तै `catch` ब्लक, callback, वा बाह्य library बाट) प्राप्त गर्दा, र `message`, `name`, वा
`stack` पढ्नु अघि त्यो `Error` हो कि होइन सुरक्षित रूपमा निर्धारण गर्नुपर्ने अवस्थामा `isError` प्रयोग गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `unknown` मानहरू (जस्तै `catch` बाट) लाई `Error` को रूपमा व्यवहार गर्नु अघि guard गर्न `isError` प्रयोग गर्नुहोस्।

### फाइदाहरू

- कुनै मान `Error` को instance हो कि होइन भन्ने कुरा जाँच्न सरल runtime जाँच प्रदान गर्छ।
- `message` वा `stack` जस्ता `Error` गुणहरू पहुँच गर्नु अघि अज्ञात इनपुटहरूलाई सीमित (narrow) गर्न मद्दत गर्छ।
- `catch`, बाह्य API, वा type नभएका स्रोतहरूबाट आएका मानहरू ह्यान्डल गर्दा runtime exception को जोखिम घटाउँछ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isError(value)`

प्यारामिटरहरू:

- `value`: `Error` प्रकारसँग तुलना/जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isError(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isError](../_analysis/isError.md)

<br>

---

<small>यो फाइल 6 February 2026 at 12:46:26 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>