# areJson

## विवरण

जांचे ला कि ऐरे के सभे तत्व JSON स्ट्रिंग हउवें कि ना, आ `true` खाली तबहीं लौटावेला जब ऐरे भरल होखे आ हर आइटम वैध JSON
होखे; नाहीं त `false` लौटावेला।

### उपयोग

आवे वाला डेटा के वैलिडेट करीं (जइसे, query params, environment variables, भा external APIs से) जहाँ रउआ JSON-encoded
स्ट्रिंग के ऐरे के उम्मीद करत बानी आ खाली ऐरे भा कवनो गैर-JSON एंट्री के रिजेक्ट करे चाहत बानी।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areJson` के इस्तेमाल तब करीं जब रउआ के `unknown[]` में खाली JSON स्ट्रिंग होखे के वैलिडेट करे के जरूरत होखे, ओहनी के
> पार्स करे से पहिले (जइसे, `JSON.parse` से)।

### फायदे

- `true` खाली तबहीं लौटावेला जब हर तत्व वैध JSON स्ट्रिंग होखे; नाहीं त `false` लौटावेला।
- जल्दी फेल हो जाला: जइसे ही कवनो गैर-JSON तत्व मिलेला, जांच रोक देला।
- डिजाइन से खाली ऐरे के अस्वीकार करेला, भरल ना होखे वाला इनपुट खातिर `false` लौटावेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areJson(array)`

पैरामीटर:

- `array`: JSON स्ट्रिंग तत्व खातिर जांचे वाला ऐरे।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // सही
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // गलत
const empty = areJson([]); // गलत

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areJson(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areJson](../_analysis/areJson.md)

<br>

---

<small>ई फाइल 30 January 2026 at 16:15:07 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>