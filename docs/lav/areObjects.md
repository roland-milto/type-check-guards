# areObjects

## Apraksts

`areObjects` pārbauda, vai norādīts aizpildīts masīvs satur tikai objektus.

### Lietošanas gadījums

Izmantojiet `areObjects`, kad saņemat nezināmu masīvu (piem., no JSON parsēšanas vai ārējām API) un nepieciešams
pārliecināties, ka tas nav tukšs un ka katrs elements ir objekts, pirms iterēšanas un piekļuves objekta īpašībām.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areObjects`, lai validētu `unknown[]` pirms elementu apstrādes kā objektus; tas atgriež `false` tukšiem
> masīviem.

### Priekšrocības

- Atgriež `true` tikai tad, ja ievade ir aizpildīts masīvs un katrs elements ir objekts.
- Pārtrauc pārbaudi agrāk un atgriež `false`, tiklīdz tiek atrasts elements, kas nav objekts.
- Palīdz validēt nezināmu ievadi pirms objektam specifisku darbību veikšanas.

## Lietošana

### Sintakse

Funkcija:

- `areObjects(array)`

Parametri:

- `array`: Masīvs, kurā jāpārbauda, vai elementi ir objekti.

### Lokāls funkcijas imports

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value ir aizpildīts objektu masīvs
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areObjects(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 00:09:24 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>