# isEmpty

## विवरण

देल गइल मान खाली बा कि ना, ई तय करेला; `null`, `undefined`, खाली/whitespace स्ट्रिंग, खाली arrays, खाली `Map`/`Set`, भा
जवन objects में खुद के enumerable properties ना होखे, ओह खातिर `true` लौटावेला।

### उपयोग

अनेक data types में inputs validate करे आ missing/blank values पकड़े खातिर `isEmpty` के इस्तेमाल करीं (जइसे form fields,
API payloads, configuration objects), जहाँ `null`, `undefined`, whitespace स्ट्रिंग, खाली collections, आ बिना properties
वाला objects के खाली मानल जाव।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `isEmpty` एगो boolean लौटावे वाला utility बा (TypeScript type predicate नइखे), एह से ई अपने आप types के narrow नइखे
> करत; एकरा के compile-time narrowing के बजाय validation/branching खातिर इस्तेमाल करीं।

### फायदे

- खालीपन जाँच खातिर `null` आ `undefined` के `true` मानेला।
- लंबाई जाँचे से पहिले trim क के, खाली-खाली (whitespace-only) स्ट्रिंग के खाली मानेला।
- सामान्य कंटेनर टाइप (arrays, `Map`, `Set`) आ बिना खुद के enumerable properties वाला plain objects के सपोर्ट करेला।
- `hasOwnProperty` जाँच के इस्तेमाल क के inherited properties के गिनती से बचेला।
- guards आ validation खातिर उपयुक्त, सरल boolean नतीजा (`true`/`false`) लौटावेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isEmpty(value)`

पैरामीटर:

- `value`: खालीपन जाँच करे खातिर मान।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isEmpty(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>ई फाइल 6 February 2026 at 16:17:28 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>