# isObject

## वर्णन

दिलेल्या `value` हे `object` आहे का ( `null` वगळून) हे ठरवते.

### वापर प्रकरण

Properties access करण्यापूर्वी unknown inputs (उदा., parsed JSON, API responses, event payloads) validate करण्यासाठी
`isObject` वापरा, ज्यामुळे मूल्य object आहे आणि `null` नाही याची खात्री होते.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `isObject` हा runtime guard आहे जो boolean परत करतो; तो एखाद्या विशिष्ट object shape पर्यंत narrow करत नाही. अधिक
> मजबूत typing हवे असल्यास अतिरिक्त तपासण्या (उदा., property अस्तित्व) यांसोबत तो एकत्र वापरा.

### फायदे

- `typeof` `"object"` असलेल्या आणि `null` नसलेल्या मूल्यांसाठीच `true` परत करते.
- JavaScript मधील सामान्य अडचण टाळते जिथे `null` ला अन्यथा object म्हणून वागवले जाईल.
- साध्या objects साठी तसेच built-in object instances (उदा., `Date`, `RegExp`) साठी कार्य करते.
- Defensive programming आणि input validation साठी योग्य अशी सोपी, जलद runtime तपासणी.

## वापर

### सिंटॅक्स

फंक्शन:

- `isObject(value)`

पॅरामीटर्स:

- `value`: `object` आहे का हे तपासण्यासाठीचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // इनपुट रनटाइमला नॉन-नल ऑब्जेक्ट आहे
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isObject(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isObject](../_analysis/isObject.md)

<br>

---

<small>ही फाइल 31 January 2026 at 00:19:19 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>