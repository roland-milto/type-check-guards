# isRegEx

## विवरण

दिइएको मान `RegExp` instance हो कि होइन भनेर निर्धारण गर्छ।

### प्रयोगको केस

प्रयोगकर्ताले दिएको वा dynamic मानहरू (जस्तै configuration, API payloads, plugin inputs) लाई नियमित अभिव्यक्ति रूपमा
व्यवहार गर्नु अघि प्रमाणीकरण गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `unknown` (वा union) मानहरूलाई RegExp-विशेष गुण वा मेथडहरू प्रयोग गर्नु अघि narrow गर्न `isRegEx` प्रयोग गर्नुहोस्;
> यसले `RegExp` का instance भएका मानहरूका लागि मात्र `true` फर्काउँछ।

### फाइदाहरू

- कुनै मान `RegExp` हो कि होइन भनेर जाँच गर्न सरल रनटाइम टाइप गार्ड प्रदान गर्छ।
- कोडले नियमित अभिव्यक्ति अपेक्षा गर्दा (जस्तै `test`, `exec` कल गर्नु अघि, वा `source` पढ्नु अघि) त्रुटिहरू रोक्न मद्दत
  गर्छ।
- `new RegExp(...)` मार्फत बनाइएका regex literal र instance दुवैसँग काम गर्छ।
- regex नभएका इनपुटहरूमा throw नगरी स्पष्ट boolean परिणाम (`true`/`false`) फर्काउँछ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isRegEx(value)`

प्यारामिटरहरू:

- `value`: जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // यहाँ input एउटा RegExp हो
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isRegEx(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>यो फाइल 30 January 2026 at 23:30:19 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>