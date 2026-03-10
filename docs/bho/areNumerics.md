# areNumerics

## विवरण

`areNumerics` जाँचेला कि कवनो value खाली ना होखे वाला array बा कि ना, आ ओह में सभे elements numeric बा कि ना।

### उपयोग

`areNumerics` के इस्तेमाल external भा untyped data (जइसे JSON payloads, query parameters, form input) के validate करे
खातिर करीं, sums, averages, भा अउरी numeric operations निकाले से पहिले, ताकि इनपुट खाली ना होखे वाला numeric array होखे;
ना त `false` लौटाई।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areNumerics` के इस्तेमाल `unknown` input के guard करे खातिर करीं, ओकरा के numeric array मान के पहिले; ई non-arrays आ
> खाली arrays खातिर `false` लौटावेला।

### फायदे

- इनपुट खाली ना होखे वाला array होखे आ हर element numeric होखे तबे `true` लौटावेला।
- जल्दी फेल हो जाला: जइसेही कवनो non-numeric element मिलेला, चेकिंग रोक के `false` लौटावेला।
- Numeric operation करे से पहिले unknown input के सुरक्षित तरीका से validate करे में मदद करेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areNumerics(array)`

पैरामीटर:

- `array`: Numeric elements खातिर जाँच करे वाला array।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // सही
console.log(areNumerics(b)); // सही
console.log(areNumerics(c)); // गलत
console.log(areNumerics(d)); // गलत
console.log(areNumerics(e)); // गलत

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areNumerics(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>ई फाइल 6 February 2026 at 16:04:05 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>