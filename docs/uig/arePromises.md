# arePromises

## چۈشەندۈرۈش

`arePromises` بىر ماسسىۋدىكى بارلىق ئېلېمېنتلارنىڭ `Promise` نۇسخىسى ئىكەن-ئەمەسلىكىنى بەلگىلەيدۇ.

### ئىشلىتىش ھالىتى

دىنامىكىلىق قۇرۇلغان ياكى سىرتتىن تەمىنلەنگەن تىزىملىكتە پەقەت ۋەدە (Promise) لارلا بارلىقىنى ئۇلارنى توپلاشتىن بۇرۇن
دەلىللەڭ (مەسىلەن، `Promise.all` بىلەن).

> **TypeScript ئىشلەتكۈچىلەرگە ئەسكەرتىش:**
>
> `Promise.all` ياكى باشقا پەقەت-ۋەدە (promise-only) مەشغۇلاتلىرىنى چاقىرىشتىن بۇرۇن `unknown[]` نى دەلىللەش ئۈچۈن
`arePromises` نى ئىشلىتىڭ؛ ئۇ بوش ماسسىۋلارغا `false` قايتۇرىدۇ.

### ئەۋزەللىكلەر

- ۋەدە (Promise) غا خاس لوگىكىنى ئىشلىتىشتىن بۇرۇن، ھەر بىر ئېلېمېنتنىڭ `Promise` ئىكەنلىكىنى كاپالەتلەندۈرىدۇ.
- تولدۇرىلمىغان ماسسىۋلارغا `false` قايتۇرىدۇ، بۇ بوش كىرگۈزۈشلەردە ئىككىلىنىشلىك نەتىجىلەرنىڭ ئالدىنى ئالىدۇ.
- سىرتقى مەنبەلەردىن كەلگەن `unknown[]` بىلەن ئىشلىگەندە ئىجرا ۋاقتىدىكى قوغدىغۇچ (runtime guard) سۈپىتىدە پايدىلىق.

## ئىشلىتىش

### سىنتاكس

فۇنكسىيە:

- `arePromises(array)`

پارامېتىرلار:

- `array`: `Promise` نۇسخىلىرى بار-يوقلۇقىنى تەكشۈرىدىغان ماسسىۋ.

### فۇنكسىيەنى يەرلىك ئىمپورت قىلىش

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  //‎‎ values ئىجرا ۋاقتىدا Promise مىساللىرىدىن تەركىب تاپقان بىر تىزىملىك
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### گلوبال ئوبيېكت ئىمپورت قىلىش

فۇنكسىيەلەرنى گلوبال ئوبيېكت مېتودلىرى سۈپىتىدە ئىمپورت قىلىش ئۈچۈن مۇنداق ئىشلىتىڭ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

شۇنداقتا تۆۋەندىكى مېتود گلوبال ئىشلىتىشكە بولىدۇ:

- `Type.arePromises(array)`

## فۇنكسىيە تەھلىلى

فۇنكسىيەلەرگە ئوخشىمىغان پارامېتىرلار كىرگۈزگەندە پەيدا بولىدىغان چىقىرىشنىڭ جەدۋەل تەھلىلى بۇ يەردە
ھۆججەتلەنگەن: [arePromises](‎../_analysis/arePromises.md‎)

<br>

---

<small>بۇ ھۆججەت 30 January 2026 at 23:50:22 (UTC) دا *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** نى ئىشلىتىپ *
*[Roland Milto](https://roland-milto.de/)** تەرىپىدىن ياسالغان.</small>