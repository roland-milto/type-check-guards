# isNumber

## विवरण

`isNumber` जाँचता है कि कोई मान सीमित (finite), non-`NaN` संख्या है या नहीं।

### उपयोग का मामला

गणनाओं, स्टोरेज, या रेंज जाँच से पहले अविश्वसनीय स्रोतों (फॉर्म्स, क्वेरी पैरामीटर्स, JSON पेलोड्स) से आने वाले
संख्यात्मक इनपुट को वैलिडेट करें, ताकि केवल सीमित संख्याएँ (`true`) पास हों और बाकी सब `false` लौटाएँ।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> अंकगणित करने से पहले `unknown` मानों को वैलिडेट करने के लिए `isNumber` का उपयोग करें; यह `NaN`, `Infinity`, और
`-Infinity` को अस्वीकार करता है।

### फायदे

- केवल वास्तविक JavaScript संख्याओं के लिए `true` लौटाता है (टाइप जाँच के साथ `NaN` और अनंत को अस्वीकार करता है)।
- सामान्य वैलिडेशन बग्स को रोकता है जहाँ `NaN`, `Infinity`, या `-Infinity` गलती से संख्या के रूप में पास हो जाते हैं।
- अज्ञात इनपुट (जैसे JSON, उपयोगकर्ता इनपुट, बाहरी APIs) के लिए रनटाइम गार्ड के रूप में अच्छी तरह काम करता है।
- सरल, तेज़, और बिना साइड-इफेक्ट के।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isNumber(value)`

पैरामीटर:

- `value`: जाँचने के लिए मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input एक मान्य सीमित संख्या है
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isNumber(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 1:09:10 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>