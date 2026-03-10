# isWeakMap

## विवरण

निर्धारित करेला कि दिहल गइल `value` एगो `WeakMap` इंस्टेंस बा कि ना।

### उपयोग

`isWeakMap` के तब इस्तेमाल करीं जब रउआँ कवनो `unknown` मान स्वीकार करत बानी (जइसे, पब्लिक API, प्लगइन सिस्टम, भा
डायनामिक कॉन्फिगरेशन से) आ `WeakMap`-विशेष व्यवहार इस्तेमाल करे से पहिले ई पक्का करे के जरूरत होखे कि ई `WeakMap` बा।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `isWeakMap` एगो `instanceof WeakMap` चेक करेला; ई एगो रनटाइम गार्ड बा जवन खाली असली `WeakMap` इंस्टेंस खातिर `true`
> लौटावेला।

### फायदे

- ई जांचे खातिर सरल रनटाइम चेक कि कवनो मान `WeakMap` बा कि ना।
- `WeakMap` चाहीं वाला API के गलत इस्तेमाल से बचे में मदद करेला, काहे कि ई फेंके के बजाय `true`/`false` लौटावेला।
- `unknown` इनपुट के साथ काम करेला, एहसे मॉड्यूल बाउंड्री पर (जइसे, पार्सिंग, बाहरी डेटा, भा अनटाइप्ड कोड) ई सुविधाजनक
  बा।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isWeakMap(value)`

पैरामीटर:

- `value`: जवन मान के जांचल जाला।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a रनटाइम पर WeakMap बा
}

console.log(isWeakMap(a)); // सही
console.log(isWeakMap(b)); // गलत
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isWeakMap(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>ई फाइल 30 January 2026 at 13:24:15 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>