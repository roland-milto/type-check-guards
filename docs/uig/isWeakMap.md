# isWeakMap

## چۈشەندۈرۈش

بېرىلگەن `value` نىڭ `WeakMap` ئىنستانسىسى ئىكەنلىكىنى-ئەمەسلىكىنى بەلگىلەيدۇ.

### ئىشلىتىش ھالىتى

سىز `unknown` قىممەتنى (مەسىلەن، ئاممىۋى API، پلاگىن سىستېمىسى ياكى دىنامىك تەڭشەكتىن) قوبۇل قىلغاندا ۋە `WeakMap`-قا
خاس ھەرىكەتنى ئىشلىتىشتىن بۇرۇن ئۇنىڭ `WeakMap` ئىكەنلىكىنى دەلىللەش كېرەك بولغاندا `isWeakMap` نى ئىشلىتىڭ.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `isWeakMap` بىر `instanceof WeakMap` تەكشۈرۈشىنى ئىجرا قىلىدۇ؛ ئۇ رانتېيم قوغدىغۇچ بولۇپ، پەقەت ھەقىقىي `WeakMap`
> ئىنستانسلىرى ئۈچۈنلا `true` قايتۇرىدۇ.

### ئەۋزەللىكلەر

- بىر قىممەتنىڭ `WeakMap` ئىكەن-ئەمەسلىكىنى ئاددىي رانتېيم تەكشۈرۈش.
- `WeakMap` تەلەپ قىلىدىغان API لارنى خاتا ئىشلىتىشنىڭ ئالدىنى ئالىدۇ؛ خاتالىق تاشلاشنىڭ ئورنىغا `true`/`false`
  قايتۇرىدۇ.
- `unknown` كىرگۈزۈلمىلەر بىلەنمۇ ئىشلەيدۇ، شۇڭا مودۇل چېگراسىدا (مەسىلەن، پارسلاش، سىرتقى سانلىق مەلۇمات ياكى تىپسىز
  كود) قولايلىق.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `isWeakMap(value)`

پارامېتىرلار:

- `value`: تەكشۈرۈلىدىغان قىممەت.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  //‎‎ a ئىجرا ۋاقتىدا WeakMap
}

console.log(isWeakMap(a)); //‎ true
console.log(isWeakMap(b)); //‎ false
```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.isWeakMap(value)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [isWeakMap](‎../_analysis/isWeakMap.md‎)

<br>

---

<small>بۇ ھۆججەت 30 January 2026 at 13:27:23 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>