# areValidDates

## विवरण

निर्धारित करेला कि कवनो ऐरे गैर-खाली बा आ पूरा तरह से वैध `Date` ऑब्जेक्ट से बनल बा कि ना।

### उपयोग

यूजर-देहल भा API-देहल ऐरे पर तारीख-आधारित काम (सॉर्टिंग, रेंज चेक, फॉर्मेटिंग) करे से पहिले `areValidDates` से वैलिडेट
करीं, ताकि सब एंट्री सचमुच के, वैध `Date` ऑब्जेक्ट होखें आ सूची खाली ना होखे।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areValidDates` खाली ऐरे खातिर `false` लौटावेला; वैलिडेशन स्टेप के रूप में एकरा पर भरोसा करे से पहिले पक्का कर लीं कि
> ऐरे के गैर-खाली होखे के इरादा बा।

### फायदे

- `true` खाली तबे लौटावेला जब हर तत्व वैध `Date` इंस्टेंस होखे (कवनो अमान्य तारीख जइसे `new Date('invalid')` ना होखे)।
- खाली इनपुट के `false` लौटाके अस्वीकार करेला, एहसे रउआ खाली मतलब वाला, गैर-खाली तारीख सूची ही स्वीकार करब।
- सरल बूलियन गार्ड-जइसन जांच देला जेकरा के अउरी वैलिडेशन के साथे जोड़ल आसान बा।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areValidDates(array)`

पैरामीटर:

- `array`: जांच करे खातिर ऐरे, जेहमें `Date` ऑब्जेक्ट हो सकेला।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // सही
console.log(areValidDates(b)); // गलत
console.log(areValidDates(c)); // गलत
console.log(areValidDates(d)); // गलत

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areValidDates(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>ई फाइल 30 January 2026 at 14:30:46 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>