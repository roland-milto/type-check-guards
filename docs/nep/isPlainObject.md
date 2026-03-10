# isPlainObject

## विवरण

दिइएको `value` साधारण object हो कि होइन जाँच्छ र हो भने `true`, नभए `false` फर्काउँछ।

### प्रयोगको केस

`unknown` इनपुट (जस्तै parsed JSON, बाह्य डेटा, वा function arguments) लाई keys पढ्नु वा typed configuration object मा
mapping गर्नु अघि यो साधारण object हो भन्ने कुरा validate गर्नु।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `isPlainObject` ले record-जस्तो object को रूपमा व्यवहार गर्नु अघि `unknown` लाई narrow गर्न उपयोगी हुन्छ; यसले
> internal tag `[object Object]` भएका मानहरूका लागि मात्र `true` फर्काउँछ।

### फाइदाहरू

- कुनै मान साधारण object (अर्थात् `Object` / `{}`) हो कि होइन भन्ने कुरा सरल र भरपर्दो रूपमा जाँच्छ, र `true` वा `false`
  फर्काउँछ।
- साधारण object लाई array, function, `null`, र अन्य गैर-साधारण object प्रकारहरूबाट छुट्याउन मद्दत गर्छ।
- TypeScript मा type guard को रूपमा उपयोगी हुन्छ, object का गुणहरू पहुँच गर्नु अघि `unknown` मानहरूलाई narrow गर्न।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isPlainObject(value)`

प्यारामिटरहरू:

- `value`: साधारण object स्थिति जाँच्नका लागि परीक्षण गर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // यहाँ input साधारण वस्तु हो
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isPlainObject(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>यो फाइल 6 February 2026 at 12:18:49 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>