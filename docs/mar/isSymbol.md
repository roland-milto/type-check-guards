# isSymbol

## वर्णन

`isSymbol` दिलेले मूल्य `symbol` प्रकाराचे आहे का हे ठरवते; symbols साठी `true` आणि अन्यथा `false` परत करते.

### वापर प्रकरण

एखादे `unknown` मूल्य unique identifier, registry key, किंवा objects आणि maps मध्ये computed property key म्हणून
वापरण्यापूर्वी ते `symbol` आहे याची पडताळणी करा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> symbol-संबंधित फंक्शन्स कॉल करण्यापूर्वी किंवा computed property key म्हणून वापरण्यापूर्वी `unknown` ला `symbol`
> पर्यंत narrow करण्यासाठी `isSymbol` वापरा.

### फायदे

- JavaScript `symbol` या primitive प्रकारासाठी सोपी आणि विश्वासार्ह runtime तपासणी प्रदान करते.
- symbol-विशिष्ट API वापरण्यापूर्वी किंवा की म्हणून साठवण्यापूर्वी `unknown` मूल्ये narrow करण्यात मदत करते.
- `typeof` वापरून चुकीचे positive परिणाम टाळते, कारण `symbol` मूल्ये ओळखण्यासाठी हीच canonical पद्धत आहे.

## वापर

### सिंटॅक्स

फंक्शन:

- `isSymbol(value)`

पॅरामीटर्स:

- `value`: तपासायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input इथे एक सिम्बॉल आहे
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isSymbol(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>ही फाइल 30 January 2026 at 14:27:42 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>