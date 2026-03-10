# isOneOfType

## विवरण

`isOneOfType` तय करेला कि दिहल गइल `value` दिहल गइल टाइप स्ट्रिंग में से कम से कम एगो से मेल खाला कि ना, आ अगर कवनो
मिलान मिलेला त `true` लौटावेला, नाहीं त `false`।

### उपयोग

ढीला-टाइप वाला भा बाहरी डेटा (जइसे parsed JSON, query parameters) के वैलिडेट करीं, जहाँ आगे के लॉजिक चलावे से पहिले कई
गो स्वीकार्य रनटाइम टाइप (जइसे `number` भा `string`) में से कवनो एक के अनुमति देवे के जरूरत होखे।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `isOneOfType` तब इस्तेमाल करीं जब रउआ चाहत बानी कि रनटाइम पर जाँच होखे कि कवनो मान कई गो अनुमति वाला टाइप में से कवनो
> एगो से मेल खाला; अगर कम से कम एगो टाइप मेल खाई त ई `true` लौटाई, नाहीं त `false`।

### फायदे

- एके कॉल में कवनो मान के कई गो अनुमति वाला टाइप के खिलाफ जाँचेला, आ पहिला मिलान पर `true` लौटावेला।
- `unknown` इनपुट के साथ काम करेला, एह से ई रनटाइम बाउंडरी पर उपयोगी बा (जइसे बाहरी डेटा, यूजर इनपुट)।
- सादा बूलियन नतीजा (`true`/`false`) जे कंडीशनल लॉजिक आ जल्दी रिटर्न के साथ बढ़िया से जुड़ जाला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isOneOfType(value, types)`

पैरामीटर:

- `value`: निर्दिष्ट टाइप के खिलाफ जाँच करे खातिर मान।
- `types`: टाइप स्ट्रिंग के एगो ऐरे जे मान के संभावित टाइप के प्रतिनिधित्व करेला।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input रनटाइम पर एगो ऑब्जेक्ट बा
}

console.log(isOneOfType(3, ["number", "string"])); // सही
console.log(isOneOfType("hello", ["number", "boolean"])); // गलत

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isOneOfType(value, types)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>ई फाइल 31 January 2026 at 23:42:30 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>