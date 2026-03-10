# isArray

## वर्णन

`isArray` दिलेले मूल्य array आहे का ते तपासते आणि असल्यास `true`, अन्यथा `false` परत करते.

### वापर प्रकरण

अज्ञात डेटा (उदा., parsed JSON किंवा API responses) validate करा, जेणेकरून iterate करणे, indexing करणे, किंवा `.length`
access करण्यापूर्वी मूल्य array आहे याची खात्री होईल.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> arrays साठी runtime check हवा असेल तेव्हा `isArray` वापरा; ते boolean परत करते आणि `unknown` मूल्यांसोबत कॉल करणे
> सुरक्षित आहे.

### फायदे

- वेगवेगळ्या realm मध्ये (उदा., iframes) विश्वासार्ह array ओळखण्यासाठी अंगभूत `Array.isArray` वापरते.
- guards आणि branching logic साठी योग्य असा साधा boolean परिणाम (`true`/`false`) परत करते.
- parameter `unknown` असल्यामुळे कोणत्याही input type सोबत काम करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isArray(value)`

पॅरामीटर्स:

- `value`: तपासायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // इनपुट रनटाइमला अ‍ॅरे आहे
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isArray(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isArray](../_analysis/isArray.md)

<br>

---

<small>ही फाइल 6 February 2026 at 11:31:14 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>