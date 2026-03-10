# areOneOfType

## विवरण

`areOneOfType` ले खाली नभएको एरेका सबै तत्वहरू निर्दिष्ट रनटाइम प्रकारहरूमध्ये कुनै एकका हुन् कि होइनन् भनेर जाँच गर्छ।

### प्रयोगको केस

आउँदै गरेको डेटा (जस्तै, parsed JSON) मान्यकरण गर्नुहोस् जहाँ एउटा फिल्ड खाली नभएको एरे हुनुपर्छ र त्यसका आइटमहरू ज्ञात
primitive प्रकारहरूको सेटमा मात्र सीमित हुनुपर्छ; एरे खाली भएमा वा कुनै पनि अनुमति नपाएको प्रकार समावेश भएमा `false`
फर्काउनुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> यो फङ्सनले boolean फर्काउँछ र कम्पाइल समयमा एरेका तत्व प्रकारहरूलाई narrow गर्दैन; थप प्रशोधन अघि रनटाइम मान्यकरण
> चरणका रूपमा प्रयोग गर्नुहोस्।

### फाइदाहरू

- एउटा एरेका प्रत्येक तत्व कम्तीमा एउटा अनुमति प्राप्त रनटाइम प्रकारसँग मेल खान्छ भन्ने सुनिश्चित गर्छ, र सम्पूर्ण एरे
  पास हुँदा मात्र `true` फर्काउँछ।
- अवैध इनपुटहरूलाई छिट्टै अस्वीकार गर्छ: `array` वा `types` खाली छ वा भरिएको एरे होइन भने `false` फर्काउँछ।
- `areOneOfType` लाई एकै पटक कल गरेर मिश्रित-प्रकारका सङ्ग्रहहरू (जस्तै, संख्या र स्ट्रिङ) मान्यकरण गर्न उपयोगी।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areOneOfType(array, types)`

प्यारामिटरहरू:

- `array`: दिइएका प्रकारहरूसँग तुलना गरेर प्रमाणित गर्नुपर्ने तत्वहरूको एरे।
- `types`: जाँच गर्नुपर्ने डेटा प्रकारहरू प्रतिनिधित्व गर्ने स्ट्रिङहरूको एरे।

### स्थानीय फङ्सन आयात

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areOneOfType(array, types)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>यो फाइल 31 January 2026 at 23:37:52 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>