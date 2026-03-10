# isValidDate

## Danasîn

`isValidDate` پشکنین دەکات کە ئایا بەهایەکی دیاریکراو `Date` ـێکی دروستە و تەنها بۆ بەروارە ڕاستەقینە و نانادروست `true`
دەگەڕێنێتەوە.

### Bikaranîn

پشتڕاستکردنی هاتووچۆی بەکارهێنەر یان داتای API کە لەوانەیە بەروار تێدا بێت، بۆ دڵنیابوون لەوەی بەهاکە نموونەیەکی
ڕاستەقینەی `Date` ـە و بەروارێکی نادروست نییە پێش ئەنجامدانی ژمێریاری، فۆرماتکردن، یان بەراوردکردنی بەروار.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isValidDate` بەکاربهێنە پێش ئەوەی مێتۆدەکانی `Date` (وەک `toISOString`, `getTime`) بانگ بکەیت لەسەر بەهاکان کە جۆریان
`unknown` ـە، بۆ دڵنیابوون لەوەی `Date` ـێکی دروستن.

### Avantaj

- دڵنیایی دەکات کە بەهاکە نموونەیەکی `Date` ـە و تەنها ڕیزەنووسێک یان ژمارەیەکی وەک بەروار نییە.
- بەروارە نادروستەکان ڕەت دەکاتەوە (وەک `new Date("invalid")`) بە پشکنینی بەهای کاتی `NaN`.
- پارێزەری سادەی boolean ـە کە بە ئاسانی لە مەرجەکان و پایپڵاینەکانی پشتڕاستکردن بەکار دەهێنرێت.
- یارمەتی دەدات هەڵەکانی کاتی جێبەجێبوون ڕێگری بکرێت کاتێک مێتۆدەکانی بەروار بانگ دەکرێن، بەوەی سەرەتا دڵنیایی لە
  هاتووچۆی داتا دەکات.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isValidDate(value)`

Parametreyên:

- `value`: ئەو بەهایەی دەبێت پشکنرێت.

### Importa fonksiyona herêmî

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  //‎ input Date-ê derbasdar e
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // şaş
console.log(isValidDate("2025-12-22")); // şaş
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isValidDate(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isValidDate](‎../_analysis/isValidDate.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 16:51:48 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>