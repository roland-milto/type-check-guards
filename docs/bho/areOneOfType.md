# areOneOfType

## विवरण

`areOneOfType` जाँचेला कि non-empty array के सभे elements बतावल गइल runtime types में से कवनो एगो type के हउवें कि ना।

### उपयोग

आवत data (जइसे, parsed JSON) के validate करीं जहाँ एगो field non-empty array होखे के चाहीं आ ओकर items के known
primitive types के set तक सीमित होखे; `false` लौटाईं जब array खाली होखे भा कवनो item में disallowed type होखे।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> ई function boolean लौटावेला आ compile time पर array element types के narrow नइखे करत; आगे के processing से पहिले
> runtime validation step के रूप में एकरा के इस्तेमाल करीं।

### फायदे

- ई पक्का करेला कि एगो array में हर element कम से कम एगो मान्य runtime type से मेल खाए, आ `true` खाली तबे लौटावेला जब
  पूरा array पास हो जाला।
- गलत input के जल्दी ठुकरावेला: `false` लौटावेला जब `array` भा `types` खाली होखे भा भरल array ना होखे।
- मिश्रित-type collection (जइसे, number आ string) के validate करे में काम आवेला, `areOneOfType` के एके बेर call से।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areOneOfType(array, types)`

पैरामीटर:

- `array`: देल गइल types के खिलाफ verify करे खातिर elements के एगो array।
- `types`: जाँच करे खातिर data types के represent करे वाला strings के एगो array।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areOneOfType(array, types)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>ई फाइल 31 January 2026 at 23:36:06 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>