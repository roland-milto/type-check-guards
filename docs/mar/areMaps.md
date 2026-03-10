# areMaps

## वर्णन

`areMaps` दिलेला array रिकामा नाही आणि त्यातील सर्व घटक `Map` instances आहेत का हे ठरवते.

### वापर प्रकरण

अज्ञात इनपुट (उदा., JSON parsing, बाह्य APIs, किंवा dynamic sources मधून) `Map` ऑब्जेक्ट्सची रिकामी नसलेली यादी म्हणून
हाताळण्यापूर्वी त्याची पडताळणी करा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> रिकाम्या array साठी `false` परत करते; array भरलेला असेल आणि प्रत्येक घटक `Map` असेल तेव्हाच `true` परत करते.

### फायदे

- प्रत्येक घटक `Map` चा instance आहे याची खात्री करते; संपूर्ण array तपासणी पास झाल्यावरच `true` परत करते.
- डिझाइननुसार रिकामे array नाकारते, त्यामुळे “डेटा नाही” हे वैध इनपुट म्हणून चुकून स्वीकारले जाणे टाळते.
- संग्रहावर `Map`-विशिष्ट ऑपरेशन्स (उदा., `.get()`, `.set()`, iteration) करण्यापूर्वी guard म्हणून उपयुक्त.

## वापर

### सिंटॅक्स

फंक्शन:

- `areMaps(array)`

पॅरामीटर्स:

- `array`: तपासण्यासाठीचा array.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items हे रनटाइममध्ये Map उदाहरणांचा रिकामा नसलेला अॅरे असल्याची हमी असते
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // यासाठी false: रिकामे अॅरे, किंवा कोणतेही non-Map मूल्य असलेले अॅरे
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areMaps(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>ही फाइल 31 January 2026 at 16:13:31 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>