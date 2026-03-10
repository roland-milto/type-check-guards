# isSet

## विवरण

निर्धारित करता है कि दिया गया मान `Set` है या नहीं।

### उपयोग का मामला

बाहरी स्रोतों (जैसे JSON parsing, user input, या third-party APIs) से इनपुट्स को मान्य करें ताकि `Set` ऑपरेशन्स करने से
पहले यह सुनिश्चित हो सके कि मान एक `Set` है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `.add`, `.has`, या `.size` जैसी `Set`-विशिष्ट APIs कॉल करने से पहले `unknown` मानों को संकीर्ण (narrow) करने के लिए
`isSet` का उपयोग करें।

### फायदे

- यह पुष्टि करने के लिए एक सरल रनटाइम जाँच प्रदान करता है कि कोई मान `Set` है या नहीं।
- जब कोई मान `Set` न हो, तो शुरुआती ब्रांचिंग की अनुमति देकर टाइप त्रुटियों को रोकने में मदद करता है।
- किसी भी `Set` सामग्री (खाली या भरी हुई) के साथ काम करता है और लगातार `true`/`false` लौटाता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isSet(value)`

पैरामीटर:

- `value`: जाँचने के लिए मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a रनटाइम पर एक Set है
  console.log(a.size);
}

console.log(isSet(b)); // false
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isSet(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isSet](../_analysis/isSet.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 11:09:48 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>