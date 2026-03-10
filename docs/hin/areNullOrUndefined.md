# areNullOrUndefined

## विवरण

जाँचता है कि दिए गए ऐरे के सभी तत्व `null` या `undefined` हैं या नहीं।

### उपयोग का मामला

प्रोसेसिंग छोड़ने या “कोई मान प्रदान नहीं किए गए” स्थिति दिखाने का निर्णय लेने से पहले यह सत्यापित करें कि वैकल्पिक
फ़ील्ड्स की सूची में कोई वास्तविक मान नहीं है (केवल `null`/`undefined`)।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> जब आपको यह सत्यापित करना हो कि किसी ऐरे में केवल अनुपस्थित मान (`null`/`undefined`) ही हैं, तब `areNullOrUndefined` का
> उपयोग करें। ध्यान दें कि यह खाली ऐरे के लिए `false` लौटाता है।

### फायदे

- `true` केवल तब लौटाता है जब हर तत्व `null` या `undefined` हो।
- खाली ऐरे के लिए `false` लौटाता है, जिससे “कोई डेटा नहीं” और “सभी मान अनुपस्थित हैं” के बीच अंतर करने में मदद मिलती है।
- `unknown[]` के साथ काम करता है, जिससे टाइप्स को नैरो करने से पहले इसका उपयोग करना सुरक्षित होता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areNullOrUndefined(array)`

पैरामीटर:

- `array`: जाँचने के लिए ऐरे।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areNullOrUndefined(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 12:29:52 am बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>