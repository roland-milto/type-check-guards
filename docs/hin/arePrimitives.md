# arePrimitives

## विवरण

`arePrimitives` यह मूल्यांकन करता है कि प्रदान की गई, non-empty array के सभी तत्व प्रिमिटिव प्रकार हैं या नहीं।

### उपयोग का मामला

आने वाले डेटा (जैसे, query parameters, CSV row values, या IDs/tags की सूची) को serialize, hash, log करने, या उन APIs को
पास करने से पहले सत्यापित करें जिन्हें objects प्राप्त नहीं होने चाहिए, कि उसमें केवल प्रिमिटिव मान ही हैं।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `arePrimitives` का उपयोग तब करें जब आपको आगे की प्रोसेसिंग से पहले यह सुनिश्चित करना हो कि एक `unknown[]` में केवल
> प्रिमिटिव मान (string, number, bigint, boolean, symbol, undefined, या null) ही हैं।

### फायदे

- `true` केवल तब लौटाता है जब हर तत्व एक प्रिमिटिव मान हो, जिससे यह “कोई ऑब्जेक्ट/फ़ंक्शन नहीं” वाली arrays के लिए एक
  सख्त गार्ड बन जाता है।
- तेज़ी से विफल होता है: जैसे ही कोई गैर-प्रिमिटिव तत्व मिलता है, `false` लौटा देता है।
- non-arrays और खाली arrays के लिए भी `false` लौटाता है (filled-array check के माध्यम से), जिससे अमान्य इनपुट को गलती से
  स्वीकार होने से रोका जाता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `arePrimitives(array)`

पैरामीटर:

- `array`: प्रिमिटिव प्रकार के तत्वों के लिए जाँची जाने वाली array।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // सही
const r2 = arePrimitives(b); // सही
const r3 = arePrimitives(c); // गलत
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.arePrimitives(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 12:04:48 am बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>