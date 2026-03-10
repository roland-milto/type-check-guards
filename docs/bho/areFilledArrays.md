# areFilledArrays

## विवरण

`areFilledArrays` जाँचेला कि दू-आयामी array खाली नइखे आ ओकर सभे subarrays भी खाली नइखन।

### उपयोग

Tabular भा matrix-जइसन input (जइसे CSV rows, grid data, grouped results) के validate करे खातिर `areFilledArrays` के
इस्तेमाल करीं, ताकि रउआँ सुरक्षित रूप से मान सकीं कि कम से कम एक subarray बा आ कवनो subarray खाली नइखे।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> जब रउआँ के ई पक्का करे के होखे कि 2D array में कम से कम एक row होखे आ हर row में कम से कम एक element होखे, तब iterate
> करे भा indexing करे से पहिले `areFilledArrays` के इस्तेमाल करीं।

### फायदे

- ई पक्का करेला कि बाहरी array खाली नइखे आ हर inner array भी खाली नइखे, आ `true` खाली तबे लौटावेला जब दूनो शर्त पूरा
  होखे।
- Subarrays के भीतर कवनो भी element type (जइसे numbers, strings, objects, nested arrays) के साथ काम करेला, काहेकि ई खाली
  array के “भरल” स्थिति चेक करेला, element के content ना।
- एकदम सरल boolean नतीजा (`true`/`false`) देला, जे दू-आयामी data प्रोसेस करे से पहिले guard के रूप में काम आवेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areFilledArrays(array)`

पैरामीटर:

- `array`: जाँच करे खातिर दू-आयामी array।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // सही
console.log(areFilledArrays(b)); // सही
console.log(areFilledArrays(c)); // सही
console.log(areFilledArrays(d)); // गलत
console.log(areFilledArrays(e)); // गलत
console.log(areFilledArrays(f)); // गलत

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areFilledArrays(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>ई फाइल 6 February 2026 at 11:55:35 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>