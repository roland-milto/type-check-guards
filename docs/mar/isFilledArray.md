# isFilledArray

## वर्णन

`value` ही किमान एक घटक असलेली array आहे का हे तपासते आणि `true` किंवा `false` परत करते.

### वापर प्रकरण

iterate करण्यापूर्वी, पहिला घटक access करण्यापूर्वी, किंवा किमान एक item आवश्यक असलेली logic लागू करण्यापूर्वी येणारा
डेटा (उदा., API payloads, form values, configuration) validate करण्यासाठी `isFilledArray` वापरा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `isFilledArray` हा runtime guard आहे जो boolean परत करतो; array रिकामी नाही याची खात्री करण्यापलीकडे तो element types
> narrow करत नाही.

### फायदे

- `Array.isArray` आणि length तपासणी वापरून रिकामी नसलेली array आहे का हे सोप्या आणि जलद पद्धतीने तपासता येते.
- कोडला array मध्ये किमान एक घटक आहे असे गृहित धरल्यामुळे होणाऱ्या runtime त्रुटी टाळण्यास मदत करते.
- स्पष्ट boolean निकाल: रिकामी नसलेल्या arrays साठी `true` आणि अन्यथा `false` परत करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isFilledArray(value)`

पॅरामीटर्स:

- `value`: रिकामी नसलेली array आहे का हे तपासण्यासाठीचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // इनपुट रनटाइमला रिकामी नसलेली अ‍ॅरे आहे
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isFilledArray(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>ही फाइल 6 February 2026 at 11:47:57 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>