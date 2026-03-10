# isNumber

## विवरण

`isNumber` ले कुनै मान सीमित (finite), `NaN` नभएको नम्बर हो कि होइन भनेर जाँच गर्छ।

### प्रयोगको केस

गणना, भण्डारण, वा दायरा जाँच (range checks) गर्नु अघि अविश्वसनीय स्रोतहरू (फर्महरू, क्वेरी प्याराम्स, JSON payloads) बाट
आएको संख्यात्मक इनपुट भ्यालिडेट गर्नुहोस्, ताकि केवल सीमित नम्बरहरू मात्र पास (`true`) होउन् र बाँकी सबैले `false`
फर्काओस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> अंकगणित गर्नु अघि `unknown` मानहरू भ्यालिडेट गर्न `isNumber` प्रयोग गर्नुहोस्; यसले `NaN`, `Infinity`, र `-Infinity`
> अस्वीकार गर्छ।

### फाइदाहरू

- `true` केवल वास्तविक JavaScript नम्बरहरूका लागि मात्र फर्काउँछ (टाइप जाँच साथै `NaN` र अनन्तता अस्वीकार)।
- सामान्य भ्यालिडेसन बगहरू रोक्छ जहाँ `NaN`, `Infinity`, वा `-Infinity` गल्तीले नम्बरको रूपमा पास हुन्छन्।
- अज्ञात इनपुट (जस्तै JSON, प्रयोगकर्ता इनपुट, बाह्य APIs) का लागि रनटाइम गार्डको रूपमा राम्रोसँग काम गर्छ।
- सरल, छिटो, र साइड-इफेक्ट मुक्त।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `isNumber(value)`

प्यारामिटरहरू:

- `value`: जाँच गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input एउटा मान्य सीमित संख्या हो
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.isNumber(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>यो फाइल 30 January 2026 at 13:10:16 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>