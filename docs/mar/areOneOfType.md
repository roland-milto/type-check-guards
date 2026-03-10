# areOneOfType

## वर्णन

`areOneOfType` तपासते की रिकामा नसलेल्या अॅरेमधील सर्व घटक निर्दिष्ट केलेल्या रनटाइम प्रकारांपैकी एका प्रकाराचे आहेत का.

### वापर प्रकरण

येणारा डेटा (उदा., parsed JSON) वैध ठरवा जिथे एखादे फील्ड रिकामा नसलेला अॅरे असणे आवश्यक आहे आणि त्यातील आयटम्स ज्ञात
primitive प्रकारांच्या संचापुरते मर्यादित आहेत; अॅरे रिकामा असेल किंवा कोणताही निषिद्ध प्रकार असेल तर `false` परत करा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> हे फंक्शन boolean परत करते आणि compile time ला अॅरे घटकांचे प्रकार narrow करत नाही; पुढील प्रक्रिया करण्यापूर्वी
> रनटाइम वैधता तपासणीच्या टप्प्यासारखे वापरा.

### फायदे

- अॅरेमधील प्रत्येक घटक किमान एका अनुमत रनटाइम प्रकाराशी जुळतो याची खात्री करते; संपूर्ण अॅरे पास झाल्यावरच `true` परत
  करते.
- अवैध इनपुट्स लवकर नाकारते: `array` किंवा `types` रिकामे असतील किंवा भरलेला अॅरे नसतील तर `false` परत करते.
- `areOneOfType` ला एकदाच कॉल करून मिश्र-प्रकार संग्रह (उदा., संख्या आणि स्ट्रिंग्स) वैध ठरवण्यासाठी उपयुक्त.

## वापर

### सिंटॅक्स

फंक्शन:

- `areOneOfType(array, types)`

पॅरामीटर्स:

- `array`: दिलेल्या प्रकारांशी पडताळण्यासाठी घटकांचा अॅरे.
- `types`: तपासण्यासाठी डेटा प्रकार दर्शवणाऱ्या स्ट्रिंग्सचा अॅरे.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areOneOfType(array, types)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>ही फाइल 31 January 2026 at 23:37:44 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>