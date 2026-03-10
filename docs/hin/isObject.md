# isObject

## विवरण

निर्धारित करता है कि दिया गया `value` एक `object` है या नहीं (`null` को छोड़कर)।

### उपयोग का मामला

Properties तक पहुँचने से पहले अज्ञात inputs (जैसे, parsed JSON, API responses, event payloads) को validate करने के लिए
`isObject` का उपयोग करें, ताकि यह सुनिश्चित हो सके कि मान एक object है और `null` नहीं।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `isObject` एक runtime guard है जो boolean लौटाता है; यह किसी विशिष्ट object shape तक narrow नहीं करता। जब आपको अधिक
> मजबूत typing चाहिए, तो इसे अतिरिक्त जाँचों (जैसे, property existence) के साथ संयोजित करें।

### फायदे

- केवल उन गैर-`null` मानों के लिए `true` लौटाता है जिनका `typeof` `"object"` होता है।
- JavaScript की आम समस्या से बचाता है जहाँ `null` को अन्यथा एक object माना जाता।
- साधारण objects और built-in object instances (जैसे, `Date`, `RegExp`) के लिए काम करता है।
- Defensive programming और input validation के लिए उपयुक्त एक सरल, तेज़ runtime check।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isObject(value)`

पैरामीटर:

- `value`: `object` होने की जाँच के लिए मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // इनपुट रनटाइम पर एक गैर-शून्य ऑब्जेक्ट है
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isObject(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isObject](../_analysis/isObject.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 12:18:40 am बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>