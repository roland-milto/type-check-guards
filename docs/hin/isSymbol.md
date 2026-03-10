# isSymbol

## विवरण

`isSymbol` यह निर्धारित करता है कि दिया गया मान `symbol` प्रकार का है या नहीं; symbols के लिए `true` और अन्यथा `false`
लौटाता है।

### उपयोग का मामला

किसी `unknown` मान को unique identifier, registry key, या objects और maps में computed property key के रूप में उपयोग
करने से पहले यह सत्यापित करें कि वह `symbol` है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> symbol-संबंधित फ़ंक्शन्स कॉल करने या इसे computed property key के रूप में उपयोग करने से पहले `unknown` को `symbol` तक
> narrow करने के लिए `isSymbol` का उपयोग करें।

### फायदे

- JavaScript के `symbol` प्रिमिटिव टाइप के लिए एक सरल, विश्वसनीय रनटाइम जाँच प्रदान करता है।
- `unknown` मानों को symbol-विशिष्ट APIs का उपयोग करने या उन्हें keys के रूप में संग्रहीत करने से पहले संकुचित (narrow)
  करने में मदद करता है।
- `typeof` का उपयोग करके false positives से बचाता है, जो `symbol` मानों का पता लगाने का मानक तरीका है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isSymbol(value)`

पैरामीटर:

- `value`: जाँचा जाने वाला मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input यहाँ एक प्रतीक है
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isSymbol(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 2:26:57 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>