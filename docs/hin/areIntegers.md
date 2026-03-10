# areIntegers

## विवरण

`areIntegers` यह निर्धारित करता है कि दिए गए ऐरे के सभी तत्व पूर्णांक हैं या नहीं; यदि हैं तो `true` और अन्यथा `false`
लौटाता है।

### उपयोग का मामला

`areIntegers` का उपयोग उपयोगकर्ता-प्रदत्त या बाहरी डेटा (जैसे, क्वेरी पैरामीटर्स, JSON पेलोड्स, CSV पंक्तियाँ) को
वैलिडेट करने के लिए करें, जब आपकी लॉजिक को IDs, काउंटर्स, पेजिनेशन ऑफ़सेट्स, या ऐरे इंडाइसेज़ जैसे पूर्णांक मानों की भरी
हुई सूची की आवश्यकता हो।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `areIntegers` को `unknown[]` इनपुट्स के लिए रनटाइम गार्ड के रूप में उपयोग करें, इससे पहले कि आप उन्हें केवल पूर्णांकों
> वाला `number[]` मानें। यदि यह `false` लौटाता है, तो इनपुट या तो भरा हुआ ऐरे नहीं है या उसमें कम से कम एक गैर-पूर्णांक
> मान मौजूद है।

### फायदे

- `true` केवल तब लौटाता है जब हर तत्व एक पूर्णांक हो; अन्यथा `false` लौटाता है।
- केवल-पूर्णांक ऑपरेशन्स (जैसे, इंडेक्सिंग, काउंट्स, IDs) करने से पहले अज्ञात इनपुट को वैलिडेट करने में मदद करता है।
- तेज़ी से विफल होता है: जैसे ही कोई गैर-पूर्णांक तत्व मिलता है, जाँच रोक देता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areIntegers(array)`

पैरामीटर:

- `array`: पूर्णांक तत्वों के लिए जाँचने वाला ऐरे।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // सही
console.log(areIntegers(b)); // सही
console.log(areIntegers(c)); // गलत

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areIntegers(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 12:58:40 am बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>