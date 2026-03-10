# areFalse

## वर्णन

`areFalse` दिलेल्या array मधील सर्व घटक काटेकोरपणे boolean `false` आहेत का ते तपासते.

### वापर प्रकरण

पुढे जाण्यापूर्वी feature flags, checks, किंवा guard results यांची यादी सर्व `false` आहे का ते पडताळा (उदा., कोणत्याही
blocking conditions उपस्थित नाहीत याची खात्री करा).

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> array रिकामा नसावा आणि त्यात फक्त boolean मूल्य `false`च असावे अशी काटेकोर पडताळणी हवी असेल तेव्हा `areFalse` वापरा.

### फायदे

- प्रत्येक घटक काटेकोरपणे `false` आहे याची खात्री करते (`truthy/falsey` coercion नाही).
- `isFilledArray` द्वारे भरलेला array आवश्यक करून non-array किंवा रिकाम्या array साठी `false` परत करते.
- कार्यक्षमतेसाठी पहिल्या non-`false` घटकावर लवकर थांबते.

## वापर

### सिंटॅक्स

फंक्शन:

- `areFalse(array)`

पॅरामीटर्स:

- `array`: तपासण्यासाठीचा array, ज्यामध्ये कोणत्याही प्रकारचे घटक असू शकतात.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // खरे
const b = areFalse([false, true, false]);  // खोटे
const c = areFalse([false, "false", false]); // खोटे
const d = areFalse([]); // खोटे
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areFalse(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>ही फाइल 31 January 2026 at 16:17:49 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>