# isOneOfType

## वर्णन

`isOneOfType` दिलेले `value` पुरवलेल्या type strings पैकी किमान एका शी जुळते का हे ठरवते; कोणतीही जुळणी आढळल्यास `true`
परत करते, अन्यथा `false`.

### वापर प्रकरण

सैल-टाइप केलेला किंवा बाह्य डेटा (उदा., parsed JSON, query parameters) पडताळा, पुढील लॉजिक करण्यापूर्वी अनेक स्वीकार्य
रनटाइम प्रकारांना (जसे `number` किंवा `string`) परवानगी देऊन.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> जेव्हा तुम्हाला रनटाइमवर एखादे मूल्य अनेक अनुमत प्रकारांपैकी कोणत्याहीशी जुळते का हे तपासायचे असेल तेव्हा
`isOneOfType` वापरा; किमान एक प्रकार जुळल्यास ते `true` परत करते, अन्यथा `false`.

### फायदे

- एका कॉलमध्ये अनेक अनुमत प्रकारांशी मूल्य तपासते आणि पहिल्या जुळणीनंतर `true` परत करते.
- `unknown` इनपुट्ससह कार्य करते, त्यामुळे रनटाइम सीमांवर (उदा., बाह्य डेटा, वापरकर्ता इनपुट) उपयुक्त ठरते.
- हे साधा बूलियन निकाल (`true`/`false`) देते, जो सशर्त लॉजिक आणि लवकर परतावा (early returns) यांसोबत चांगला जुळतो.

## वापर

### सिंटॅक्स

फंक्शन:

- `isOneOfType(value, types)`

पॅरामीटर्स:

- `value`: निर्दिष्ट प्रकारांशी तपासण्यासाठीचे मूल्य.
- `types`: मूल्याचे संभाव्य प्रकार दर्शवणाऱ्या type strings ची array.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // इनपुट रनटाइमला एक ऑब्जेक्ट आहे
}

console.log(isOneOfType(3, ["number", "string"])); // खरे
console.log(isOneOfType("hello", ["number", "boolean"])); // खोटे

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isOneOfType(value, types)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>ही फाइल 6 February 2026 at 13:53:11 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>