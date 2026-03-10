# areBuffers

## विवरण

`areBuffers` जाँचता है कि दिया गया मान एक गैर-खाली, भरी हुई array है जिसमें हर तत्व `Buffer` है; ऐसा होने पर `true` और
अन्यथा `false` लौटाता है।

### उपयोग का मामला

आने वाली chunk arrays (जैसे streams, file uploads, या network packets से) को validate करें ताकि concatenating, decoding,
या उन्हें cryptographic या binary-processing फ़ंक्शन्स को पास करने से पहले यह सुनिश्चित हो सके कि सभी भाग `Buffer`
इंस्टेंस हैं।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `areBuffers` का उपयोग `unknown[]` को validate करने के लिए करें, इससे पहले कि आप `Buffer.concat` जैसी Buffer-specific
> APIs कॉल करें; यह सुनिश्चित करता है कि फ़ंक्शन केवल तब `true` लौटाए जब हर तत्व `Buffer` हो।

### फायदे

- यह सुनिश्चित करता है कि इनपुट का हर तत्व Node.js `Buffer` इंस्टेंस हो, और केवल तब `true` लौटाता है जब पूरी array मेल
  खाती हो।
- गैर-खाली, भरी हुई array की आवश्यकता रखकर अमान्य इनपुट को जल्दी अस्वीकार करता है; खाली arrays या non-arrays के लिए
  `false` लौटाता है।
- केवल-बफर ऑपरेशन्स (जैसे concatenation, hashing, binary protocols) करने से पहले guard के रूप में उपयोगी।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areBuffers(array)`

पैरामीटर:

- `array`: बफर इंस्टेंस के लिए जाँची जाने वाली array।

### लोकल फ़ंक्शन इम्पोर्ट

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

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areBuffers(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 4:25:26 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>