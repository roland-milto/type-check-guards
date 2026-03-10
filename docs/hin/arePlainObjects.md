# arePlainObjects

## विवरण

जाँचता है कि क्या किसी ऐरे के सभी तत्व साधारण ऑब्जेक्ट हैं, और `true` केवल तभी लौटाता है जब हर तत्व योग्य हो।

### उपयोग का मामला

बाहरी या अनटाइप्ड डेटा (जैसे, पार्स किया हुआ JSON, API पेलोड्स, फ़ॉर्म सबमिशन) को वैलिडेट करें ताकि इटरेट करने और
प्रॉपर्टीज़ पढ़ने से पहले यह सुनिश्चित हो सके कि आपको एक नॉन-खाली ऐरे मिला है जिसमें हर एंट्री एक साधारण ऑब्जेक्ट है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> TypeScript में `arePlainObjects` का उपयोग अज्ञात इनपुट को `Record<string, unknown>[]` (या अधिक सख्त ऑब्जेक्ट आकार) के
> रूप में मानने से पहले वैलिडेट करने के लिए करें।

### फायदे

- यह सुनिश्चित करता है कि इनपुट ऐरे का हर तत्व एक साधारण ऑब्जेक्ट हो, और `true` केवल तब लौटाता है जब सभी आइटम मेल खाते
  हों।
- `false` लौटाकर अमान्य इनपुट (नॉन-ऐरे या खाली ऐरे) को शुरुआती चरण में ही अस्वीकार करता है।
- ऑब्जेक्ट-लिटरल ऑब्जेक्ट्स और `Object.create(null)` से बने ऑब्जेक्ट्स—दोनों को वैध साधारण ऑब्जेक्ट मानता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `arePlainObjects(array)`

पैरामीटर:

- `array`: साधारण ऑब्जेक्ट तत्वों के लिए जाँचा जाने वाला ऐरे।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // सत्य
const b = arePlainObjects([{}, Object.create(null)]); // सत्य
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // असत्य
const d = arePlainObjects([] as unknown[]); // असत्य
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.arePlainObjects(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 4:25:25 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>