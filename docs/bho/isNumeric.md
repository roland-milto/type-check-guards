# isNumeric

## विवरण

`isNumeric` दिहल गइल `value` के `NUMERIC_TYPES` के खिलाफ ओकर resolved type जाँच के तय करेला कि ऊ संख्यात्मक मानल जाई कि
ना।

### उपयोग

संख्यात्मक ऑपरेशन करे से पहिले इनपुट (जइसे API payloads, form values, configuration) के validate करे खातिर `isNumeric`
के इस्तेमाल करीं, आ `NUMERIC_TYPES` के मुताबिक संख्यात्मक-जइसन टाइप (जइसे `BigInt`) के लगातार स्वीकार करे खातिर।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `isNumeric` बूलियन लौटावे वाला predicate बा; एकरा के runtime check के रूप में मानल जाव कि कवनो मान लाइब्रेरी-परिभाषित
> numeric type set में आवेला कि ना।

### फायदे

- `getTypeOf` आ `NUMERIC_TYPES` के इस्तेमाल से संख्यात्मक पहचान के तर्क के एके जगह केंद्रीकृत करेला आ पूरा कोडबेस में
  जाँच के एकसार रखेला।
- आसान ब्रांचिंग आ गार्ड-स्टाइल इस्तेमाल खातिर एकदम सादा बूलियन (`true`/`false`) लौटावेला।
- `NUMERIC_TYPES` में जइसन परिभाषित बा, ओह मुताबिक कई गो संख्यात्मक रूप (जइसे `number`, `BigInt`) के सपोर्ट करेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isNumeric(value)`

पैरामीटर:

- `value`: संख्यात्मक टाइप खातिर जाँच करे वाला मान।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // लाइब्रेरी के टाइप नियम अनुसार v के संख्यात्मक मानल जाला
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isNumeric(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>ई फाइल 6 February 2026 at 15:51:46 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>