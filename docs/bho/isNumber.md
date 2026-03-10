# isNumber

## विवरण

`isNumber` जाँचेला कि कउनो मान सीमित (finite), non-`NaN` नंबर बा कि ना।

### उपयोग

अविश्वसनीय स्रोत (फॉर्म, क्वेरी पैराम्स, JSON पेलोड) से आवे वाला संख्यात्मक इनपुट के गणना, स्टोरेज, भा रेंज चेक से पहिले
वैलिडेट करीं, ताकि खाली finite नंबर `true` के रूप में पास होखे आ बाकी सभ `false` लौटावे।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `unknown` मान पर arithmetic करे से पहिले `isNumber` से वैलिडेट करीं; ई `NaN`, `Infinity`, आ `-Infinity` के रिजेक्ट
> करेला।

### फायदे

- `true` खाली असली JavaScript नंबर खातिर लौटावेला (टाइप चेक के साथे `NaN` आ इनफिनिटी के रिजेक्ट करेला)।
- आम वैलिडेशन बग से बचावेला जहाँ `NaN`, `Infinity`, भा `-Infinity` गलती से नंबर मान के पास हो जाला।
- अनजान इनपुट (जइसे JSON, यूजर इनपुट, बाहरी API) खातिर रनटाइम गार्ड के रूप में बढ़िया काम करेला।
- सरल, तेज, आ साइड-इफेक्ट फ्री।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isNumber(value)`

पैरामीटर:

- `value`: जवन मान के जाँच करे के बा।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input ek valid finite number baa
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isNumber(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>ई फाइल 30 January 2026 at 13:08:11 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>