# isValidDate

## वर्णन

`isValidDate` दिलेले मूल्य वैध `Date` object आहे का ते तपासते आणि फक्त खऱ्या, अवैध नसलेल्या तारखांसाठीच `true` परत करते.

### वापर प्रकरण

वापरकर्ता इनपुट किंवा API डेटा ज्यामध्ये तारखा असू शकतात त्याची पडताळणी करा, तारीख गणना, formatting किंवा तुलना
करण्यापूर्वी मूल्य खरे `Date` instance आहे आणि अवैध तारीख नाही याची खात्री करा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `unknown` म्हणून typed असलेल्या मूल्यांवर `Date` methods (उदा., `toISOString`, `getTime`) कॉल करण्यापूर्वी ते वैध
`Date` objects आहेत याची खात्री करण्यासाठी `isValidDate` वापरा.

### फायदे

- मूल्य `Date` चे instance आहे याची खात्री करते आणि ते फक्त तारीख-सदृश string किंवा number नाही याचीही खात्री करते.
- `NaN` time values तपासून अवैध तारखा (उदा., `new Date("invalid")`) नाकारते.
- अटी (conditionals) आणि validation pipelines मध्ये वापरण्यास सोपा असा साधा boolean guard.
- इनपुट आधी पडताळून date methods कॉल करताना runtime errors टाळण्यास मदत करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isValidDate(value)`

पॅरामीटर्स:

- `value`: तपासायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // इनपुट हा वैध Date इन्स्टन्स आहे
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isValidDate(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>ही फाइल 30 January 2026 at 16:51:49 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>