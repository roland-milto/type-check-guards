# areValidDates

## वर्णन

एखादा अॅरे रिकामा नाही आणि पूर्णपणे वैध `Date` ऑब्जेक्ट्सपासूनच बनलेला आहे का हे ठरवते.

### वापर प्रकरण

दिनांक-आधारित ऑपरेशन्स (सॉर्टिंग, रेंज तपासणी, फॉरमॅटिंग) करण्यापूर्वी वापरकर्त्याने दिलेले किंवा API ने दिलेले अॅरे वैध
आहेत का हे तपासण्यासाठी `areValidDates` वापरा, जेणेकरून सर्व नोंदी खऱ्या, वैध `Date` ऑब्जेक्ट्स आहेत आणि सूची रिकामी
नाही याची खात्री होते.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `areValidDates` रिकाम्या अॅरेसाठी `false` परत करते; वैधता तपासणीच्या टप्प्यात त्यावर अवलंबून राहण्यापूर्वी अॅरे रिकामा
> नसावा असा हेतू आहे याची खात्री करा.

### फायदे

- फक्त तेव्हाच `true` परत करते जेव्हा प्रत्येक घटक वैध `Date` इन्स्टन्स असतो (उदा. `new Date('invalid')` सारख्या अवैध
  तारखा नाहीत).
- `false` परत करून रिकामे इनपुट नाकारते, त्यामुळे तुम्ही फक्त अर्थपूर्ण, रिकामे नसलेले दिनांक-सूचीच स्वीकारता.
- इतर वैधता तपासण्यांसोबत सहजपणे एकत्र करता येईल अशी साधी बूलियन गार्ड-शैलीतील तपासणी देते.

## वापर

### सिंटॅक्स

फंक्शन:

- `areValidDates(array)`

पॅरामीटर्स:

- `array`: तपासण्यासाठीचा अॅरे, ज्यामध्ये `Date` ऑब्जेक्ट्स असू शकतात.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // खरे
console.log(areValidDates(b)); // खोटे
console.log(areValidDates(c)); // खोटे
console.log(areValidDates(d)); // खोटे

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areValidDates(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>ही फाइल 30 January 2026 at 14:32:52 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>