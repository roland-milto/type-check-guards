# areUndefined

## वर्णन

`areUndefined` दिलेल्या अ‍ॅरेमधील प्रत्येक घटक `undefined` आहे का ते तपासते.

### वापर प्रकरण

ऐच्छिक परिणामांची यादीमध्ये कोणतीही प्रत्यक्ष मूल्ये नाहीत (फक्त `undefined`) याचे प्रमाणीकरण करा; उदा., mapping lookups
नंतर जिथे missing entries `undefined` म्हणून दर्शविल्या जातात, आणि तुम्हाला सर्व lookups अपयशी ठरले आहेत याची खात्री
करायची आहे.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `unknown[]` मध्ये फक्त `undefined` मूल्ये आहेत असे assert करायचे असेल तेव्हा `areUndefined` वापरा; अंतर्गत
`isFilledArray` तपासणीमुळे रिकाम्या अ‍ॅरेसाठी आणि नॉन-अ‍ॅरे/अवैध इनपुटसाठी ते `false` परत करते.

### फायदे

- `isFilledArray` द्वारे भरलेला अ‍ॅरे आवश्यक करून नॉन-अ‍ॅरे आणि रिकाम्या अ‍ॅरेसाठी `false` परत करते.
- प्रत्येक घटक `undefined` आहे याची खात्री करते, फक्त काही नाही, त्यामुळे उद्देश स्पष्ट होतो.
- अज्ञात इनपुट संग्रहांचे प्रमाणीकरण करताना guard-शैलीतील predicate म्हणून उपयुक्त.

## वापर

### सिंटॅक्स

फंक्शन:

- `areUndefined(array)`

पॅरामीटर्स:

- `array`: `undefined` घटकांसाठी तपासायचा अ‍ॅरे.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// टीप: रिकाम्या अ‍ॅरेसाठी false परत करते
const r4 = areUndefined([]); // false
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areUndefined(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>ही फाइल 30 January 2026 at 13:56:49 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>