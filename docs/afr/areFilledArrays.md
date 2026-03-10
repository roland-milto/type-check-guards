# areFilledArrays

## Beskrywing

`areFilledArrays` kontroleer of ’n tweedimensionele skikking nie leeg is nie en of al sy subskikkings nie leeg is nie.

### Gebruikscenario

Gebruik `areFilledArrays` om tabel- of matriksagtige invoer (bv. CSV-rye, roosterdata, gegroepeerde resultate) te
valideer sodat jy veilig kan aanneem daar is ten minste een subskikking en geen van die subskikkings is leeg nie.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areFilledArrays` wanneer jy moet verseker dat ’n 2D-skikking ten minste een ry het en dat elke ry ten minste
> een element het voordat jy daaroor iterer of daarin indekseer.

### Voordele

- Bevestig dat die buitenste skikking nie leeg is nie en dat elke binneste skikking ook nie leeg is nie, en gee slegs
  `true` terug wanneer albei voorwaardes nagekom word.
- Werk met enige elementtipes binne die subskikkings (bv. getalle, stringe, objekte, geneste skikkings) omdat dit net
  die skikking se “gevul”-status nagaan, nie die elementinhoud nie.
- Verskaf ’n eenvoudige booleaanse resultaat (`true`/`false`) wat geskik is vir wagte voordat tweedimensionele data
  verwerk word.

## Gebruik

### Sintaksis

Funksie:

- `areFilledArrays(array)`

Parameters:

- `array`: Die tweedimensionele skikking om na te gaan.

### Plaaslike funksie-invoer

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // waar
console.log(areFilledArrays(b)); // waar
console.log(areFilledArrays(c)); // waar
console.log(areFilledArrays(d)); // vals
console.log(areFilledArrays(e)); // vals
console.log(areFilledArrays(f)); // vals

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areFilledArrays(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Hierdie lêer is op 6 February 2026 at 11:55:22 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>