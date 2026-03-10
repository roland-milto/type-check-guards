# areUndefined

## विवरण

`areUndefined` जाँचता है कि प्रदान की गई array का हर element `undefined` है या नहीं।

### उपयोग का मामला

यह validate करें कि optional results की सूची में कोई वास्तविक value नहीं है (केवल `undefined`), जैसे lookups को map करने
के बाद जहाँ missing entries को `undefined` के रूप में दर्शाया जाता है, और आप पुष्टि करना चाहते हैं कि सभी lookups विफल
रहे।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> जब आपको यह assert करना हो कि `unknown[]` में केवल `undefined` values हैं, तब `areUndefined` का उपयोग करें; आंतरिक
`isFilledArray` जाँच के कारण यह खाली arrays और non-array/invalid inputs के लिए `false` लौटाता है।

### फायदे

- `isFilledArray` के माध्यम से भरी हुई array की आवश्यकता रखकर non-arrays और खाली arrays के लिए `false` लौटाता है।
- सुनिश्चित करता है कि हर element `undefined` है, केवल कुछ नहीं, जिससे आशय स्पष्ट हो जाता है।
- अज्ञात input collections को validate करते समय guard-style predicate के रूप में उपयोगी।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areUndefined(array)`

पैरामीटर:

- `array`: `undefined` elements के लिए जाँचने वाली array।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// नोट: खाली ऐरे के लिए false लौटाता है
const r4 = areUndefined([]); // false
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areUndefined(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 1:55:59 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>