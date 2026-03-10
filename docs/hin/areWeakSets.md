# areWeakSets

## विवरण

जाँचता है कि इनपुट एक गैर-खाली ऐरे है जिसमें हर तत्व `WeakSet` है, और केवल उसी स्थिति में `true` लौटाता है।

### उपयोग का मामला

रनटाइम इनपुट (जैसे APIs, कॉन्फ़िगरेशन, या उपयोगकर्ता-प्रदत्त डेटा) को वैलिडेट करें ताकि आगे बढ़ने से पहले यह सुनिश्चित
हो सके कि आपके पास `WeakSet` इंस्टेंस की एक गैर-खाली सूची है, इससे पहले कि आप ऐसे लॉजिक पर जाएँ जो `WeakSet` के व्यवहार
पर निर्भर करता है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `areWeakSets` का उपयोग अज्ञात इनपुट को `WeakSet[]` मानने से पहले वैलिडेट करने के लिए करें। यह खाली ऐरे और गैर-ऐरे के
> लिए `false` लौटाता है।

### फायदे

- यह सुनिश्चित करता है कि इनपुट ऐरे का हर तत्व एक `WeakSet` है।
- खाली ऐरे के लिए `false` लौटाता है, जिससे डेटा न होने पर गलती से “सब वैध” परिणाम आने से बचाव होता है।
- इनपुट भरा हुआ ऐरे न होने पर (जिसमें `null` भी शामिल है) `false` लौटाकर सुरक्षित रूप से विफल होता है।
- `WeakSet` इंस्टेंस की आवश्यकता वाले ऑपरेशन्स करने से पहले गार्ड के रूप में उपयोगी।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areWeakSets(array)`

पैरामीटर:

- `array`: `WeakSet` ऑब्जेक्ट्स के लिए जाँचा जाने वाला ऐरे।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a WeakSet इंस्टेंसों की एक गैर-खाली ऐरे है
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areWeakSets(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 2:08:50 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>