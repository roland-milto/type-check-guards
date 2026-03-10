# isInteger

## वर्णन

दिलेल्या `value` हे सुरक्षित पूर्णांक संख्या आहे का ते ठरवते.

### वापर प्रकरण

अविश्वसनीय इनपुट (उदा., query params, JSON payloads, environment variables) ला array indices, pagination, counters,
किंवा database IDs साठी पूर्णांक म्हणून वापरण्यापूर्वी पडताळा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> अज्ञात इनपुटला संख्यात्मक पूर्णांक म्हणून हाताळण्यापूर्वी त्याची पडताळणी करण्यासाठी `isInteger` वापरा; ते फक्त त्या
> मूल्यांसाठी `true` परत करते जिथे `typeof value === "number"` आणि `Number.isSafeInteger(value)`.

### फायदे

- प्रकार आणि संख्यात्मक सुरक्षितता दोन्ही तपासते: इनपुट संख्या आणि सुरक्षित पूर्णांक असेल तेव्हाच `true` परत करते.
- संख्यात्मक coercion मधील सामान्य अडचणी टाळते: "5" सारख्या स्ट्रिंग्ससाठी योग्यरित्या `false` परत करते.
- अपूर्णांक आणि असुरक्षित पूर्णांक नाकारते, त्यामुळे IDs, काउंटर, आणि array indexing साठी योग्य ठरते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isInteger(value)`

पॅरामीटर्स:

- `value`: पूर्णांक स्थितीसाठी तपासायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // खरे
const b = isInteger(-100);   // खरे
const c = isInteger("5");    // खोटे
const d = isInteger(5.5);    // खोटे
const e = isInteger(null);   // खोटे

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isInteger(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>ही फाइल 31 January 2026 at 00:50:35 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>