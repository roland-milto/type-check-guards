# isOfType

## वर्णन

दिलेली `value` निर्दिष्ट type string शी जुळते का हे ठरवते; primitives साठी `typeof` वापरते आणि जटिल प्रकारांसाठी
fallback वापरते.

### वापर प्रकरण

type-विशिष्ट ऑपरेशन्स करण्यापूर्वी एखादी value अपेक्षित type string ची आहे का हे तपासून `unknown` इनपुट्स (उदा., API
responses, user input, parsed JSON) validate आणि narrow करा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `unknown` values सोबत काम करताना runtime types वर branch करण्यासाठी `isOfType` वापरा; ते `true`/`false` परत करते आणि
`null` व `undefined` ला स्पष्टपणे हाताळते.

### फायदे

- वेग आणि स्पष्टतेसाठी थेट `typeof` वापरून primitive प्रकार तपासते.
- `typeof` एकट्याने अपेक्षेप्रमाणे वेगळे ओळखू न शकणारे `null` आणि `undefined` योग्यरीत्या हाताळते.
- `getTypeOf` वापरून fallback तुलना करून जटिल किंवा सानुकूल type string ना समर्थन देते.
- guards आणि branching साठी योग्य असा साधा boolean परिणाम (`true`/`false`) परत करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isOfType(value, type)`

पॅरामीटर्स:

- `value`: `type` विरुद्ध तपासण्यासाठीची value.
- `type`: तपासण्यासाठीच्या प्रकाराचे string स्वरूप.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // इथे input हा number आहे
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // इथे input हा string आहे
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isOfType(value, type)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>ही फाइल 30 January 2026 at 17:04:59 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>