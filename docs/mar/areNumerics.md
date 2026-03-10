# areNumerics

## वर्णन

`areNumerics` एखादे मूल्य नॉन-एम्प्टी अॅरे आहे का आणि त्यातील सर्व घटक संख्यात्मक आहेत का हे तपासते.

### वापर प्रकरण

बेरीज, सरासरी किंवा इतर संख्यात्मक ऑपरेशन्स करण्यापूर्वी बाह्य किंवा टाइप नसलेला डेटा (उदा., JSON payloads, query
parameters, form input) वैध ठरवण्यासाठी `areNumerics` वापरा; इनपुट नॉन-एम्प्टी संख्यात्मक अॅरे आहे याची खात्री करते आणि
अन्यथा `false` परत करते.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `unknown` इनपुटला संख्यात्मक अॅरे म्हणून हाताळण्यापूर्वी त्याचे गार्डिंग करण्यासाठी `areNumerics` वापरा; नॉन-अॅरे आणि
> रिकाम्या अॅरेसाठी ते `false` परत करते.

### फायदे

- इनपुट नॉन-एम्प्टी अॅरे आहे आणि प्रत्येक घटक संख्यात्मक आहे तेव्हाच `true` परत करते.
- जलद अपयश: संख्यात्मक नसलेला घटक सापडताच तपासणी थांबवते आणि `false` परत करते.
- संख्यात्मक ऑपरेशन्स करण्यापूर्वी अज्ञात इनपुट सुरक्षितपणे वैध ठरवण्यास मदत करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `areNumerics(array)`

पॅरामीटर्स:

- `array`: संख्यात्मक घटक आहेत का हे तपासण्यासाठीचा अॅरे.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // खरे
console.log(areNumerics(b)); // खरे
console.log(areNumerics(c)); // खोटे
console.log(areNumerics(d)); // खोटे
console.log(areNumerics(e)); // खोटे

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // ६०
console.log(sumUnknown([10, "20", 30])); // null
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areNumerics(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>ही फाइल 6 February 2026 at 16:06:17 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>