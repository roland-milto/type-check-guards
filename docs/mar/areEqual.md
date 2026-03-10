# areEqual

## वर्णन

`areEqual` अ‍ॅरेमधील सर्व घटक दिलेल्या अपेक्षित मूल्याशी समान आहेत का ते तपासते; प्रत्येक आयटम जुळणाऱ्या आणि रिकामा
नसलेल्या अ‍ॅरेसाठीच `true` परत करते.

### वापर प्रकरण

यादीत फक्त एकच अनुमत मूल्य आहे याची पडताळणी करा (उदा., सर्व status flags `true` आहेत, सर्व roles `"admin"` आहेत, किंवा
सर्व संख्यात्मक नोंदी आवश्यक स्थिरांकाइतक्या आहेत) आणि रिकामा इनपुट अवैध (`false`) म्हणून हाताळा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> जेव्हा तुम्हाला सर्व-आयटम्सची कडक तपासणी हवी असेल तेव्हा `areEqual` वापरा; रिकाम्या अ‍ॅरेसाठी तसेच कोणत्याही non-array
> किंवा non-filled इनपुटसाठी ते `false` परत करते.

### फायदे

- फक्त तेव्हाच `true` परत करते जेव्हा प्रत्येक घटक अपेक्षित मूल्याशी जुळतो; अन्यथा `false` परत करते.
- जलद अपयश: जुळत नसलेला घटक सापडताच तपासणी थांबवते.
- इनपुट भरलेला अ‍ॅरे नसल्यास `false` परत करून अवैध इनपुटपासून संरक्षण करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `areEqual(value, expected)`

पॅरामीटर्स:

- `value`: तपासायचा अ‍ॅरे.
- `expected`: अ‍ॅरेमधील प्रत्येक घटकाशी तुलना करण्यासाठीचा घटक.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areEqual(value, expected)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>ही फाइल 31 January 2026 at 23:51:21 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>