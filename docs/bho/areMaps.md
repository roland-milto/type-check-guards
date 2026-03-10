# areMaps

## विवरण

`areMaps` तय करेला कि दिहल गइल array खाली नइखे आ ओकर सभे तत्व `Map` के instance बाड़ें कि ना।

### उपयोग

Unknown input (जइसे JSON parsing, external APIs, भा dynamic sources से) के validate करीं, ओकरा के non-empty `Map`
objects के सूची मान के इस्तेमाल करे से पहिले।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> खाली array खातिर `false` लौटावेला; ई `true` तभिए लौटावेला जब array भरल होखे आ हर तत्व `Map` होखे।

### फायदे

- ई सुनिश्चित करेला कि हर तत्व `Map` के instance होखे, आ `true` तभिए लौटावेला जब पूरा array जाँच पास कर लेवे।
- डिजाइन से खाली array के अस्वीकार करेला, जेकरा से “कवनो डेटा नइखे” के गलती से वैध input मान लिहल ना जाला।
- कलेक्शन में `Map`-specific ऑपरेशन (जइसे `.get()`, `.set()`, iteration) करे से पहिले guard के रूप में उपयोगी बा।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areMaps(array)`

पैरामीटर:

- `array`: जाँच करे खातिर array।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items के runtime पर Map instances के non-empty array होखे के गारंटी बा
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // ई false होखेला: खाली arrays खातिर, भा अइसन arrays खातिर जेह में कवनो non-Map value होखे
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areMaps(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>ई फाइल 31 January 2026 at 16:11:44 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>