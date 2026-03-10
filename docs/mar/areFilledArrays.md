# areFilledArrays

## वर्णन

`areFilledArrays` तपासते की दोन-आयामी अॅरे रिकामी नाही आणि त्यातील सर्व उप-अॅरे रिकाम्या नाहीत.

### वापर प्रकरण

टॅब्युलर किंवा मॅट्रिक्ससारख्या इनपुटची (उदा., CSV रांगा, ग्रिड डेटा, गटबद्ध निकाल) पडताळणी करण्यासाठी `areFilledArrays`
वापरा, जेणेकरून तुम्ही सुरक्षितपणे गृहित धरू शकता की किमान एक उप-अॅरे आहे आणि कोणताही उप-अॅरे रिकामा नाही.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> इटरेट करणे किंवा इंडेक्सिंग करण्यापूर्वी 2D अॅरेमध्ये किमान एक रांग आहे आणि प्रत्येक रांगेत किमान एक घटक आहे याची
> खात्री करायची असेल तेव्हा `areFilledArrays` वापरा.

### फायदे

- बाह्य अॅरे रिकामी नाही आणि प्रत्येक अंतर्गत अॅरेही रिकामी नाही याची पडताळणी करते; दोन्ही अटी पूर्ण झाल्यावरच `true`
  परत करते.
- उप-अॅरेमधील कोणत्याही घटक प्रकारांसोबत (उदा., संख्या, स्ट्रिंग्स, ऑब्जेक्ट्स, नेस्टेड अॅरे) कार्य करते, कारण ही फक्त
  अॅरे “भरलेली” आहे का ते तपासते; घटकांच्या मजकुराची तपासणी करत नाही.
- दोन-आयामी डेटावर प्रक्रिया करण्यापूर्वी गार्ड्ससाठी योग्य असा साधा बूलियन निकाल (`true`/`false`) देते.

## वापर

### सिंटॅक्स

फंक्शन:

- `areFilledArrays(array)`

पॅरामीटर्स:

- `array`: तपासण्यासाठीचा दोन-आयामी अॅरे.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // खरे
console.log(areFilledArrays(b)); // खरे
console.log(areFilledArrays(c)); // खरे
console.log(areFilledArrays(d)); // खोटे
console.log(areFilledArrays(e)); // खोटे
console.log(areFilledArrays(f)); // खोटे

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areFilledArrays(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>ही फाइल 6 February 2026 at 11:57:47 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>