# isBoolean

## چۈشەندۈرۈش

بېرىلگەن قىممەتنىڭ `boolean` ئىكەنلىكىنى-ئەمەسلىكىنى بەلگىلەيدۇ.

### ئىشلىتىش ھالىتى

سىرتقى ياكى تىپسىز سانلىق مەلۇماتلارنى (مەسىلەن، مۇھىت ئۆزگەرگۈچلىرى، JSON يۈكلىرى، سۈرۈشتۈرۈش پارامېتىرلىرى) دەلىللەپ،
شەرتلىك لوگىكىدا ئىشلىتىشتىن بۇرۇن قىممەتنىڭ `boolean` ئىكەنلىكىگە كاپالەتلىك قىلىش.

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `unknown` نى `boolean` غا تارايتىش ئۈچۈن، بولېن مەشغۇلاتلىرىنى قوللىنىشتىن بۇرۇن `isBoolean` نى ئىشلىتىڭ.

### ئەۋزەللىكلەر

- `typeof` ئارقىلىق ئاددىي ۋە تېز ئىجرا ۋاقتى تەكشۈرۈشى.
- بولېنغا خاس لوگىكا ئىشلىتىشتىن بۇرۇن نامەلۇم كىرگۈزۈشنى دەلىللەشكە ياردەم بېرىدۇ.
- ئالدىن پەرەز قىلىشقا بولىدىغان `boolean` نەتىجىسىنى قايتۇرىدۇ (`true`/`false`).

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `isBoolean(value)`

پارامېتىرلار:

- `value`: تەكشۈرۈلىدىغان قىممەت.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  //‎‎ بۇ يەردە input بولسا boolean
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.isBoolean(value)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [isBoolean](‎../_analysis/isBoolean.md‎)

<br>

---

<small>بۇ ھۆججەت 30 January 2026 at 14:38:17 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>