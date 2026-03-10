# isPlainObject

## वर्णन

दिलेल्या `value` चे साधे ऑब्जेक्ट आहे की नाही हे तपासते आणि असल्यास `true`, अन्यथा `false` परत करते.

### वापर प्रकरण

`unknown` इनपुट (उदा., parsed JSON, बाह्य डेटा, किंवा फंक्शन arguments) कीज वाचण्यापूर्वी किंवा ते typed configuration
ऑब्जेक्टमध्ये मॅप करण्यापूर्वी ते साधे ऑब्जेक्ट आहे याची पडताळणी करा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `isPlainObject` हे `unknown` ला record-सदृश ऑब्जेक्ट म्हणून हाताळण्यापूर्वी संकुचित (narrow) करण्यासाठी उपयुक्त आहे;
> ते फक्त ज्यांचा internal tag `[object Object]` आहे अशा मूल्यांसाठीच `true` परत करते.

### फायदे

- एखादे मूल्य साधे ऑब्जेक्ट (म्हणजे `Object` / `{}`) आहे की नाही याची सोपी, विश्वासार्ह तपासणी देते आणि `true` किंवा
  `false` परत करते.
- साधे ऑब्जेक्ट्स आणि अ‍ॅरे, फंक्शन्स, `null`, तसेच इतर non-plain ऑब्जेक्ट प्रकार यांमध्ये फरक ओळखण्यास मदत करते.
- ऑब्जेक्ट प्रॉपर्टीज अ‍ॅक्सेस करण्यापूर्वी `unknown` मूल्ये संकुचित (narrow) करण्यासाठी TypeScript मध्ये type guard
  म्हणून उपयुक्त.

## वापर

### सिंटॅक्स

फंक्शन:

- `isPlainObject(value)`

पॅरामीटर्स:

- `value`: साधे ऑब्जेक्ट स्थितीसाठी तपासायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // येथे input हा साधा ऑब्जेक्ट आहे
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isPlainObject(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>ही फाइल 6 February 2026 at 12:18:39 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>