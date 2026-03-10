# isFalse

## वर्णन

`isFalse` दिलेले मूल्य बूलियन लिटरल `false` शी कडकपणे समान आहे का ते तपासते.

### वापर प्रकरण

अज्ञात डेटा (उदा., JSON, क्वेरी पॅरॅम्स, किंवा वापरकर्ता इनपुटमधून) पडताळा, जिथे फक्त स्पष्ट बूलियन मूल्य `false` वैध
फ्लॅग म्हणून मानले पाहिजे आणि बाकी सर्व नाकारले पाहिजे.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> फक्त लिटरल `false` स्वीकारायचे असेल आणि इतर सर्व फॉल्सी मूल्ये नाकारायची असतील तेव्हा `isFalse` वापरा; ते
`value === false` साठीच `true` परत करते.

### फायदे

- कोअर्शन न करता बूलियन लिटरल `false` साठी कडक तपासणी प्रदान करते.
- `0`, `""`, `null`, आणि `undefined` यांसारख्या इतर फॉल्सी मूल्यांपासून `false` वेगळे ओळखण्यास मदत करते.
- अज्ञात इनपुटची पडताळणी करताना उद्देश स्पष्ट करून वाचनीयता सुधारते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isFalse(value)`

पॅरामीटर्स:

- `value`: तपासायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // इथे input नेमके false आहे
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isFalse(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>ही फाइल 31 January 2026 at 16:43:43 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>