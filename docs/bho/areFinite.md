# areFinite

## विवरण

`areFinite` जांचेला कि कवनो value एगो गैर-खाली array बा कि ना, आ ओकर element सभे finite number बा कि ना; अइसन होखे त
`true` लौटावेला, नाहीं त `false`।

### उपयोग

गणना करे से पहिले numeric input array (जइसे chart series, coordinate list, measurement sample) के validate करीं, ताकि
नतीजा `true` खाली तबहीं आवे जब सभे value finite number होखे।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> जब रउआ के पक्का करे के होखे कि एगो array गैर-खाली बा आ ओहमें खाली finite number ही बा, तब `areFinite` इस्तेमाल करीं; ई
> खाली array खातिर आ `NaN` भा infinity वाला array खातिर `false` लौटावेला।

### फायदे

- `true` खाली तबहीं लौटावेला जब इनपुट एगो गैर-खाली array होखे आ हर element एगो finite number होखे।
- हर element खातिर `isFinite` check पर निर्भर रहके `Infinity`, `-Infinity`, आ `NaN` के reject करेला।
- guards आ validation flow खातिर उपयुक्त एगो सरल boolean नतीजा (`true`/`false`) देला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areFinite(array)`

पैरामीटर:

- `array`: एगो array जेकरा के जांचल जाई कि ओकर सभे element finite बा कि ना।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // सही
console.log(areFinite(b)); // गलत
console.log(areFinite(c)); // गलत

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areFinite(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>ई फाइल 30 January 2026 at 16:33:41 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>