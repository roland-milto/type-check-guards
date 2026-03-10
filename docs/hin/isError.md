# isError

## विवरण

जांचता है कि दिया गया `value` `Error` का एक इंस्टेंस है या नहीं।

### उपयोग का मामला

`isError` का उपयोग तब करें जब आपको कोई `unknown` मान (जैसे `catch` ब्लॉक, किसी कॉलबैक, या किसी बाहरी लाइब्रेरी से) मिले
और आपको `message`, `name`, या `stack` पढ़ने से पहले सुरक्षित रूप से यह निर्धारित करना हो कि वह `Error` है या नहीं।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `unknown` मानों (जैसे `catch` से) को `Error` मानने से पहले उन्हें गार्ड करने के लिए `isError` का उपयोग करें।

### फायदे

- यह जांचने के लिए एक सरल रनटाइम चेक प्रदान करता है कि कोई मान `Error` का इंस्टेंस है या नहीं।
- `message` या `stack` जैसी `Error` प्रॉपर्टीज़ तक पहुंचने से पहले अज्ञात इनपुट्स को संकीर्ण करने में मदद करता है।
- `catch`, बाहरी APIs, या अनटाइप्ड स्रोतों से आए मानों को संभालते समय रनटाइम एक्सेप्शन्स के जोखिम को कम करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isError(value)`

पैरामीटर:

- `value`: `Error` टाइप के विरुद्ध जांचने के लिए मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isError(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isError](../_analysis/isError.md)

<br>

---

<small>फ़ाइल 6 फ़रवरी 2026 को 12:45:38 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>