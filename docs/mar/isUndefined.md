# isUndefined

## वर्णन

दिलेलं मूल्य `undefined` आहे का ते तपासते.

### वापर प्रकरण

ऐच्छिक इनपुट्सचे गार्डिंग करण्यासाठी, गायब प्रॉपर्टीज शोधण्यासाठी, किंवा “पुरवलेले नाही” (`undefined`) आणि “स्पष्टपणे
रिकामे” (`null`) यांमधील फरक करण्यासाठी `isUndefined` वापरा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `undefined` ( `null` नाही) खास ओळखायची गरज असेल तेव्हा `isUndefined` वापरा. हे सुरक्षित आहे कारण ते
`typeof value === "undefined"` वर अवलंबून असते.

### फायदे

- `typeof` वापरून `undefined` साठी स्पष्ट, ठोस तपासणी प्रदान करते, आणि जाहीर न केलेल्या चलांमुळे येणाऱ्या काठाच्या (
  edge) प्रकरणांना टाळते.
- गार्ड्स, ब्रँचिंग, आणि व्हॅलिडेशन लॉजिकसाठी योग्य असा साधा बूलियन निकाल (`true`/`false`) परत करते.
- `undefined` ला `null`, `0`, `""`, किंवा `NaN` यांसारख्या इतर “रिकाम्या” मूल्यांपासून वेगळे ओळखण्यास मदत करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isUndefined(value)`

पॅरामीटर्स:

- `value`: तपासायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x येथे undefined आहे
} else {
  // x येथे undefined नाही
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isUndefined(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>ही फाइल 30 January 2026 at 14:03:32 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>