# areObjects

## Beskrivelse

`areObjects` sjekker om en oppgitt fylt array kun inneholder objekter.

### Brukstilfelle

Bruk `areObjects` når du mottar en ukjent array (f.eks. fra JSON-parsing eller eksterne API-er) og må sikre at den ikke
er tom og at hvert element er et objekt før du itererer og aksesserer objektegenskaper.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areObjects` til å validere `unknown[]` før du behandler elementer som objekter; den returnerer `false` for tomme
> arrayer.

### Fordeler

- Returnerer `true` bare når inndata er en fylt array og hvert element er et objekt.
- Stopper tidlig og returnerer `false` så snart et ikke-objekt-element blir funnet.
- Hjelper med å validere ukjent inndata før du utfører objektspesifikke operasjoner.

## Bruk

### Syntaks

Funksjon:

- `areObjects(array)`

Parametere:

- `array`: Arrayen som skal sjekkes for objektelementer.

### Lokal funksjonsimport

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value er en fylt matrise med objekter
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areObjects(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 00:09:51 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>