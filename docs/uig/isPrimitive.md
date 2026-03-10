# isPrimitive

## چۈشەندۈرۈش

`isPrimitive` بېرىلگەن قىممەتنىڭ primitive ئىكەنلىكىنى بەلگىلەيدۇ (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### ئىشلىتىش ھالىتى

ئىجرا ۋاقتىدا كىرگۈزۈشلەرنى دەلىللەش (مەسىلەن، API payload مەيدانلىرى، سەپلىمە قىممەتلىرى ياكى ئىشلەتكۈچى تەمىنلىگەن
سانلىق مەلۇمات) ئارقىلىق بىر قىممەتنى serialize قىلىش، خاتىرىلەش (logging) ياكى پەقەت primitive غا خاس مەشغۇلاتلارنى
قوللىنىشتىن بۇرۇن ئۇنىڭ primitive ئىكەنلىكىگە كاپالەتلىك قىلىش.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `unknown` كىرگۈزۈشلەرنى object ياكى function دەپ قاراشتىن بۇرۇن قوغداش ئۈچۈن `isPrimitive` نى ئىشلىتىڭ؛ ئۇ primitive
> لارغا `true` قايتۇرىدۇ، object ۋە function لارغا `false` قايتۇرىدۇ.

### ئەۋزەللىكلەر

- بىر قىممەتنىڭ JavaScript نىڭ primitive ئىكەنلىكىنى تېز ۋە ئەسلەتمە (allocation) قىلماي تەكشۈرۈش.
- `null` نى primitive دەپ توغرا قارىيدۇ (گەرچە `typeof null` بولسا `"object"`).
- پەقەت object غا خاس مەشغۇلاتلارنى قىلىشتىن بۇرۇن `unknown` قىممەتلەرنى تارايىتىشقا ياردەم بېرىدۇ.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `isPrimitive(value)`

پارامېتىرلار:

- `value`: Primitive تىپ ئىكەنلىكىنى تەكشۈرىدىغان قىممەت.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.isPrimitive(value)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [isPrimitive](‎../_analysis/isPrimitive.md‎)

<br>

---

<small>بۇ ھۆججەت 30 January 2026 at 23:58:16 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>