# isWeakSet

## چۈشەندۈرۈش

بېرىلگەن `value` نىڭ ئوبيېكتلاردىن تۈزۈلگەن `WeakSet` ئىكەنلىكىنى بەلگىلەيدۇ.

### ئىشلىتىش ھالىتى

تىپسىز كىرگۈزۈلمىنى (مەسىلەن، سىرتقى API لاردىن، دىنامىك تەڭشەكلەردىن ياكى `unknown` قىممەتلەردىن) قوبۇل قىلغاندا،
`WeakSet`-قا خاس مەشغۇلاتلارنى ئىشلىتىشتىن بۇرۇن ئۇنىڭ `WeakSet` ئىكەنلىكىنى دەلىللەش كېرەك بولسا `isWeakSet` نى
ئىشلىتىڭ.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `isWeakSet` نى ئىشلىتىپ رانتەيمدا `unknown` قىممەتنى `WeakSet<object>` غا تارايتىڭ؛ دىققەت قىلىڭكى، `WeakSet` پەقەت
> ئوبيېكت رېفېرېنسلىرىنىلا ئۆز ئىچىگە ئالالايدۇ.

### ئەۋزەللىكلەر

- بىر قىممەتنىڭ `WeakSet` ئىكەنلىكىنى ئاددىي رانتەيم تەكشۈرۈش بىلەن تەمىنلەيدۇ.
- پەقەت `WeakSet` نۇسخىلىرىلا شۇنداق دەپ قارىلىشىغا كاپالەتلىك قىلىپ، تىپ خاتالىقلىرىنىڭ ئالدىنى ئېلىشقا ياردەم بېرىدۇ.
- `unknown` كىرگۈزۈلمىسىنىڭ ھەممىسى بىلەن ئىشلەيدۇ ۋە ئېنىق بولغان boolean نەتىجە (`true`/`false`) قايتۇرىدۇ.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `isWeakSet(value)`

پارامېتىرلار:

- `value`: تەكشۈرۈلىدىغان قىممەت.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  //‎‎ a ئىجرا ۋاقتىدا WeakSet
}
```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.isWeakSet(value)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [isWeakSet](‎../_analysis/isWeakSet.md‎)

<br>

---

<small>بۇ ھۆججەت 30 January 2026 at 14:19:41 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>