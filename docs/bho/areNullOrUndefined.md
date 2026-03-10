# areNullOrUndefined

## विवरण

जाँचेला कि दिहल array में सभे तत्व `null` भा `undefined` बा कि ना।

### उपयोग

ई validate करीं कि optional fields के सूची में कवनो असली मान नइखे (खाली `null`/`undefined`)—एहसे तय कइल जा सके कि
processing छोड़ल जाव भा “कवनो मान ना दिहल गइल” वाला state देखावल जाव।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areNullOrUndefined` तब इस्तेमाल करीं जब रउआ के पक्का करे के होखे कि array में खाली गायब मान (`null`/`undefined`) ही
> बा। ध्यान दीं कि ई खाली array खातिर `false` लौटावेला।

### फायदे

- `true` खाली तबे लौटावेला जब हर तत्व `null` भा `undefined` होखे।
- खाली array खातिर `false` लौटावेला, जेकरा से “डेटा नइखे” आ “सभे मान गायब बा” में फरक कइल आसान हो जाला।
- `unknown[]` के साथ काम करेला, एहसे type narrow करे से पहिले इस्तेमाल कइल सुरक्षित बा।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areNullOrUndefined(array)`

पैरामीटर:

- `array`: जाँच करे खातिर array।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areNullOrUndefined(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>ई फाइल 31 January 2026 at 00:29:07 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>