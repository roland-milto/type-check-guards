# isBuffer

## विवरण

जाँचता है कि कोई मान Node.js `Buffer` है या नहीं और `true` या `false` लौटाता है।

### उपयोग का मामला

रनटाइम पर इनपुट्स (जैसे, API पेलोड्स, फ़ाइल डेटा, या मैसेज बफ़र्स) को वैलिडेट करें ताकि प्रोसेस करने से पहले यह
सुनिश्चित हो सके कि मान एक `Buffer` है, और Node.js के बाहर चलने पर जहाँ `Buffer` मौजूद नहीं हो सकता, भरोसेमंद रूप से
`false` प्राप्त करें।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `Buffer`-विशिष्ट मेथड्स कॉल करने से पहले `unknown` मानों को `Buffer` तक नैरो करने के लिए `isBuffer` का उपयोग करें।

### फायदे

- `Buffer.isBuffer` का उपयोग करके Node.js `Buffer` इंस्टेंस को सुरक्षित रूप से पहचानता है।
- ऐसे परिवेशों में `false` लौटाता है जहाँ `Buffer` उपलब्ध नहीं है, जिससे रनटाइम त्रुटियों से बचाव होता है।
- `unknown` इनपुट के साथ काम करता है, जिससे यह रनटाइम वैलिडेशन और टाइप नैरोइंग के लिए उपयुक्त बनता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isBuffer(value)`

पैरामीटर:

- `value`: जिस मान की जाँच की जानी है।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // a यहाँ एक Buffer है
  console.log(a.toString("utf8"));
}
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isBuffer(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 4:31:48 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>