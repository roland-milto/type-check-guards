# isNullOrUndefined

## वर्णन

दिलेलं मूल्य `null` किंवा `undefined` आहे का ते तपासते.

### वापर प्रकरण

जेव्हा तुम्हाला `null` आणि `undefined` दोन्हींना “मूल्य नाही” असे मानायचे असेल तेव्हा `isNullOrUndefined` वापरा—उदा.,
ऐच्छिक इनपुट्सची वैधता तपासणे, API payloads सामान्यीकरण करणे, किंवा संभाव्यतः अनुपस्थित मूल्य dereference करण्यापूर्वी
कोड पाथ्सचे संरक्षण करणे.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> गुणधर्मांना प्रवेश करण्यापूर्वी किंवा पद्धती कॉल करण्यापूर्वी अनुपस्थित मूल्यांपासून संरक्षण करण्यासाठी
`isNullOrUndefined` वापरा; ते फक्त `null` आणि `undefined` साठीच `true` परत करते.

### फायदे

- एका ठिकाणी `null` आणि `undefined` ओळखण्यासाठी स्पष्ट, पुन्हा वापरता येणारा गार्ड प्रदान करते.
- अटी आणि वैधता तपासण्यांमध्ये सहजपणे एकत्र करता येईल असा साधा boolean (`true`/`false`) परत करते.
- गुणधर्मांना प्रवेश करण्यापूर्वी किंवा पद्धती कॉल करण्यापूर्वी अनुपस्थित मूल्ये तपासून सामान्य runtime त्रुटी टाळण्यास
  मदत करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isNullOrUndefined(value)`

पॅरामीटर्स:

- `value`: `null` किंवा `undefined` साठी तपासायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // अनुपस्थित मूल्य हाताळा
}

console.log(isNullOrUndefined(b)); // खरे
console.log(isNullOrUndefined(c)); // खोटे

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isNullOrUndefined(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>ही फाइल 31 January 2026 at 00:34:29 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>