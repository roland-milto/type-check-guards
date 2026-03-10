# isIndexFound

## वर्णन

`isIndexFound` दिलेले मूल्य नॉन-नेगेटिव्ह पूर्णांक आहे का हे ठरवते, म्हणजे इंडेक्स सापडला आहे असे सूचित करते.

### वापर प्रकरण

शोधाचा निकाल वापरण्यायोग्य इंडेक्स (पूर्णांक `>= 0`) दर्शवतो का हे पडताळा, array किंवा string मध्ये इंडेक्सिंग
करण्यापूर्वी, जेणेकरून `-1` किंवा संख्या नसलेली मूल्ये चुकून वापरली जाणार नाहीत.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `indexOf`, `findIndex`, किंवा कस्टम शोध यांसारख्या ऑपरेशन्सनंतर `isIndexFound` वापरा, जिथे `-1` (किंवा इतर अवैध
> मूल्ये) “not found” दर्शवू शकतात. ते `true` परत केल्यावर, ते मूल्य संख्या असते आणि array/string इंडेक्स म्हणून
> वापरण्यास
> सुरक्षित असते.

### फायदे

- नॉन-नेगेटिव्ह पूर्णांक आहे का हे तपासून इंडेक्स सापडला आहे की नाही हे ओळखण्यासाठी एक सोपा टाइप गार्ड प्रदान करते.
- फक्त वैध इंडेक्स-सदृश मूल्यांसाठी (`>= 0` असलेले पूर्णांक) `true` परत करते; निगेटिव्ह, अपूर्णांक (पूर्णांक नसलेली),
  आणि संख्या नसलेली मूल्ये नाकारते.
- `-1` ला “not found” म्हणून परत करणाऱ्या API सोबत काम करताना off-by-one आणि sentinel-value प्रकारच्या चुका टाळण्यास मदत
  करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isIndexFound(value)`

पॅरामीटर्स:

- `value`: नॉन-नेगेटिव्ह पूर्णांक आहे का हे तपासण्यासाठीचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx इथे एक संख्या आहे आणि >= 0 आहे
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// indexOf सोबतचा नेहमीचा वापर
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isIndexFound(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>ही फाइल 31 January 2026 at 00:46:52 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>