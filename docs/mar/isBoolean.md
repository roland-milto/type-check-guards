# isBoolean

## वर्णन

दिलेलं मूल्य `boolean` आहे की नाही हे ठरवते.

### वापर प्रकरण

बाह्य किंवा टाइप नसलेला डेटा (उदा., environment variables, JSON payloads, query parameters) पडताळा, जेणेकरून conditional
logic मध्ये वापरण्यापूर्वी मूल्य `boolean` आहे याची खात्री होईल.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> बूलियन ऑपरेशन्स लागू करण्यापूर्वी `unknown` ला `boolean` मध्ये संकुचित (narrow) करण्यासाठी `isBoolean` वापरा.

### फायदे

- `typeof` वापरून सोपी आणि जलद रनटाइम तपासणी.
- बूलियन-विशिष्ट लॉजिक लागू करण्यापूर्वी अज्ञात इनपुटची पडताळणी करण्यास मदत करते.
- अंदाज करता येईल असा `boolean` निकाल (`true`/`false`) परत करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isBoolean(value)`

पॅरामीटर्स:

- `value`: तपासायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input येथे boolean आहे
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isBoolean(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>ही फाइल 30 January 2026 at 14:37:05 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>