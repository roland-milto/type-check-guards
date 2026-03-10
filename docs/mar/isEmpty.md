# isEmpty

## वर्णन

दिलेलं मूल्य रिक्त आहे का हे ठरवते; `null`, `undefined`, रिक्त/फक्त व्हाईटस्पेस स्ट्रिंग्स, रिक्त अॅरे, रिक्त `Map`/
`Set`, किंवा स्वतःचे कोणतेही enumerable गुणधर्म नसलेल्या ऑब्जेक्ट्ससाठी `true` परत करते.

### वापर प्रकरण

अनेक डेटा प्रकारांमध्ये (उदा., फॉर्म फील्ड्स, API payloads, configuration objects) इनपुट्सची पडताळणी करण्यासाठी आणि
अनुपस्थित/रिकाम्या मूल्यांचा शोध घेण्यासाठी `isEmpty` वापरा, जिथे `null`, `undefined`, फक्त व्हाईटस्पेस स्ट्रिंग्स,
रिक्त कलेक्शन्स, आणि गुणधर्म नसलेले ऑब्जेक्ट्स यांना रिक्त मानले पाहिजे.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `isEmpty` ही बूलियन परत करणारी युटिलिटी आहे (TypeScript type predicate नाही), त्यामुळे ती स्वतःहून प्रकार narrow करत
> नाही; compile-time narrowing पेक्षा validation/branching साठी ती वापरा.

### फायदे

- रिक्तता तपासण्यासाठी `null` आणि `undefined` यांना `true` मानते.
- लांबी तपासण्यापूर्वी ट्रिम करून फक्त व्हाईटस्पेस असलेल्या स्ट्रिंग्सना रिक्त मानते.
- सामान्य कंटेनर प्रकारांना (अॅरे, `Map`, `Set`) आणि स्वतःचे कोणतेही enumerable गुणधर्म नसलेल्या साध्या ऑब्जेक्ट्सना
  समर्थन देते.
- `hasOwnProperty` तपासण्या वापरून वारसाहक्काने आलेले गुणधर्म मोजणे टाळते.
- गार्ड्स आणि व्हॅलिडेशनसाठी योग्य असा साधा बूलियन निकाल (`true`/`false`) परत करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isEmpty(value)`

पॅरामीटर्स:

- `value`: रिक्तता तपासण्यासाठीचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isEmpty(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>ही फाइल 6 February 2026 at 16:19:36 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>