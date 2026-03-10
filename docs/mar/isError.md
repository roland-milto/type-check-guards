# isError

## वर्णन

दिलेल्या `value` हे `Error` चे instance आहे की नाही ते तपासते.

### वापर प्रकरण

जेव्हा तुम्हाला `unknown` मूल्य (उदा., `catch` ब्लॉक, callback, किंवा बाह्य library मधून) मिळते आणि `message`, `name`,
किंवा `stack` वाचण्यापूर्वी ते `Error` आहे की नाही हे सुरक्षितपणे ठरवणे आवश्यक असते, तेव्हा `isError` वापरा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `unknown` मूल्यांना (उदा., `catch` मधून) `Error` म्हणून हाताळण्यापूर्वी त्यांचे संरक्षण (guard) करण्यासाठी `isError`
> वापरा.

### फायदे

- एखादे मूल्य `Error` चे instance आहे की नाही याची सोपी runtime तपासणी प्रदान करते.
- `message` किंवा `stack` सारख्या `Error` गुणधर्मांना प्रवेश करण्यापूर्वी अज्ञात इनपुट्सचे प्रकार अधिक नेमके ठरवण्यास
  मदत करते.
- `catch`, बाह्य API, किंवा type नसलेल्या स्रोतांमधून आलेल्या मूल्यांचे हाताळणी करताना runtime exceptions चा धोका कमी
  करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isError(value)`

पॅरामीटर्स:

- `value`: `Error` प्रकाराशी तपासण्यासाठीचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isError(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isError](../_analysis/isError.md)

<br>

---

<small>ही फाइल 6 February 2026 at 12:46:17 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>