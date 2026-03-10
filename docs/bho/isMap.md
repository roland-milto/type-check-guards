# isMap

## विवरण

दिहल गइल `value` के `Map` होखे के जाँच करेला; अगर ह त `true` लौटावेला आ ना त `false`।

### उपयोग

`isMap` तब इस्तेमाल करीं जब रउआँ के कउनो `unknown` मान मिले (जइसे JSON parsing, external APIs, भा user input से) आ `Map`
ऑपरेशन करे से पहिले पक्का करे के होखे कि ई `Map` ह।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `isMap` एगो रनटाइम गार्ड ह जे मान `Map` होखे पर `true` आ ना होखे पर `false` लौटावेला; `Map` API कॉल करे से पहिले
`unknown` के नैरो करे खातिर एकरा इस्तेमाल करीं।

### फायदे

- जल्दी से रनटाइम पर जाँच देला कि कउनो मान `Map` ह कि ना।
- `get`, `set`, आ `has` जइसन `Map` मेथड चाहीं वाला कोड पाथ के गार्ड क के टाइप एरर से बचावे में मदद करेला।
- `unknown` इनपुट सँभारे के समय हल्का-फुल्का वैलिडेशन स्टेप के रूप में बढ़िया काम करेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isMap(value)`

पैरामीटर:

- `value`: जाँच करे खातिर मान।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isMap(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isMap](../_analysis/isMap.md)

<br>

---

<small>ई फाइल 31 January 2026 at 16:03:44 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>