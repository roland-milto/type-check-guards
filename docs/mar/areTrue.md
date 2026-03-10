# areTrue

## वर्णन

रिकामी नसलेल्या अॅरेमध्ये फक्त boolean `true` मूल्येच आहेत का ते तपासते.

### वापर प्रकरण

पुढे जाण्यापूर्वी पूर्वअटींचा संच किंवा फीचर फ्लॅग्स सर्व सक्षम आहेत (सर्व मूल्ये `true` आहेत) याची पडताळणी करण्यासाठी
`areTrue` वापरा, आणि रिकामे किंवा चुकीच्या स्वरूपाचे इनपुट पूर्ण झालेले नाहीत (`false`) असे माना.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `areTrue` रिकाम्या अॅरेसाठी आणि काटेकोरपणे `true` नसलेले कोणतेही मूल्य असलेल्या अॅरेसाठी `false` परत करते.

### फायदे

- फक्त तेव्हाच `true` परत करते जेव्हा प्रत्येक घटक काटेकोरपणे `true` असतो आणि अॅरे रिकामी नसते.
- जलद अपयश: `true` नसलेले मूल्य सापडताच लगेच `false` परत करते.
- अवैध इनपुट (अॅरे नसलेले किंवा रिकामे अॅरे) `false` परत करून नाकारते.

## वापर

### सिंटॅक्स

फंक्शन:

- `areTrue(array)`

पॅरामीटर्स:

- `array`: सर्व `true` मूल्यांसाठी तपासायचा अॅरे.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areTrue(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>ही फाइल 30 January 2026 at 13:51:59 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>