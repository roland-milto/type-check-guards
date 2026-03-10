# areObjects

## विवरण

`areObjects` जाँचता है कि दिया गया भरा हुआ array केवल objects ही रखता है या नहीं।

### उपयोग का मामला

`areObjects` का उपयोग तब करें जब आपको कोई अज्ञात array (जैसे JSON parsing या external APIs से) मिले और आपको iterate करने
तथा object properties access करने से पहले यह सुनिश्चित करना हो कि वह खाली नहीं है और उसका हर element एक object है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `areObjects` का उपयोग `unknown[]` को items को objects मानकर उपयोग करने से पहले validate करने के लिए करें; यह खाली
> arrays के लिए `false` लौटाता है।

### फायदे

- `true` केवल तब लौटाता है जब इनपुट एक भरा हुआ array हो और हर element एक object हो।
- जैसे ही कोई non-object element मिलता है, तुरंत रुक जाता है और `false` लौटाता है।
- object-विशिष्ट operations करने से पहले अज्ञात इनपुट को validate करने में मदद करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areObjects(array)`

पैरामीटर:

- `array`: object elements के लिए जाँचा जाने वाला array।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value वस्तुओं की भरी हुई सरणी है
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areObjects(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 12:08:53 am बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>