# isPromise

## विवरण

तय करेला कि दिहल गइल मान `Promise` बा कि ना।

### उपयोग

जब अनजान इनपुट के `Promise` मान के इस्तेमाल करे से पहिले वैलिडेट करे के होखे—जइसे plugins, dynamic imports, भा ढीला-टाइप
API से लौटल मान संभारे में—त `isPromise` के इस्तेमाल करीं।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `isPromise` `instanceof Promise` से जांच करेला, एहसे ई खाली असली `Promise` इंस्टेंस खातिरे `true` लौटावेला (सामान्य
> thenables खातिर ना)।

### फायदे

- ई जांचे खातिर एगो सरल रनटाइम चेक देला कि कवनो मान `Promise` बा कि ना।
- जे कोड पाथ में असली `Promise` इंस्टेंस के जरूरत होखे, ओह में गार्ड लगावे में मदद करेला, आ भरोसेमंद तरीका से `true` भा
  `false` लौटावेला।
- “thenable” ऑब्जेक्ट (जइसे, `{ then() {} }`) से होखे वाला गलत पॉजिटिव से बचे ला, काहे कि ई असली `Promise` इंस्टेंस के
  मांग करेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isPromise(value)`

पैरामीटर:

- `value`: जवन मान के जांचल जाई।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // सही
console.log(isPromise(b)); // गलत
console.log(isPromise(123)); // गलत
console.log(isPromise(null)); // गलत

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isPromise(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>ई फाइल 30 January 2026 at 23:52:11 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>