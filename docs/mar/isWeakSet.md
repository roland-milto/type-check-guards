# isWeakSet

## वर्णन

दिलेल्या `value` हे ऑब्जेक्ट्सचे `WeakSet` आहे की नाही हे ठरवते.

### वापर प्रकरण

टाइप नसलेला इनपुट (उदा., बाह्य APIs मधून, डायनॅमिक कॉन्फिगरेशनमधून, किंवा `unknown` मूल्ये) स्वीकारताना `isWeakSet`
वापरा आणि `WeakSet`-विशिष्ट ऑपरेशन्स वापरण्यापूर्वी ते `WeakSet` आहे याची पडताळणी करणे आवश्यक असेल तेव्हा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> रनटाइमला `unknown` मूल्य `WeakSet<object>` पर्यंत संकुचित (narrow) करण्यासाठी `isWeakSet` वापरा; लक्षात ठेवा की
`WeakSet` मध्ये फक्त ऑब्जेक्ट रेफरन्सेसच ठेवता येतात.

### फायदे

- एखादे मूल्य `WeakSet` आहे की नाही याची साधी रनटाइम तपासणी प्रदान करते.
- फक्त `WeakSet` इन्स्टन्सेसना तशीच वागणूक दिली जाते याची खात्री करून टाइप त्रुटी टाळण्यास मदत करते.
- कोणत्याही `unknown` इनपुटसोबत कार्य करते आणि स्पष्ट बूलियन परिणाम (`true`/`false`) परत करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isWeakSet(value)`

पॅरामीटर्स:

- `value`: तपासायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // खरे
console.log(isWeakSet(b)); // खोटे

if (isWeakSet(a)) {
  // a रनटाइममध्ये WeakSet आहे
}
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isWeakSet(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>ही फाइल 30 January 2026 at 14:18:11 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>