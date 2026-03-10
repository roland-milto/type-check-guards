# isBigInt

## वर्णन

`isBigInt` दिलेले मूल्य `bigint` प्रकाराचे आहे का ते तपासते; BigInt प्रिमिटिव्हसाठी `true` आणि अन्यथा `false` परत करते.

### वापर प्रकरण

BigInt-विशिष्ट गणना करण्यापूर्वी किंवा BigInt-फक्त फील्ड्समध्ये साठवण्यापूर्वी, टाइप नसलेल्या स्रोतांमधून (उदा., JSON
parsing, user input, external APIs) येणारी मूल्ये वैध ठरवणे आणि संकुचित (narrow) करणे.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> BigInt अंकगणित (उदा., `+`, `*`) करण्यापूर्वी, ज्यासाठी BigInt ऑपरेण्ड्स आवश्यक असतात, `unknown` ला `bigint` मध्ये
> संकुचित (narrow) करण्यासाठी `isBigInt` वापरा.

### फायदे

- `bigint` या प्रिमिटिव्ह प्रकारासाठी सोपी, विश्वासार्ह रनटाइम तपासणी प्रदान करते.
- BigInt-फक्त ऑपरेशन्स करण्यापूर्वी `unknown` मूल्ये संकुचित (narrow) करण्यास मदत करते.
- खोटे पॉझिटिव्ह टाळते: सामान्य संख्या, स्ट्रिंग्स आणि इतर प्रकार `false` परत करतात.

## वापर

### सिंटॅक्स

फंक्शन:

- `isBigInt(value)`

पॅरामीटर्स:

- `value`: तपासण्यासाठीचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // खरे
console.log(isBigInt(10));  // खोटे
console.log(isBigInt("10")); // खोटे
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isBigInt(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>ही फाइल 31 January 2026 at 23:32:34 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>