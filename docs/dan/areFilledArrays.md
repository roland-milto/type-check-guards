# areFilledArrays

## Beskrivelse

`areFilledArrays` tjekker, om en todimensionel array ikke er tom, og om alle dens underarrayer ikke er tomme.

### Anvendelsestilfælde

Brug `areFilledArrays` til at validere tabel- eller matrixlignende input (f.eks. CSV-rækker, gitterdata, grupperede
resultater), så du trygt kan antage, at der er mindst én underarray, og at ingen af underarrayerne er tomme.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areFilledArrays`, når du skal sikre, at en 2D-array har mindst én række, og at hver række har mindst ét element,
> før du itererer over den eller indekserer i den.

### Fordele

- Validerer, at den ydre array ikke er tom, og at hver indre array også ikke er tom, og returnerer kun `true`, når begge
  betingelser er opfyldt.
- Fungerer med alle elementtyper inde i underarrayerne (f.eks. tal, strenge, objekter, indlejrede arrayer), fordi den
  kun tjekker, om arrayet er “fyldt”, ikke elementernes indhold.
- Giver et simpelt boolesk resultat (`true`/`false`), som egner sig til guards før behandling af todimensionelle data.

## Brug

### Syntaks

Funktion:

- `areFilledArrays(array)`

Parametre:

- `array`: Den todimensionelle array, der skal tjekkes.

### Lokal import af funktion

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // sand
console.log(areFilledArrays(b)); // sand
console.log(areFilledArrays(c)); // sand
console.log(areFilledArrays(d)); // falsk
console.log(areFilledArrays(e)); // falsk
console.log(areFilledArrays(f)); // falsk

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areFilledArrays(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Filen blev oprettet den 6 February 2026 at 11:56:11 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>