# isValidDate

## विवरण

`isValidDate` जाँचेला कि दिहल मान वैध `Date` object बा कि ना आ खाली असली, अमान्य ना होखे वाला तारीख खातिर `true`
लौटावेला।

### उपयोग

यूजर input भा API data के सत्यापित करीं जेह में तारीख हो सकेला, ताकि तारीख के गणना, formatting, भा तुलना करे से पहिले
मान असली `Date` instance होखे आ अमान्य तारीख ना होखे।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `unknown` टाइप वाला मान पर `Date` methods (जइसे, `toISOString`, `getTime`) कॉल करे से पहिले `isValidDate` के इस्तेमाल
> करीं, ताकि ई सुनिश्चित हो सके कि ऊ वैध `Date` object बा।

### फायदे

- ई सुनिश्चित करेला कि मान `Date` के instance बा आ खाली तारीख-जइसन string भा number ना बा।
- `NaN` time value के जाँच करके अमान्य तारीख (जइसे, `new Date("invalid")`) के अस्वीकार करेला।
- सरल boolean guard जे conditionals आ validation pipelines में इस्तेमाल करे में आसान बा।
- पहिले input के सत्यापित करके date methods कॉल करत घरी runtime errors से बचावे में मदद करेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isValidDate(value)`

पैरामीटर:

- `value`: जवन मान के जाँचल जाई।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input ek valid Date instance baa
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isValidDate(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>ई फाइल 30 January 2026 at 16:38:59 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>