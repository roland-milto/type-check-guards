# isFinite

## वर्णन

दिलेलं `value` हे मर्यादित `number` आहे की नाही ते ठरवते.

### वापर प्रकरण

संख्यात्मक गणना करण्यापूर्वी अज्ञात इनपुट (उदा., JSON, फॉर्म्स, किंवा APIs मधून) वैध आहे का ते तपासण्यासाठी `isFinite`
वापरा, ज्यामुळे मूल्य हे वास्तविक, मर्यादित संख्या आहे याची खात्री होते.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `isFinite` फक्त मर्यादित संख्यांसाठी `true` परत करते; `NaN`, `Infinity`, आणि कोणत्याही संख्या नसलेल्या मूल्यासाठी
`false` परत करते.

### फायदे

- विश्वसनीय मर्यादितता तपासणीसाठी अंगभूत `Number.isFinite` वापरते.
- फक्त मर्यादित संख्यांसाठी `true` परत करते; `NaN`, `Infinity`, आणि संख्या नसलेल्या इनपुटसाठी `false` परत करते.
- व्हॅलिडेशन आणि गार्डिंग लॉजिकसाठी योग्य असा साधा, साइड-इफेक्ट-फ्री प्रेडिकेट.

## वापर

### सिंटॅक्स

फंक्शन:

- `isFinite(value)`

पॅरामीटर्स:

- `value`: मर्यादितता तपासण्यासाठीचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers आहे: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // येथे value हा मर्यादित संख्या आहे
  const doubled = value * 2;
  console.log(doubled);
}
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isFinite(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>ही फाइल 30 January 2026 at 16:30:43 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>