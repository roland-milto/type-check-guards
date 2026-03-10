# isString

## विवरण

`isString` तय करेला कि दिहल गइल मान string ह कि ना।

### उपयोग

runtime पर user input, API payload fields, भा configuration values के validate करीं ताकि string operations (जइसे
trimming, splitting, case conversion) लगावे से पहिले पक्का हो सके कि मान string ह।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `isString` के इस्तेमाल `unknown` भा ढीला टाइप वाला मान के validate करे खातिर करीं, string methods कॉल करे से पहिले; ई
> खाली तबे `true` लौटावेला जब `typeof value === "string"` होखे।

### फायदे

- `typeof` के इस्तेमाल से सरल आ तेज जाँच।
- एक ठोस boolean नतीजा देला: string खातिर `true`, नाहीं त `false`।
- खाली आ गैर-खाली दुनो तरह के string खातिर काम करेला।
- string-विशेष ऑपरेशन करे से पहिले हल्का runtime guard के रूप में उपयोगी।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isString(value)`

पैरामीटर:

- `value`: string टाइप खातिर जाँचल जाए वाला मान।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // इहाँ input एगो string बा
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isString(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isString](../_analysis/isString.md)

<br>

---

<small>ई फाइल 30 January 2026 at 13:13:15 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>