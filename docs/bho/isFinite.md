# isFinite

## विवरण

देल गइल `value` फाइनाइट `number` बा कि ना, ई तय करेला।

### उपयोग

संख्या संबंधी गणना करे से पहिले अनजान इनपुट (जइसे JSON, फॉर्म, भा API से) के वैलिडेट करे खातिर `isFinite` के इस्तेमाल
करीं, ताकि मान असली, फाइनाइट नंबर होखे।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `isFinite` खाली फाइनाइट नंबर खातिर `true` लौटावेला; `NaN`, `Infinity`, आ कवनो गैर-नंबर मान खातिर `false` लौटावेला।

### फायदे

- भरोसेमंद फाइनाइटनेस जाँच खातिर बिल्ट-इन `Number.isFinite` के इस्तेमाल करेला।
- खाली फाइनाइट नंबर खातिर `true` लौटावेला; `NaN`, `Infinity`, आ गैर-नंबर इनपुट खातिर `false` लौटावेला।
- साधारण, साइड-इफेक्ट-फ्री प्रेडिकेट जे वैलिडेशन आ गार्डिंग लॉजिक खातिर उपयुक्त बा।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isFinite(value)`

पैरामीटर:

- `value`: फाइनाइटनेस जाँच करे खातिर मान।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers बा: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // इहाँ value एगो सीमित संख्या बा
  const doubled = value * 2;
  console.log(doubled);
}
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isFinite(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>ई फाइल 30 January 2026 at 16:29:01 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>