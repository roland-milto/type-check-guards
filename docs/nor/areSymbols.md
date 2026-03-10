# areSymbols

## Beskrivelse

Sjekker om en inndata er en fylt matrise der elementene alle er symboler, og returnerer `true` eller `false`.

### Brukstilfelle

Valider at et konfigurasjonsfelt (f.eks. en liste med unike nøkler representert som symboler) er en ikke-tom matrise som
kun inneholder symboler før du bruker det i API-er som krever `symbol[]`.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areSymbols` til å validere ukjent inndata før du behandler det som `symbol[]`; den returnerer `false` for
> ikke-matriser og tomme matriser.

### Fordeler

- Returnerer `true` bare når inndata er en ikke-tom matrise og hvert element er et symbol.
- Forhindrer falske positiver ved å avvise ikke-matriser og tomme matriser via den interne sjekken for fylt matrise.
- Nyttig som en runtime type guard for å validere lister som kun inneholder symboler før videre behandling.

## Bruk

### Syntaks

Funksjon:

- `areSymbols(array)`

Parametere:

- `array`: Matrisen som skal sjekkes for symbolelementer.

### Lokal funksjonsimport

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a ke lenaneo la disimbolo fela ka nako ya go tsamaya
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areSymbols(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 14:23:07 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>