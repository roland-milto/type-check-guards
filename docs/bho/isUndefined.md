# isUndefined

## विवरण

जाँचेला कि दिहल मान `undefined` बा कि ना।

### उपयोग

Optional inputs के guard करे खातिर, missing properties के पता लगावे खातिर, भा “ना दिहल गइल” (`undefined`) आ “जान-बूझ के
खाली” (`null`) के बीच फर्क करे खातिर `isUndefined` के इस्तेमाल करीं।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `isUndefined` के तब इस्तेमाल करीं जब रउआ के खास तौर पर `undefined` (ना कि `null`) के पता लगावे के जरूरत होखे। ई
> सुरक्षित बा काहे कि ई `typeof value === "undefined"` पर निर्भर बा।

### फायदे

- `typeof` के इस्तेमाल से `undefined` खातिर साफ, स्पष्ट जाँच देला, आ बिना घोषित (undeclared) वेरिएबल सभ के साथे होखे
  वाला edge cases से बचे ला।
- एकदम सरल boolean नतीजा (`true`/`false`) लौटावेला, जे guards, branching, आ validation logic खातिर उपयुक्त बा।
- `undefined` के अउरी “खाली” मान सभ जइसे `null`, `0`, `""`, भा `NaN` से अलग पहिचाने में मदद करेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isUndefined(value)`

पैरामीटर:

- `value`: जवन मान के जाँच कइल जाई।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // इहाँ x undefined बा
} else {
  // इहाँ x undefined नइखे
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isUndefined(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>ई फाइल 30 January 2026 at 14:02:00 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>