# isWeakMap

## वर्णन

दिलेल्या `value` चे `WeakMap` instance आहे की नाही हे ठरवते.

### वापर प्रकरण

जेव्हा तुम्ही `unknown` मूल्य स्वीकारता (उदा., सार्वजनिक API, plugin system, किंवा dynamic configuration मधून) आणि
`WeakMap`-विशिष्ट वर्तन वापरण्यापूर्वी ते `WeakMap` आहे की नाही हे पडताळणे आवश्यक असते, तेव्हा `isWeakMap` वापरा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `isWeakMap` हे `instanceof WeakMap` तपासणी करते; हा एक रनटाइम guard आहे जो फक्त प्रत्यक्ष `WeakMap` instances साठीच
`true` परत करतो.

### फायदे

- एखादे मूल्य `WeakMap` आहे की नाही याची साधी रनटाइम तपासणी.
- `WeakMap` आवश्यक असलेल्या API चा गैरवापर टाळण्यास मदत करते; अपवाद (throw) करण्याऐवजी `true`/`false` परत करते.
- `unknown` इनपुट्ससह कार्य करते, त्यामुळे मॉड्यूल सीमांवर (उदा., parsing, बाह्य डेटा, किंवा untyped कोड) सोयीचे ठरते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isWeakMap(value)`

पॅरामीटर्स:

- `value`: तपासण्यासाठीचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a रनटाइममध्ये WeakMap आहे
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isWeakMap(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>ही फाइल 30 January 2026 at 13:25:52 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>