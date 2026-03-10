# arePlainObjects

## वर्णन

अॅरेमधील सर्व घटक साधे ऑब्जेक्ट्स आहेत का ते तपासते; प्रत्येक घटक पात्र असल्यासच `true` परत करते.

### वापर प्रकरण

बाह्य किंवा टाइप नसलेला डेटा (उदा., पार्स केलेला JSON, API payloads, फॉर्म सबमिशन्स) पडताळा, जेणेकरून तुम्हाला रिकामा
नसलेला अॅरे मिळाला आहे आणि त्यातील प्रत्येक नोंद साधा ऑब्जेक्ट आहे याची खात्री करून मगच त्यावर iterate करून प्रॉपर्टीज
वाचा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> TypeScript मध्ये अज्ञात इनपुटला `Record<string, unknown>[]` (किंवा अधिक कडक ऑब्जेक्ट आकार) म्हणून हाताळण्यापूर्वी
> त्याची पडताळणी करण्यासाठी `arePlainObjects` वापरा.

### फायदे

- इनपुट अॅरेमधील प्रत्येक घटक साधा ऑब्जेक्ट आहे याची खात्री करते; सर्व आयटम जुळले तरच `true` परत करते.
- अवैध इनपुट (अॅरे नसणे किंवा रिकामा अॅरे) असल्यास `false` परत करून लवकर नाकारते.
- ऑब्जेक्ट-लिटरल ऑब्जेक्ट्स आणि `Object.create(null)` ऑब्जेक्ट्स दोन्हींना वैध साधे ऑब्जेक्ट्स म्हणून मानते.

## वापर

### सिंटॅक्स

फंक्शन:

- `arePlainObjects(array)`

पॅरामीटर्स:

- `array`: साध्या ऑब्जेक्ट घटकांसाठी तपासायचा अॅरे.

### लोकल फंक्शन इम्पोर्ट

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // खरे
const b = arePlainObjects([{}, Object.create(null)]); // खरे
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // खोटे
const d = arePlainObjects([] as unknown[]); // खोटे
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.arePlainObjects(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>ही फाइल 30 January 2026 at 16:54:44 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>