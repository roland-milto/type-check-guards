# isOctal

## वर्णन

एखादे मूल्य वैध ऑक्टल लिटरल स्ट्रिंग आहे का (उदा. `0o755`) हे ठरवते.

### वापर प्रकरण

पार्सिंग किंवा कन्व्हर्ट करण्यापूर्वी, ऑक्टल लिटरल स्ट्रिंग म्हणून व्यक्त करणे आवश्यक असलेले युजर इनपुट किंवा
कॉन्फिगरेशन मूल्ये (उदाहरणार्थ, `0o644` सारखे फाइल परवानगी मोड्स) वैध आहेत का ते पडताळा.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `isOctal` हा एक type guard आहे (`value is string`). `true` परिणामानंतर, TypeScript तपासलेल्या व्हेरिएबलचा प्रकार
`string` असा संकुचित करते.

### फायदे

- कठोर प्रकार गार्ड प्रदान करते: इनपुट ऑक्टल लिटरल फॉरमॅटशी जुळणारी स्ट्रिंग असेल तेव्हाच `true` परत करते.
- रिकाम्या स्ट्रिंग्स आणि सुरुवाती/शेवटी व्हाइटस्पेस (ASCII control/space) असलेल्या स्ट्रिंग्स नाकारते, त्यामुळे चुकून
  होणारी जुळणी कमी होते.
- ऐच्छिक साइनला समर्थन देते आणि `0o`/`0O` प्रीफिक्ससाठी केस-इन्सेन्सिटिव्ह आहे.
- नॉन-स्ट्रिंग इनपुटसाठी `false` परत करून (throw न करता) लवचिक वर्तन करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isOctal(value)`

पॅरामीटर्स:

- `value`: तपासायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // खरे
console.log(isOctal(b)); // खरे
console.log(isOctal(c)); // खोटे
console.log(isOctal(d)); // खोटे

if (isOctal(a)) {
  // येथे a ही स्ट्रिंग आहे
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isOctal(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>ही फाइल 30 January 2026 at 15:42:13 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>