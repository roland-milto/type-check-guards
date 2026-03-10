# areObjects

## विवरण

`areObjects` जाँचेला कि दिहल भरल array में खाली objects ही बा कि ना।

### उपयोग

`areObjects` के इस्तेमाल तब करीं जब रउआँ के कवनो अनजान array मिले (जइसे JSON parsing भा external APIs से) आ रउआँ के
पक्का करे के होखे कि ई खाली ना होखे आ हर element एगो object होखे, iterate करे आ object properties access करे से पहिले।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areObjects` के इस्तेमाल `unknown[]` के validate करे खातिर करीं, items के objects मान के काम करे से पहिले; ई खाली
> arrays खातिर `false` लौटावेला।

### फायदे

- `true` खाली तबहीं लौटावेला जब इनपुट भरल array होखे आ हर element एगो object होखे।
- जइसे ही कवनो non-object element मिलेला, जल्दी रुक के `false` लौटा देला।
- Object-विशेष operations करे से पहिले अनजान input के validate करे में मदद करेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areObjects(array)`

पैरामीटर:

- `array`: Object elements खातिर जाँचल जाए वाला array।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value bharal object ke array baa
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areObjects(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>ई फाइल 31 January 2026 at 00:08:01 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>