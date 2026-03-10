# areHexadecimals

## विवरण

जाँचता है कि क्या किसी ऐरे के सभी तत्व हेक्साडेसिमल स्ट्रिंग हैं, और केवल गैर-खाली ऐरे के लिए `true` लौटाता है जहाँ हर
आइटम वैध हो।

### उपयोग का मामला

हेक्साडेसिमल पार्सिंग या आगे की प्रोसेसिंग करने से पहले उपयोगकर्ता इनपुट या बाहरी डेटा (जैसे, IDs, checksums, या बिना
leading '#' वाले color codes) को वैलिडेट करने के लिए `areHexadecimals` का उपयोग करें।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> मानों को पार्स या कन्वर्ट करने से पहले (उदाहरण के लिए, `parseInt(value, 16)` या BigInt कन्वर्ज़न से पहले) अज्ञात इनपुट
> को वैलिडेट करने के लिए `areHexadecimals` का उपयोग करें।

### फायदे

- यह सत्यापित करता है कि हर तत्व एक हेक्साडेसिमल स्ट्रिंग है और केवल तब `true` लौटाता है जब सभी आइटम मेल खाते हों।
- डिज़ाइन के अनुसार खाली ऐरे को अस्वीकार करता है, इनपुट डेटा न होने पर `false` लौटाता है।
- गार्ड्स और early-return वैलिडेशन के लिए उपयुक्त एक सरल बूलियन परिणाम (`true`/`false`) प्रदान करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areHexadecimals(array)`

पैरामीटर:

- `array`: हेक्साडेसिमल स्ट्रिंग तत्वों के लिए जाँचा जाने वाला ऐरे।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areHexadecimals(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 11:06:21 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>