# isError

## विवरण

जाँचेला कि दिहल गइल `value` `Error` के instance बा कि ना।

### उपयोग

`isError` के तब इस्तेमाल करीं जब रउआँ के लगे `unknown` मान आवे (जइसे `catch` block, callback, भा कवनो बाहरी library से)
आ रउआँ के `message`, `name`, भा `stack` पढ़े से पहिले सुरक्षित तरीका से तय करे के होखे कि ई `Error` बा कि ना।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `unknown` मान (जइसे `catch` से) के `Error` मान के पहिले `isError` से guard करीं।

### फायदे

- कवनो मान `Error` के instance बा कि ना, एकर सरल runtime जाँच देला।
- `message` भा `stack` जइसन `Error` के properties access करे से पहिले unknown input के narrow करे में मदद करेला।
- `catch`, बाहरी API, भा untyped source से आइल मान सभ के handle करत घरी runtime exception के जोखिम घटावेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isError(value)`

पैरामीटर:

- `value`: `Error` टाइप के खिलाफ जाँच करे खातिर मान।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isError(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isError](../_analysis/isError.md)

<br>

---

<small>ई फाइल 6 February 2026 at 12:44:44 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>