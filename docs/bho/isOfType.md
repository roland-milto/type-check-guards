# isOfType

## विवरण

देल गइल `value` के निर्दिष्ट टाइप स्ट्रिंग से मैच करे ला कि ना, ई तय करेला; प्रिमिटिव खातिर `typeof` आ जटिल टाइप खातिर
फॉलबैक इस्तेमाल करेला।

### उपयोग

`unknown` इनपुट (जइसे API रिस्पॉन्स, यूजर इनपुट, पार्स कइल JSON) के वैलिडेट आ नैरो करे खातिर, टाइप-विशेष ऑपरेशन करे से
पहिले ई जांचीं कि वैल्यू अपेक्षित टाइप स्ट्रिंग के बा कि ना।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `unknown` वैल्यू के साथ काम करत घरी रनटाइम टाइप पर ब्रांच करे खातिर `isOfType` के इस्तेमाल करीं; ई `true`/`false`
> लौटावेला आ `null` आ `undefined` के साफ तौर पर ट्रीट करेला।

### फायदे

- गति आ साफ-साफ समझ खातिर प्रिमिटिव के सीधा `typeof` से जांचेला।
- `null` आ `undefined` के सही तरीका से संभाले ला, जेकरा के खाली `typeof` से मनचाहा तरीका से अलग ना कइल जा सकेला।
- `getTypeOf` के इस्तेमाल से फॉलबैक तुलना द्वारा जटिल भा कस्टम टाइप स्ट्रिंग के सपोर्ट करेला।
- गार्ड आ ब्रांचिंग खातिर ठीक सरल बूलियन नतीजा (`true`/`false`) लौटावेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isOfType(value, type)`

पैरामीटर:

- `value`: `type` के खिलाफ जांचे खातिर वैल्यू।
- `type`: जवन टाइप के खिलाफ जांच करे के बा, ओकर स्ट्रिंग रूप।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // इहाँ input एगो नंबर बा
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // इहाँ input एगो स्ट्रिंग बा
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isOfType(value, type)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>ई फाइल 30 January 2026 at 16:58:39 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>