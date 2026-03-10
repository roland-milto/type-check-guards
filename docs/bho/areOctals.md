# areOctals

## विवरण

`areOctals` तय करेला कि दिहल मान वैध octal string के एगो गैर-खाली array हवे कि ना।

### उपयोग

User input, configuration values, भा API payloads के validate करे में `areOctals` के उपयोग करीं, जहाँ octal literals (
जइसे file permission modes `0o755`) जरूरी होखे, आ रउआ चाहत होखीं कि खाली array भा कउनो भी अवैध entry मिलते ही `false`
लौटा के reject कइल जाव।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areOctals` के उपयोग करीं ताकि convert करे से पहिले (जइसे `Number(...)` भा custom parsing से) रउआ लगे एगो गैर-खाली
`unknown[]` होखे आ हर entry एगो वैध octal string होखे।

### फायदे

- ई जाँचेला कि कउनो मान एगो गैर-खाली array हवे जेकर हर element एगो octal string हवे, आ `true` खाली तबे लौटावेला जब सभे
  item पास हो जाला।
- जल्दी फेल हो जाला: जइसे ही कउनो गैर-octal element मिलेला, `false` लौटा देला।
- Parse करे भा octal string के convert करे से पहिले guard के रूप में उपयोगी बा, ताकि runtime error आ input handling में
  असंगति से बचल जा सके।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areOctals(array)`

पैरामीटर:

- `array`: जाँचल जाए वाला मान।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value octal string ke non-empty array baa
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areOctals(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>ई फाइल 30 January 2026 at 14:44:02 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>