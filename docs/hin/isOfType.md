# isOfType

## विवरण

यह निर्धारित करता है कि दिया गया `value` निर्दिष्ट टाइप स्ट्रिंग से मेल खाता है या नहीं; प्रिमिटिव्स के लिए `typeof` और
जटिल टाइप्स के लिए फ़ॉलबैक का उपयोग करता है।

### उपयोग का मामला

टाइप-विशिष्ट ऑपरेशन्स करने से पहले यह जाँचकर कि कोई मान अपेक्षित टाइप स्ट्रिंग का है या नहीं, `unknown` इनपुट्स (जैसे
API प्रतिक्रियाएँ, उपयोगकर्ता इनपुट, पार्स किया हुआ JSON) को वैलिडेट और नैरो करें।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `unknown` मानों के साथ काम करते समय रनटाइम टाइप्स के आधार पर ब्रांच करने के लिए `isOfType` का उपयोग करें; यह `true`/
`false` लौटाता है और `null` तथा `undefined` को स्पष्ट रूप से संभालता है।

### फायदे

- गति और स्पष्टता के लिए सीधे `typeof` के माध्यम से प्रिमिटिव्स की जाँच करता है।
- `null` और `undefined` को सही ढंग से संभालता है, जिन्हें केवल `typeof` इच्छित रूप से अलग नहीं कर सकता।
- `getTypeOf` का उपयोग करके फ़ॉलबैक तुलना के माध्यम से जटिल या कस्टम टाइप स्ट्रिंग्स का समर्थन करता है।
- गार्ड्स और ब्रांचिंग के लिए उपयुक्त एक सरल बूलियन परिणाम (`true`/`false`) लौटाता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isOfType(value, type)`

पैरामीटर:

- `value`: `type` के विरुद्ध जाँचने के लिए मान।
- `type`: जिसके विरुद्ध जाँच करनी है उस टाइप का स्ट्रिंग निरूपण।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // यहाँ input एक संख्या है
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // यहाँ input एक स्ट्रिंग है
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isOfType(value, type)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 4:59:57 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>