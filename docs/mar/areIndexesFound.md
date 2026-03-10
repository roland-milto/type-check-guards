# areIndexesFound

## वर्णन

`areIndexesFound` तपासते की एखादे मूल्य हे नॉन-एम्प्टी अॅरे आहे का ज्यातील सर्व घटक वैध इंडेक्स आहेत; तसे असल्यास `true`
आणि अन्यथा `false` परत करते.

### वापर प्रकरण

वापरकर्त्याने दिलेला किंवा बाह्य डेटा (उदा., पार्स केलेला JSON) जो इंडेक्सची यादी असणे अपेक्षित आहे, तो अॅरे ऍक्सेस
किंवा स्लाइस करण्यासाठी वापरण्यापूर्वी पडताळा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> अज्ञात इनपुटचे घटक अॅरे इंडेक्स म्हणून हाताळण्यापूर्वी त्यांची पडताळणी करण्यासाठी `areIndexesFound` वापरा; रिकाम्या
> अॅरेसाठी आणि नॉन-इंडेक्स मूल्ये असलेल्या अॅरेसाठी ते `false` परत करते.

### फायदे

- इनपुट भरलेला अॅरे असेल आणि प्रत्येक घटक वैध इंडेक्स असेल तेव्हाच `true` परत करते.
- जलद अपयश: नॉन-इंडेक्स घटक आढळताच लगेच `false` परत करते.
- मूल्ये अॅरे पोझिशन्स किंवा ऑफसेट्स म्हणून वापरण्यापूर्वी गार्ड म्हणून उपयुक्त.

## वापर

### सिंटॅक्स

फंक्शन:

- `areIndexesFound(array)`

पॅरामीटर्स:

- `array`: इंडेक्स अनुरूपतेसाठी तपासायचा अॅरे.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // खरे
console.log(areIndexesFound(b)); // खोटे
console.log(areIndexesFound(c)); // खोटे

if (areIndexesFound(a)) {
  // येथे, `a` हे निर्देशांकांनी भरलेले अ‍ॅरे असल्याची पुष्टी होते.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areIndexesFound(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>ही फाइल 31 January 2026 at 00:42:43 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>