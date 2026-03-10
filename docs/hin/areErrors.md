# areErrors

## विवरण

जाँचता है कि कोई ऐरे खाली नहीं है और उसमें केवल `Error` ऑब्जेक्ट्स हैं, और `true` या `false` लौटाता है।

### उपयोग का मामला

किसी रनटाइम-प्रदान किए गए `unknown[]` (जैसे एकत्रित विफलताएँ, वैलिडेशन परिणाम, या डी-सीरियलाइज़ किया गया डेटा) को इटरेट
करने, लॉग करने, या दोबारा थ्रो करने से पहले यह सत्यापित करें कि वह `Error` ऑब्जेक्ट्स की एक गैर-खाली सूची है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `areErrors` केवल तब `true` लौटाता है जब ऐरे भरा हुआ हो और हर आइटम `Error` हो; यह खाली ऐरे के लिए या यदि कोई भी तत्व
`Error` नहीं है तो `false` लौटाता है।

### फायदे

- यह सुनिश्चित करता है कि हर तत्व `Error` का एक इंस्टेंस है, जिससे सुरक्षित त्रुटि-प्रबंधन और लॉगिंग संभव होती है।
- खाली ऐरे को अस्वीकार करता है, जिससे गलती से “कोई त्रुटि नहीं” वाली स्थिति को वैध त्रुटि-सूची मान लेने से बचाव होता है।
- `unknown[]` इनपुट (जैसे APIs या `catch` ब्लॉक्स से) के साथ काम करते समय यह एक रनटाइम गार्ड के रूप में अच्छी तरह काम
  करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areErrors(array)`

पैरामीटर:

- `array`: `Error` ऑब्जेक्ट्स के लिए जाँचने वाला ऐरे।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value Error ऑब्जेक्ट्स की एक गैर-खाली ऐरे है
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areErrors(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>फ़ाइल 6 फ़रवरी 2026 को 12:33:49 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>