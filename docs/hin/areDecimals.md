# areDecimals

## विवरण

जाँचता है कि array के सभी elements दशमलव संख्याएँ हैं और array भरा हुआ है, और `true` या `false` लौटाता है।

### उपयोग का मामला

यूज़र द्वारा प्रदान की गई सूचियों (जैसे, CSV कॉलम या फ़ॉर्म इनपुट) को वैलिडेट करें ताकि parsing या calculations से पहले
यह सुनिश्चित हो सके कि array खाली नहीं है और हर entry एक दशमलव मान है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `areDecimals` का उपयोग तब करें जब आपको यह जल्दी से boolean जाँच चाहिए कि कोई `unknown[]` खाली नहीं है और हर element एक
> decimal representation है।

### फायदे

- आइटम्स को वैलिडेट करने से पहले यह सुनिश्चित करता है कि इनपुट एक भरा हुआ array है, जिससे खाली सूचियों को गलती से
  स्वीकार करने से बचाव होता है।
- हर element को `isDecimal` के साथ वैलिडेट करता है, इसलिए मिश्रित या अमान्य मान तुरंत `false` परिणाम देते हैं।
- गार्ड्स और early-return वैलिडेशन फ्लोज़ के लिए उपयुक्त एक सरल boolean परिणाम (`true`/`false`) प्रदान करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areDecimals(array)`

पैरामीटर:

- `array`: जाँचा जाने वाला array।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // सत्य
console.log(areDecimals(b)); // असत्य
console.log(areDecimals(c)); // असत्य
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areDecimals(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 3:57:24 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>