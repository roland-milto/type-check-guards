# getTypeOf

## विवरण

`getTypeOf` दिहल मान खातिर बिस्तृत, आदमी-पढ़े लायक टाइप लेबल लौटावेला, जवना में परिष्कृत संख्यात्मक टाइप आ खास ऑब्जेक्ट
किसिम भी शामिल बा।

### उपयोग

इनपुट वैलिडेशन आ डायग्नोस्टिक्स में टाइप डिटेक्शन के एकरूप बनावे खातिर `getTypeOf` के इस्तेमाल करीं—जइसे, `nan` के
रिजेक्ट करे, खाली `integer` ID स्वीकार करे, `decimal` जइसन संख्यात्मक स्ट्रिंग के साधारण `string` से अलग ट्रीट करे, भा
`date` आ `regexp` जइसन सटीक ऑब्जेक्ट किसिम के लॉग करे खातिर।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> रिटर्न टाइप `DataTypeAsString | string` बा। एकरा के वर्णनात्मक लेबल मान के चलीं; ब्रांचिंग करत घरी `integer`, `float`,
`nan`, `array`, `null`, आ `undefined` जइसन जानल-पहचानल लिटरल से तुलना करीं।

### फायदे

- JavaScript के `typeof` से जादे बारीकी वाला टाइप स्ट्रिंग लौटावेला, जवना में `integer`, `float`, आ `nan` जइसन
  संख्यात्मक उप-टाइप भी शामिल बा।
- `null` आ `undefined` के साफ-साफ `null` आ `undefined` के रूप में अलग करेला।
- आम संख्यात्मक स्ट्रिंग फॉर्मेट के पहचान के `string` के बजाय `binary`, `octal`, `decimal`, भा `hexadecimal` के रूप में
  रिपोर्ट करेला।
- एरे के `array` के रूप में पहचानेला आ `Object.prototype.toString` के इस्तेमाल से खास ऑब्जेक्ट टाइप नाम देला (जइसे,
  `date`, `regexp`, `map`, `set`)।
- वैलिडेशन, लॉगिंग, आ डिबगिंग खातिर उपयोगी बा, जहाँ एकरूप, आदमी-पढ़े लायक टाइप लेबल के जरूरत होखे।

## उपयोग

### सिंटैक्स

फंक्शन:

- `getTypeOf(value)`

पैरामीटर:

- `value`: ओ मान, जवना खातिर डेटा टाइप तय करे के बा।

### लोकल फंक्शन इम्पोर्ट

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// उदाहरण जाँच
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.getTypeOf(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>ई फाइल 6 February 2026 at 13:05:15 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>