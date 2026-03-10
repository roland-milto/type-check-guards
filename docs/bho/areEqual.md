# areEqual

## विवरण

`areEqual` जांचेला कि ऐरे के सभे तत्व दिहल अपेक्षित मान के बराबर बा कि ना, आ खाली ओही गैर-खाली ऐरे खातिर `true` लौटावेला
जहाँ हर आइटम मेल खाए।

### उपयोग

ई सत्यापित करीं कि एगो लिस्ट में खाली एके गो अनुमति वाला मान बा (जइसे, सभे status flags `true` बा, सभे roles `"admin"`
बा, भा सभे संख्यात्मक entries कवनो जरूरी constant के बराबर बा) आ खाली इनपुट के अमान्य (`false`) मान के।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> जब रउआँ के सख्त all-items चेक चाहीं, तब `areEqual` इस्तेमाल करीं; ई खाली ऐरे खातिर आ कवनो गैर-ऐरे भा गैर-भरल इनपुट
> खातिर `false` लौटावेला।

### फायदे

- `true` खाली तबहीं लौटावेला जब हर तत्व अपेक्षित मान से मेल खाए; नाहीं त `false` लौटावेला।
- जल्दी फेल हो जाला: जइसे ही कवनो ना-मेल खाए वाला तत्व मिलेला, जांच रोक देला।
- अमान्य इनपुट से बचाव करेला: जब इनपुट भरल (filled) ऐरे ना होखे त `false` लौटावेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areEqual(value, expected)`

पैरामीटर:

- `value`: जवन ऐरे के जांचल जाई।
- `expected`: हर ऐरे आइटम से तुलना करे खातिर तत्व।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areEqual(value, expected)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>ई फाइल 31 January 2026 at 23:49:48 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>