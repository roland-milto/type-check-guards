# areDecimals

## विवरण

जाँचेला कि ऐरे के सभे तत्व दशमलव संख्या हउवें आ ऐरे भरल होखे, आ `true` भा `false` लौटावेला।

### उपयोग

यूजर देहल लिस्ट (जइसे, CSV कॉलम भा फॉर्म इनपुट) के वैलिडेट करीं ताकि ऐरे खाली ना होखे आ पार्सिंग भा गणना से पहिले हर
एंट्री दशमलव मान होखे।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areDecimals` के इस्तेमाल तब करीं जब रउआ के जल्दी से बूलियन जाँच चाहीं कि `unknown[]` खाली ना होखे आ हर तत्व दशमलव रूप
> में होखे।

### फायदे

- आइटम के वैलिडेट करे से पहिले इनपुट के भरल ऐरे होखे के पक्का करेला, जेकरा से खाली लिस्ट के गलती से स्वीकार होखे से
  बचावेला।
- `isDecimal` से हर तत्व के वैलिडेट करेला, एहसे मिलल-जुलल भा अमान्य मान तुरंते `false` नतीजा देला।
- गार्ड आ जल्दी-रिटर्न वैलिडेशन फ्लो खातिर उपयुक्त, एगो सरल बूलियन नतीजा (`true`/`false`) देला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areDecimals(array)`

पैरामीटर:

- `array`: जाँचल जाए वाला ऐरे।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // सही
console.log(areDecimals(b)); // गलत
console.log(areDecimals(c)); // गलत
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areDecimals(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>ई फाइल 31 January 2026 at 15:56:25 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>