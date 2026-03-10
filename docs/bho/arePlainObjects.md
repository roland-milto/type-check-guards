# arePlainObjects

## विवरण

जाँचेला कि ऐरे के सभे तत्व सादा ऑब्जेक्ट हउवें कि ना, आ `true` खाली तबे लौटावेला जब हर तत्व योग्य होखे।

### उपयोग

बाहरी भा बिना टाइप वाला डेटा (जइसे, पार्स कइल JSON, API पेलोड, फॉर्म सबमिशन) के वैलिडेट करीं ताकि इटरेट करे आ प्रॉपर्टी
पढ़े से पहिले ई पक्का हो जाव कि रउआ के एगो गैर-खाली ऐरे मिलल बा जवना में हर एंट्री सादा ऑब्जेक्ट बा।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> TypeScript में `arePlainObjects` के इस्तेमाल करीं ताकि अनजान इनपुट के वैलिडेट क के बादे ओकरा के
`Record<string, unknown>[]` (भा अउरी कड़ाई वाला ऑब्जेक्ट शेप) जइसन ट्रीट कइल जा सके।

### फायदे

- इनपुट ऐरे में हर तत्व के सादा ऑब्जेक्ट होखे के पक्का करेला, आ `true` खाली तबे लौटावेला जब सभे आइटम मेल खाएलें।
- गलत इनपुट (ऐरे ना होखे भा खाली ऐरे) के जल्दी से ठुकरा देला आ `false` लौटावेला।
- ऑब्जेक्ट-लिटरल ऑब्जेक्ट आ `Object.create(null)` से बनल ऑब्जेक्ट—दूनो के वैध सादा ऑब्जेक्ट मानेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `arePlainObjects(array)`

पैरामीटर:

- `array`: सादा ऑब्जेक्ट तत्व खातिर जाँचल जाए वाला ऐरे।

### लोकल फंक्शन इम्पोर्ट

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // सही
const b = arePlainObjects([{}, Object.create(null)]); // सही
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // गलत
const d = arePlainObjects([] as unknown[]); // गलत
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.arePlainObjects(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>ई फाइल 30 January 2026 at 16:24:26 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>