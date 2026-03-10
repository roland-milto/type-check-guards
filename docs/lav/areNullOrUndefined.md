# areNullOrUndefined

## Apraksts

Pārbauda, vai visi dotā masīva elementi ir `null` vai `undefined`.

### Lietošanas gadījums

Validēt, ka izvēles lauku sarakstā nav nevienas faktiskas vērtības (tikai `null`/`undefined`), pirms izlemt izlaist
apstrādi vai parādīt stāvokli “nav norādītas vērtības”.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areNullOrUndefined`, kad nepieciešams pārbaudīt, vai masīvā ir tikai trūkstošas vērtības (`null`/
`undefined`). Ņemiet vērā, ka tukšam masīvam tā atgriež `false`.

### Priekšrocības

- Atgriež `true` tikai tad, ja katrs elements ir `null` vai `undefined`.
- Atgriež `false` tukšiem masīviem, palīdzot atšķirt “nav datu” no “visas vērtības trūkst”.
- Darbojas ar `unknown[]`, padarot to drošu lietošanai pirms tipu sašaurināšanas.

## Lietošana

### Sintakse

Funkcija:

- `areNullOrUndefined(array)`

Parametri:

- `array`: Masīvs, ko pārbaudīt.

### Lokāls funkcijas imports

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === patiess

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === aplams

const empty = areNullOrUndefined([]);
// empty === aplams
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areNullOrUndefined(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 00:30:18 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>