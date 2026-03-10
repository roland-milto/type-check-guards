# areNumerics

## Beskrivelse

`areNumerics` sjekker om en verdi er en ikke-tom matrise der alle elementer er numeriske.

### Brukstilfelle

Bruk `areNumerics` til å validere eksterne eller utypede data (f.eks. JSON-nyttelaster, spørringsparametere,
skjemainndata) før du beregner summer, gjennomsnitt eller andre numeriske operasjoner, og sørg for at inndata er en
ikke-tom numerisk matrise og returner `false` ellers.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areNumerics` til å beskytte `unknown`-inndata før du behandler det som en numerisk matrise; den returnerer
`false` for ikke-matriser og tomme matriser.

### Fordeler

- Returnerer `true` bare når inndata er en ikke-tom matrise og hvert element er numerisk.
- Feiler raskt: slutter å sjekke så snart et ikke-numerisk element blir funnet, og returnerer `false`.
- Hjelper med å validere ukjent inndata på en trygg måte før du utfører numeriske operasjoner.

## Bruk

### Syntaks

Funksjon:

- `areNumerics(array)`

Parametere:

- `array`: Matrisen som skal sjekkes for numeriske elementer.

### Lokal funksjonsimport

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // nnete
console.log(areNumerics(b)); // nnete
console.log(areNumerics(c)); // maaka
console.log(areNumerics(d)); // maaka
console.log(areNumerics(e)); // maaka

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areNumerics(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Filen ble generert 6 February 2026 at 16:06:38 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>