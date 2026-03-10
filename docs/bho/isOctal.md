# isOctal

## विवरण

तय करेला कि कवनो मान वैध ऑक्टल लिटरल स्ट्रिंग बा कि ना (जइसे `0o755`)।

### उपयोग

यूजर इनपुट भा कॉन्फिगरेशन वैल्यू के वैलिडेट करीं जेकरा के ऑक्टल लिटरल स्ट्रिंग के रूप में दिहल जरूरी होखे (उदाहरण खातिर,
फाइल परमिशन मोड जइसे `0o644`) पार्स भा कन्वर्ट करे से पहिले।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `isOctal` एगो टाइप गार्ड बा (`value is string`)। `true` नतीजा के बाद, TypeScript जाँचल गइल वेरिएबल के `string` में
> नैरो कर देला।

### फायदे

- कड़ाई से टाइप गार्ड देला: `true` खाली तबे लौटावेला जब इनपुट एगो स्ट्रिंग होखे जे ऑक्टल लिटरल फॉर्मेट से मेल खाए।
- खाली स्ट्रिंग आ आगे/पीछे व्हाइटस्पेस (ASCII कंट्रोल/स्पेस) वाला स्ट्रिंग के अस्वीकार करेला, जेकरा से गलती से मैच होखे
  के संभावना घटेला।
- वैकल्पिक साइन के सपोर्ट करेला आ `0o`/`0O` प्रीफिक्स खातिर केस-इन्सेंसिटिव बा।
- नॉन-स्ट्रिंग इनपुट खातिर ढीला बा: थ्रो करे के बजाय `false` लौटावेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isOctal(value)`

पैरामीटर:

- `value`: जाँचल जाए वाला मान।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // सही
console.log(isOctal(b)); // सही
console.log(isOctal(c)); // गलत
console.log(isOctal(d)); // गलत

if (isOctal(a)) {
  // इहाँ a स्ट्रिंग बा
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isOctal(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>ई फाइल 30 January 2026 at 14:44:07 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>