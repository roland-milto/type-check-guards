# isNull

## विवरण

निर्धारित करता है कि प्रदान किया गया `value` `null` है या नहीं।

### उपयोग का मामला

`isNull` का उपयोग इनपुट्स या API payload फ़ील्ड्स को वैलिडेट करने के लिए करें जहाँ `null` एक अर्थपूर्ण sentinel मान है
और इसे `undefined` या अन्य मानों की तुलना में अलग तरीके से संभालना आवश्यक है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `isNull` का उपयोग तब करें जब आपको `null` को `undefined` और अन्य falsy मानों से अलग पहचानना हो; यह केवल `null` के लिए
`true` लौटाता है।

### फायदे

- `null` के लिए एक सटीक जाँच प्रदान करता है, बिना इसे `undefined` के साथ मिलाए।
- किसी भी इनपुट प्रकार के लिए विश्वसनीय रूप से काम करता है क्योंकि यह `unknown` स्वीकार करता है।
- सरल, तेज़, और बिना साइड-इफेक्ट के; केवल `true` या `false` लौटाता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isNull(value)`

पैरामीटर:

- `value`: `null` के लिए जाँच करने वाला मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // a यहाँ null है
}
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isNull(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isNull](../_analysis/isNull.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 3:39:22 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>