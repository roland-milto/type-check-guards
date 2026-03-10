# isBoolean

## विवरण

निर्धारित करता है कि दिया गया मान `boolean` है या नहीं।

### उपयोग का मामला

बाहरी या अनटाइप्ड डेटा (जैसे, environment variables, JSON payloads, query parameters) को वैलिडेट करें ताकि कंडीशनल लॉजिक
में उपयोग करने से पहले यह सुनिश्चित हो सके कि कोई मान `boolean` है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> बूलियन ऑपरेशन्स लागू करने से पहले `unknown` को `boolean` तक संकीर्ण करने के लिए `isBoolean` का उपयोग करें।

### फायदे

- `typeof` का उपयोग करके सरल और तेज़ रनटाइम जाँच।
- बूलियन-विशिष्ट लॉजिक से पहले अज्ञात इनपुट को वैलिडेट करने में मदद करता है।
- एक पूर्वानुमेय `boolean` परिणाम (`true`/`false`) लौटाता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isBoolean(value)`

पैरामीटर:

- `value`: जाँचा जाने वाला मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // यहाँ input boolean है
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isBoolean(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 2:36:31 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>