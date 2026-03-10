# isSet

## विवरण

निर्धारित करेला कि दिहल गइल मान `Set` बा कि ना।

### उपयोग

बाहरी स्रोत (जइसे JSON parsing, user input, भा third-party APIs) से आवे वाला इनपुट के सत्यापित करीं ताकि `Set` ऑपरेशन
करे से पहिले मान `Set` होखे।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `unknown` मान के संकुचित करे खातिर `isSet` के इस्तेमाल करीं, तबे `Set`-विशेष API जइसे `.add`, `.has`, भा `.size` के
> कॉल करीं।

### फायदे

- ई जांच करे खातिर एगो सरल रनटाइम तरीका देला कि कौनों मान `Set` बा कि ना।
- जब मान `Set` ना होखे त जल्दी ब्रांचिंग क के टाइप एरर से बचे में मदद करेला।
- कौनों भी `Set` सामग्री (खाली भा भरल) के साथ काम करेला आ लगातार `true`/`false` लौटावेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isSet(value)`

पैरामीटर:

- `value`: जाँच करे खातिर मान।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a रनटाइम पर Set बा
  console.log(a.size);
}

console.log(isSet(b)); // झूठ
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isSet(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isSet](../_analysis/isSet.md)

<br>

---

<small>ई फाइल 30 January 2026 at 23:08:54 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>