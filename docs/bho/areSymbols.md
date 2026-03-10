# areSymbols

## विवरण

जाँचेला कि इनपुट एगो भरल (filled) array बा कि ना, जेकर सभे elements symbols बा, आ `true` भा `false` लौटावेला।

### उपयोग

Validate करीं कि एगो configuration field (जइसे, symbols के रूप में represent कइल unique keys के list) एगो गैर-खाली array
बा आ खाली symbols ही रखेला, एकरा के ओह APIs में इस्तेमाल करे से पहिले जे `symbol[]` माँगेले।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areSymbols` के इस्तेमाल unknown input के validate करे खातिर करीं, ओकरा के `symbol[]` मान के पहिले; ई non-arrays आ
> खाली arrays खातिर `false` लौटावेला।

### फायदे

- `true` खाली तबे लौटावेला जब इनपुट एगो गैर-खाली array होखे आ हर element एगो symbol होखे।
- अंदरूनी filled-array check के जरिए non-arrays आ खाली arrays के reject क के false positives से बचावेला।
- आगे के processing से पहिले symbol-only lists के validate करे खातिर runtime type guard के रूप में उपयोगी बा।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areSymbols(array)`

पैरामीटर:

- `array`: Symbol elements खातिर जाँचल जाए वाला array।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a रनटाइम पर खाली symbol वाला array बा
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areSymbols(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>ई फाइल 30 January 2026 at 14:20:47 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>