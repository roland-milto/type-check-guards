# areHexadecimals

## विवरण

जांचेला कि ऐरे में सभे तत्व हेक्साडेसिमल स्ट्रिंग बाड़ें कि ना, आ खाली गैर-खाली ऐरे में जब हर आइटम वैध होखे तबे `true`
लौटावेला।

### उपयोग

`areHexadecimals` के इस्तेमाल करीं ताकि यूजर इनपुट भा बाहरी डेटा (जइसे, IDs, checksums, color codes जेकरा आगे '#' ना
होखे) के हेक्साडेसिमल पार्सिंग भा अउरी प्रोसेसिंग से पहिले वैलिडेट कइल जा सके।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areHexadecimals` के इस्तेमाल करीं ताकि पार्स करे भा वैल्यू कन्वर्ट करे से पहिले अनजान इनपुट के वैलिडेट कइल जा सके (
> जइसे, `parseInt(value, 16)` से पहिले भा BigInt कन्वर्जन से पहिले)।

### फायदे

- ई जांचेला कि हर तत्व हेक्साडेसिमल स्ट्रिंग बा आ खाली तबे `true` लौटावेला जब सभे आइटम मेल खाएलें।
- डिजाइन से खाली ऐरे के अस्वीकार करेला, इनपुट डेटा ना होखे पर `false` लौटावेला।
- गार्ड आ जल्दी-रिटर्न वैलिडेशन खातिर उपयुक्त एगो सरल बूलियन नतीजा (`true`/`false`) देला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areHexadecimals(array)`

पैरामीटर:

- `array`: हेक्साडेसिमल स्ट्रिंग तत्व खातिर जांचे वाला ऐरे।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areHexadecimals(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>ई फाइल 31 January 2026 at 23:05:31 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>