# isSymbol

## विवरण

`isSymbol` तय करेला कि दिहल मान `symbol` टाइप के बा कि ना, symbols खातिर `true` आ नाहीं त `false` लौटावेला।

### उपयोग

कवनो `unknown` मान के `symbol` होखे के validate करीं, ताकि ओकरा के unique identifier, registry key, भा objects आ maps
में computed property key के रूप में इस्तेमाल कइल जा सके।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> symbol-संबंधित functions कॉल करे से पहिले भा computed property key के रूप में इस्तेमाल करे से पहिले `unknown` के
`symbol` में narrow करे खातिर `isSymbol` के इस्तेमाल करीं।

### फायदे

- JavaScript के `symbol` primitive टाइप खातिर सरल आ भरोसेमंद runtime जाँच देला।
- symbol-विशेष API इस्तेमाल करे से पहिले भा key के रूप में store करे से पहिले `unknown` मान के narrow करे में मदद करेला।
- `typeof` के इस्तेमाल करके गलत positive से बचे ला, काहे कि ई `symbol` मान पहिचाने के canonical तरीका ह।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isSymbol(value)`

पैरामीटर:

- `value`: जाँचल जाए वाला मान।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input इहाँ एगो symbol बा
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isSymbol(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>ई फाइल 30 January 2026 at 14:25:57 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>