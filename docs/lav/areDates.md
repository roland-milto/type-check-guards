# areDates

## Apraksts

`areDates` nosaka, vai dotais masīvs ir aizpildīts un satur tikai `Date` objektus, atgriežot `true` tikai tad, ja visi
elementi ir derīgi datumi.

### Lietošanas gadījums

Izmantojiet `areDates`, lai validētu nezināmu ievadi (piem., parsētu JSON, formas datus, API noslodzes) pirms datumiem
specifiskas loģikas palaišanas, piemēram, kārtošanas pēc laika, formatēšanas vai diapazonu aprēķināšanas.

> **Piezīme TypeScript lietotājiem:**
>
> Atgriež `true` tikai netukšiem masīviem, kuros katrs elements ir `Date`; tukši masīvi dod `false`.

### Priekšrocības

- Nodrošina, ka masīvs nav tukšs pirms tā satura validēšanas, novēršot `true` tukšām ievadēm.
- Pārbauda, vai katrs elements ir `Date` instances, un uzreiz atgriež `false` pie pirmās neatbilstības.
- Noder kā sarga tipa pārbaude pirms datumiem specifisku darbību veikšanas ar masīva vienumiem.

## Lietošana

### Sintakse

Funkcija:

- `areDates(array)`

Parametri:

- `array`: Masīvs, kas jāpārbauda attiecībā uz `Date` objektiem.

### Lokāls funkcijas imports

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // patiess
console.log(areDates(b)); // aplams
console.log(areDates(c)); // aplams

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areDates(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areDates](../_analysis/areDates.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 15:31:04 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>