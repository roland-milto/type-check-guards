# areFinite

## वर्णन

`areFinite` एखादे मूल्य नॉन-एम्प्टी अॅरे आहे का आणि त्यातील घटक सर्व फाइनाइट संख्या आहेत का हे तपासते; तसे असल्यास
`true` आणि अन्यथा `false` परत करते.

### वापर प्रकरण

गणना करण्यापूर्वी संख्यात्मक इनपुट अॅरेज (उदा., चार्ट सिरीज, कोऑर्डिनेट याद्या, मोजमाप नमुने) व्हॅलिडेट करा, जेणेकरून
सर्व मूल्ये फाइनाइट संख्या असतील तेव्हाच निकाल `true` येईल.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> अॅरे नॉन-एम्प्टी आहे आणि त्यात फक्त फाइनाइट संख्या आहेत याची खात्री करायची असेल तेव्हा `areFinite` वापरा; रिकाम्या
> अॅरेसाठी आणि `NaN` किंवा इन्फिनिटीज असलेल्या अॅरेसाठी ते `false` परत करते.

### फायदे

- इनपुट नॉन-एम्प्टी अॅरे असेल आणि प्रत्येक घटक फाइनाइट संख्या असेल तेव्हाच `true` परत करते.
- प्रत्येक घटकासाठी `isFinite` तपासण्यांवर अवलंबून राहून `Infinity`, `-Infinity`, आणि `NaN` नाकारते.
- गार्ड्स आणि व्हॅलिडेशन फ्लोजसाठी योग्य असा सोपा बूलियन निकाल (`true`/`false`) देते.

## वापर

### सिंटॅक्स

फंक्शन:

- `areFinite(array)`

पॅरामीटर्स:

- `array`: त्यातील सर्व घटक फाइनाइट आहेत का हे तपासण्यासाठीचा अॅरे.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // खरे
console.log(areFinite(b)); // खोटे
console.log(areFinite(c)); // खोटे

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // ६०
console.log(sumIfFinite([10, NaN, 30])); // शून्य

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areFinite(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>ही फाइल 30 January 2026 at 16:35:57 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>