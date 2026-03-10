# areJson

## विवरण

जाँचता है कि किसी array के सभी तत्व JSON स्ट्रिंग हैं या नहीं; `true` केवल तब लौटाता है जब array भरा हुआ हो और हर item
वैध JSON हो; अन्यथा `false` लौटाता है।

### उपयोग का मामला

आने वाले डेटा (उदा., query params, environment variables, या external APIs से) को सत्यापित करें जहाँ आप JSON-encoded
स्ट्रिंग्स के array की अपेक्षा करते हैं और खाली arrays या किसी भी गैर-JSON entries को अस्वीकार करना चाहते हैं।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `areJson` का उपयोग तब करें जब आपको यह सत्यापित करना हो कि `unknown[]` में केवल JSON स्ट्रिंग्स हैं, उन्हें parse करने
> से पहले (उदा., `JSON.parse` के साथ)।

### फायदे

- `true` केवल तब लौटाता है जब हर तत्व एक वैध JSON स्ट्रिंग हो; अन्यथा `false` लौटाता है।
- तेज़ी से विफल होता है: जैसे ही कोई गैर-JSON तत्व मिलता है, जाँच रोक देता है।
- डिज़ाइन के अनुसार खाली arrays को अस्वीकार करता है, भरे न होने वाले इनपुट के लिए `false` लौटाता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areJson(array)`

पैरामीटर:

- `array`: JSON स्ट्रिंग तत्वों के लिए जाँचा जाने वाला array।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // सत्य
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // असत्य
const empty = areJson([]); // असत्य

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areJson(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areJson](../_analysis/areJson.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 4:16:00 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>