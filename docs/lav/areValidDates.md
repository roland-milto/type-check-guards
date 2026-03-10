# areValidDates

## Apraksts

Nosaka, vai masīvs nav tukšs un sastāv tikai no derīgiem `Date` objektiem.

### Lietošanas gadījums

Izmantojiet `areValidDates`, lai validētu lietotāja vai API nodrošinātus masīvus pirms ar datumiem saistītu darbību
veikšanas (kārtošana, diapazona pārbaudes, formatēšana), nodrošinot, ka visi ieraksti ir reāli, derīgi `Date` objekti un
ka saraksts nav tukšs.

> **Piezīme TypeScript lietotājiem:**
>
> `areValidDates` tukšam masīvam atgriež `false`; pirms paļauties uz to kā validācijas soli, pārliecinieties, ka masīvam
> ir jābūt netukšam.

### Priekšrocības

- Atgriež `true` tikai tad, ja katrs elements ir derīga `Date` instance (nav nederīgu datumu, piemēram,
  `new Date('invalid')`).
- Noraida tukšu ievadi, atgriežot `false`, nodrošinot, ka tiek pieņemti tikai jēgpilni, netukši datumu saraksti.
- Nodrošina vienkāršu būla sarga (guard) tipa pārbaudi, ko ir viegli kombinēt ar citām validācijām.

## Lietošana

### Sintakse

Funkcija:

- `areValidDates(array)`

Parametri:

- `array`: Pārbaudāmais masīvs, kas potenciāli satur `Date` objektus.

### Lokāls funkcijas imports

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // patiess
console.log(areValidDates(b)); // aplams
console.log(areValidDates(c)); // aplams
console.log(areValidDates(d)); // aplams

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areValidDates(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 14:32:41 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>