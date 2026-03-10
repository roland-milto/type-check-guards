# areDates

## वर्णन

`areDates` दिलेला अॅरे भरलेला आहे का आणि त्यात फक्त `Date` ऑब्जेक्ट्सच आहेत का हे ठरवते; सर्व घटक वैध दिनांक असतील
तेव्हाच `true` परत करते.

### वापर प्रकरण

वेळेनुसार सॉर्ट करणे, फॉरमॅटिंग, किंवा रेंजेस मोजणे यांसारखी दिनांक-विशिष्ट लॉजिक चालवण्यापूर्वी अज्ञात इनपुट (उदा.,
पार्स केलेले JSON, फॉर्म डेटा, API पेलोड्स) पडताळण्यासाठी `areDates` वापरा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> फक्त अशा न-रिकाम्या अॅरेसाठी `true` परत करते ज्यात प्रत्येक घटक `Date` आहे; रिकाम्या अॅरेसाठी `false` मिळते.

### फायदे

- अॅरेमधील मजकूर पडताळण्यापूर्वी तो रिकामा नाही याची खात्री करते, त्यामुळे रिकाम्या इनपुटसाठी `true` येणे टाळते.
- प्रत्येक घटक `Date` चा इन्स्टन्स आहे का ते तपासते; पहिल्याच विसंगतीवर त्वरित `false` परत करते.
- अॅरेमधील घटकांवर दिनांक-विशिष्ट ऑपरेशन्स करण्यापूर्वी गार्ड-शैलीतील तपासणी म्हणून उपयुक्त.

## वापर

### सिंटॅक्स

फंक्शन:

- `areDates(array)`

पॅरामीटर्स:

- `array`: `Date` ऑब्जेक्ट्ससाठी तपासायचा अॅरे.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // खरे
console.log(areDates(b)); // खोटे
console.log(areDates(c)); // खोटे

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areDates(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areDates](../_analysis/areDates.md)

<br>

---

<small>ही फाइल 31 January 2026 at 15:31:18 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>