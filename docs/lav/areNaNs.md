# areNaNs

## Apraksts

`areNaNs` pārbauda, vai visi masīva elementi ir `NaN`, un atgriež `true` tikai tad, ja katrs elements ir `NaN`.

### Lietošanas gadījums

Validēt ienākošos datus, kuros `NaN` tiek izmantots kā signālvērtība, un ir jānodrošina, ka viss masīvs sastāv tikai no
`NaN` (piem., lai noteiktu pilnībā trūkstošu skaitlisku sēriju).

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areNaNs`, kad nepieciešams validēt, ka masīvs satur tikai skaitlisko `NaN` vērtību (bez virkņu
> pārveidošanas par skaitļiem).

### Priekšrocības

- Atgriež `true` tikai tad, ja katrs elements ir `NaN` (stingra visu elementu pārbaude).
- Nepārveido virknes par skaitļiem; tādas vērtības kā "NaN" paliek ne-`NaN` un padara rezultātu par `false`.
- Atgriež `false` neaizpildītiem masīviem, novēršot nejaušu `true` tukšai ievadei.

## Lietošana

### Sintakse

Funkcija:

- `areNaNs(array)`

Parametri:

- `array`: Masīvs, kurā jāpārbauda `NaN` vērtības.

### Lokāls funkcijas imports

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // patiess
const b = areNaNs([NaN, 1, NaN]); // aplams
const c = areNaNs([NaN, "NaN", NaN]); // aplams
const d = areNaNs([NaN, null, NaN]); // aplams
const e = areNaNs([] as unknown[]); // aplams
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areNaNs(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 15:52:13 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>