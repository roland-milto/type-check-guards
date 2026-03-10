# isNumeric

## वर्णन

`isNumeric` दिलेले `value` हे `NUMERIC_TYPES` विरुद्ध त्याचा निराकृत प्रकार तपासून संख्यात्मक मानले जाते की नाही हे
ठरवते.

### वापर प्रकरण

संख्यात्मक ऑपरेशन्स करण्यापूर्वी इनपुट्स (उदा., API payloads, form values, configuration) वैध ठरवण्यासाठी, आणि
`NUMERIC_TYPES` नुसार `BigInt` सारखे संख्यात्मक-सदृश प्रकार सातत्याने स्वीकारण्यासाठी `isNumeric` वापरा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `isNumeric` हा boolean परत करणारा predicate आहे; एखादे मूल्य लायब्ररीने परिभाषित केलेल्या संख्यात्मक प्रकार संचात येते
> की नाही यासाठी तो runtime तपासणी म्हणून वापरा.

### फायदे

- संख्यात्मक ओळख तर्क केंद्रीत करण्यासाठी आणि कोडबेसभर तपासण्या सुसंगत ठेवण्यासाठी `getTypeOf` सोबत `NUMERIC_TYPES`
  वापरते.
- सोपे शाखांकन आणि guard-शैलीतील वापरासाठी साधा boolean (`true`/`false`) परत करते.
- `NUMERIC_TYPES` ने परिभाषित केल्याप्रमाणे अनेक संख्यात्मक प्रतिनिधित्वांना (उदा., `number`, `BigInt`) समर्थन देते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isNumeric(value)`

पॅरामीटर्स:

- `value`: संख्यात्मक प्रकारासाठी तपासायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // लायब्ररीच्या प्रकार नियमांनुसार v ला संख्यात्मक मानले जाते
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isNumeric(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>ही फाइल 6 February 2026 at 15:53:30 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>