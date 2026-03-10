# areNumbers

## Skildring

`areNumbers` sjekkar om ein verdi er ei ikkje-tom matrise der alle element er tal.

### Brukstilfelle

Valider data som kjem frå brukarar eller API for å sikre at dei er ei ikkje-tom matrise av tal før du reknar ut totalar,
gjennomsnitt eller andre numeriske aggregeringar.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areNumbers` til å validere ukjende matriser før du utfører numeriske utrekningar; han returnerer `false` for
> tomme matriser og for matriser som inneheld ein verdi som ikkje er eit tal.

### Fordelar

- Returnerer `true` berre når inndata er ein ikkje-tom matrise og kvart element er eit tal.
- Forhindrar falske positive ved å avvise tomme matriser og inndata som ikkje er matriser.
- Nyttig som ein vakt før numeriske operasjonar (t.d. summering, utrekning av gjennomsnitt) for å unngå køyretidsfeil.

## Bruk

### Syntaks

Funksjon:

- `areNumbers(array)`

Parameter:

- `array`: Matrisa som skal sjekkast for talelement.

### Lokal funksjonsimport

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areNumbers(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 13:05:21 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>