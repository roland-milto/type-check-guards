# isNull

## چۈشەندۈرۈش

بېرىلگەن `value` نىڭ `null` ئىكەنلىكىنى بەلگىلەيدۇ.

### ئىشلىتىش ھالىتى

`null` مەنىلىك بىر بەلگە (sentinel) قىممەت بولغان ۋە ئۇنى `undefined` ياكى باشقا قىممەتلەردىن پەرقلىق بىر تەرەپ قىلىش
زۆرۈر بولغان كىرگۈزۈش ياكى API payload مەيدانلىرىنى دەلىللەشتە `isNull` نى ئىشلىتىڭ.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `null` نى `undefined` ۋە باشقا falsy قىممەتلەردىن ئايرىپ كۆرسىتىش كېرەك بولغاندا `isNull` نى ئىشلىتىڭ؛ ئۇ پەقەت `null`
> ئۈچۈنلا `true` قايتۇرىدۇ.

### ئەۋزەللىكلەر

- `undefined` بىلەن ئارىلاشتۇرماي، `null` نى ئېنىق تەكشۈرىدۇ.
- `unknown` نى قوبۇل قىلىدىغانلىقى ئۈچۈن، ھەر قانداق كىرگۈزۈش تىپىدا ئىشەنچلىك ئىشلەيدۇ.
- ئاددىي، تېز ۋە يان تەسىرسىز؛ پەقەت `true` ياكى `false` قايتۇرىدۇ.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `isNull(value)`

پارامېتىرلار:

- `value`: `null` ئىكەنلىكىنى تەكشۈرىدىغان قىممەت.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  //‎‎ a بۇ يەردە null
}
```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.isNull(value)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [isNull](‎../_analysis/isNull.md‎)

<br>

---

<small>بۇ ھۆججەت 31 January 2026 at 15:41:16 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>