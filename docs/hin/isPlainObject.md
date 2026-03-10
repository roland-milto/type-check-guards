# isPlainObject

## विवरण

जाँचता है कि दिया गया `value` एक साधारण ऑब्जेक्ट है या नहीं; यदि है तो `true`, अन्यथा `false` लौटाता है।

### उपयोग का मामला

किसी `unknown` इनपुट (जैसे parsed JSON, बाहरी डेटा, या function arguments) को keys पढ़ने या उसे typed configuration
object में मैप करने से पहले यह सत्यापित करें कि वह एक साधारण ऑब्जेक्ट है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `isPlainObject` `unknown` को record-जैसे ऑब्जेक्ट के रूप में मानने से पहले उसे संकीर्ण (narrow) करने में उपयोगी है; यह
> केवल उन मानों के लिए `true` लौटाता है जिनका internal tag `[object Object]` होता है।

### फायदे

- यह जाँचने के लिए एक सरल, विश्वसनीय तरीका प्रदान करता है कि कोई मान एक साधारण ऑब्जेक्ट (यानी, `Object` / `{}`) है या
  नहीं, और `true` या `false` लौटाता है।
- साधारण ऑब्जेक्ट्स को arrays, functions, `null`, और अन्य गैर-साधारण ऑब्जेक्ट प्रकारों से अलग पहचानने में मदद करता है।
- TypeScript में एक type guard के रूप में उपयोगी है, ताकि object properties एक्सेस करने से पहले `unknown` मानों को
  संकीर्ण (narrow) किया जा सके।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isPlainObject(value)`

पैरामीटर:

- `value`: साधारण ऑब्जेक्ट स्थिति के लिए जाँचने हेतु मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input यहाँ एक साधारण ऑब्जेक्ट है
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isPlainObject(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>फ़ाइल 6 फ़रवरी 2026 को 12:17:45 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>