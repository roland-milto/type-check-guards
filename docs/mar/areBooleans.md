# areBooleans

## वर्णन

`areBooleans` दिलेल्या नॉन-एम्प्टी array मध्ये फक्त boolean मूल्ये आहेत का ते तपासते; असल्यास `true` परत करते, अन्यथा
`false`.

### वापर प्रकरण

वापरकर्त्याने दिलेला किंवा बाह्य डेटा (उदा., JSON payloads, query params, config arrays) पडताळून पाहा, जेणेकरून
नॉन-एम्प्टी यादीत फक्त booleans आहेत याची खात्री करून मग boolean logic लागू करता येईल किंवा `boolean[]` अपेक्षित
असलेल्या APIs कडे तो डेटा पाठवता येईल.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `unknown[]` ला `boolean[]` म्हणून हाताळण्यापूर्वी `areBooleans` वापरून पडताळणी करा; रिकाम्या arrays साठी ते `false`
> परत करते, त्यामुळे रिकामी यादी परवानगी द्यायची असल्यास तो केस स्पष्टपणे हाताळा.

### फायदे

- फक्त तेव्हाच `true` परत करते जेव्हा प्रत्येक घटक boolean असतो आणि इनपुट नॉन-एम्प्टी array असतो.
- रिकामे arrays नाकारून ( `false` परत करून) चुकीचे positive परिणाम टाळते.
- boolean-फक्त ऑपरेशन्सपूर्वी runtime guard म्हणून चांगले काम करते (उदा., `every`, `some`, logical reductions).

## वापर

### सिंटॅक्स

फंक्शन:

- `areBooleans(array)`

पॅरामीटर्स:

- `array`: boolean घटकांसाठी तपासायचा array.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areBooleans(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>ही फाइल 30 January 2026 at 14:41:13 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>