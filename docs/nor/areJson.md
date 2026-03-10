# areJson

## Beskrivelse

Sjekker om alle elementene i en array er JSON-strenger, og returnerer `true` bare hvis arrayen er fylt og hvert element
er gyldig JSON; ellers returnerer den `false`.

### Brukstilfelle

Valider innkommende data (f.eks. fra query-parametere, miljøvariabler eller eksterne API-er) der du forventer en array
med JSON-kodede strenger og vil avvise tomme arrayer eller eventuelle ikke-JSON-oppføringer.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areJson` når du trenger å validere at en `unknown[]` kun inneholder JSON-strenger før du parser dem (f.eks. med
`JSON.parse`).

### Fordeler

- Returnerer `true` bare når hvert element er en gyldig JSON-streng; ellers returnerer den `false`.
- Feiler raskt: slutter å sjekke så snart et ikke-JSON-element blir funnet.
- Avviser tomme arrayer med vilje, og returnerer `false` for input som ikke er fylt.

## Bruk

### Syntaks

Funksjon:

- `areJson(array)`

Parametere:

- `array`: Arrayen som skal sjekkes for JSON-strengelementer.

### Lokal funksjonsimport

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // sant
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // falsk
const empty = areJson([]); // falsk

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areJson(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areJson](../_analysis/areJson.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 16:16:59 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>