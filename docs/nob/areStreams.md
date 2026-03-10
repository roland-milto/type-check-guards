# areStreams

## Beskrivelse

`areStreams` avgjør om en verdi er en utfylt matrise der hvert element er en `Stream`.

### Brukstilfelle

Valider brukerleverte eller dynamisk bygde samlinger (f.eks. flere fil-lesestrømmer) før du videresender (piping),
gjenopptar (resuming) eller på annen måte opererer på dem som en gruppe.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areStreams` til å validere ukjent inndata før du behandler det som `Stream[]`; den returnerer `true` bare når
> verdien er en ikke-tom matrise og hvert element er en `Stream`.

### Fordeler

- Sikrer at en inndata er en utfylt matrise der hvert element er en `Stream`.
- Gir en enkel `true`/`false`-vakt for å validere strømsamlinger før behandling.
- Feiler raskt: returnerer `false` så snart et ikke-`Stream`-element blir funnet.
- Hjelper med å forhindre kjøretidsfeil når kode antar at alle elementer er `Stream`-instanser.

## Bruk

### Syntaks

Funksjon:

- `areStreams(array)`

Parametere:

- `array`: Matrisen som skal sjekkes for Stream-objekter.

### Lokal funksjonsimport

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input er en fylt matrise av Stream-objekter
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areStreams(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 23:35:00 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>