# areFloats

## विवरण

`areFloats` जाँचेला कि दिहल गइल array भरल बा आ ओकर सभे elements float बा कि ना।

### उपयोग

`areFloats` के इस्तेमाल तब करीं जब रउआँ के एगो `unknown[]` (जइसे JSON, query parameters, भा बाहरी APIs से) मिले आ रउआँ
के ई पक्का करे के होखे कि ई एगो भरल array बा जवना में हर item float बा, तबे averaging, interpolation, भा statistical
calculations जइसन numeric logic चलावल जा सके।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areFloats` के इस्तेमाल `unknown[]` के guard करे खातिर करीं, ओकरा के खाली floats वाला `number[]` मान के चलला से पहिले;
> ई खाली arrays खातिर आ कवनो non-float element खातिर `false` लौटावेला।

### फायदे

- `true` खाली तबे लौटावेला जब इनपुट एगो गैर-खाली array होखे आ हर element float होखे।
- जल्दी फेल हो जाला: जइसे ही कवनो non-float element मिलेला, `false` लौटा देला।
- Float-विशेष गणना करे से पहिले अनजान इनपुट के validate करे में मदद करेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areFloats(array)`

पैरामीटर:

- `array`: Float elements खातिर जाँच करे वाला array।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // सही
console.log(areFloats(b)); // गलत
console.log(areFloats(c)); // गलत

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areFloats(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>ई फाइल 30 January 2026 at 15:56:21 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>