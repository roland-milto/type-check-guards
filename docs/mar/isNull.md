# isNull

## वर्णन

दिलेल्या `value` चे मूल्य `null` आहे का हे ठरवते.

### वापर प्रकरण

`null` हा अर्थपूर्ण sentinel मूल्य असलेल्या आणि `undefined` किंवा इतर मूल्यांपेक्षा वेगळ्या प्रकारे हाताळणे आवश्यक
असलेल्या इनपुट्स किंवा API payload फील्ड्सची पडताळणी करण्यासाठी `isNull` वापरा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `null` ला `undefined` आणि इतर falsy मूल्यांपासून वेगळे ओळखण्याची गरज असेल तेव्हा `isNull` वापरा; ते फक्त `null` साठीच
`true` परत करते.

### फायदे

- `undefined` सोबत गोंधळ न करता `null` साठी अचूक तपासणी प्रदान करते.
- `unknown` स्वीकारत असल्यामुळे कोणत्याही इनपुट प्रकारासाठी विश्वासार्हपणे कार्य करते.
- सोपे, जलद, आणि साइड-इफेक्ट मुक्त; फक्त `true` किंवा `false` परत करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isNull(value)`

पॅरामीटर्स:

- `value`: `null` आहे का हे तपासण्यासाठीचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // a येथे null आहे
}
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isNull(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isNull](../_analysis/isNull.md)

<br>

---

<small>ही फाइल 31 January 2026 at 15:39:58 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>