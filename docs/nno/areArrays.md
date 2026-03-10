# areArrays

## Skildring

`areArrays` avgjer om ein verdi er ein fylt todimensjonal matrise der alle elementa er matriser.

### Brukstilfelle

Bruk `areArrays` til å validere tabell- eller matrise-liknande inndata (t.d. CSV-rader, rutenettdata eller grupperte
lister) før du utfører rad-/kolonneoperasjonar; funksjonen returnerer `false` dersom inndata ikkje er ei matrise, er
tom, eller inneheld eit element som ikkje er ei matrise.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areArrays` når du må sikre at ein verdi er ein ikkje-tom 2D-matrise og at kvar rad er ein matrise før du
> itererer over eller indekserer i nøsta matriser.

### Fordelar

- Validerer at inndata er ein ikkje-tom todimensjonal matrise der kvart element er ein matrise.
- Returnerer eit enkelt boolsk resultat (`true`/`false`) som passar for vakter og tidlege avbrot.
- Hjelper med å hindre køyretidsfeil når seinare kode føreset operasjonar på nøsta matriser (t.d. mapping av rader).

## Bruk

### Syntaks

Funksjon:

- `areArrays(array)`

Parameter:

- `array`: Inndata som skal kontrollerast.

### Lokal funksjonsimport

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value er ein 2D-tabell med tabellar som element
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areArrays(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Fila vart generert 6 February 2026 at 13:40:46 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>