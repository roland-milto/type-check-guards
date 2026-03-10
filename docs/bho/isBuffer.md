# isBuffer

## विवरण

जाँचेला कि कवनो मान Node.js `Buffer` बा कि ना, आ `true` भा `false` लौटावेला।

### उपयोग

रनटाइम पर इनपुट के वैलिडेट करीं (जइसे API payloads, file data, भा message buffers) ताकि प्रोसेस करे से पहिले पक्का हो
सके कि मान `Buffer` बा, आ Node.js के बाहर चलावे पर जहाँ `Buffer` मौजूद ना हो सके, भरोसेमंद तरीका से `false` मिल सके।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `unknown` मान के `Buffer` में नैरो करे खातिर, Buffer-विशेष मेथड बोले से पहिले `isBuffer` के इस्तेमाल करीं।

### फायदे

- `Buffer.isBuffer` के इस्तेमाल से Node.js `Buffer` इंस्टेंस के सुरक्षित तरीका से पहचानेला।
- जहाँ `Buffer` उपलब्ध नइखे, ओह माहौल में `false` लौटावेला, आ रनटाइम एरर से बचावेला।
- `unknown` इनपुट के साथ काम करेला, एहसे ई रनटाइम वैलिडेशन आ टाइप नैरोइंग खातिर उपयुक्त बा।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isBuffer(value)`

पैरामीटर:

- `value`: जवन मान के जाँच कइल जाई।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // सही
console.log(isBuffer(b)); // गलत

if (isBuffer(a)) {
  // इहाँ a Buffer बा
  console.log(a.toString("utf8"));
}
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isBuffer(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>ई फाइल 31 January 2026 at 16:30:52 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>