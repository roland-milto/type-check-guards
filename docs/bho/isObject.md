# isObject

## विवरण

देल गइल `value` के `object` ( `null` के छोड़ के) होखे के निर्धारण करेला।

### उपयोग

`isObject` के इस्तेमाल अनजान इनपुट (जइसे, parsed JSON, API responses, event payloads) के वैलिडेट करे खातिर करीं,
प्रॉपर्टी एक्सेस करे से पहिले, ताकि पक्का हो जाव कि मान ऑब्जेक्ट बा आ `null` नइखे।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `isObject` एगो रनटाइम गार्ड बा जे boolean लौटावेला; ई कवनो खास ऑब्जेक्ट शेप तक संकुचित (narrow) नइखे करत। जब रउआ के
> अउरी मजबूत टाइपिंग चाहीं, त अतिरिक्त जाँच (जइसे, प्रॉपर्टी मौजूदगी) के साथे एकरा के मिलाके इस्तेमाल करीं।

### फायदे

- `true` खाली ओह गैर-`null` मान खातिर लौटावेला जेकर `typeof` `"object"` होखे।
- JavaScript के आम गलती से बचावेला जहाँ `null` के ना तऽ ऑब्जेक्ट मान लिहल जाला।
- सादा ऑब्जेक्ट आ बिल्ट-इन ऑब्जेक्ट इंस्टेंस (जइसे `Date`, `RegExp`) खातिर काम करेला।
- सरल, तेज रनटाइम जाँच, जे डिफेंसिव प्रोग्रामिंग आ इनपुट वैलिडेशन खातिर ठीक बा।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isObject(value)`

पैरामीटर:

- `value`: जाँचल जाए वाला मान कि ई `object` बा कि ना।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input रनटाइम पर नॉन-नल ऑब्जेक्ट बा
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isObject(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isObject](../_analysis/isObject.md)

<br>

---

<small>ई फाइल 31 January 2026 at 00:17:40 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>