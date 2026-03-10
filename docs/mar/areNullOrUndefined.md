# areNullOrUndefined

## वर्णन

दिलेल्या अॅरेमधील सर्व घटक `null` किंवा `undefined` आहेत का ते तपासते.

### वापर प्रकरण

प्रक्रिया वगळायची की “कोणतीही मूल्ये दिली नाहीत” अशी स्थिती दाखवायची हे ठरवण्यापूर्वी, ऐच्छिक (optional) फील्ड्सची यादी
प्रत्यक्ष मूल्ये नसून फक्त `null`/`undefined`च आहेत का ते पडताळा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> अॅरेमध्ये फक्त अनुपस्थित मूल्ये (`null`/`undefined`) आहेत याची खात्री करायची असेल तेव्हा `areNullOrUndefined` वापरा.
> लक्षात ठेवा, रिकाम्या अॅरेसाठी ते `false` परत करते.

### फायदे

- फक्त तेव्हाच `true` परत करते जेव्हा प्रत्येक घटक `null` किंवा `undefined` असतो.
- रिकाम्या अॅरेसाठी `false` परत करते, ज्यामुळे “डेटा नाही” आणि “सर्व मूल्ये अनुपस्थित” यांमध्ये फरक ओळखता येतो.
- `unknown[]` सोबत कार्य करते, त्यामुळे प्रकार (types) संकुचित (narrow) करण्यापूर्वी वापरणे सुरक्षित आहे.

## वापर

### सिंटॅक्स

फंक्शन:

- `areNullOrUndefined(array)`

पॅरामीटर्स:

- `array`: तपासण्यासाठीचा अॅरे.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areNullOrUndefined(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>ही फाइल 31 January 2026 at 00:30:28 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>