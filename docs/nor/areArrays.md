# areArrays

## Beskrivelse

`areArrays` avgjør om en verdi er en fylt todimensjonal matrise der alle elementene er matriser.

### Brukstilfelle

Bruk `areArrays` til å validere tabell- eller matriseaktige inndata (f.eks. CSV-rader, rutenettdata eller grupperte
lister) før du utfører rad-/kolonneoperasjoner; den returnerer `false` hvis inndata ikke er en matrise, er tom, eller
inneholder et element som ikke er en matrise.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areArrays` når du må sikre at en verdi er en ikke-tom 2D-matrise og at hver rad er en matrise før du itererer
> over eller indekserer i nestede matriser.

### Fordeler

- Validerer at inndata er en ikke-tom todimensjonal matrise der hvert element er en matrise.
- Returnerer et enkelt boolsk resultat (`true`/`false`) som egner seg for vakter og tidlige avbrudd.
- Hjelper med å forhindre kjøretidsfeil når senere kode forutsetter operasjoner på nestede matriser (f.eks. mapping av
  rader).

## Bruk

### Syntaks

Funksjon:

- `areArrays(array)`

Parametere:

- `array`: Inndata som skal sjekkes.

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

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areArrays(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Filen ble generert 6 February 2026 at 13:40:50 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>