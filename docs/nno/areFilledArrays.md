# areFilledArrays

## Skildring

`areFilledArrays` sjekkar om ein todimensjonal matrise ikkje er tom og at alle undermatrisene hennar ikkje er tomme.

### Brukstilfelle

Bruk `areFilledArrays` til å validere tabell- eller matrise-liknande input (t.d. CSV-rader, rutenettdata, grupperte
resultat) slik at du trygt kan gå ut frå at det finst minst éi undermatrise og at ingen av undermatrisene er tomme.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areFilledArrays` når du må sikre at ei 2D-matrise har minst éi rad og at kvar rad har minst eitt element før du
> itererer over ho eller indekserer inn i ho.

### Fordelar

- Validerer at den ytre matrisen ikkje er tom, og at kvar indre matrise òg ikkje er tom, og returnerer `true` berre når
  begge vilkåra er oppfylte.
- Fungerer med alle elementtypar inne i undermatrisene (t.d. tal, strengar, objekt, nøsta matriser) fordi han berre
  sjekkar om matrisene er «fylte», ikkje innhaldet i elementa.
- Gjev eit enkelt boolsk resultat (`true`/`false`) som passar som vakt før handsaming av todimensjonale data.

## Bruk

### Syntaks

Funksjon:

- `areFilledArrays(array)`

Parameter:

- `array`: Den todimensjonale matrisen som skal sjekkast.

### Lokal funksjonsimport

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // sann
console.log(areFilledArrays(b)); // sann
console.log(areFilledArrays(c)); // sann
console.log(areFilledArrays(d)); // usann
console.log(areFilledArrays(e)); // usann
console.log(areFilledArrays(f)); // usann

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areFilledArrays(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Fila vart generert 6 February 2026 at 11:58:10 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>