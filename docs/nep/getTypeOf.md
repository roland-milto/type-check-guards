# getTypeOf

## विवरण

`getTypeOf` ले दिइएको मानका लागि विस्तृत, मानिसले पढ्न सक्ने प्रकार लेबल फर्काउँछ, जसमा परिष्कृत संख्यात्मक प्रकारहरू र
विशिष्ट object किसिमहरू पनि समावेश हुन्छन्।

### प्रयोगको केस

इनपुट validation र diagnostics मा प्रकार पहिचानलाई सामान्यीकरण गर्न `getTypeOf` प्रयोग गर्नुहोस्—उदाहरणका लागि, `nan`
अस्वीकार गर्न, केवल `integer` IDs स्वीकार गर्न, `decimal` जस्ता संख्यात्मक स्ट्रिङहरूलाई साधारण `string` भन्दा फरक रूपमा
व्यवहार गर्न, वा `date` र `regexp` जस्ता ठ्याक्कै object किसिमहरू लग गर्न।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> फर्काइने प्रकार `DataTypeAsString | string` हो। यसलाई वर्णनात्मक लेबलका रूपमा व्यवहार गर्नुहोस्; branching गर्दा
`integer`, `float`, `nan`, `array`, `null`, र `undefined` जस्ता परिचित literals सँग तुलना गर्नुहोस्।

### फाइदाहरू

- JavaScript को `typeof` भन्दा अझ सूक्ष्म प्रकार स्ट्रिङ फर्काउँछ, जसमा `integer`, `float`, र `nan` जस्ता संख्यात्मक
  उपप्रकारहरू पनि समावेश हुन्छन्।
- `null` र `undefined` लाई स्पष्ट रूपमा `null` र `undefined` भनेर छुट्याउँछ।
- यसले सामान्य संख्यात्मक स्ट्रिङ ढाँचाहरू पत्ता लगाएर तिनलाई साधारण `string` को सट्टा `binary`, `octal`, `decimal`, वा
  `hexadecimal` भनेर रिपोर्ट गर्छ।
- यसले array लाई `array` भनेर पनि चिनाउँछ र `Object.prototype.toString` प्रयोग गरेर विशिष्ट object प्रकार नामहरू (जस्तै
  `date`, `regexp`, `map`, `set`) प्रदान गर्छ।
- सुसंगत, मानिसले सजिलै पढ्न सक्ने प्रकार लेबलहरू आवश्यक पर्ने validation, logging, र debugging का लागि यो धेरै उपयोगी
  हुन्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `getTypeOf(value)`

प्यारामिटरहरू:

- `value`: जसको डेटा प्रकार निर्धारण गर्नुपर्ने मान।

### स्थानीय फङ्सन आयात

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

// उदाहरण जाँचहरू
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.getTypeOf(value)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>यो फाइल 6 February 2026 at 13:13:30 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>