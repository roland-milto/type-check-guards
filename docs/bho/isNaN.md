# isNaN

## विवरण

स्ट्रिंग के बदले बिना, दिहल गइल `value` `number` टाइप के `NaN` ह कि ना ई तय करेला।

### उपयोग

अविश्वसनीय भा ढीला टाइप वाला इनपुट (जइसे API payloads, form values, parsed JSON) के वैधता जांचीं ताकि खास `NaN` मान के
पहचान के साफ-साफ संभालल जा सके, आ गैर-नंबर इनपुट के `NaN` ना मानल जाव।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> जब रउआ के खास संख्यात्मक मान `NaN` के पहचानल जरूरी होखे आ साथे ई पक्का करे के होखे कि इनपुट सचमुच `number` बा (
> स्ट्रिंग-से-नंबर रूपांतरण ना होखे), तब `isNaN` के इस्तेमाल करीं।

### फायदे

- बिना गैर-नंबर (जइसे कि स्ट्रिंग) के नंबर में जबरन बदले, ई जांचेला कि कउनो मान `NaN` ह कि ना।
- `true` खाली ओही मान खातिर लौटावेला जे `number` टाइप के भी होखे आ `NaN` भी होखे।
- `unknown` इनपुट खातिर सुरक्षित बा आ अप्रत्यक्ष रूपांतरण से होखे वाला गलत सकारात्मक नतीजा से बचे ला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isNaN(value)`

पैरामीटर:

- `value`: जवन मान के जांचल जाई कि ऊ `number` टाइप के `NaN` ह कि ना।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // सही
console.log(isNaN(b)); // गलत
console.log(isNaN(c)); // गलत

if (isNaN(a)) {
  // a एगो संख्या हवे आ खास तौर पर NaN हवे
}
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isNaN(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>ई फाइल 30 January 2026 at 15:45:13 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>