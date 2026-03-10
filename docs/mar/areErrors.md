# areErrors

## वर्णन

एखादा array रिकामा नाही आणि त्यात फक्त `Error` objects आहेत का हे तपासते, आणि `true` किंवा `false` परत करते.

### वापर प्रकरण

runtime वर मिळालेला `unknown[]` (उदा., एकत्रित अपयश, validation परिणाम, किंवा deserialized डेटा) यावर iterate करणे, लॉग
करणे, किंवा पुन्हा throw करण्यापूर्वी तो `Error` objects ची रिकामी नसलेली यादी आहे याची पडताळणी करा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `areErrors` फक्त भरलेल्या array साठी `true` परत करते ज्यात प्रत्येक item `Error` आहे; रिकाम्या array साठी किंवा
> कोणताही घटक `Error` नसेल तर `false` परत करते.

### फायदे

- प्रत्येक घटक `Error` चे instance आहे याची खात्री करते, ज्यामुळे सुरक्षित त्रुटी हाताळणी आणि लॉगिंग शक्य होते.
- रिकामे array नाकारते, त्यामुळे चुकून “त्रुटी नाहीत” अशा स्थितीला वैध त्रुटी यादी समजण्यापासून प्रतिबंध होतो.
- `unknown[]` इनपुट्स (उदा., APIs किंवा `catch` blocks मधून) हाताळताना runtime guard म्हणून चांगले कार्य करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `areErrors(array)`

पॅरामीटर्स:

- `array`: `Error` objects साठी तपासायचा array.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value हा Error ऑब्जेक्ट्सचा रिकामा नसलेला अ‍ॅरे आहे
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areErrors(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>ही फाइल 6 February 2026 at 12:34:32 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>