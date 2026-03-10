# arePlainObjects

## Beskrivelse

Sjekker om alle elementer i en array er rene objekter, og returnerer `true` bare hvis hvert element kvalifiserer.

### Brukstilfelle

Valider eksterne eller utypede data (f.eks. tolket JSON, API-payloads, skjemainnsendinger) for å sikre at du har mottatt
en ikke-tom array der hver oppføring er et rent objekt før du itererer og leser egenskaper.

> **Merknad for TypeScript-brukere:**
>
> Bruk `arePlainObjects` til å validere ukjent inndata før du behandler det som `Record<string, unknown>[]` (eller en
> strengere objektform) i TypeScript.

### Fordeler

- Sikrer at hvert element i inndata-arrayen er et rent objekt, og returnerer `true` bare når alle elementer matcher.
- Avviser ugyldige inndata tidlig (ikke-arrays eller tomme arrays) ved å returnere `false`.
- Behandler både objekt-literal-objekter og `Object.create(null)`-objekter som gyldige rene objekter.

## Bruk

### Syntaks

Funksjon:

- `arePlainObjects(array)`

Parametere:

- `array`: Arrayen som skal sjekkes for rene objekt-elementer.

### Lokal funksjonsimport

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // sant
const b = arePlainObjects([{}, Object.create(null)]); // sant
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // usant
const d = arePlainObjects([] as unknown[]); // usant
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.arePlainObjects(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 16:55:09 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>