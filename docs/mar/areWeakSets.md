# areWeakSets

## वर्णन

इनपुट हा रिकामा नसलेला अॅरे आहे का आणि त्यातील प्रत्येक घटक `WeakSet` आहे का हे तपासते; फक्त त्या परिस्थितीत `true` परत
करते.

### वापर प्रकरण

रनटाइम इनपुट (उदा., APIs, कॉन्फिगरेशन, किंवा वापरकर्त्याने दिलेला डेटा) वैध आहे का हे तपासा, जेणेकरून `WeakSet` वर्तनावर
अवलंबून असलेली लॉजिक पुढे नेण्यापूर्वी तुमच्याकडे `WeakSet` इन्स्टन्सेसची रिकामी नसलेली यादी आहे याची खात्री होईल.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `WeakSet[]` म्हणून हाताळण्यापूर्वी अज्ञात इनपुटची पडताळणी करण्यासाठी `areWeakSets` वापरा. रिकाम्या अॅरेसाठी आणि अॅरे
> नसलेल्या इनपुटसाठी ते `false` परत करते.

### फायदे

- इनपुट अॅरेमधील प्रत्येक घटक `WeakSet` आहे याची खात्री करते.
- रिकाम्या अॅरेसाठी `false` परत करते, त्यामुळे डेटा नसताना चुकून “सर्व वैध” असा निकाल येणे टाळते.
- इनपुट भरलेला अॅरे नसल्यास ( `null` सहित) `false` परत करून सुरक्षितपणे अपयशी ठरते.
- `WeakSet` इन्स्टन्सेस आवश्यक असलेल्या ऑपरेशन्स करण्यापूर्वी गार्ड म्हणून उपयुक्त.

## वापर

### सिंटॅक्स

फंक्शन:

- `areWeakSets(array)`

पॅरामीटर्स:

- `array`: `WeakSet` ऑब्जेक्ट्ससाठी तपासायचा अॅरे.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a हा WeakSet उदाहरणांचा रिकामा नसलेला अ‍ॅरे आहे
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areWeakSets(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>ही फाइल 30 January 2026 at 14:09:43 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>