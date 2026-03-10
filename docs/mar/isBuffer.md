# isBuffer

## वर्णन

एखादे मूल्य Node.js `Buffer` आहे का ते तपासते आणि `true` किंवा `false` परत करते.

### वापर प्रकरण

रनटाइमवर इनपुट्स (उदा., API पेलोड्स, फाइल डेटा, किंवा मेसेज बफर्स) वैध ठरवा, म्हणजे प्रक्रिया करण्यापूर्वी मूल्य
`Buffer` आहे याची खात्री करता येईल, आणि Node.js बाहेर चालवताना जिथे `Buffer` अस्तित्वात नसेल तिथे विश्वासार्हपणे `false`
मिळेल.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `unknown` मूल्ये `Buffer` मध्ये नॅरो करण्यासाठी, Buffer-विशिष्ट मेथड्स कॉल करण्यापूर्वी `isBuffer` वापरा.

### फायदे

- `Buffer.isBuffer` वापरून Node.js `Buffer` इन्स्टन्स सुरक्षितपणे ओळखते.
- `Buffer` उपलब्ध नसलेल्या वातावरणात `false` परत करते, त्यामुळे रनटाइम त्रुटी टाळल्या जातात.
- `unknown` इनपुटसह कार्य करते, त्यामुळे रनटाइम वैधता तपासणी आणि टाइप नॅरोइंगसाठी योग्य आहे.

## वापर

### सिंटॅक्स

फंक्शन:

- `isBuffer(value)`

पॅरामीटर्स:

- `value`: चाचणी करायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // खरे
console.log(isBuffer(b)); // खोटे

if (isBuffer(a)) {
  // येथे a हा Buffer आहे
  console.log(a.toString("utf8"));
}
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isBuffer(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>ही फाइल 31 January 2026 at 16:32:24 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>