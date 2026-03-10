# isNullOrUndefined

## विवरण

जाँचेला कि दिहल मान `null` भा `undefined` बा कि ना।

### उपयोग

जब रउआ के `null` आ `undefined` दुनो के “कोई मान नइखे” मान के चले के होखे, त `isNullOrUndefined` के इस्तेमाल करीं—जइसे
optional inputs validate करे में, API payloads normalize करे में, भा संभावित रूप से गायब मान के dereference करे से पहिले
code paths guard करे में।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `isNullOrUndefined` के इस्तेमाल missing values से बचे खातिर properties access करे भा methods call करे से पहिले guard
> के रूप में करीं; ई खाली `null` आ `undefined` खातिर `true` लौटावेला।

### फायदे

- एके जगह पर `null` आ `undefined` के पहचान करे खातिर साफ, दोबारा इस्तेमाल होखे वाला गार्ड देला।
- साधा boolean (`true`/`false`) लौटावेला जेकरा के condition आ validation में जोड़ल आसान बा।
- properties access करे या methods call करे से पहिले गायब मान के जाँच करके आम runtime errors से बचे में मदद करेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isNullOrUndefined(value)`

पैरामीटर:

- `value`: `null` भा `undefined` खातिर जाँचल जाए वाला मान।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // गायब मान के संभालीं
}

console.log(isNullOrUndefined(b)); // सही
console.log(isNullOrUndefined(c)); // गलत

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isNullOrUndefined(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>ई फाइल 31 January 2026 at 00:33:04 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>