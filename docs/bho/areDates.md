# areDates

## विवरण

`areDates` तय करेला कि दिहल गइल ऐरे भरल बा कि ना आ ओहमें खाली `Date` ऑब्जेक्टे बा कि ना; खाली तबे `true` लौटावेला जब सभे
तत्व वैध तारीख होखें।

### उपयोग

अज्ञात इनपुट (जइसे पार्स कइल JSON, फॉर्म डेटा, API पेलोड) के मान्य करे खातिर `areDates` के इस्तेमाल करीं, ताकि समय के
आधार पर सॉर्ट करे, फॉर्मेट करे, भा रेंज निकाले जइसन तारीख-विशेष लॉजिक चलावे से पहिले पक्का हो जाव।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> खाली गैर-खाली ऐरे खातिर `true` लौटावेला जहाँ हर तत्व `Date` होखे; खाली ऐरे पर `false` मिलेला।

### फायदे

- एह सुनिश्चित करेला कि सामग्री के मान्य करे से पहिले एगो ऐरे खाली ना होखे, आ खाली इनपुट पर `true` आवे से बचावेला।
- हर तत्व के `Date` इंस्टेंस होखे के जाँच करेला, आ पहिला बेमेल मिलते ही तुरंते `false` लौटा देला।
- ऐरे के आइटम पर तारीख-विशेष ऑपरेशन करे से पहिले गार्ड-स्टाइल जाँच के रूप में उपयोगी बा।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areDates(array)`

पैरामीटर:

- `array`: `Date` ऑब्जेक्ट खातिर जाँचल जाए वाला ऐरे।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // सही
console.log(areDates(b)); // गलत
console.log(areDates(c)); // गलत

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areDates(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areDates](../_analysis/areDates.md)

<br>

---

<small>ई फाइल 31 January 2026 at 15:29:33 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>