# areFalse

## विवरण

`areFalse` जाँचेला कि दिहल गइल array में सभे तत्व सख्ती से boolean `false` हउवें कि ना।

### उपयोग

आगे बढ़े से पहिले ई validate करीं कि feature flags, checks, भा guard results के सूची सभे `false` बा (जइसे, पक्का करीं कि
कवनो blocking condition मौजूद ना बा)।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> जब रउआ के सख्त validation चाहीं कि array खाली ना होखे आ खाली boolean मान `false` ही रखे, तब `areFalse` के इस्तेमाल
> करीं।

### फायदे

- ई सुनिश्चित करेला कि हर तत्व सख्ती से `false` होखे (कोनो truthy/falsey coercion ना होखे)।
- `isFilledArray` के जरिए भरल array के जरूरत रख के non-array भा खाली array खातिर `false` लौटावेला।
- दक्षता खातिर पहिला गैर-`false` तत्व पर जल्दी रुक जाला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areFalse(array)`

पैरामीटर:

- `array`: जाँच करे खातिर array, जवना में कवनो भी प्रकार के तत्व हो सकेला।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // सही
const b = areFalse([false, true, false]);  // गलत
const c = areFalse([false, "false", false]); // गलत
const d = areFalse([]); // गलत

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areFalse(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>ई फाइल 31 January 2026 at 16:16:16 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>