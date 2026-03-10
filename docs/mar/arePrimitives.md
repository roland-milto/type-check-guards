# arePrimitives

## वर्णन

`arePrimitives` दिलेल्या, रिकामा नसलेल्या array मधील सर्व घटक primitive प्रकारचे आहेत का हे तपासते.

### वापर प्रकरण

serializing, hashing, logging करण्यापूर्वी किंवा objects स्वीकारू न शकणाऱ्या APIs कडे पाठवण्यापूर्वी, येणाऱ्या
डेटामध्ये (उदा., query parameters, CSV row values, किंवा IDs/tags ची यादी) फक्त primitive मूल्ये आहेत का हे पडताळा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> पुढील प्रक्रिया करण्यापूर्वी `unknown[]` मध्ये फक्त primitive मूल्ये (string, number, bigint, boolean, symbol,
> undefined, किंवा null) आहेत याची खात्री करायची असेल तेव्हा `arePrimitives` वापरा.

### फायदे

- फक्त तेव्हाच `true` परत करते जेव्हा प्रत्येक घटक primitive मूल्य असतो, त्यामुळे “objects/functions नाहीत” अशा arrays
  साठी हे एक कडक guard ठरते.
- जलद अपयशी ठरते: non-primitive घटक सापडताच लगेच `false` परत करते.
- non-arrays आणि रिकाम्या arrays साठीही `false` परत करते (filled-array check द्वारे), त्यामुळे अवैध input चुकून
  स्वीकारला जाणे टाळते.

## वापर

### सिंटॅक्स

फंक्शन:

- `arePrimitives(array)`

पॅरामीटर्स:

- `array`: primitive प्रकारच्या घटकांसाठी तपासायचा array.

### लोकल फंक्शन इम्पोर्ट

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // खरे
const r2 = arePrimitives(b); // खरे
const r3 = arePrimitives(c); // खोटे
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.arePrimitives(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>ही फाइल 31 January 2026 at 00:05:33 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>