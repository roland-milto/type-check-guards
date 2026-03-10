# areBuffers

## विवरण

`areBuffers` जाँचेला कि दिहल मान गैर-खाली, भरल एरे बा कि ना जहाँ हर तत्व `Buffer` बा, अइसन होखे पर `true` आ ना होखे पर
`false` लौटावेला।

### उपयोग

आवे वाला chunk एरे (जइसे streams, file uploads, भा network packets से) के वैलिडेट करीं ताकि concatenating, decoding, भा
cryptographic/बाइनरी-प्रोसेसिंग फंक्शन में पास करे से पहिले सब हिस्सा `Buffer` इंस्टेंस होखे।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areBuffers` के इस्तेमाल `unknown[]` के वैलिडेट करे खातिर करीं, Buffer-विशेष API जइसे `Buffer.concat` कॉल करे से
> पहिले, ताकि फंक्शन खाली तबे `true` लौटावे जब हर तत्व `Buffer` होखे।

### फायदे

- इनपुट में हर तत्व Node.js `Buffer` इंस्टेंस होखे के सुनिश्चित करेला, आ खाली तबे `true` लौटावेला जब पूरा एरे मेल खाला।
- गैर-मान्य इनपुट के जल्दी खारिज करेला काहे कि गैर-खाली, भरल एरे जरूरी बा; खाली एरे भा एरे ना होखे पर `false` लौटावेला।
- बफर-खाली ऑपरेशन करे से पहिले गार्ड के रूप में उपयोगी बा (जइसे concatenation, hashing, binary protocols)।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areBuffers(array)`

पैरामीटर:

- `array`: बफर इंस्टेंस खातिर जाँचल जाए वाला एरे।

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

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areBuffers(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>ई फाइल 31 January 2026 at 16:24:22 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>