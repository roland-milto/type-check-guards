# areBigInts

## वर्णन

`areBigInts` ठरवते की एखादे मूल्य हे फक्त `bigint` मूल्ये असलेले, रिकामे नसलेले अॅरे आहे की नाही.

### वापर प्रकरण

अज्ञात इनपुट (उदा., parsed JSON-like डेटा, API payloads, किंवा `unknown` म्हणून टाइप केलेले function parameters)
प्रक्रिया करण्यापूर्वी ते `bigint` मूल्यांचा रिकामा नसलेला अॅरे आहे याची खात्री करण्यासाठी पडताळा; सर्व घटक `bigint`
असतील तेव्हाच `true` परत करते, अन्यथा `false`.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> अज्ञात इनपुटवर `bigint`-फक्त ऑपरेशन्स (उदा., अंकगणित, तुलना) करण्यापूर्वी runtime guard म्हणून `areBigInts` वापरा.

### फायदे

- प्रत्येक घटक `bigint` आहे याची खात्री करते; संपूर्ण अॅरे जुळल्यावरच `true` परत करते.
- `isFilledArray` द्वारे डिझाइननुसार non-array आणि रिकामे अॅरे नाकारते, त्यामुळे अवैध इनपुट चुकून स्वीकारला जाणे टळते.
- जलद अपयश: non-`bigint` घटक आढळताच लगेच `false` परत करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `areBigInts(array)`

पॅरामीटर्स:

- `array`: तपासण्यासाठीचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // खरे
console.log(areBigInts(b)); // खोटे
console.log(areBigInts(c)); // खोटे
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areBigInts(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>ही फाइल 31 January 2026 at 23:26:39 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>