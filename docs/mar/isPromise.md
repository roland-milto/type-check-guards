# isPromise

## वर्णन

दिलेलं मूल्य `Promise` आहे की नाही हे ठरवते.

### वापर प्रकरण

प्लगिन्स, डायनॅमिक इम्पोर्ट्स, किंवा सैल-टाइप्ड APIs मधून परत येणारी मूल्ये हाताळताना, अज्ञात इनपुट्सना `Promise` म्हणून
वापरण्यापूर्वी त्यांची पडताळणी करण्यासाठी `isPromise` वापरा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `isPromise` हे `instanceof Promise` द्वारे तपासते, त्यामुळे ते फक्त खऱ्या `Promise` इन्स्टन्ससाठीच `true` परत करते (
> सामान्य thenables साठी नाही).

### फायदे

- एखादे मूल्य `Promise` आहे की नाही यासाठी सोपी रनटाइम तपासणी प्रदान करते.
- खऱ्या `Promise` इन्स्टन्सची आवश्यकता असलेल्या कोड पाथ्सचे संरक्षण करण्यास मदत करते, आणि अंदाजे `true` किंवा `false`
  परत करते.
- खरा `Promise` इन्स्टन्स आवश्यक करून “thenable” ऑब्जेक्ट्समधून (उदा., `{ then() {} }`) होणारे चुकीचे पॉझिटिव्ह्स टाळते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isPromise(value)`

पॅरामीटर्स:

- `value`: तपासायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // खरे
console.log(isPromise(b)); // खोटे
console.log(isPromise(123)); // खोटे
console.log(isPromise(null)); // खोटे

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isPromise(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>ही फाइल 30 January 2026 at 23:53:31 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>