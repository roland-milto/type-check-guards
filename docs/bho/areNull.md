# areNull

## विवरण

दिहल गइल `array` में सभे तत्व `null` बा कि ना, ई जांचेला।

### उपयोग

डेटासेट कॉलम, API फील्ड लिस्ट, भा प्लेसहोल्डर एरे में खाली `null` वैल्यू बा कि ना, ई पक्का करीं—ओहसे पहिले कि अइसन लॉजिक
लगावल जाव जे मानेला कि सभे एंट्री जानबूझ के खाली बा।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> जब रउआ के कड़ाई से जांचे के होखे कि इनपुट एगो नॉन-एम्प्टी एरे बा आ हर तत्व ठीक-ठीक `null` बा (`undefined` ना, ना त
> फाल्सी वैल्यू), तब `areNull` के इस्तेमाल करीं।

### फायदे

- `true` खाली तबे लौटावेला जब हर तत्व `null` होखे, एहसे ई कड़ाई वाला “सब मिलल” गार्ड बन जाला।
- नॉन-एरे आ खाली एरे के `false` लौटाके खारिज कर देला, जे गलत इनपुट पर गलती से truthy नतीजा आवे से बचावेला।
- डेटा प्रोसेस करे से पहिले प्रीकंडीशन चेक के रूप में बढ़िया काम करेला, जब डेटा पूरा के पूरा `null` होखे के चाहीं।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areNull(array)`

पैरामीटर:

- `array`: `null` तत्व खातिर जांचे वाला इनपुट एरे।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // सही
const allNullB = areNull(b); // गलत

const notAnArray = areNull(123 as unknown as unknown[]); // गलत
const empty = areNull([]); // गलत

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areNull(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areNull](../_analysis/areNull.md)

<br>

---

<small>ई फाइल 31 January 2026 at 15:42:31 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>