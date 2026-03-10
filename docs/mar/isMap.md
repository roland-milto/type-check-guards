# isMap

## वर्णन

दिलेल्या `value` चे `Map` आहे की नाही हे तपासते; असल्यास `true` आणि अन्यथा `false` परत करते.

### वापर प्रकरण

तुम्हाला `unknown` मूल्य (उदा., JSON parsing, external APIs, किंवा user input मधून) मिळाल्यावर आणि `Map` ऑपरेशन्स
करण्यापूर्वी ते `Map` आहे याची खात्री करायची असेल तेव्हा `isMap` वापरा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `isMap` हा एक रनटाइम गार्ड आहे जो मूल्य `Map` असल्यास `true` आणि अन्यथा `false` परत करतो; `Map` APIs कॉल करण्यापूर्वी
`unknown` चे प्रकार संकुचित (narrow) करण्यासाठी याचा वापर करा.

### फायदे

- एखादे मूल्य `Map` आहे की नाही हे पटकन रनटाइमवर तपासण्याची सुविधा देते.
- `get`, `set`, आणि `has` सारख्या `Map` पद्धतींची गरज असलेल्या कोड पाथ्सचे संरक्षण करून टाइप त्रुटी टाळण्यास मदत करते.
- `unknown` इनपुट्स हाताळताना हलक्या-फुलक्या वैधता तपासणीच्या टप्प्यासारखे हे चांगले काम करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isMap(value)`

पॅरामीटर्स:

- `value`: तपासण्यासाठीचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isMap(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isMap](../_analysis/isMap.md)

<br>

---

<small>ही फाइल 31 January 2026 at 16:28:54 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>