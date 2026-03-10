# isValidDate

## Ibsa

`isValidDate` gatiin kenname `Date` object sirrii ta'uu isaa ni sakatta'a; guyyaa dhugaa, kan hin invalid ta'aniif qofa
`true` deebisa.

### Haala itti fayyadama

Galtee fayyadamaa yookaan data API keessatti guyyaa of keessaa qabaachuu danda'u mirkaneessi; hojii herrega guyyaa,
formatting, yookaan walbira qabuu dura gatiin `Date` instance dhugaa ta'uu isaa fi invalid hin ta'uu isaa mirkaneessi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> Gatiiwwan `unknown` ta'anii irratti `Date` methods (fkn, `toISOString`, `getTime`) waamuun dura, `Date` objects sirrii
> ta'uu isaanii mirkaneessuuf `isValidDate` fayyadami.

### Faayidaa

- Gatiin tokko `Date` instance ta'uu isaa mirkaneessa; qofa string yookaan lakkoofsa bifa guyyaa fakkaatu miti.
- Guyyoota sirrii hin taane (fkn, `new Date("invalid")`) yeroo `NaN` ta'uu isaa ilaaluun ni dida.
- Guardi booliyaanaa salphaa; conditionals fi validation pipelines keessatti fayyadamuun salphaadha.
- Duraan galtee mirkaneessuun, yeroo date methods waamu dogoggora runtime ittisuuf gargaara.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isValidDate(value)`

Paaraameetaroota:

- `value`: Gatiin sakatta'amu.

### Galchii faankishinii naannoo

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input jechuun Date sirrii ta’e
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // soba
console.log(isValidDate("2025-12-22")); // soba

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isValidDate(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 16:52:19 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>