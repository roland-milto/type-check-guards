# areNumbers

## Beskrivelse

`areNumbers` sjekker om en verdi er en ikke-tom matrise der alle elementer er tall.

### Brukstilfelle

Valider brukeroppgitte eller API-leverte data for å sikre at det er en ikke-tom matrise med tall før du beregner
totaler, gjennomsnitt eller andre numeriske aggregeringer.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areNumbers` til å validere ukjente matriser før du utfører numeriske beregninger; den returnerer `false` for
> tomme matriser og for matriser som inneholder en hvilken som helst verdi som ikke er et tall.

### Fordeler

- Returnerer `true` bare når inndata er en ikke-tom matrise og hvert element er et tall.
- Forhindrer falske positiver ved å avvise tomme matriser og inndata som ikke er matriser.
- Nyttig som en vakt før numeriske operasjoner (f.eks. summering, gjennomsnittsberegning) for å unngå kjøretidsfeil.

## Bruk

### Syntaks

Funksjon:

- `areNumbers(array)`

Parametere:

- `array`: Matrisen som skal sjekkes for tallelementer.

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

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areNumbers(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 13:05:25 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>