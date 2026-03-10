# areFinite

## چۈشەندۈرۈش

`areFinite` بىر قىممەتنىڭ بوش بولمىغان تىزىملىك ئىكەنلىكىنى ۋە ئۇنىڭ ئەزالىرىنىڭ ھەممىسى چەكلىك سان ئىكەنلىكىنى
تەكشۈرىدۇ؛ شۇنداق بولسا `true`، بولمىسا `false` قايتۇرىدۇ.

### ئىشلىتىش ھالىتى

ھېسابلاش ئېلىپ بېرىشتىن بۇرۇن سانلىق كىرگۈزۈش تىزىملىكىنى (مەسىلەن، دىئاگرامما قاتارى، كوئوردىنات تىزىملىكى، ئۆلچەش
ئەۋرىشكىلىرى) دەلىللەپ، بارلىق قىممەتلەر چەكلىك سان بولغاندا ئاندىن نەتىجە `true` بولۇشىنى كاپالەتلەندۈرۈش.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> تىزىملىك بوش ئەمەس ۋە پەقەت چەكلىك سانلارنىلا ئۆز ئىچىگە ئالغانلىقىنى كاپالەتلەندۈرۈش كېرەك بولغاندا `areFinite` نى
> ئىشلىتىڭ؛ ئۇ بوش تىزىملىكلەر ۋە `NaN` ياكى چەكسىزلىك قىممەتلىرى بار تىزىملىكلەر ئۈچۈن `false` قايتۇرىدۇ.

### ئەۋزەللىكلەر

- كىرگۈزۈلگەن قىممەت بوش بولمىغان سانلار تىزىملىكى بولۇپ، ھەر بىر ئەزاسى چەكلىك سان بولغاندا ئاندىن `true` قايتۇرىدۇ.
- ھەر بىر ئەزا ئۈچۈن `isFinite` تەكشۈرۈشىگە تايىنىپ `Infinity`، `-Infinity` ۋە `NaN` نى رەت قىلىدۇ.
- قوغداش (guards) ۋە دەلىللەش (validation) ئېقىملىرىغا ماس كېلىدىغان ئاددىي بولېن نەتىجە (`true`/`false`) تەمىنلەيدۇ.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `areFinite(array)`

پارامېتىرلار:

- `array`: بارلىق ئەزالىرىنىڭ چەكلىكلىكى تەكشۈرۈلىدىغان تىزىملىك.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); //‎ true
console.log(areFinite(b)); //‎ false
console.log(areFinite(c)); //‎ false

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); //‎ 60
console.log(sumIfFinite([10, NaN, 30])); //‎ null

```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.areFinite(array)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [areFinite](‎../_analysis/areFinite.md‎)

<br>

---

<small>بۇ ھۆججەت 30 January 2026 at 16:37:54 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>