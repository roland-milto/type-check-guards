# areWeakMaps

## विवरण

`areWeakMaps` जाँचता है कि कोई value एक non-empty array है या नहीं, जहाँ हर element एक `WeakMap` है; केवल उसी स्थिति में
`true` और अन्यथा `false` लौटाता है।

### उपयोग का मामला

Runtime data (जैसे parsed JSON, plugin inputs, या loosely typed configuration) को validate करें ताकि iterate करने और
`WeakMap` methods कॉल करने से पहले यह सुनिश्चित हो सके कि यह `WeakMap` instances की एक non-empty array है; जब कोई भी
element `WeakMap` नहीं होता या array खाली होती है, तब `false` लौटाता है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> Unknown input को non-empty `WeakMap[]` मानने से पहले validate करने के लिए `areWeakMaps` का उपयोग करें; यह खाली arrays
> के लिए `false` लौटाता है।

### फायदे

- यह सुनिश्चित करता है कि प्रदान की गई array का हर element `WeakMap` का instance है।
- खाली arrays के लिए `false` लौटाता है, जिससे “no data” को गलती से वैध input मान लेने से बचाव होता है।
- `WeakMap`-विशिष्ट operations को सभी items पर करने से पहले guard के रूप में उपयोगी।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areWeakMaps(array)`

पैरामीटर:

- `array`: `WeakMap` instances के लिए जाँचने वाली array।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // सूची WeakMap इंस्टेंसों की एक गैर-खाली ऐरे है
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // गैर-खाली WeakMap[] नहीं है
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areWeakMaps(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 1:37:24 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>