# areIndexesFound

## विवरण

`areIndexesFound` जाँचेला कि कवनो value non-empty array बा कि ना, आ ओकरा सभे elements वैध indexes बा कि ना; अगर बा त
`true` लौटावेला, नाहीं त `false`।

### उपयोग

User देहल भा बाहरी data (जइसे parsed JSON) जेकरा से indexes के सूची होखे के उम्मीद बा, ओकरा के arrays access भा slice
करे से पहिले validate करीं।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> Unknown input के elements के array indexes मान के इस्तेमाल करे से पहिले validate करे खातिर `areIndexesFound` के
> इस्तेमाल करीं; ई खाली arrays खातिर आ non-index values वाला arrays खातिर `false` लौटावेला।

### फायदे

- खाली `true` तबे लौटावेला जब इनपुट भरल array होखे आ हर element वैध index होखे।
- जल्दी फेल हो जाला: जइसे ही कवनो non-index element मिलेला, `false` लौटा देला।
- Array position भा offset के रूप में मान इस्तेमाल करे से पहिले guard के रूप में उपयोगी।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areIndexesFound(array)`

पैरामीटर:

- `array`: Index compliance खातिर जाँचल जाए वाला array।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // सही
console.log(areIndexesFound(b)); // गलत
console.log(areIndexesFound(c)); // गलत

if (areIndexesFound(a)) {
  // इहाँ, `a` के इंडेक्स से भरल एगो एरे होखे के पक्का हो गइल बा।
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areIndexesFound(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>ई फाइल 31 January 2026 at 00:41:03 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>