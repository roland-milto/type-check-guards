# areFloats

## वर्णन

`areFloats` दिलेला अॅरे भरलेला आहे का आणि त्यातील सर्व घटक फ्लोट आहेत का ते तपासते.

### वापर प्रकरण

जेव्हा तुम्हाला `unknown[]` (उदा., JSON, क्वेरी पॅरामीटर्स, किंवा बाह्य API मधून) मिळतो आणि संख्यात्मक लॉजिक (जसे सरासरी
काढणे, इंटरपोलेशन, किंवा सांख्यिकीय गणना) चालवण्यापूर्वी तो प्रत्येक आयटम फ्लोट असलेला भरलेला अॅरे आहे याची खात्री
करायची असते, तेव्हा `areFloats` वापरा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `areFloats` वापरून `unknown[]` ला फक्त फ्लोट्स असलेल्या `number[]` म्हणून हाताळण्यापूर्वी गार्ड करा; रिकाम्या अॅरेसाठी
> आणि कोणत्याही नॉन-फ्लोट घटकासाठी ते `false` परत करते.

### फायदे

- इनपुट न-रिकामा अॅरे असेल आणि प्रत्येक घटक फ्लोट असेल तेव्हाच `true` परत करते.
- जलद अपयश: नॉन-फ्लोट घटक सापडताच लगेच `false` परत करते.
- फ्लोट-विशिष्ट गणना करण्यापूर्वी अज्ञात इनपुटची पडताळणी करण्यात मदत करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `areFloats(array)`

पॅरामीटर्स:

- `array`: फ्लोट घटकांसाठी तपासायचा अॅरे.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // खरे
console.log(areFloats(b)); // खोटे
console.log(areFloats(c)); // खोटे

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areFloats(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>ही फाइल 30 January 2026 at 15:58:20 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>