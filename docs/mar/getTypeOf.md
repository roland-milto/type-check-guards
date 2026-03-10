# getTypeOf

## वर्णन

`getTypeOf` दिलेल्या मूल्यासाठी तपशीलवार, मानव-वाचनीय प्रकार-लेबल परत करते, ज्यात परिष्कृत संख्यात्मक प्रकार आणि विशिष्ट
ऑब्जेक्ट प्रकार समाविष्ट असतात.

### वापर प्रकरण

इनपुट वैधता तपासणी आणि निदान (diagnostics) मध्ये प्रकार-ओळख सामान्यीकृत करण्यासाठी `getTypeOf` वापरा—उदा., `nan`
नाकारणे, फक्त `integer` IDs स्वीकारणे, `decimal` सारख्या संख्यात्मक स्ट्रिंगना साध्या `string` पेक्षा वेगळे हाताळणे,
किंवा `date` आणि `regexp` सारखे अचूक ऑब्जेक्ट प्रकार लॉग करणे.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> परत येणारा प्रकार `DataTypeAsString | string` आहे. याला वर्णनात्मक लेबल म्हणून हाताळा; शाखा (branching) करताना
`integer`, `float`, `nan`, `array`, `null`, आणि `undefined` सारख्या ज्ञात लिटरल्सशी तुलना करा.

### फायदे

- JavaScript च्या `typeof` पेक्षा अधिक सूक्ष्म प्रकार-स्ट्रिंग परत करते, ज्यात `integer`, `float`, आणि `nan` सारखे
  संख्यात्मक उपप्रकार समाविष्ट असतात.
- `null` आणि `undefined` यांना स्पष्टपणे `null` आणि `undefined` म्हणून वेगळे ओळखते.
- सामान्य संख्यात्मक स्ट्रिंग स्वरूपे ओळखते आणि त्यांना साध्या `string` ऐवजी `binary`, `octal`, `decimal`, किंवा
  `hexadecimal` म्हणून दर्शवते.
- अ‍ॅरेना `array` म्हणूनही ओळखते आणि विशिष्ट ऑब्जेक्ट प्रकार-नावे (उदा., `date`, `regexp`, `map`, `set`) देण्यासाठी
  `Object.prototype.toString` वापरते.
- सुसंगत, मानव-वाचनीय प्रकार-लेबले आवश्यक असतील तेव्हा वैधता तपासणी, लॉगिंग, आणि डीबगिंगसाठी हे खूप उपयुक्त आहे.

## वापर

### सिंटॅक्स

फंक्शन:

- `getTypeOf(value)`

पॅरामीटर्स:

- `value`: ज्या मूल्यासाठी डेटा प्रकार ठरवायचा आहे ते मूल्य.

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

// उदाहरण तपासण्या
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.getTypeOf(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>ही फाइल 6 February 2026 at 13:13:19 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>