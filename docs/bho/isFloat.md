# isFloat

## विवरण

`isFloat` तय करेला कि दिहल गइल `value` सीमित फ्लोटिंग-पॉइंट संख्या बा कि ना (अइसन `number` जे पूर्णांक ना होखे)।

### उपयोग

यूजर दिहल संख्यात्मक इनपुट के वैलिडेट करीं जहाँ भिन्नात्मक मान जरूरी होखे (जइसे, दाम, माप, दर) आ पूर्णांक, `NaN`, आ
इनफिनिटी के अस्वीकार करीं।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> जब रउआ के खाली सीमित, गैर-पूर्णांक संख्यात्मक इनपुट स्वीकार करे के होखे तब `isFloat` के इस्तेमाल करीं; ई पूर्णांक आ
> गैर-सीमित संख्या के अस्वीकार करेला।

### फायदे

- खाली सीमित, गैर-पूर्णांक संख्या खातिर `true` लौटावेला (पूर्णांक, `NaN`, `Infinity`, आ `-Infinity` के बाहर करेला)।
- कवनो भी इनपुट प्रकार (`unknown`) के साथ काम करेला आ `typeof value === "number"` जाँच के जरिए सुरक्षित रूप से टाइप नैरो
  करेला।
- अनुमानित व्यवहार खातिर बिल्ट-इन संख्यात्मक गार्ड (`Number.isInteger`, `Number.isFinite`) के इस्तेमाल करेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isFloat(value)`

पैरामीटर:

- `value`: जाँचल जाए वाला मान कि ऊ फ्लोटिंग-पॉइंट संख्या बा कि ना।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // value रनटाइम पर एगो नंबर बा; ई सीमित बा आ पूरा संख्या नइखे
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isFloat(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>ई फाइल 30 January 2026 at 16:06:56 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>