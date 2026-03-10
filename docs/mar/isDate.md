# isDate

## वर्णन

`isDate` दिलेले मूल्य `Date` आहे की नाही हे ठरवते; `Date` इन्स्टन्सेससाठी `true` आणि अन्यथा `false` परत करते.

### वापर प्रकरण

`Date` ऑपरेशन्स (उदा., फॉरमॅटिंग, तुलना, किंवा `toISOString()` कॉल करणे) करण्यापूर्वी अज्ञात मूल्ये (उदा., रिक्वेस्ट
डेटा, कॉन्फिग मूल्ये, किंवा पार्स केलेले JSON) व्हॅलिडेट करा आणि नॅरो करा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> रनटाइमला `unknown` ला `Date` पर्यंत नॅरो करण्यासाठी `isDate` वापरा; ते फक्त प्रत्यक्ष `Date` इन्स्टन्सेससाठीच `true`
> परत करते (date strings साठी नाही).

### फायदे

- मूल्य `Date` आहे की नाही हे पडताळण्यासाठी हे एक सोपे रनटाइम गार्ड प्रदान करते.
- फक्त `Date` इन्स्टन्सेसच व्हॅलिडेशनमधून पास होतील याची खात्री करून हे टाइप एरर्स टाळण्यास मदत करते.
- दिनांक-विशिष्ट मेथड्स वापरण्यापूर्वी अज्ञात इनपुट्स (उदा., API पेलोड्स) व्हॅलिडेट करण्यासाठी हे उपयुक्त आहे.

## वापर

### सिंटॅक्स

फंक्शन:

- `isDate(value)`

पॅरामीटर्स:

- `value`: `Date` प्रकारासाठी तपासायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // इथे input हा Date आहे
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isDate(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isDate](../_analysis/isDate.md)

<br>

---

<small>ही फाइल 31 January 2026 at 15:46:47 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>