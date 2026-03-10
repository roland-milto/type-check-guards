# isRegEx

## विवरण

निर्धारित करता है कि दिया गया मान `RegExp` instance है या नहीं।

### उपयोग का मामला

उपयोगकर्ता-प्रदत्त या डायनेमिक मानों (जैसे configuration, API payloads, plugin inputs) को रेगुलर एक्सप्रेशन मानकर उपयोग
करने से पहले वैलिडेट करें।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `isRegEx` का उपयोग `unknown` (या union) मानों को संकीर्ण (narrow) करने के लिए करें, इससे पहले कि आप RegExp-विशिष्ट
> properties या methods का उपयोग करें; यह केवल उन मानों के लिए `true` लौटाता है जो `RegExp` के instances हैं।

### फायदे

- यह जांचने के लिए एक सरल रनटाइम टाइप गार्ड प्रदान करता है कि कोई मान `RegExp` है या नहीं।
- जब कोड को एक रेगुलर एक्सप्रेशन की अपेक्षा होती है (जैसे `test`, `exec` कॉल करने या `source` पढ़ने से पहले), तब
  त्रुटियों से बचाने में मदद करता है।
- regex literals और `new RegExp(...)` के माध्यम से बनाए गए instances—दोनों के साथ काम करता है।
- non-regex इनपुट के लिए throw किए बिना एक स्पष्ट boolean परिणाम (`true`/`false`) लौटाता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isRegEx(value)`

पैरामीटर:

- `value`: जांच किया जाने वाला मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input यहाँ एक RegExp है
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isRegEx(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 11:29:30 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>