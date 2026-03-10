# isFloat

## वर्णन

`isFloat` दिलेले `value` हे मर्यादित फ्लोटिंग-पॉइंट संख्या आहे का (म्हणजे पूर्णांक नसलेली `number`) हे ठरवते.

### वापर प्रकरण

जिथे अपूर्णांक मूल्ये आवश्यक आहेत (उदा., किंमती, मोजमाप, दर) अशा ठिकाणी वापरकर्त्याने दिलेल्या संख्यात्मक इनपुटचे
प्रमाणीकरण करा आणि पूर्णांक, `NaN`, व अनंत (infinities) नाकारा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> जेव्हा तुम्हाला फक्त मर्यादित, पूर्णांक नसलेली संख्यात्मक इनपुट्स स्वीकारायची असतील तेव्हा `isFloat` वापरा; ते
> पूर्णांक आणि अमर्यादित (non-finite) संख्या नाकारते.

### फायदे

- फक्त मर्यादित, पूर्णांक नसलेल्या संख्यांसाठीच `true` परत करते (पूर्णांक, `NaN`, `Infinity`, आणि `-Infinity` वगळते).
- कोणत्याही इनपुट प्रकारासोबत (`unknown`) कार्य करते आणि `typeof value === "number"` तपासून सुरक्षितपणे प्रकार संकुचित
  करते.
- अंदाज करता येईल अशा वर्तनासाठी अंगभूत संख्यात्मक गार्ड्स (`Number.isInteger`, `Number.isFinite`) वापरते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isFloat(value)`

पॅरामीटर्स:

- `value`: मूल्य फ्लोटिंग-पॉइंट संख्या आहे का हे तपासण्यासाठीचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // मूल्य रनटाइमला संख्या आहे; ते सीमित आहे आणि पूर्णांक नाही
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isFloat(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>ही फाइल 30 January 2026 at 16:08:44 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>