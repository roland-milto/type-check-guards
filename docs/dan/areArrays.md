# areArrays

## Beskrivelse

`areArrays` afgør, om en værdi er et udfyldt todimensionelt array, hvis elementer alle er arrays.

### Anvendelsestilfælde

Brug `areArrays` til at validere tabel- eller matrixlignende input (f.eks. CSV-rækker, grid-data eller grupperede
lister), før du udfører række-/kolonneoperationer; den returnerer `false`, hvis inputtet ikke er et array, er tomt eller
indeholder et element, der ikke er et array.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areArrays`, når du har brug for at sikre, at en værdi er et ikke-tomt 2D-array, og at hver række er et array,
> før du itererer over eller indekserer i indlejrede arrays.

### Fordele

- Validerer, at inputtet er et ikke-tomt todimensionelt array, hvor hvert element er et array.
- Returnerer et simpelt boolesk resultat (`true`/`false`), der egner sig til guards og tidlige afslutninger.
- Hjælper med at forhindre runtime-fejl, når senere kode antager operationer på indlejrede arrays (f.eks. mapping af
  rækker).

## Brug

### Syntaks

Funktion:

- `areArrays(array)`

Parametre:

- `array`: Inputtet, der skal kontrolleres.

### Lokal import af funktion

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value er et 2D-array med arrays som elementer
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areArrays(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Filen blev oprettet den 6 February 2026 at 13:39:13 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>