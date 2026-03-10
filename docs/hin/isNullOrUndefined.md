# isNullOrUndefined

## विवरण

जाँचता है कि दिया गया मान `null` या `undefined` है या नहीं।

### उपयोग का मामला

जब आपको `null` और `undefined` दोनों को “कोई मान नहीं” के रूप में मानना हो, तब `isNullOrUndefined` का उपयोग करें—जैसे
वैकल्पिक इनपुट्स का वैलिडेशन करना, API payloads को नॉर्मलाइज़ करना, या किसी संभावित रूप से गायब मान को dereference करने
से पहले कोड पाथ्स को गार्ड करना।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> प्रॉपर्टीज़ तक पहुँचने या मेथड्स कॉल करने से पहले गायब मानों से बचाव के लिए `isNullOrUndefined` का उपयोग करें; यह केवल
`null` और `undefined` के लिए `true` लौटाता है।

### फायदे

- एक ही स्थान पर `null` और `undefined` का पता लगाने के लिए एक स्पष्ट, पुन: उपयोग योग्य गार्ड प्रदान करता है।
- एक सरल boolean (`true`/`false`) लौटाता है जिसे शर्तों और वैलिडेशन में आसानी से संयोजित किया जा सकता है।
- प्रॉपर्टीज़ तक पहुँचने या मेथड्स कॉल करने से पहले गायब मानों की जाँच करके सामान्य रनटाइम त्रुटियों से बचने में मदद
  करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isNullOrUndefined(value)`

पैरामीटर:

- `value`: `null` या `undefined` के लिए जाँचा जाने वाला मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // अनुपस्थित मान को संभालें
}

console.log(isNullOrUndefined(b)); // सही
console.log(isNullOrUndefined(c)); // गलत

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isNullOrUndefined(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 12:33:53 am बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>