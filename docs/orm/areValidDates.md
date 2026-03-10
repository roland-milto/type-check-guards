# areValidDates

## Ibsa

Array tokko duwwaa akka hin taane fi guutummaatti `Date` objects sirrii qofa irraa akka ijaarame murteessa.

### Haala itti fayyadama

`areValidDates` fayyadamiitii arraywwan fayyadamaan kennaman yookaan API irraa dhufan hojii guyyaa irratti hundaa'e (
tartiibessu/sorting, range checks, formatting) dura mirkaneessi; galmeewwan hundi `Date` objects dhugaa, sirrii ta'uu fi
tarreen sun duwwaa hin ta'uu mirkaneessa.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areValidDates` array duwwaaf `false` deebisa; akka tarkaanfii mirkaneessaa irratti hirkattu dura array sun duwwaa hin
> ta'uu isaa mirkaneessi.

### Faayidaa

- `true` qofa deebisa yoo elementiin hundi `Date` instance sirrii ta'e qofa (guyyaa hin sirreessamne akka
  `new Date('invalid')` hin dabalatin).
- Galtee duwwaa deebisuu `false` tiin ni dida; kanaan tarree guyyaa hiika qabu, kan hin duwwaan ta'e qofa akka fudhattu
  mirkaneessa.
- Mirkaneessa boolean salphaa akka guard-style ni kenna; kunis mirkaneessota biroo waliin salphaatti walitti makama.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areValidDates(array)`

Paaraameetaroota:

- `array`: Array sakatta'amu; `Date` objects of keessaa qabaachuu danda'a.

### Galchii faankishinii naannoo

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // dhugaa
console.log(areValidDates(b)); // soba
console.log(areValidDates(c)); // soba
console.log(areValidDates(d)); // soba

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areValidDates(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 14:33:19 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>