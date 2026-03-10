# areRegExes

## वर्णन

`areRegExes` तपासते की एखादे मूल्य हे फक्त `RegExp` ऑब्जेक्ट्स असलेले भरलेले अॅरे आहे का.

### वापर प्रकरण

कॉन्फिगरेशन पर्याय (उदा., allow/deny patterns ची यादी) matching साठी वापरण्यापूर्वी तो regular expressions चा रिकामा
नसलेला अॅरे आहे याची पडताळणी करा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> iterate करण्यापूर्वी किंवा patterns compose करण्यापूर्वी `unknown` ला `RegExp[]` पर्यंत narrow करण्यासाठी `areRegExes`
> वापरा.

### फायदे

- मूल्य हे रिकामे नसलेले अॅरे आहे आणि त्यातील प्रत्येक घटक `RegExp` चे instance आहे याची खात्री करते.
- वापरकर्ता इनपुट किंवा कॉन्फिगरेशनची पडताळणी करण्यासाठी सोपा boolean guard (`true`/`false`) देते.
- नंतरचा कोड सर्व आयटम्स regular-expression ऑपरेशन्सना समर्थन देतात असे गृहित धरतो तेव्हा runtime errors टाळण्यास मदत
  करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `areRegExes(array)`

पॅरामीटर्स:

- `array`: तपासायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // येथे patterns हे RegExp चे अ‍ॅरे आहे
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areRegExes(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>ही फाइल 30 January 2026 at 23:19:50 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>