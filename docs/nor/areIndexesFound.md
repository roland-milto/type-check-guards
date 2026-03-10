# areIndexesFound

## Beskrivelse

`areIndexesFound` sjekker om en verdi er en ikke-tom matrise der alle elementene er gyldige indekser, og returnerer
`true` hvis de er det og `false` ellers.

### Brukstilfelle

Valider brukeroppgitte eller eksterne data (f.eks. tolket JSON) som forventes å være en liste med indekser før du bruker
dem til å aksessere eller dele opp matriser.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areIndexesFound` til å validere ukjent inndata før du behandler elementene som matriseindekser; den returnerer
`false` for tomme matriser og for matriser som inneholder ikke-indeks-verdier.

### Fordeler

- Returnerer `true` bare når inndata er en fylt matrise og hvert element er en gyldig indeks.
- Feiler raskt: returnerer `false` så snart et ikke-indeks-element oppdages.
- Nyttig som en vakt før du bruker verdier som matriseposisjoner eller forskyvninger.

## Bruk

### Syntaks

Funksjon:

- `areIndexesFound(array)`

Parametere:

- `array`: Matrisen som skal sjekkes for samsvar med indekser.

### Lokal funksjonsimport

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // Mo, `a` e netefaditšwe go ba lenaneo le le tletšego la di-index.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areIndexesFound(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 00:43:04 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>