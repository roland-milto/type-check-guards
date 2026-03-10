# isIndexFound

## विवरण

`isIndexFound` तय करेला कि दिहल मान गैर-नकारात्मक पूर्णांक बा कि ना, जेकर मतलब इंडेक्स मिलल बा।

### उपयोग

एह बात के सत्यापित करीं कि सर्च रिजल्ट इस्तेमाल लायक इंडेक्स (पूर्णांक `>= 0`) के प्रतिनिधित्व करेला, array भा string
में इंडेक्सिंग से पहिले, ताकि गलती से `-1` भा गैर-संख्यात्मक मान के इस्तेमाल ना होखे।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `indexOf`, `findIndex`, भा कस्टम सर्च जइसन ऑपरेशन के बाद `isIndexFound` के इस्तेमाल करीं, जहाँ `-1` (भा अउरी अमान्य
> मान) “not found” के संकेत दे सकेला। जब ई `true` लौटावेला, त मान संख्या होखेला आ array/string इंडेक्स के रूप में इस्तेमाल
> करे लायक सुरक्षित होखेला।

### फायदे

- गैर-नकारात्मक पूर्णांक खातिर जाँच के, ई पता लगावे खातिर एगो सरल टाइप गार्ड देला कि इंडेक्स मिलल बा कि ना।
- खाली वैध इंडेक्स-जइसन मान (पूर्णांक `>= 0`) परे `true` लौटावेला, नकारात्मक, गैर-पूर्णांक, आ गैर-संख्या मान के अस्वीकार
  करेला।
- ओह API सभ के साथ काम करत घरी off-by-one आ sentinel-value गलती से बचे में मदद करेला, जे “not found” खातिर `-1`
  लौटावेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isIndexFound(value)`

पैरामीटर:

- `value`: जाँच करे खातिर मान कि ई गैर-नकारात्मक पूर्णांक बा कि ना।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // इहाँ idx एगो संख्या ह आ 0 से बड़ भा बराबर बा
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// indexOf के साथ आम इस्तेमाल
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isIndexFound(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>ई फाइल 31 January 2026 at 00:45:00 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>