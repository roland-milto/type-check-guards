# isPlainObject

## विवरण

दिहल गइल `value` सादा ऑब्जेक्ट बा कि ना, ई जाँचेला आ अगर बा त `true`, नाहीं त `false` लौटावेला।

### उपयोग

कवनो `unknown` इनपुट (जइसे, parsed JSON, बाहरी डेटा, भा function arguments) के keys पढ़े से पहिले भा ओकरा के typed
configuration object में map करे से पहिले ई validate करीं कि ऊ सादा ऑब्जेक्ट बा।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `isPlainObject` `unknown` के record-जइसन ऑब्जेक्ट मान के रूप में माने से पहिले narrow करे में काम आवेला; ई खाली ओही
> मान खातिर `true` लौटावेला जेकर internal tag `[object Object]` होखे।

### फायदे

- कवनो मान सादा ऑब्जेक्ट (जइसे, `Object` / `{}`) बा कि ना, एकदम सरल आ भरोसेमंद तरीका से जाँच देला, आ `true` भा `false`
  लौटावेला।
- सादा ऑब्जेक्ट के array, function, `null`, आ अउरी गैर-सादा ऑब्जेक्ट प्रकारन से अलग पहिचाने में मदद करेला।
- TypeScript में type guard के रूप में उपयोगी बा, ताकि ऑब्जेक्ट के गुण (properties) एक्सेस करे से पहिले `unknown` मान के
  narrow कइल जा सके।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isPlainObject(value)`

पैरामीटर:

- `value`: सादा ऑब्जेक्ट होखे के स्थिति खातिर जाँच करे वाला मान।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // इहाँ input एगो सादा ऑब्जेक्ट बा
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // सही
console.log(isPlainObject([])); // गलत
console.log(isPlainObject(null)); // गलत

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isPlainObject(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>ई फाइल 6 February 2026 at 12:16:34 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>