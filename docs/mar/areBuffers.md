# areBuffers

## वर्णन

`areBuffers` दिलेले मूल्य हे रिकामा नसलेला, भरलेला अ‍ॅरे आहे का आणि त्यातील प्रत्येक घटक `Buffer` आहे का हे तपासते; तसे
असल्यास `true` आणि अन्यथा `false` परत करते.

### वापर प्रकरण

येणाऱ्या chunk अ‍ॅरेज (उदा., streams, file uploads, किंवा network packets मधून) वैध ठरवा, जेणेकरून concatenating,
decoding, किंवा त्यांना cryptographic किंवा binary-processing फंक्शन्सकडे पास करण्यापूर्वी सर्व भाग `Buffer` इन्स्टन्सेस
आहेत याची खात्री होईल.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `Buffer.concat` सारख्या Buffer-विशिष्ट APIs कॉल करण्यापूर्वी `unknown[]` वैध ठरवण्यासाठी `areBuffers` वापरा, ज्यामुळे
> प्रत्येक घटक `Buffer` असतानाच फंक्शन `true` परत करते याची खात्री होते.

### फायदे

- इनपुटमधील प्रत्येक घटक Node.js `Buffer` इन्स्टन्स आहे याची खात्री करते; संपूर्ण अ‍ॅरे जुळल्यावरच `true` परत करते.
- रिकामा नसलेला, भरलेला अ‍ॅरे आवश्यक ठेऊन अवैध इनपुट्स लवकर नाकारते; रिकाम्या अ‍ॅरेसाठी किंवा अ‍ॅरे नसल्यास `false` परत
  करते.
- फक्त बफरवर चालणाऱ्या ऑपरेशन्स (उदा., concatenation, hashing, binary protocols) करण्यापूर्वी गार्ड म्हणून उपयुक्त.

## वापर

### सिंटॅक्स

फंक्शन:

- `areBuffers(array)`

पॅरामीटर्स:

- `array`: बफर इन्स्टन्सेससाठी तपासायचा अ‍ॅरे.

### लोकल फंक्शन इम्पोर्ट

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.areBuffers(array)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>ही फाइल 31 January 2026 at 16:26:13 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>