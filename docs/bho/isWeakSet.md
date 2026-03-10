# isWeakSet

## विवरण

निर्धारित करेला कि दिहल गइल `value` ऑब्जेक्टन के `WeakSet` बा कि ना।

### उपयोग

जब रउआ बिना टाइप वाला इनपुट (जइसे बाहरी API, डायनामिक कॉन्फिगरेशन, भा `unknown` मान) स्वीकार करत बानी आ `WeakSet`-विशेष
ऑपरेशन इस्तेमाल करे से पहिले ई पक्का करे के जरूरत होखे कि ई `WeakSet` बा, तब `isWeakSet` के इस्तेमाल करीं।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> रनटाइम पर `unknown` मान के `WeakSet<object>` में नैरो करे खातिर `isWeakSet` के इस्तेमाल करीं; ध्यान दीं कि `WeakSet`
> में खाली ऑब्जेक्ट रेफरेंस ही रखल जा सकेला।

### फायदे

- ई जांचे खातिर एगो सरल रनटाइम चेक देला कि कउनो मान `WeakSet` बा कि ना।
- `WeakSet` के उदाहरणन के ही ओइसहीं मान के टाइप गलती से बचावे में मदद करेला।
- कउनो भी `unknown` इनपुट के साथ काम करेला आ साफ बूलियन नतीजा (`true`/`false`) लौटावेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isWeakSet(value)`

पैरामीटर:

- `value`: जवन मान के जांचल जाई।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // सही
console.log(isWeakSet(b)); // गलत

if (isWeakSet(a)) {
  // a रनटाइम पर WeakSet बा
}
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isWeakSet(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>ई फाइल 30 January 2026 at 14:14:00 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>