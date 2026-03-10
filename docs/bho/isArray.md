# isArray

## विवरण

`isArray` जांचेला कि दिहल गइल मान array बा कि ना आ अगर बा त `true` लौटावेला, नाहीं त `false`।

### उपयोग

अनजान data (जइसे कि parsed JSON भा API responses) के validate करीं ताकि iterate करे से पहिले, indexing करे से पहिले, भा
`.length` access करे से पहिले पक्का हो जाव कि मान array बा।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> जब रउआ के arrays खातिर runtime check के जरूरत होखे तब `isArray` के इस्तेमाल करीं; ई boolean लौटावेला आ `unknown` मान
> के साथ कॉल करे में सुरक्षित बा।

### फायदे

- अलग-अलग realm (जइसे कि iframes) में भरोसेमंद array पहचान खातिर built-in `Array.isArray` के इस्तेमाल करेला।
- guards आ branching logic खातिर ठीक एकदम सादा boolean नतीजा (`true`/`false`) लौटावेला।
- कवनो भी input type के साथ काम करेला काहे कि parameter `unknown` बा।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isArray(value)`

पैरामीटर:

- `value`: जवन मान के जांचल जाई।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // इनपुट रनटाइम पर एगो एरे बा
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isArray(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isArray](../_analysis/isArray.md)

<br>

---

<small>ई फाइल 6 February 2026 at 11:29:44 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>