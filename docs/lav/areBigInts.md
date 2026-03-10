# areBigInts

## Apraksts

`areBigInts` nosaka, vai vērtība ir netukšs masīvs, kas satur tikai `bigint` vērtības.

### Lietošanas gadījums

Validēt nezināmu ievadi (piem., parsētus JSON-līdzīgus datus, API slodzes vai funkciju parametrus ar tipu `unknown`),
lai pirms apstrādes pārliecinātos, ka tas ir netukšs `bigint` vērtību masīvs; atgriež `true` tikai tad, ja visi elementi
ir `bigint`, pretējā gadījumā `false`.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areBigInts` kā izpildlaika sargu pirms `bigint`-tikai darbību (piem., aritmētikas, salīdzinājumu)
> veikšanas ar nezināmu ievadi.

### Priekšrocības

- Nodrošina, ka katrs elements ir `bigint`, atgriežot `true` tikai tad, ja atbilst viss masīvs.
- Pēc noklusējuma noraida ne-masīvus un tukšus masīvus (izmantojot `isFilledArray`), novēršot nejaušu nederīgu ievadu
  pieņemšanu.
- Ātra atteice: atgriež `false`, tiklīdz tiek atrasts elements, kas nav `bigint`.

## Lietošana

### Sintakse

Funkcija:

- `areBigInts(array)`

Parametri:

- `array`: Vērtība, ko pārbaudīt.

### Lokāls funkcijas imports

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // patiess
console.log(areBigInts(b)); // aplams
console.log(areBigInts(c)); // aplams
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areBigInts(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 23:26:32 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>