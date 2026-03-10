# areOfType

## वर्णन

दिलेल्या `array` मधील सर्व घटक निर्दिष्ट `type` चे आहेत का ते तपासते.

### वापर प्रकरण

अॅरेमधील प्रत्येक घटकावर प्रकार-विशिष्ट ऑपरेशन्स करण्यापूर्वी अज्ञात इनपुट (उदा., parsed JSON, API payloads, user input)
ची पडताळणी करण्यासाठी `areOfType` वापरा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `areOfType` हा type guard असल्यामुळे, TypeScript `if (areOfType(...)) {}` ब्लॉकच्या आत अॅरेला `Array<DataTypeOf<T>>`
> पर्यंत संकुचित करते.

### फायदे

- TypeScript प्रकार संरक्षक प्रदान करते: जेव्हा ते `true` परत करते, तेव्हा इनपुट `Array<DataTypeOf<T>>` पर्यंत संकुचित
  होते.
- विनंती केलेल्या रनटाइम प्रकाराविरुद्ध प्रत्येक घटकाची पडताळणी करते, त्यामुळे मिश्र-प्रकार अॅरे पास होण्यापासून रोखले
  जातात.
- जलद अपयशी ठरते: जसा एखादा न जुळणारा घटक सापडतो तसा `false` परत करते.
- डिझाइननुसार नॉन-अॅरे आणि रिकामे अॅरे नाकारते ( `isFilledArray` वर अवलंबून).

## वापर

### सिंटॅक्स

फंक्शन:

- `areOfType(array, type)`

पॅरामीटर्स:

- `array`: तपासण्यासाठीचा अॅरे.
- `type`: अॅरेमधील प्रत्येक घटकाविरुद्ध तपासण्यासाठीचा प्रकार.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values आता number[] आहे
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // खोटे

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areOfType(array, type)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>ही फाइल 30 January 2026 at 17:10:28 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>