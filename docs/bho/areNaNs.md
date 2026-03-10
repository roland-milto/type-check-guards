# areNaNs

## विवरण

`areNaNs` जाँचेला कि ऐरे में सब तत्व `NaN` बा कि ना आ `true` खाली तबे लौटावेला जब हर तत्व `NaN` होखे।

### उपयोग

आवे वाला डेटा के सत्यापित करीं जहाँ `NaN` के sentinel मान के रूप में इस्तेमाल कइल गइल होखे आ रउआ के पक्का करे के होखे कि
पूरा ऐरे खाली `NaN` से ही बनल बा (जइसे, पूरा गायब संख्यात्मक श्रृंखला के पहचान)।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areNaNs` तब इस्तेमाल करीं जब रउआ के ई सत्यापित करे के होखे कि ऐरे में खाली संख्यात्मक `NaN` मान बा (
> स्ट्रिंग-से-संख्या coercion बिना)।

### फायदे

- `true` खाली तबे लौटावेला जब हर तत्व `NaN` होखे (सख्त सब-तत्व जाँच)।
- स्ट्रिंग के संख्या में जबरन ना बदलेला; "NaN" जइसन मान non-`NaN` रहेला आ नतीजा `false` बनावेला।
- भरल ना गइल ऐरे खातिर `false` लौटावेला, जेकरा से खाली इनपुट पर गलती से `true` होखे से बचावेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areNaNs(array)`

पैरामीटर:

- `array`: `NaN` मान खातिर जाँच करे वाला ऐरे।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // सही
const b = areNaNs([NaN, 1, NaN]); // गलत
const c = areNaNs([NaN, "NaN", NaN]); // गलत
const d = areNaNs([NaN, null, NaN]); // गलत
const e = areNaNs([] as unknown[]); // गलत
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areNaNs(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>ई फाइल 30 January 2026 at 15:50:31 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>