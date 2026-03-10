# areFilledArrays

## Beskrivelse

`areFilledArrays` sjekker om en todimensjonal matrise ikke er tom og at alle undermatrisene ikke er tomme.

### Brukstilfelle

Bruk `areFilledArrays` til å validere tabell- eller matriseaktig input (f.eks. CSV-rader, rutenettdata, grupperte
resultater) slik at du trygt kan anta at det finnes minst én undermatrise og at ingen av undermatrisene er tomme.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areFilledArrays` når du må sikre at en 2D-matrise har minst én rad og at hver rad har minst ett element før du
> itererer over den eller indekserer inn i den.

### Fordeler

- Validerer at den ytre matrisen ikke er tom, og at hver indre matrise også ikke er tom, og returnerer `true` bare når
  begge betingelsene er oppfylt.
- Fungerer med alle elementtyper inne i undermatrisene (f.eks. tall, strenger, objekter, nestede matriser) fordi den
  bare sjekker om matrisen er «fylt», ikke innholdet i elementene.
- Gir et enkelt boolsk resultat (`true`/`false`) som egner seg som guard før behandling av todimensjonale data.

## Bruk

### Syntaks

Funksjon:

- `areFilledArrays(array)`

Parametere:

- `array`: Den todimensjonale matrisen som skal sjekkes.

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

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areFilledArrays(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Filen ble generert 6 February 2026 at 11:58:08 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>