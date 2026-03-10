# isRegEx

## वर्णन

दिलेलं मूल्य `RegExp` instance आहे की नाही हे ठरवते.

### वापर प्रकरण

वापरकर्त्याने दिलेली किंवा dynamic मूल्ये (उदा., configuration, API payloads, plugin inputs) नियमित अभिव्यक्ती म्हणून
हाताळण्यापूर्वी त्यांची पडताळणी करा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `unknown` (किंवा union) मूल्ये RegExp-विशिष्ट गुणधर्म किंवा पद्धती वापरण्यापूर्वी narrow करण्यासाठी `isRegEx` वापरा;
> ते फक्त `RegExp` चे instances असलेल्या मूल्यांसाठीच `true` परत करते.

### फायदे

- मूल्य `RegExp` आहे की नाही हे तपासण्यासाठी एक सोपा रनटाइम टाइप गार्ड प्रदान करते.
- कोडला नियमित अभिव्यक्ती अपेक्षित असताना (उदा., `test`, `exec` कॉल करण्यापूर्वी किंवा `source` वाचण्यापूर्वी) त्रुटी
  टाळण्यास मदत करते.
- regex literals आणि `new RegExp(...)` द्वारे तयार केलेल्या instances दोन्हीसोबत कार्य करते.
- non-regex इनपुटसाठी throw न करता स्पष्ट boolean परिणाम (`true`/`false`) परत करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isRegEx(value)`

पॅरामीटर्स:

- `value`: तपासायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // इनपुट इथे RegExp आहे
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isRegEx(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>ही फाइल 30 January 2026 at 23:30:09 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>