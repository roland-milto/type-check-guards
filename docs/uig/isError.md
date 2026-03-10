# isError

## چۈشەندۈرۈش

بېرىلگەن `value` نىڭ `Error` نۇسخىسى ئىكەنلىكىنى تەكشۈرىدۇ.

### ئىشلىتىش ھالىتى

`catch` بۆلىكى، callback ياكى سىرتقى كىتابخانا قاتارلىقلاردىن كەلگەن `unknown` قىممەتنى قوبۇل قىلغاندا، `message`،
`name` ياكى `stack` نى ئوقۇشتىن بۇرۇن ئۇنىڭ `Error` ئىكەنلىكىنى بىخەتەر ھالدا بېكىتىش ئۈچۈن `isError` نى ئىشلىتىڭ.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `unknown` قىممەتلەرنى (مەسىلەن، `catch` تىن) `Error` دەپ قاراشتىن بۇرۇن قوغداش ئۈچۈن `isError` نى ئىشلىتىڭ.

### ئەۋزەللىكلەر

- بىر قىممەتنىڭ `Error` نۇسخىسى ئىكەنلىكىنى ئاددىي رانتەيم تەكشۈرۈش بىلەن تەمىنلەيدۇ.
- `message` ياكى `stack` كەبى `Error` خاسلىقىغا كىرىشتىن بۇرۇن نامەلۇم كىرگۈزۈشلەرنى تارايىتىشقا ياردەم بېرىدۇ.
- `catch`، سىرتقى API لار ياكى تىپ بېكىتىلمىگەن مەنبەلەردىن كەلگەن قىممەتلەرنى بىر تەرەپ قىلغاندا رانتەيم ئىستىسنا چىقىپ
  كېتىش خەۋپىنى ئازايتىدۇ.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `isError(value)`

پارامېتىرلار:

- `value`: `Error` تىپىغا سېلىشتۇرۇپ تەكشۈرىدىغان قىممەت.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.isError(value)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [isError](‎../_analysis/isError.md‎)

<br>

---

<small>بۇ ھۆججەت 6 February 2026 at 12:47:32 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>