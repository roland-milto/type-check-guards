# isEmpty

## विवरण

निर्धारित करता है कि दिया गया मान खाली है या नहीं; `null`, `undefined`, खाली/केवल-व्हाइटस्पेस स्ट्रिंग्स, खाली arrays,
खाली `Map`/`Set`, या बिना स्वयं की enumerable properties वाले objects के लिए `true` लौटाता है।

### उपयोग का मामला

`isEmpty` का उपयोग inputs को validate करने और कई data types में missing/blank values का पता लगाने के लिए करें (जैसे form
fields, API payloads, configuration objects), जहाँ `null`, `undefined`, व्हाइटस्पेस स्ट्रिंग्स, खाली collections, और
बिना properties वाले objects को खाली माना जाना चाहिए।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `isEmpty` एक boolean लौटाने वाली utility है (TypeScript type predicate नहीं), इसलिए यह अपने आप types को narrow नहीं
> करती; इसे compile-time narrowing के बजाय validation/branching के लिए उपयोग करें।

### फायदे

- खालीपन की जाँच के लिए `null` और `undefined` को `true` मानता है।
- लंबाई जाँचने से पहले ट्रिम करके केवल व्हाइटस्पेस वाली स्ट्रिंग्स को खाली मानता है।
- सामान्य कंटेनर प्रकारों (arrays, `Map`, `Set`) और बिना स्वयं की enumerable properties वाले plain objects का समर्थन
  करता है।
- `hasOwnProperty` जाँच का उपयोग करके inherited properties की गिनती से बचता है।
- guards और validation के लिए उपयुक्त एक सरल boolean परिणाम (`true`/`false`) लौटाता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isEmpty(value)`

पैरामीटर:

- `value`: खालीपन के लिए जाँचा जाने वाला मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isEmpty(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>फ़ाइल 6 फ़रवरी 2026 को 4:18:42 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>