# areSymbols

## विवरण

जाँचता है कि कोई इनपुट एक filled array है जिसके सभी elements symbols हैं या नहीं, और `true` या `false` लौटाता है।

### उपयोग का मामला

यह सत्यापित करें कि कोई configuration field (उदा., symbols के रूप में दर्शाई गई unique keys की सूची) APIs में उपयोग करने
से पहले, जो `symbol[]` की आवश्यकता रखते हैं, केवल symbols वाला एक गैर-खाली array है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `areSymbols` का उपयोग अज्ञात इनपुट को `symbol[]` मानने से पहले सत्यापित करने के लिए करें; यह non-arrays और खाली arrays
> के लिए `false` लौटाता है।

### फायदे

- `true` केवल तब लौटाता है जब इनपुट एक गैर-खाली array हो और हर element एक symbol हो।
- आंतरिक filled-array जाँच के माध्यम से non-arrays और खाली arrays को अस्वीकार करके false positives को रोकता है।
- आगे की प्रोसेसिंग से पहले केवल-symbol वाली सूचियों को सत्यापित करने के लिए runtime type guard के रूप में उपयोगी।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areSymbols(array)`

पैरामीटर:

- `array`: symbol elements के लिए जाँचा जाने वाला array।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a रनटाइम पर केवल-सिंबल ऐरे है
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areSymbols(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 2:21:53 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>