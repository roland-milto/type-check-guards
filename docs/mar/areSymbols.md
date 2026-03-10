# areSymbols

## वर्णन

इनपुट हा भरलेला (non-empty) अॅरे आहे का आणि त्यातील सर्व घटक `symbol` आहेत का हे तपासते, आणि `true` किंवा `false` परत
करते.

### वापर प्रकरण

कॉन्फिगरेशन फील्ड (उदा., symbols म्हणून दर्शवलेल्या unique keys ची यादी) हे फक्त symbols असलेले non-empty अॅरे आहे का हे
पडताळा, आणि मगच `symbol[]` आवश्यक असलेल्या APIs मध्ये वापरा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `areSymbols` वापरून unknown इनपुटला `symbol[]` म्हणून हाताळण्यापूर्वी पडताळा; non-arrays आणि रिकाम्या अॅरेसाठी ते
`false` परत करते.

### फायदे

- इनपुट नॉन-एम्प्टी अॅरे असेल आणि प्रत्येक घटक `symbol` असेल तेव्हाच `true` परत करते.
- आंतरिक filled-array तपासणीद्वारे non-array आणि रिकामे अॅरे नाकारून false positives टाळते.
- पुढील प्रक्रिया करण्यापूर्वी फक्त symbols असलेल्या यादींची पडताळणी करण्यासाठी runtime type guard म्हणून उपयुक्त.

## वापर

### सिंटॅक्स

फंक्शन:

- `areSymbols(array)`

पॅरामीटर्स:

- `array`: `symbol` घटकांसाठी तपासायचा अॅरे.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a हे रनटाइमला फक्त-सिंबॉल्सचे अ‍ॅरे आहे
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areSymbols(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>ही फाइल 30 January 2026 at 14:22:43 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>