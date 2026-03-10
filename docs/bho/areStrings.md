# areStrings

## विवरण

`areStrings` जाँचेला कि ऐरे गैर-खाली बा आ ओकर सभे तत्व स्ट्रिंग बा कि ना, आ खाली ओही हालत में `true` लौटावेला।

### उपयोग

बाहरी भा यूजर-देहल डेटा (जइसे query params, JSON payloads, CSV fields) के वैलिडेट करीं ताकि प्रोसेस करे से पहिले पक्का
हो जाव कि रउआ लगे स्ट्रिंग के गैर-खाली सूची बा।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> अनजान ऐरे पर स्ट्रिंग-खाली लॉजिक लगावे से पहिले `areStrings` से वैलिडेट करीं; ई खाली ऐरे खातिर `false` लौटावेला।

### फायदे

- हर तत्व के स्ट्रिंग होखे के पक्का करेला आ मिलल-जुलल टाइप वाला ऐरे के `false` लौटाके खारिज करेला।
- खाली ऐरे के खारिज करेला, एहसे `true` के मतलब खाली एतने बा कि ई स्ट्रिंग के गैर-खाली सूची बा।
- स्ट्रिंग-खाली ऑपरेशन (जइसे `trim`, `toLowerCase`) करे से पहिले जल्दी रनटाइम गार्ड के रूप में काम आवेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areStrings(value)`

पैरामीटर:

- `value`: Expected type `string[]`.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input runtime पर non-empty string[] बा
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areStrings(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>ई फाइल 30 January 2026 at 13:17:19 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>