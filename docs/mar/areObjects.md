# areObjects

## वर्णन

`areObjects` दिलेल्या भरलेल्या अ‍ॅरेमध्ये फक्त ऑब्जेक्ट्स आहेत का ते तपासते.

### वापर प्रकरण

तुम्हाला अज्ञात अ‍ॅरे (उदा., JSON parsing किंवा external APIs मधून) मिळाल्यावर, तो रिकामा नाही आणि प्रत्येक घटक ऑब्जेक्ट
आहे याची खात्री करून मगच iterate करून ऑब्जेक्ट प्रॉपर्टीज ऍक्सेस करायच्या असतील तेव्हा `areObjects` वापरा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `unknown[]` ला ऑब्जेक्ट्स म्हणून हाताळण्यापूर्वी पडताळण्यासाठी `areObjects` वापरा; रिकाम्या अ‍ॅरेसाठी ते `false` परत
> करते.

### फायदे

- इनपुट भरलेला अ‍ॅरे असेल आणि प्रत्येक घटक ऑब्जेक्ट असेल तेव्हाच `true` परत करते.
- नॉन-ऑब्जेक्ट घटक सापडताच लवकर थांबते आणि `false` परत करते.
- ऑब्जेक्ट-विशिष्ट ऑपरेशन्स करण्यापूर्वी अज्ञात इनपुटची पडताळणी करण्यास मदत करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `areObjects(array)`

पॅरामीटर्स:

- `array`: ऑब्जेक्ट घटकांसाठी तपासायचा अ‍ॅरे.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value ही वस्तूंची भरलेली अ‍ॅरे आहे
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areObjects(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>ही फाइल 31 January 2026 at 00:09:32 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>