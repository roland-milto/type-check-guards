# isNumber

## वर्णन

`isNumber` एखादे मूल्य finite, non-`NaN` संख्या आहे का ते तपासते.

### वापर प्रकरण

गणना, साठवण, किंवा range checks करण्यापूर्वी अविश्वसनीय स्रोतांमधून (forms, query params, JSON payloads) आलेला
संख्यात्मक इनपुट validate करा, जेणेकरून फक्त finite संख्या पास (`true`) होतील आणि बाकी सर्वांसाठी `false` परत येईल.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> अंकगणित करण्यापूर्वी `unknown` मूल्ये validate करण्यासाठी `isNumber` वापरा; ते `NaN`, `Infinity`, आणि `-Infinity`
> नाकारते.

### फायदे

- `true` फक्त खऱ्या JavaScript संख्यांसाठी परत करते (type check तसेच `NaN` आणि infinity नाकारणे).
- `NaN`, `Infinity`, किंवा `-Infinity` चुकून संख्यांसारखे पास होतात अशा सामान्य validation बग्स टाळते.
- अज्ञात इनपुटसाठी (उदा., JSON, user input, external APIs) runtime guard म्हणून चांगले काम करते.
- सोपे, जलद, आणि side-effect free.

## वापर

### सिंटॅक्स

फंक्शन:

- `isNumber(value)`

पॅरामीटर्स:

- `value`: तपासण्यासाठीचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // इनपुट हा वैध मर्यादित संख्या आहे
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isNumber(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>ही फाइल 30 January 2026 at 13:09:58 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>