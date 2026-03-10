# areBigInts

## विवरण

`areBigInts` तय करेला कि कवनो मान non-empty array ह कि ना, जेहमें खाली `bigint` मान होखें।

### उपयोग

अनजान input (जइसे parsed JSON-like data, API payloads, भा `unknown` टाइप कइल function parameters) के validate करीं ताकि
processing से पहिले ई पक्का हो जाव कि ई `bigint` मान के non-empty array ह; `true` तभिए लौटावेला जब सभे तत्व `bigint`
होखें, ना त `false`।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> अनजान input पर `bigint`-only ऑपरेशन (जइसे arithmetic, comparisons) करे से पहिले runtime guard के रूप में `areBigInts`
> के इस्तेमाल करीं।

### फायदे

- हर तत्व के `bigint` होखे के पक्का करेला, आ `true` तभिए लौटावेला जब पूरा array मेल खाला।
- डिजाइन से non-array आ खाली array के अस्वीकार करेला (`isFilledArray` के जरिए), जेकरा से गलती से अमान्य input स्वीकार
  होखे से बचावेला।
- फास्ट फेल: जइसे ही कवनो non-`bigint` तत्व मिलेला, तुरते `false` लौटा देला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areBigInts(array)`

पैरामीटर:

- `array`: जाँच करे खातिर मान।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // सही
console.log(areBigInts(b)); // गलत
console.log(areBigInts(c)); // गलत
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areBigInts(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>ई फाइल 31 January 2026 at 23:25:14 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>