# isDate

## विवरण

`isDate` तय करेला कि दिहल गइल मान `Date` बा कि ना; `Date` इंस्टेंस खातिर `true` आ बाकी सब खातिर `false` लौटावेला।

### उपयोग

अनजान मान (जइसे request data, config values, या parsed JSON) के वैलिडेट आ नैरो करीं, ताकि formatting, comparisons, या
`toISOString()` कॉल करे जइसन `Date` ऑपरेशन करे से पहिले पक्का हो सके।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `isDate` के इस्तेमाल क के रनटाइम पर `unknown` के `Date` में नैरो करीं; ई खाली असली `Date` इंस्टेंस खातिर `true`
> लौटावेला (डेट स्ट्रिंग खातिर ना)।

### फायदे

- कवनो मान `Date` बा कि ना, ई जाँच करे खातिर एगो सरल रनटाइम गार्ड देला।
- सिर्फ `Date` इंस्टेंस के वैलिडेशन पास होखे के पक्का क के टाइप एरर से बचावे में मदद करेला।
- डेट-विशेष मेथड इस्तेमाल करे से पहिले अनजान इनपुट (जइसे API payloads) के वैलिडेट करे में काम आवेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isDate(value)`

पैरामीटर:

- `value`: `Date` टाइप खातिर जाँचल जाए वाला मान।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input इहाँ Date बा
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isDate(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isDate](../_analysis/isDate.md)

<br>

---

<small>ई फाइल 31 January 2026 at 15:36:36 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>