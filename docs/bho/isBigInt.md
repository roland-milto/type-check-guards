# isBigInt

## विवरण

`isBigInt` जाँचेला कि दिहल गइल वैल्यू के टाइप `bigint` बा कि ना, BigInt प्रिमिटिव खातिर `true` आ नाहीं त `false`
लौटावेला।

### उपयोग

बिना टाइप वाला स्रोत (जइसे, JSON पार्सिंग, यूजर इनपुट, बाहरी API) से आवे वाला वैल्यू के वैलिडेट आ नैरो करीं,
BigInt-विशेष गणना करे से पहिले भा BigInt-खाली फील्ड में स्टोर करे से पहिले।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `unknown` के `bigint` में नैरो करे खातिर BigInt अंकगणित (जइसे, `+`, `*`) करे से पहिले `isBigInt` के इस्तेमाल करीं,
> काहे कि एह में BigInt ऑपरेन्ड जरूरी होखेला।

### फायदे

- `bigint` प्रिमिटिव टाइप खातिर एगो सरल, भरोसेमंद रनटाइम जाँच देला।
- BigInt-खाली ऑपरेशन करे से पहिले `unknown` वैल्यू के नैरो करे में मदद करेला।
- गलत पॉजिटिव से बचे ला: साधारण नंबर, स्ट्रिंग, आ अउरी टाइप `false` लौटावेलें।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isBigInt(value)`

पैरामीटर:

- `value`: जाँच करे खातिर वैल्यू।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // सही
console.log(isBigInt(10));  // गलत
console.log(isBigInt("10")); // गलत

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isBigInt(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>ई फाइल 31 January 2026 at 23:31:11 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>