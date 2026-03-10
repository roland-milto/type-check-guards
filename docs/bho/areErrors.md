# areErrors

## विवरण

जाँच करेला कि ऐरे खाली नइखे आ खाली `Error` ऑब्जेक्टे रखेला कि ना, आ `true` भा `false` लौटावेला।

### उपयोग

रनटाइम से मिलल `unknown[]` (जइसे एकट्ठा कइल विफलता, वैलिडेशन नतीजा, भा डीसिरियलाइज़ कइल डेटा) के सत्यापित करीं कि ऊ
`Error` ऑब्जेक्ट के गैर-खाली सूची हवे, तबे iterate, लॉग, भा rethrow करे से पहिले।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areErrors` `true` खाली ओही भरल ऐरे खातिर लौटावेला जवना में हर आइटम `Error` होखे; खाली ऐरे खातिर भा अगर कवनो तत्व
`Error` ना होखे त `false` लौटावेला।

### फायदे

- हर तत्व के `Error` इंस्टेंस होखे के सुनिश्चित करेला, जेकरा से सुरक्षित त्रुटि हैंडलिंग आ लॉगिंग संभव होखेला।
- खाली ऐरे के अस्वीकार करेला, जेकरा से गलती से “कोई त्रुटि नइखे” वाला स्थिति के वैध त्रुटि सूची मान लिहल जाए से बचाव
  होखेला।
- `unknown[]` इनपुट (जइसे API से भा `catch` ब्लॉक से) के साथ काम करत घरी रनटाइम गार्ड के रूप में बढ़िया काम करेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areErrors(array)`

पैरामीटर:

- `array`: `Error` ऑब्जेक्ट खातिर जाँच करे वाला ऐरे।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value Error ऑब्जेक्ट के गैर-खाली सरणी बा
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areErrors(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>ई फाइल 6 February 2026 at 12:32:49 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>