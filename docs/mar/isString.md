# isString

## वर्णन

`isString` दिलेले मूल्य स्ट्रिंग आहे की नाही हे ठरवते.

### वापर प्रकरण

वापरकर्ता इनपुट, API payload फील्ड्स, किंवा कॉन्फिगरेशन मूल्ये runtime वेळी वैध ठरवा, जेणेकरून स्ट्रिंग ऑपरेशन्स (उदा.,
trimming, splitting, case conversion) लागू करण्यापूर्वी मूल्य स्ट्रिंग आहे याची खात्री होईल.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> स्ट्रिंग मेथड्स कॉल करण्यापूर्वी `unknown` किंवा सैल टाइप केलेली मूल्ये वैध ठरवण्यासाठी `isString` वापरा;
`typeof value === "string"` असतानाच ते `true` परत करते.

### फायदे

- `typeof` वापरून सोपी आणि जलद तपासणी.
- अंदाज करता येईल असा boolean निकाल परत करते: स्ट्रिंगसाठी `true`, अन्यथा `false`.
- रिकाम्या आणि न-रिकाम्या दोन्ही स्ट्रिंगसाठी कार्य करते.
- स्ट्रिंग-विशिष्ट ऑपरेशन्स करण्यापूर्वी हलका runtime guard म्हणून उपयुक्त.

## वापर

### सिंटॅक्स

फंक्शन:

- `isString(value)`

पॅरामीटर्स:

- `value`: स्ट्रिंग प्रकारासाठी तपासायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // इथे input हा स्ट्रिंग आहे
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isString(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isString](../_analysis/isString.md)

<br>

---

<small>ही फाइल 30 January 2026 at 13:14:47 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>