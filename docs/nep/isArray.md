# isArray

## विवरण

`isArray` ले दिइएको मान array हो कि होइन भनेर जाँच गर्छ र array भए `true` फर्काउँछ, नभए `false`।

### प्रयोगको केस

अज्ञात डेटा (जस्तै, parsed JSON वा API responses) लाई validate गरेर, iterate गर्ने, index गर्ने, वा `.length` access
गर्ने अघि मान array हो भन्ने सुनिश्चित गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> arrays का लागि runtime check चाहिँदा `isArray` प्रयोग गर्नुहोस्; यसले boolean फर्काउँछ र `unknown` मानहरूसँग पनि
> सुरक्षित रूपमा call गर्न सकिन्छ।

### फाइदाहरू

- विभिन्न realm हरू (जस्तै, iframes) मा पनि विश्वसनीय array पहिचानका लागि built-in `Array.isArray` प्रयोग गर्छ।
- guards र branching logic का लागि उपयुक्त सरल boolean परिणाम (`true`/`false`) फर्काउँछ।
- parameter `unknown` भएकाले कुनै पनि input type सँग काम गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isArray(value)`

प्यारामिटरहरू:

- `value`: जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input रनटाइममा एउटा एरे हो
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isArray(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isArray](../_analysis/isArray.md)

<br>

---

<small>यो फाइल 6 February 2026 at 11:31:23 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>