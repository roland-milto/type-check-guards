# isPrimitive

## विवरण

`isPrimitive` तय करेला कि दिहल मान primitive ह कि ना (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`)।

### उपयोग

runtime पर इनपुट validate करीं (जइसे, API payload fields, configuration values, भा user-provided data) ताकि serialize,
log, भा primitive-only ऑपरेशन लगावे से पहिले पक्का हो जाव कि मान primitive ह।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `unknown` इनपुट के object भा function जइसन मानेला से पहिले guard करे खातिर `isPrimitive` के इस्तेमाल करीं; ई
> primitives खातिर `true` आ objects आ functions खातिर `false` लौटावेला।

### फायदे

- कवनो मान JavaScript primitive ह कि ना, एकर तेज, allocation-free जाँच।
- `null` के सही ढंग से primitive मानेला (हालाँकि `typeof null` `"object"` होला)।
- object-only ऑपरेशन करे से पहिले `unknown` मान के narrow करे में मदद करेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isPrimitive(value)`

पैरामीटर:

- `value`: primitive टाइप खातिर जाँच करे वाला मान।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isPrimitive(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>ई फाइल 30 January 2026 at 23:55:31 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>