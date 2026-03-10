# arePromises

## वर्णन

`arePromises` अॅरेमधील सर्व घटक `Promise` इन्स्टन्सेस आहेत का ते ठरवते.

### वापर प्रकरण

डायनॅमिकरीत्या तयार केलेली किंवा बाहेरून दिलेली यादी एकत्रित करण्यापूर्वी (उदा., `Promise.all` सह) त्यात फक्त प्रॉमिसेसच
आहेत याची पडताळणी करा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `Promise.all` किंवा इतर फक्त-प्रॉमिस ऑपरेशन्स कॉल करण्यापूर्वी `unknown[]` वैध ठरवण्यासाठी `arePromises` वापरा;
> रिकाम्या अॅरेसाठी ते `false` परत करते.

### फायदे

- प्रॉमिस-विशिष्ट लॉजिक पुढे नेण्यापूर्वी प्रत्येक घटक `Promise` आहे याची खात्री करते.
- रिकाम्या इनपुटसाठी संदिग्ध परिणाम टाळण्यासाठी, भरलेले नसलेल्या अॅरेसाठी `false` परत करते.
- बाह्य स्रोतांकडून आलेल्या `unknown[]` सोबत काम करताना रनटाइम गार्ड म्हणून उपयुक्त.

## वापर

### सिंटॅक्स

फंक्शन:

- `arePromises(array)`

पॅरामीटर्स:

- `array`: `Promise` इन्स्टन्सेस आहेत का ते तपासण्यासाठीचा अॅरे.

### लोकल फंक्शन इम्पोर्ट

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values हे रनटाइममध्ये Promise उदाहरणांची एक अॅरे आहे
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.arePromises(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>ही फाइल 30 January 2026 at 23:49:04 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>