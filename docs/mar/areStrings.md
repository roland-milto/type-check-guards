# areStrings

## वर्णन

`areStrings` तपासते की अ‍ॅरे न-रिकामी आहे का आणि त्यातील सर्व घटक स्ट्रिंग्स आहेत का; फक्त त्या स्थितीतच `true` परत
करते.

### वापर प्रकरण

प्रक्रिया करण्यापूर्वी तुमच्याकडे न-रिकामी स्ट्रिंग्सची यादी आहे याची खात्री करण्यासाठी बाह्य किंवा वापरकर्त्याने दिलेला
डेटा (उदा., क्वेरी पॅरॅम्स, JSON पेलोड्स, CSV फील्ड्स) पडताळा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> फक्त-स्ट्रिंग लॉजिक लागू करण्यापूर्वी अज्ञात अ‍ॅरेची पडताळणी करण्यासाठी `areStrings` वापरा; रिकाम्या अ‍ॅरेसाठी ते
`false` परत करते.

### फायदे

- प्रत्येक घटक स्ट्रिंग आहे याची खात्री करते आणि `false` परत करून मिश्र-प्रकारच्या अ‍ॅरेना नाकारते.
- रिकामे अ‍ॅरे नाकारते, त्यामुळे `true` फक्त न-रिकामी स्ट्रिंग्सची यादी दर्शवते.
- फक्त-स्ट्रिंग ऑपरेशन्स (उदा., `trim`, `toLowerCase`) करण्यापूर्वी जलद रनटाइम गार्ड म्हणून उपयुक्त.

## वापर

### सिंटॅक्स

फंक्शन:

- `areStrings(value)`

पॅरामीटर्स:

- `value`: Expected type `string[]`.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // इनपुट रनटाइमला रिकामे नसलेले string[] आहे
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areStrings(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>ही फाइल 30 January 2026 at 13:19:17 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>