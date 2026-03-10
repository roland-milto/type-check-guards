# areHexadecimals

## वर्णन

अ‍ॅरेमधील सर्व घटक हेक्साडेसिमल स्ट्रिंग आहेत का ते तपासते; प्रत्येक आयटम वैध असलेल्या आणि रिकामा नसलेल्या अ‍ॅरेसाठीच
`true` परत करते.

### वापर प्रकरण

हेक्साडेसिमल पार्सिंग किंवा पुढील प्रक्रिया करण्यापूर्वी वापरकर्ता इनपुट किंवा बाह्य डेटा (उदा., IDs, checksums,
सुरुवातीचा '#' नसलेले color codes) पडताळण्यासाठी `areHexadecimals` वापरा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `parseInt(value, 16)` किंवा BigInt रूपांतरणांपूर्वी) पार्सिंग किंवा मूल्ये रूपांतरित करण्यापूर्वी अज्ञात इनपुटची
> पडताळणी करण्यासाठी `areHexadecimals` वापरा.

### फायदे

- प्रत्येक घटक हेक्साडेसिमल स्ट्रिंग आहे का हे पडताळते आणि सर्व आयटम जुळल्यावरच `true` परत करते.
- डिझाइननुसार रिकाम्या अ‍ॅरेला नाकारते; इनपुट डेटा नसल्यास `false` परत करते.
- गार्ड्स आणि लवकर-परत (early-return) पडताळणीसाठी योग्य असा साधा बूलियन निकाल (`true`/`false`) देते.

## वापर

### सिंटॅक्स

फंक्शन:

- `areHexadecimals(array)`

पॅरामीटर्स:

- `array`: हेक्साडेसिमल स्ट्रिंग घटकांसाठी तपासायचा अ‍ॅरे.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areHexadecimals(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>ही फाइल 31 January 2026 at 23:07:01 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>