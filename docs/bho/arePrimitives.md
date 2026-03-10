# arePrimitives

## विवरण

`arePrimitives` जाँचेला कि दिहल गइल, गैर-खाली एरे में सभे तत्व प्रिमिटिव टाइप के बा कि ना।

### उपयोग

आवे वाला डेटा (जइसे, query parameters, CSV row values, या IDs/tags के लिस्ट) के serialize, hash, log करे से पहिले, भा ओह
API सभ में भेजे से पहिले जे ऑब्जेक्ट ना ले सके, ई पक्का करीं कि ओह में खाली प्रिमिटिव मान ही बा।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> जब रउआँ के ई पक्का करे के होखे कि `unknown[]` में खाली प्रिमिटिव मान (string, number, bigint, boolean, symbol,
> undefined, या null) बा, तब आगे के प्रोसेसिंग से पहिले `arePrimitives` के इस्तेमाल करीं।

### फायदे

- `true` खाली तबहीं लौटावेला जब हर तत्व प्रिमिटिव मान होखे, एहसे ई “कोई ऑब्जेक्ट/फंक्शन ना” वाला एरे खातिर सख्त गार्ड
  बा।
- जल्दी फेल हो जाला: जइसे ही कवनो गैर-प्रिमिटिव तत्व मिलेला, `false` लौटा देला।
- गैर-एरे आ खाली एरे खातिर भी `false` लौटावेला (filled-array चेक के जरिए), एहसे गलत इनपुट के गलती से स्वीकार होखे से
  बचावेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `arePrimitives(array)`

पैरामीटर:

- `array`: प्रिमिटिव टाइप के तत्व बा कि ना, ई जाँच करे खातिर एरे।

### लोकल फंक्शन इम्पोर्ट

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

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.arePrimitives(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>ई फाइल 31 January 2026 at 00:00:22 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>