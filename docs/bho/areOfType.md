# areOfType

## विवरण

जांचेला कि दिहल गइल `array` में सभे तत्व निर्दिष्ट `type` के बा कि ना।

### उपयोग

ऐरे के हर तत्व पर टाइप-विशिष्ट ऑपरेशन करे से पहिले अनजान इनपुट (जइसे, parsed JSON, API payloads, user input) के वैलिडेट
करे खातिर `areOfType` के इस्तेमाल करीं।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areOfType` टाइप गार्ड होखे के चलते, TypeScript `if (areOfType(...)) {}` ब्लॉक के भीतर ऐरे के `Array<DataTypeOf<T>>`
> में संकुचित कर देला।

### फायदे

- TypeScript टाइप गार्ड देला: जब ई `true` लौटावेला, त इनपुट `Array<DataTypeOf<T>>` में संकुचित हो जाला।
- मांगल गइल रनटाइम टाइप के खिलाफ हर तत्व के सत्यापित करेला, आ मिलल-जुलल टाइप वाला ऐरे के पास होखे से रोक देला।
- जल्दी फेल हो जाला: जइसे ही कवनो ना-मिलत तत्व मिलेला, `false` लौटा देला।
- डिज़ाइन से non-arrays आ खाली ऐरे के अस्वीकार करेला (ई `isFilledArray` पर निर्भर बा)।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areOfType(array, type)`

पैरामीटर:

- `array`: जवन ऐरे के जांचल जाई।
- `type`: उ टाइप जवना के खिलाफ ऐरे के हर तत्व के जांचल जाई।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // ab values ab number[] baa
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areOfType(array, type)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>ई फाइल 30 January 2026 at 17:08:42 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>