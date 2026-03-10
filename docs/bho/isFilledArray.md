# isFilledArray

## विवरण

`value` कम से कम एक तत्व वाला array बा कि ना, ई जाँचेला आ `true` भा `false` लौटावेला।

### उपयोग

आवे वाला data (जइसे API payloads, form values, configuration) के validate करे खातिर `isFilledArray` के इस्तेमाल करीं,
iterate करे से पहिले, पहिला तत्व access करे से पहिले, भा अइसन logic लगावे से पहिले जे खातिर कम से कम एक item जरूरी बा।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `isFilledArray` एगो runtime guard बा जे boolean लौटावेला; ई array गैर-खाली बा, बस एतने के पुष्टि करे ला, तत्व के types
> के अउरी narrow ना करेला।

### फायदे

- `Array.isArray` आ लंबाई जाँच के इस्तेमाल से गैर-खाली array खातिर सरल, तेज जाँच।
- जब कोड मान लेला कि array में कम से कम एक तत्व बा, तब runtime errors से बचे में मदद करेला।
- साफ boolean नतीजा: गैर-खाली arrays खातिर `true` आ नाहीं त `false` लौटावेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isFilledArray(value)`

पैरामीटर:

- `value`: जाँच करे खातिर मान कि ई गैर-खाली array बा कि ना।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input रनटाइम पर खाली ना होखे वाला array बा
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isFilledArray(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>ई फाइल 6 February 2026 at 11:46:21 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>