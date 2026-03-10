# areBooleans

## विवरण

`areBooleans` जाँचता है कि दिया गया non-empty array केवल boolean मानों को ही शामिल करता है या नहीं; ऐसा होने पर `true`
और अन्यथा `false` लौटाता है।

### उपयोग का मामला

उपयोगकर्ता-प्रदत्त या बाहरी डेटा (जैसे, JSON payloads, query params, config arrays) को validate करें ताकि यह सुनिश्चित
हो सके कि non-empty सूची में केवल booleans ही हैं, इससे पहले कि boolean logic लागू किया जाए या उसे उन APIs को पास किया
जाए जो `boolean[]` अपेक्षित करती हैं।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `unknown[]` को `boolean[]` मानकर उपयोग करने से पहले उसे validate करने के लिए `areBooleans` का उपयोग करें; यह खाली
> arrays के लिए `false` लौटाता है, इसलिए यदि खाली सूची की अनुमति होनी चाहिए तो उस स्थिति को स्पष्ट रूप से संभालें।

### फायदे

- `true` केवल तभी लौटाता है जब हर तत्व एक boolean हो और इनपुट एक non-empty array हो।
- खाली arrays को अस्वीकार करके ( `false` लौटाकर) false positives को रोकता है।
- boolean-only operations (जैसे, `every`, `some`, logical reductions) से पहले runtime guard के रूप में अच्छी तरह काम
  करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areBooleans(array)`

पैरामीटर:

- `array`: boolean तत्वों के लिए जाँचा जाने वाला array।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areBooleans(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 2:40:29 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>