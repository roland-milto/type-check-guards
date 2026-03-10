# isNull

## विवरण

निर्धारित करेला कि दिहल गइल `value` `null` बा कि ना।

### उपयोग

इनपुट भा API payload फील्ड के वैलिडेट करे खातिर `isNull` इस्तेमाल करीं, जहाँ `null` के मतलब वाला sentinel मान मानल जाला
आ एकरा के `undefined` भा अउरी मान से अलग तरीका से हैंडल करे के पड़ी।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `isNull` तब इस्तेमाल करीं जब रउआँ के `null` के `undefined` आ अउरी falsy मान से अलग पहिचाने के जरूरत होखे; ई खाली
`null` खातिर `true` लौटावेला।

### फायदे

- `undefined` से गड़बड़ाए बिना `null` के सटीक जाँच देला।
- कवनो भी इनपुट टाइप पर भरोसेमंद तरीका से काम करेला, काहे कि ई `unknown` स्वीकार करेला।
- सरल, तेज, आ साइड-इफेक्ट फ्री; खाली `true` भा `false` लौटावेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isNull(value)`

पैरामीटर:

- `value`: `null` खातिर जाँच करे वाला मान।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // सही
console.log(isNull(b)); // गलत

if (isNull(a)) {
  // इहाँ a null बा
}
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isNull(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isNull](../_analysis/isNull.md)

<br>

---

<small>ई फाइल 31 January 2026 at 15:38:39 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>