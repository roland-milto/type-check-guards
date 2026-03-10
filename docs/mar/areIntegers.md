# areIntegers

## वर्णन

`areIntegers` दिलेल्या अॅरेमधील सर्व घटक पूर्णांक आहेत का हे ठरवते; असल्यास `true` आणि अन्यथा `false` परत करते.

### वापर प्रकरण

तुमच्या लॉजिकला IDs, काउंटर, पेजिनेशन ऑफसेट्स, किंवा अॅरे इंडिसेस यांसारख्या पूर्णांक मूल्यांची भरलेली यादी आवश्यक
असताना, वापरकर्त्याने दिलेला किंवा बाह्य डेटा (उदा., क्वेरी पॅरामीटर्स, JSON पेलोड्स, CSV रो) पडताळण्यासाठी
`areIntegers` वापरा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `unknown[]` इनपुट्सना फक्त पूर्णांक असलेल्या `number[]` म्हणून हाताळण्यापूर्वी `areIntegers` ला रनटाइम गार्ड म्हणून
> वापरा. जर ते `false` परत करत असेल, तर इनपुट एकतर भरलेला अॅरे नाही किंवा त्यात किमान एक पूर्णांक नसलेले मूल्य आहे.

### फायदे

- फक्त प्रत्येक घटक पूर्णांक असेल तेव्हाच `true` परत करते; अन्यथा `false` परत करते.
- फक्त पूर्णांकांवरच होणाऱ्या ऑपरेशन्स (उदा., इंडेक्सिंग, मोजणी, IDs) करण्यापूर्वी अज्ञात इनपुटची पडताळणी करण्यास मदत
  करते.
- लवकर अपयशी ठरते: पूर्णांक नसलेला घटक सापडताच तपासणी थांबवते.

## वापर

### सिंटॅक्स

फंक्शन:

- `areIntegers(array)`

पॅरामीटर्स:

- `array`: पूर्णांक घटक आहेत का हे तपासण्यासाठीचा अॅरे.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // खरे
console.log(areIntegers(b)); // खरे
console.log(areIntegers(c)); // खोटे

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areIntegers(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>ही फाइल 31 January 2026 at 00:59:27 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>