# areUndefined

## विवरण

`areUndefined` जांचेला कि दिहल गइल array में हर element `undefined` बा कि ना।

### उपयोग

Validate करीं कि optional results के सूची में कवनो असली value नइखे (खाली `undefined`), जइसे lookups के mapping के बाद
जहवाँ missing entries के `undefined` के रूप में देखावल जाला, आ रउआ चाहत बानी कि पक्का हो जाव कि सभे lookups fail भइल।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areUndefined` तब इस्तेमाल करीं जब रउआ के ई assert करे के हो कि `unknown[]` में खाली `undefined` values बा; ई खाली
> arrays आ non-array/invalid inputs खातिर `false` लौटावेला, भीतर के `isFilledArray` check के चलते।

### फायदे

- `isFilledArray` के जरिए भरल array के जरूरत रख के non-arrays आ खाली arrays खातिर `false` लौटावेला।
- ई पक्का करेला कि हर element `undefined` बा, खाली कुछ ना, एहसे मकसद साफ हो जाला।
- अनजान input collections के validate करत घरी guard-style predicate के रूप में काम के बा।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areUndefined(array)`

पैरामीटर:

- `array`: `undefined` elements खातिर जांचे वाला array।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // सही
const r2 = areUndefined(b); // गलत
const r3 = areUndefined(c); // गलत

// नोट: खाली array खातिर false लौटावेला
const r4 = areUndefined([]); // गलत

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areUndefined(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>ई फाइल 30 January 2026 at 13:54:54 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>