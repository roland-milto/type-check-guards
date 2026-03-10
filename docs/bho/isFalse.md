# isFalse

## विवरण

`isFalse` जाँचेला कि दिहल मान बूलियन लिटरल `false` के सख्ती से बराबर बा कि ना।

### उपयोग

अनजान डेटा (जइसे JSON, क्वेरी पैराम्स, भा यूजर इनपुट से) के वैलिडेट करीं जहाँ खाली साफ-साफ बूलियन मान `false` के वैध
फ्लैग मानल जाव, आ बाकी सभे के रिजेक्ट कइल जाव।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `isFalse` तब इस्तेमाल करीं जब रउआ के खाली लिटरल `false` ही स्वीकार करे के हो आ बाकी सभे फॉल्सी मान के ठुकरावे के हो; ई
`true` खाली `value === false` खातिर लौटावेला।

### फायदे

- बिना कोएर्सन के बूलियन लिटरल `false` खातिर सख्त जाँच देला।
- `false` के अउरी फॉल्सी मान जइसे `0`, `""`, `null`, आ `undefined` से अलग पहिचाने में मदद करेला।
- अनजान इनपुट के वैलिडेट करत घरी इरादा साफ करके पठनीयता बढ़ावेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isFalse(value)`

पैरामीटर:

- `value`: जवन मान के जाँचल जाई।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // इहाँ input ठीक-ठीक false बा
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isFalse(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>ई फाइल 31 January 2026 at 16:20:58 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>