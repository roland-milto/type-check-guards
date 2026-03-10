# areRegExes

## Beskrivelse

`areRegExes` sjekker om en verdi er en fylt matrise som kun inneholder `RegExp`-objekter.

### Brukstilfelle

Valider at et konfigurasjonsvalg (f.eks. en liste med tillat-/nekt-mønstre) er en ikke-tom matrise av regulære uttrykk
før du bruker den til matching.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areRegExes` til å snevre inn `unknown` til `RegExp[]` før du itererer eller setter sammen mønstre.

### Fordeler

- Sikrer at en verdi er en ikke-tom matrise der hvert element er en `RegExp`-instans.
- Gir en enkel boolsk vakt (`true`/`false`) for å validere brukerinput eller konfigurasjon.
- Hjelper med å forhindre kjøretidsfeil når senere kode antar at alle elementer støtter operasjoner med regulære
  uttrykk.

## Bruk

### Syntaks

Funksjon:

- `areRegExes(array)`

Parametere:

- `array`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns er en matrise av RegExp her
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areRegExes(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 23:20:26 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>